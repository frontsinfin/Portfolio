interface TagsChronologyProps {
  tags: string[];
}

const TagsChronology: React.FC<TagsChronologyProps> = ({ tags }) => {
  return (
    <div className="flex gap-[5px] flex-wrap justify-stretch">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-[3px] py-[1px] md:px-[5px] md:py-[2px] text-[10px] md:text-xs rounded-[4px] bg-white text-black"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsChronology;
