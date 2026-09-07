#!/usr/bin/env python3
"""Copy Resounding Nature source media into semantic web-ready names."""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/images/artwork/resounding-nature"
OUT = SRC
MAX = 2200

Image.MAX_IMAGE_PIXELS = None


def save(im: Image.Image, dest: Path) -> tuple[int, int]:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = ImageOps.exif_transpose(im)
    if im.mode in {"RGBA", "LA", "P"} and dest.suffix.lower() in {".jpg", ".jpeg"}:
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im.convert("RGBA"), mask=im.convert("RGBA").split()[-1])
        im = bg
    elif dest.suffix.lower() in {".jpg", ".jpeg"} and im.mode != "RGB":
        im = im.convert("RGB")
    w, h = im.size
    if max(w, h) > MAX:
        im.thumbnail((MAX, MAX), Image.Resampling.LANCZOS)
        w, h = im.size
    if dest.suffix.lower() in {".jpg", ".jpeg"}:
        im.save(dest, "JPEG", quality=88, optimize=True)
    else:
        im.save(dest)
    return w, h


def copy_image(src: Path, dest: Path) -> tuple[int, int]:
    with Image.open(src) as im:
        return save(im.copy(), dest)


def crop_image(src: Path, box: tuple[int, int, int, int], dest: Path) -> tuple[int, int]:
    with Image.open(src) as im:
        return save(im.crop(box), dest)


jobs: list[tuple[str, str]] = [
    ("hero/frame-03.jpg", "hero/final-installation.jpg"),
    ("idea/Group 35.jpg", "idea/silent-trees.jpg"),
    ("idea/image 6.jpg", "idea/dead-forest.jpg"),
    ("idea/image 8.jpg", "idea/smokestacks.jpg"),
    ("idea/Mask group.jpg", "idea/drainage-pipe.jpg"),
    ("research/future-speculation.jpg", "research/future-speculation.jpg"),
    ("research/air-pollution.jpg", "research/air-pollution.jpg"),
    ("research/overcutting.jpg", "research/overcutting.jpg"),
    ("research/water-pollution.jpg", "research/water-pollution.jpg"),
    ("research/environment-trends.jpg", "research/environment-trends.jpg"),
    ("process/Group 37.png", "plants/wireframe.png"),
    ("process/tree/Group 27.png", "plants/circuit.png"),
    ("process/tree/3a341b0ef55777cbe5c0fd6e42f39db5 1.png", "plants/process-paper-model.png"),
    ("process/tree/40f7c6cc7ba66887879641c61cf9b1d0 1.png", "plants/process-frame.png"),
    ("process/tree/33594251b79ee5bda26482e904ea1f93 1.png", "plants/process-electronics.png"),
    ("process/tree/image 35.png", "plants/process-natural-model.png"),
    ("process/tree/image 36.png", "plants/mechanism-column.png"),
    ("process/tree/image 42.png", "plants/mechanism-detail.png"),
    ("process/tree/image 40.png", "plants/final.png"),
    ("process/tree/image 39.png", "plants/prototype-full.png"),
    ("process/Group 38.png", "waves/wireframe.png"),
    ("process/water/Group 1321321004.png", "waves/mechanism-cams.png"),
    ("process/water/Group 1321321003.png", "waves/mechanism-spacers.png"),
    ("process/water/Group 30.png", "waves/process-wood-prototype.png"),
    ("process/water/Group 31.png", "waves/process-acrylic-cams.png"),
    ("process/water/IMG_8617 2.png", "waves/process-acrylic-axis.png"),
    ("process/water/IMG_8617 3.png", "waves/process-paper-surface.png"),
    ("process/water/IMG_8719 1.png", "waves/process-wood-mechanism.png"),
    ("process/water/IMG_8140 1.png", "waves/process-fabrication.png"),
    ("process/Group 36.png", "wind/wireframe.png"),
    ("process/wind/Group 1321321000.jpg", "wind/flip-diagram.jpg"),
    ("process/wind/Group 6.jpg", "wind/motion-study.jpg"),
    ("process/wind/Group 1321321001.jpg", "wind/mechanism-gears.jpg"),
    ("process/wind/Group 1321321002.jpg", "wind/mechanism-joints.jpg"),
    ("process/wind/Group 34.jpg", "wind/process-assembly.jpg"),
    ("outcome/DSC02165.jpg", "outcome/installation-wide.jpg"),
    ("outcome/1.jpg", "outcome/installation-angle.jpg"),
]

manifest: dict[str, dict[str, int | str]] = {}

for src_rel, dest_rel in jobs:
    src = SRC / src_rel
    dest = OUT / dest_rel
    if dest.resolve() == src.resolve() and dest.exists():
        with Image.open(src) as im:
            w, h = im.size
        manifest[dest_rel] = {"width": w, "height": h, "src": src_rel}
        continue
    w, h = copy_image(src, dest)
    manifest[dest_rel] = {"width": w, "height": h, "src": src_rel}

exploded = SRC / "process/tree/tree.png"
if exploded.exists():
    dest = OUT / "plants/exploded-diagram.jpg"
    w, h = copy_image(exploded, dest)
    manifest["plants/exploded-diagram.jpg"] = {"width": w, "height": h, "src": "process/tree/tree.png"}

group = SRC / "outcome/3.jpg"
with Image.open(group) as im:
    w, h = im.size
    # Isolated finished forms cropped from the studio group shot.
    crops = {
        "waves/final.jpg": (0, int(h * 0.18), int(w * 0.40), int(h * 0.92)),
        "wind/final.jpg": (int(w * 0.30), 0, int(w * 0.66), int(h * 0.90)),
    }
    for dest_rel, box in crops.items():
        cw, ch = crop_image(group, box, OUT / dest_rel)
        manifest[dest_rel] = {"width": cw, "height": ch, "src": "outcome/3.jpg"}

print(json.dumps(manifest, indent=2))
