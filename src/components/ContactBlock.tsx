
import { Content } from "@/types";

const VISITOR = "'Visitor TT2 Pro', sans-serif";

interface ContactBlockProps {
  t: Content;
  variant: "inline" | "stacked";
}

export default function ContactBlock({ t, variant }: ContactBlockProps) {
  if (variant === "inline") {
    return (
      <section className="flex items-center justify-between w-full">
        <p
          className="text-[#aeaeae] text-[40px] leading-normal whitespace-nowrap"
          style={{ fontFamily: VISITOR }}
        >
          {t.contact1.text}
        </p>
        <a href="https://t.me/dashewski/" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#6cad5e] flex justify-center items-center h-[40px] min-w-[324px] px-4 cursor-pointer
            shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
            hover:bg-[#5a9e4c]
            active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
            transition-all">
            <span className="text-[#2c2c2c] text-[40px] leading-normal whitespace-nowrap" style={{ fontFamily: VISITOR }}>
              {t.contact1.button}
            </span>
          </button>
        </a>
      </section>
    );
  }

  return (
    <div className="flex flex-col gap-[20px] items-start shrink-0">
      <div className="text-[#aeaeae] text-[40px] leading-normal" style={{ fontFamily: VISITOR }}>
        <p>{t.contact2.line1}</p>
        <p>{t.contact2.line2}</p>
      </div>
      <a href="https://t.me/dashewski/" target="_blank" rel="noopener noreferrer">
        <button className="bg-[#6cad5e] flex items-center justify-center h-[40px] min-w-[324px] px-4 cursor-pointer
          shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
          hover:bg-[#5a9e4c]
          active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
          transition-all">
          <span className="text-[#2c2c2c] text-[40px] leading-normal whitespace-nowrap" style={{ fontFamily: VISITOR }}>
            {t.contact2.button}
          </span>
        </button>
      </a>
    </div>
  );
}