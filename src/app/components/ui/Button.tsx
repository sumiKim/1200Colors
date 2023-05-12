import { ReactElement } from 'react';
import BookmarkFillIcon from './icons/BookmarkFillIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import CloseIcon from './icons/CloseIcon';
import EditIcon from './icons/EditIcon';
import InfoIcon from './icons/InfoIcon';
import PdfDownloadIcon from './icons/PdfDownloadIcon';
import SearchIcon from './icons/SearchIcon';
import SwatchIcon from './icons/SwatchIcon';

type Props = {
  icon: 'pdf' | 'swatch' | 'bookmark' | 'info' | 'edit' | 'close' | 'search';
  description?: string;
  selected?: boolean;
  handleClick?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  border?: boolean;
  edit_value?: string;
};

export default function Button({
  icon,
  description,
  selected,
  handleClick,
  border = true,
  edit_value,
}: Props) {
  let reactIcon: ReactElement;
  switch (icon) {
    case 'pdf':
      reactIcon = <PdfDownloadIcon />;
      break;
    case 'swatch':
      reactIcon = <SwatchIcon />;
      break;
    case 'bookmark':
      reactIcon = selected ? <BookmarkFillIcon /> : <BookmarkIcon />;
      break;
    case 'info':
      reactIcon = <InfoIcon />;
      break;
    case 'edit':
      reactIcon = <EditIcon />;
      break;
    case 'close':
      reactIcon = <CloseIcon />;
      break;
    case 'search':
      reactIcon = <SearchIcon />;
      break;
  }
  return (
    <button
      value={edit_value}
      className={`flex items-center rounded-md p-1 hover:bg-black hover:text-white ${
        border ? 'border-2' : ''
      }`}
      onClick={handleClick}
    >
      {reactIcon}
      <span className={description ? 'ms-1' : ''}>{description}</span>
    </button>
  );
}
