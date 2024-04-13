interface RolsChronologyProps {
  rols?: string;
  task: string;
}

const RolsChronology: React.FC<RolsChronologyProps> = ({ rols, task }) => {
  return (
    <div className="flex flex-col gap-1">
      {rols && (
        <p className="text-sm md:text-lg leading-tight">
          <span className="font-black">Ключевая роль: </span>
          {rols}
        </p>
      )}
      <p className="text-sm md:text-lg leading-tight">
        <span className="font-black">Задачи: </span>
        {task}
      </p>
    </div>
  );
};

export default RolsChronology;
