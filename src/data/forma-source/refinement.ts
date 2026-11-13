import type { FormaWords } from "./reading";

type Feature = {
  screen: string;
  title: FormaWords;
  copy: FormaWords;
  alt: FormaWords;
};

export const refinementGroups: Record<10 | 11 | 14, Feature[]> = {
  10: [
    {
      screen: "snapshots",
      title: ["先保存原稿", "Save the original draft"],
      copy: ["改日期前，先在「文件历史」保存一份快照，留下原稿的时间和缩略图。后续编辑也可以按设定的间隔自动保存。", "Before editing the date, save a snapshot in File history. Its timestamp and thumbnail identify the original draft. Later edits can be saved automatically at the chosen interval."],
      alt: ["文件历史面板中的自动保存间隔、原稿快照和立即保存按钮", "File history showing the save interval, the original snapshot and the manual save button"],
    },
    {
      screen: "text",
      title: ["选中日期文字", "Select the date layer"],
      copy: ["拆解设计稿件的图层后，选中底部的活动日期。右侧面板可以直接改日期文案。要微调数字的形状，再点「转为矢量」。", "Separate the layers of the design draft, then select the date at the bottom. Edit the wording in the text panel, or choose Convert to vector to work on the shape of the numerals."],
      alt: ["设计稿件底部的日期被选中，文字面板显示日期内容和「转为矢量」按钮", "The date is selected in the design draft, with its text and the Convert to vector button in the properties panel"],
    },
    {
      screen: "vector",
      title: ["调整数字的轮廓", "Shape the numerals"],
      copy: ["把日期转成路径后，可以只调整「0」的左下角，旁边的「1」保持原样。", "Converting the date to a path lets the designer reshape the lower-left corner of the zero without changing the one beside it."],
      alt: ["画布放大到稿件底部的日期字形，可见轮廓锚点和右侧的矢量属性", "The canvas zoomed in on the date lettering, with outline anchors and the vector properties panel"],
    },
    {
      screen: "history",
      title: ["需要回退时，先预览原稿", "Preview the original if you need to roll back"],
      copy: ["想核对原来的字形时，可以打开快照预览。关闭预览即可继续编辑当前稿，只有决定撤回修改时才选择「恢复此快照」。", "Open the snapshot to check the earlier letterforms. Close the preview to keep editing the current draft. Choose Restore this snapshot only if you want to roll back the changes."],
      alt: ["历史预览窗口中显示修改前的稿件，以及关闭预览和恢复快照两个操作", "A snapshot preview of the earlier draft, with controls to close the preview or restore the project"],
    },
  ],
  11: [
    {
      screen: "original",
      title: ["滑动对照两种构图", "Compare the two compositions"],
      copy: ["原稿把标题放在插画上方，候选稿把标题移到左侧，给右侧的主图留出空间。拖动两稿之间的分界线，观察同一组元素怎样重新排列。", "The original places the headline above the illustration. The candidate moves it into a left column, leaving room for the illustration on the right. Drag the divider to compare the two arrangements."],
      alt: ["Forma 比稿窗口，比较上下布局的原稿和左右布局的候选稿", "The Forma comparison window showing the original stacked layout and the candidate’s side-by-side layout"],
    },
    {
      screen: "keep",
      title: ["把候选稿留在画布上", "Keep the candidate on the canvas"],
      copy: ["选择「保存为新画板」，候选稿会出现在原稿旁边，两张都可以继续编辑。如果决定沿用原稿，也可以在比稿窗口直接删除候选稿。", "Save the candidate as a new artboard to place it beside the original. Both remain editable. To continue with the original alone, discard the candidate in the comparison window."],
      alt: ["画布上并列的两版设计稿件，右侧新保存的候选稿被选中", "The two design drafts on the canvas, with the newly saved candidate selected on the right"],
    },
  ],
  14: [
    {
      screen: "size",
      title: ["从选定的稿件建横版", "Create a banner from the chosen draft"],
      copy: ["选中候选稿，在「新建尺寸」里选择 1920 × 1080，并勾选从这张画板延展构图。需要其他版位时，可以选正方形、竖屏预设，或输入自定义宽高。", "Select the candidate, choose the 1920 × 1080 landscape preset and keep the option to extend from this artboard checked. Square, vertical and custom dimensions are also available."],
      alt: ["新建画板对话框中已选 1920 × 1080 横版预设，并勾选从候选稿延展", "The new artboard dialog with the 1920 × 1080 landscape preset with the selected draft as its source"],
    },
    {
      screen: "formats",
      title: ["按版位校核构图", "Check the composition in each format"],
      copy: ["横版里，标题和优惠信息占左栏，主图在右侧展开。竖屏的可用宽度更窄，可以单独调整图层的位置和留白，再核对日期是否清晰。", "The banner gives the headline and offer a left column, with the illustration on the right. On the narrower vertical artboard, adjust the layers and spacing independently, then check that the date is still legible."],
      alt: ["同一画布上的原稿、选中的横版稿件和独立的竖屏稿件", "The source design, selected landscape draft and separate vertical adaptation on the same canvas"],
    },
  ],
};

export const outlineSteps: readonly { key: string; label: FormaWords; note: FormaWords }[] = [
  { key: "select", label: ["选中锚点", "Select anchor"],
    note: ["黑色方块是「0」左下角被选中的锚点。沿细线可以找到它的两个圆形控制柄。", "The filled square marks the selected anchor on the lower left of the zero. The lines lead to its two round handles."] },
  { key: "move", label: ["下移锚点", "Move anchor"],
    note: ["方块下移，两个控制柄随它移动。「0」的左下轮廓也随之降低，旁边的「1」留在原位。", "The square and both handles move down together. The lower-left edge of the zero drops while the adjacent one stays in place."] },
  { key: "curve", label: ["调整弧度", "Adjust curve"],
    note: ["把下方的圆形控制柄向右上方拖一点。方块的位置固定，底部连接到它的曲线变得更平。", "The lower round handle moves up and to the right. The square stays put while the curve leading into it flattens."] },
  { key: "result", label: ["查看结果", "View result"],
    note: ["完成编辑后可以直接检查底部弧线。日期仍是独立图层，需要修改日期内容时可以恢复为文字。", "Finish editing to inspect the bottom curve. The date remains a separate layer and can be restored to editable text when the wording changes."] },
];
