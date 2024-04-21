import { MouseEvent } from "react";

interface SlideLinksProps {
  stopPropagation: (e: MouseEvent<HTMLDivElement>) => void;
  slideLinks: {
    linkToWebSite?: string | undefined;
    linkToGitHub?: string | undefined;
    linkToFigma?: string | undefined;
  };
}
const SlideLinks: React.FC<SlideLinksProps> = ({
  slideLinks,
  stopPropagation,
}) => {
  const linkStyle =
    "text-sm font-light text-blue-400 hover:opacity-80 active:opacity-60 transition-opacity";
  return (
    <div
      className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mt-4"
      onClick={stopPropagation}
    >
      {slideLinks.linkToWebSite && (
        <a
          target="_blank"
          className={linkStyle}
          href={slideLinks.linkToWebSite}
        >
          смотреть сайт
        </a>
      )}
      {slideLinks.linkToFigma && (
        <a target="_blank" className={linkStyle} href={slideLinks.linkToFigma}>
          смотреть в figma
        </a>
      )}
      {slideLinks.linkToGitHub && (
        <a target="_blank" className={linkStyle} href={slideLinks.linkToGitHub}>
          смотрет в GitHub
        </a>
      )}
    </div>
  );
};

export default SlideLinks;
