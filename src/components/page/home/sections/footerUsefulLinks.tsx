"use client";
import { clickScroll } from "@/components/lib/clickScroll";
import { SquareArrowOutUpRight } from "lucide-react";

export default function FooterUsefulLinks({
  items,
}: {
  items: { description: string; to: string }[];
}) {
  return (
    <div className="flex gap-4 max-lg:gap-0 max-lg:flex-col">
      {items.map((e, i) => (
        <button
          className="link-footer text-2xl flex gap-2 items-center"
          onClick={() => clickScroll(e.to)}
          key={i}
        >
          {e.description}
          <SquareArrowOutUpRight size={18} />
        </button>
      ))}
    </div>
  );
}
