interface DateChronologyProps {
  data: string;
}

const DateChronology: React.FC<DateChronologyProps> = ({ data }) => {
  return (
    <div className="col-span-1 flex flex-col items-center mr-3 md:mr-6 w-[45px] md:w-[60px]">
      <div className="flex flex-col items-center my-[6px] gap-2">
        {/* точка*/}
        <div className=" rounded-full bg-[#0085FF] w-3 h-3 md:w-4 md:h-4 "></div>
        {/* дата*/}
        <div className="flex flex-col items-center text-[10px] md:text-xs font-light max-w-min text-center">
          {data}
        </div>
      </div>
      {/* линия */}
      <div className="last:bg-white border-r-2 h-[100%] line"></div>
    </div>
  );
};

export default DateChronology;
