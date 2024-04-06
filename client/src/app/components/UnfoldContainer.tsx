"use client";
import { ReactNode, useState } from "react";

interface UnfoldContainerProps {
  children: ReactNode;
}

const UnfoldContainer: React.FC<UnfoldContainerProps> = ({ children }) => {
  const [unfold, setUnfold] = useState(true);
  const isUnfold = () => {
    setUnfold(!unfold);
  };
  return (
    <div className="flex flex-col gap-2 items-start">
      <section
        className="flex flex-col gap-4 md:gap-10 h-[400px] overflow-hidden"
        style={{ height: unfold ? "auto" : "400px" }}
      >
        {children}
      </section>
      <button onClick={isUnfold}>
        <u>{unfold ? "свернуть" : "развернуть"}</u>
      </button>
    </div>
  );
};

export default UnfoldContainer;
