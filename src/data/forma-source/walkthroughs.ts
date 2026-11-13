export const formaWalkthroughs = {
  inspiration: {
    title: ["从关键词到情绪板", "From keywords to a moodboard"],
    steps: [
      { title: ["选定视觉关键词", "Choose visual cues"],
        copy: ["为设计稿件选中「秋日暖色」与「自然材质」，再补充对秋日光线的想法。", "Choose warm autumn tones and natural materials, then describe the lighting for the design."] },
      { title: ["生成参考图", "Generate references"],
        copy: ["确认生成后，三张参考图一起出现在画布的情绪板上。", "Generate the references to place three images together on a canvas moodboard."] },
      { title: ["将原稿与参考图对照", "Compare the original with the references"],
        copy: ["把设计原稿加入情绪板，与三张参考图并排比较光线、色调和质感。", "Add the original draft beside the three references to compare lighting, color, and texture."] },
    ],
  },
  directions: {
    title: ["方向分组、评论与下一稿", "Group drafts, attach a note, and generate the next version"],
    steps: [
      { title: ["框选稿件，建立方向", "Group related drafts"],
        copy: ["框选两版设计稿件，将它们归入同一设计方向，并排查看构图。", "Select both design drafts and group them under one direction to compare their compositions side by side."] },
      { title: ["给这个方向留评论", "Attach a direction note"],
        copy: ["在分组评论中注明下一稿需要保留哪些画面元素。这条意见会留在两张候选稿旁。", "Add a note specifying which elements to keep in the next draft. It stays beside the two drafts."] },
      { title: ["沿用方向生成下一稿", "Continue in this direction"],
        copy: ["在输入框选择刚才的方向再生成。新稿加入同一分组，与前两稿并列，方便回看和取舍。", "Choose the same direction in the prompt bar and generate again. The new draft joins the first two for comparison."] },
    ],
  },
  review: {
    title: ["设计稿件的反馈与交付确认", "Review and approval of the design draft"],
    steps: [
      { title: ["设计师提交 V1", "Designer submits V1"],
        copy: ["在这条需求下提交已关联的 1920 × 1080 横版画板。第一版中的活动日期为 11.01—11.11。", "The designer submits the linked 1920 × 1080 artboard. V1 shows an event date of Nov 1–11."] },
      { title: ["需求方反馈 V1", "Client reviews V1"],
        copy: ["需求方在「我的需求」打开 V1，要求保留构图，把活动结束日期改为 11.15。意见记在这次提交下。", "In My requests, the client asks to keep the layout and change the end date to Nov 15. The feedback is attached to V1."] },
      { title: ["设计师改稿并提交 V2", "Designer revises and submits V2"],
        copy: ["设计师回到同一张横版画板修改日期，再从原需求提交 V2。V1 仍保留提交时的日期。", "The designer edits the date on the same landscape artboard and submits V2 under the original request. V1 retains its original date."] },
      { title: ["需求方确认交付", "Client approves V2"],
        copy: ["需求方核对 V2 的日期和构图，确认通过。这条横版需求随即标记为已完成。", "The client checks the revised date and layout in V2, then approves it. The landscape request is marked complete."] },
    ],
  },
} as const;
