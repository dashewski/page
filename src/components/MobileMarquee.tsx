import { Content } from "@/types";

const VISITOR = "'Visitor TT2 Pro', sans-serif";

interface MobileMarqueeProps {
  t: Content;
}

export default function MobileMarquee({ t }: MobileMarqueeProps) {
  return (
    <section className="flex flex-col gap-[35px] w-full">
      {/* Contact stacked */}
      <div className="flex flex-col gap-[20px] items-start">
        <div
          className="text-[#aeaeae] text-[40px] leading-normal"
          style={{ fontFamily: VISITOR }}
        >
          <p>{t.contact1.text}</p>
        </div>
        <a
          href="https://t.me/dashewski/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline!"
        >
          <button
            className="bg-[#6cad5e] flex items-center justify-center h-[40px] w-full cursor-pointer
            shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
            hover:bg-[#5a9e4c]
            active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
            transition-all"
          >
            <span
              className="text-[#2c2c2c] text-[40px] leading-normal whitespace-nowrap"
              style={{ fontFamily: VISITOR }}
            >
              {t.contact2.button}
            </span>
          </button>
        </a>
      </div>

      <div className="bg-[#9a38af] w-full overflow-hidden flex items-center h-[80px]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="text-[#aeaeae] text-[70px] leading-none pr-[40px]"
              style={{ fontFamily: VISITOR }}
            >
              {t.contact2.marquee}&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
