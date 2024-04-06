interface RolsChronologyProps {
  rols: string;
  task: string;
}

const RolsChronology: React.FC<RolsChronologyProps> = ({ rols, task }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm md:text-lg leading-tight">
        <span className="font-black">Ключевая роль: </span>
        {rols}
      </p>
      <p className="text-sm md:text-lg leading-tight">
        <span className="font-black">Примеры задач: </span>
        {task}
      </p>
    </div>
  );
};

export default RolsChronology;
