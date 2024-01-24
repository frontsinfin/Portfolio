interface TitleCompProps {
  title: string;
  titleId: string;
}

const TitleComp: React.FC<TitleCompProps> = ({ title, titleId }) => {
  return (
    <h1
      className="font-bold text-3xl md:text-5xl text-center md:text-left"
      id={titleId}
    >
      {title}
    </h1>
  );
};

export default TitleComp;
