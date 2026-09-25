import { CheckIcon, CrossIcon } from "@/components/icons";
import { StepBadge } from "@/components/ui";

// The broadband example from "How to ask for a useful answer", split into
// the three parts the lesson teaches.
const parts = [
  {
    label: "Say what you’re doing",
    text: "Write a short email to my broadband provider. The service has dropped every evening this week.",
  },
  {
    label: "Say what you want back",
    text: "I want them to book an engineer. Keep it under 120 words.",
  },
  {
    label: "Give the limits",
    text: "Do not invent account numbers or dates. Polite, firm, no jokes.",
  },
];

export function PromptExample({ tilted = false }: { tilted?: boolean }) {
  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-col gap-2.5 rounded-[14px] border border-line bg-card px-6 py-5 ${
          tilted ? "lg:mr-14 lg:-rotate-[1.5deg]" : ""
        }`}
      >
        <p className="flex items-center gap-2 font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
          <CrossIcon />
          Before
        </p>
        <p className="font-mono text-[1.0625rem] leading-relaxed">
          “Write a complaint about my broadband.”
        </p>
        <p className="text-base text-ink-soft">
          → A generic letter with made-up details.
        </p>
      </div>
      <div
        className={`flex flex-col gap-4 rounded-[14px] border-2 border-ink bg-card px-6 py-6 shadow-[6px_6px_0_var(--ink)] sm:px-7 ${
          tilted
            ? "mt-4 lg:-mt-2.5 lg:ml-6 lg:rotate-[0.8deg] lg:shadow-[8px_8px_0_var(--ink)]"
            : "mt-4"
        }`}
      >
        <p className="flex items-center gap-2 font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-tomato-deep">
          <CheckIcon className="size-4" />
          After
        </p>
        <p className="font-mono text-base leading-[1.8] sm:text-[1.0625rem]">
          {parts.map((part, index) => (
            <span key={part.label}>
              {index > 0 ? " " : null}
              <span className="mr-1.5 inline-flex align-[2px]">
                <StepBadge>{index + 1}</StepBadge>
              </span>
              <span className="bg-highlight-soft px-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                {part.text}
              </span>
            </span>
          ))}
        </p>
        <ol className="flex flex-col gap-2 border-t border-dashed border-rule pt-4 text-base">
          {parts.map((part, index) => (
            <li key={part.label} className="flex items-center gap-2.5">
              <StepBadge>{index + 1}</StepBadge>
              {part.label}
            </li>
          ))}
        </ol>
        <p className="text-[1.0625rem] font-bold">
          → A draft you can finish in a few minutes.
        </p>
      </div>
    </div>
  );
}
