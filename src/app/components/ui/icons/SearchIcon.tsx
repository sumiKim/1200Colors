import { BiSearch } from 'react-icons/bi';

type Props = {
  size?: 'normal' | 'large';
};
export default function SearchIcon({ size }: Props) {
  return <BiSearch className={`${size === 'large' ? 'w-9 h-9' : 'w-5 h-5'}`} />;
}
