import React from "react";
import { GrLinkTop } from "react-icons/gr";

function TopBtn() {
  return (
    <div
      className="fixed bottom-10 right-4 z-30 flex size-12 cursor-pointer items-center justify-center rounded-full bg-green-950  md:right-6 lg:right-10 lg:hover:shadow-[0_0_200px_20px_rgba(255,255,255,0.3)]"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <GrLinkTop className="size-6 text-primary-light" />
    </div>
  );
}

export default TopBtn;
