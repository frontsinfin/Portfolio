interface TitleCompProps {
  title: string;
  titleId: string;
}

const TitleComp: React.FC<TitleCompProps> = ({ title, titleId }) => {
  return (
    <h2
      className="font-bold text-3xl md:text-4xl text-center md:text-left"
      id={titleId}
    >
      {title}
    </h2>
  );
};

export default TitleComp;
