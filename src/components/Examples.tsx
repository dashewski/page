"use client";

import { useRouter } from "next/navigation";
import { Content } from "@/types";

const VISITOR = "'Visitor TT2 Pro', sans-serif";

interface ExamplesProps {
  t: Content;
}

const caseSlug: Record<string, string> = {
  "01": "starflip",
  "02": "rwa",
};

export default function Examples({ t }: ExamplesProps) {
  const router = useRouter();

  return (
    <section
      id="examples"
      className="flex flex-col gap-[40px] items-start w-full"
    >
      <p
        className="text-[#aeaeae] text-[100px] leading-normal"
        style={{ fontFamily: VISITOR }}
      >
        {t.examples.title}
      </p>

      {t.examples.cases.map((c) => (
        <div key={c.id} className="flex flex-col gap-[20px] items-start w-full">
          <div className="flex items-center justify-between w-full">
            <div
              className="flex gap-[20px] items-center text-[30px]"
              style={{ fontFamily: VISITOR }}
            >
              <span className="text-[#aeaeae]">[/&gt;</span>
              <span style={{ color: c.color }}>{c.id}</span>
            </div>
            <div className="flex gap-[20px] items-center w-[324px]">
              <button
                onClick={() => router.push(`/cases/${caseSlug[c.id]}`)}
                className="flex-1 h-[30px] justify-center flex items-center bg-[#6cad5e] cursor-pointer overflow-visible relative
                  shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
                  hover:bg-[#5a9e4c]
                  active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
                  transition-all"
              >
                <span
                  className="text-[#2c2c2c] text-[30px] leading-none whitespace-nowrap absolute"
                  style={{
                    fontFamily: VISITOR,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {t.examples.viewButton}
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start pl-[50px] w-[657px]">
            <div className="bg-[#aeaeae] inline-flex items-center justify-center">
              <p
                className="text-[#2c2c2c] text-[40px] leading-normal"
                style={{ fontFamily: VISITOR }}
              >
                {c.name}
              </p>
            </div>
            <p
              className="text-[#aeaeae] text-[30px] leading-normal"
              style={{ fontFamily: VISITOR }}
            >
              {c.tags}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
