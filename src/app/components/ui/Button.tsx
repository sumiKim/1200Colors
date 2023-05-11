import { ReactElement } from 'react';
import BookmarkFillIcon from './icons/BookmarkFillIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import EditIcon from './icons/EditIcon';
import InfoIcon from './icons/InfoIcon';
import PdfDownloadIcon from './icons/PdfDownloadIcon';
import SwatchIcon from './icons/SwatchIcon';

type Props = {
  icon: 'pdf' | 'swatch' | 'bookmark' | 'info' | 'edit';
  description?: string;
  selected?: boolean;
  handleClick?: () => void;
};

export default function Button({
  icon,
  description,
  selected,
  handleClick,
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
  }
  return (
    <button
      className='flex items-center border-2 rounded-md p-1 hover:bg-black hover:text-white'
      onClick={handleClick}
    >
      {reactIcon}
      <span className={description ? 'ms-1' : ''}>{description}</span>
    </button>
  );
}
