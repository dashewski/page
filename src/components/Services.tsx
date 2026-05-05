import { Content } from "@/types";

const VISITOR = "'Visitor TT2 Pro', sans-serif";

interface ServicesProps {
  t: Content;
}

export default function Services({ t }: ServicesProps) {
  return (
    <section
      className="flex flex-col gap-[40px] items-start text-[#aeaeae] w-full"
      style={{ fontFamily: VISITOR }}
    >
      <p className="text-[100px] leading-normal">{t.services.title}</p>
      <ul
        className="text-[40px] ms-[60px] list-[square]"
        style={{ lineHeight: 0 }}
      >
        {t.services.items.map((item, i) => (
          <li key={i} className="mb-0">
            <span style={{ lineHeight: "normal" }}>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
