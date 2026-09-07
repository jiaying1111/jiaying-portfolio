#!/usr/bin/env python3
"""Move messy Nushu exports into _source and write semantic web files."""

from __future__ import annotations

import shutil
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/images/projects/nushu"
SOURCE = SRC / "_source"
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
    if max(im.size) > MAX:
        im.thumbnail((MAX, MAX), Image.Resampling.LANCZOS)
    if dest.suffix.lower() in {".jpg", ".jpeg"}:
        im.save(dest, "JPEG", quality=88, optimize=True)
    else:
        im.save(dest)
    return im.size


def convert(src: Path, dest: Path) -> tuple[int, int]:
    with Image.open(src) as im:
        size = save(im.copy(), dest)
    print(f"{dest.relative_to(SRC)}  {size[0]}×{size[1]}  <- {src.name}")
    return size


def one(folder: Path, pattern: str) -> Path:
    matches = sorted(folder.glob(pattern))
    if len(matches) != 1:
        raise SystemExit(f"expected 1 match for {folder}/{pattern}, got {matches}")
    return matches[0]


def move_tree(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists():
        shutil.rmtree(dest)
    shutil.move(str(src), str(dest))


def main() -> None:
    SOURCE.mkdir(parents=True, exist_ok=True)

    nested = SRC / "nushu"
    if nested.exists():
        move_tree(nested, SOURCE / "nested-dump")

    jobs: list[tuple[Path, str]] = [
        (one(SRC / "hero", "Screenshot*.png"), "hero/nushu-landscape.jpg"),
        (one(SRC / "idea", "image 312.png"), "idea/embroidery.jpg"),
        (one(SRC / "idea", "Nushu-Scroll*.jpg"), "idea/nushu-scroll.jpg"),
        (one(SRC / "idea", "images.jpeg"), "idea/glyph-meanings.jpg"),
        (one(SRC / "research", "initial sketch2.png"), "research/glyph-landscape-sketch.jpg"),
        (one(SRC / "research", "Rectangle 3464736.png"), "research/memory-nodes.jpg"),
        (one(SRC / "research", "Rectangle.png"), "research/women-on-the-path.jpg"),
        (one(SRC / "process", "modeling1*.png"), "process/blender-modeling.jpg"),
        (one(SRC / "process", "process 2.png"), "process/unreal-level.jpg"),
        (one(SRC / "process", "process in ue*.png"), "process/unreal-blueprint.jpg"),
        (one(SRC / "outcome", "Screenshot*9.png"), "outcome/arrival.jpg"),
        (one(SRC / "outcome", "Screenshot*10.png"), "outcome/glyph-river.jpg"),
        (one(SRC / "outcome", "Screenshot*11.png"), "outcome/canyon-pass.jpg"),
        (one(SRC / "outcome", "Screenshot*12.png"), "outcome/waterfall.jpg"),
    ]

    for src, dest_name in jobs:
        archive = SOURCE / src.relative_to(SRC)
        archive.parent.mkdir(parents=True, exist_ok=True)
        if not archive.exists():
            shutil.copy2(src, archive)
        convert(archive, SRC / dest_name)
        if src.exists() and src.resolve() != (SRC / dest_name).resolve():
            src.unlink()

    for leftover in SRC.rglob("*"):
        if leftover.is_file() and "_source" not in leftover.parts:
            rel = leftover.relative_to(SRC)
            semantic = {
                "hero/nushu-landscape.jpg",
                "idea/embroidery.jpg",
                "idea/nushu-scroll.jpg",
                "idea/glyph-meanings.jpg",
                "research/glyph-landscape-sketch.jpg",
                "research/memory-nodes.jpg",
                "research/women-on-the-path.jpg",
                "process/blender-modeling.jpg",
                "process/unreal-level.jpg",
                "process/unreal-blueprint.jpg",
                "outcome/arrival.jpg",
                "outcome/glyph-river.jpg",
                "outcome/canyon-pass.jpg",
                "outcome/waterfall.jpg",
            }
            if leftover.name == ".DS_Store" or str(rel) in semantic:
                continue
            raise SystemExit(f"unexpected leftover file: {rel}")


if __name__ == "__main__":
    main()
