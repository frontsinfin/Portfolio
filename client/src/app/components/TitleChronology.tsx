interface TitleChronologyProps {
  title: string;
  typeWork: string;
}

const TitleChronology: React.FC<TitleChronologyProps> = ({
  title,
  typeWork,
}) => {
  return (
    <div>
      <h2 className="text-[20px] md:text-2xl font-bold leading-none">
        {title}
      </h2>
      <h3 className="text-[10px] md:text-xs">#{typeWork}</h3>
    </div>
  );
};

export default TitleChronology;
