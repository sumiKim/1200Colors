type Props = {
  index: number;
  name: string;
  isSelected: boolean;
  handleClick: (index: number) => void;
};
export default function Badge({ index, name, isSelected, handleClick }: Props) {
  return (
    <button
      className={`${
        isSelected ? 'font-bold' : 'text-gray-400'
      } border-[1px] border-grey-100 rounded py-0.5 px-1.5`}
      onClick={() => handleClick(index)}
    >
      {name}
    </button>
  );
}
