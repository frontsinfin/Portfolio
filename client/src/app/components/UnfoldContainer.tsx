"use client";
import { ReactNode, useState } from "react";

interface UnfoldContainerProps {
  children: ReactNode;
}

const UnfoldContainer: React.FC<UnfoldContainerProps> = ({ children }) => {
  const [unfold, setUnfold] = useState(false);
  const isUnfold = () => {
    setUnfold(!unfold);
  };
  return (
    <div className="flex flex-col gap-2 items-start">
      <section
        className={`flex flex-col gap-4 md:gap-10 overflow-hidden ${
          unfold ? "unfold_chronology__active" : "unfold_chronology"
        }`}
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
