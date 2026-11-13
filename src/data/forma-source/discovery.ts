export const competitors = [
  { name: ["即梦", "Jimeng"], strength: ["用提示词快速试出视觉方向，也可以生成视频、寻找参考。", "Use prompts to explore visual directions, generate images and video, and find references."],
    limit: ["局部精修", "Local refinement"], finding: ["改字或换元素需要提示与重绘。字体、位置，以及原本无需修改的区域，都要逐次核对。", "Changing text or replacing an object requires another generation. The designer must recheck the type, placement, and areas meant to stay untouched."], url:"https://jimeng.jianying.com/ai-tool/home/" },
  { name: ["Figma", "Figma"], strength: ["精确控制排版、组件和细节，通过共享画布、评论与历史记录协作。", "Control layout, components, and visual details precisely, with shared canvases, comments, and file history."],
    limit: ["稿件组织", "Draft organization"], finding: ["历史记录按文件变化保存。辨认候选、待审和已确认的稿件，仍需要人工命名、归组与维护关联。", "History records file changes. Candidate, in-review, and approved drafts still need names, groups, and links maintained by the team."], url:"https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history" },
  { name: ["Lovart", "Lovart"], strength: ["Agent 串联创作，通过局部修改、文字编辑和图层拆分继续迭代。", "An agent connects generation with local edits, text editing, and layer separation."],
    limit: ["客户协作", "Client handoff"], finding: ["查阅的公开流程从生成讲到导出。反馈对应哪版、由谁确认、何时交付，这三件事之间的关系仍不清楚。", "The documented workflow covers generation through export. It leaves open which version a comment refers to, who signs off, and when delivery is due."], url:"https://www.lovart.ai/docs/getting-started/how-lovart-works" },
] as const;

export const designNeeds = [
  { art:"local-control", pain:["专业创作控制不足","Limited control over edits"], finding:["生成的改动难以精准落实设计意图，品牌细节需要反复核对。","Generated edits can miss the intended change and require repeated brand checks."],
    need:["由设计师掌控修改","Keep the designer in control"], response:["明确方向、品牌和修改范围，局部精修时保留原稿。","Define the direction, branding, and edit scope. Refine locally while retaining the original."] },
  { art:"draft-groups", pain:["设计稿件难整理定位","Drafts become hard to find"], finding:["多轮生成和改版积累了许多候选，想找的那一稿越来越难定位。","Each generation and revision adds another candidate to locate."],
    need:["让稿件可组织、可定位","Make drafts easy to locate"], response:["按方向和版本组织稿件，在画布上定位、回看和恢复。","Group work by direction and version so it can be located, revisited, and restored on the canvas."] },
  { art:"linked-feedback", pain:["需求与设计不同步","Requests drift out of sync"], finding:["反馈和稿件缺少对应关系，双方难以掌握最新要求和处理进度。","When feedback lacks an artwork link, neither side can reliably tell which request is current."],
    need:["让双方同步项目状态","Keep both roles in sync"], response:["把需求和反馈关联到具体稿件，共享处理进度与交付版本。","Attach the request and feedback to the artwork and share its status and delivery version."] },
] as const;
