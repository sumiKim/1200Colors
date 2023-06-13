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
      } border-[1px] border-grey-100 rounded px-1 py-1 sm:py-0.5 sm:px-1.5 text-sm`}
      onClick={() => handleClick(index)}
    >
      {name}
    </button>
  );
}
