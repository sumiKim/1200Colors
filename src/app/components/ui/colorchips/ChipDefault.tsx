'use client';
import { useState } from 'react';
import { useSelectedColor } from '../../../context/SelectedColorContext';
import ChipModalDetail from './ChipModalDetail';
import ColorModal from '../../ColorModal';
import ModalPortal from '../ModalPortal';
import { Color } from '@/service/type';

type Props = {
  color: Color;
  state?: boolean;
};

export default function ChipDefault({ color }: Props) {
  const { selectedList, removeColor } = useSelectedColor();
  const state =
    selectedList.find(select => select.samwha_code === color.samwha_code) ===
    undefined
      ? false
      : true;

  const [selected, setSelected] = useState(state);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    if (selected) {
      removeColor(color);
    } else {
      setOpenModal(true);
    }
    setSelected(!selected);
  };

  return (
    <>
      <button
        id={`${color.samwha_code}`}
        className={`w-[72px] h-[72px] relative hover:scale-105 duration-200 ${
          color.border !== null ? 'border-line' : ''
        }`}
        style={{ backgroundColor: `#${color.HEX}` }}
        onClick={handleClick}
      >
        <div
          id={`selected_${color.samwha_code}`}
          className={state ? 'selected' : ''}
        ></div>
      </button>

      {openModal && (
        <ModalPortal>
          <ColorModal onClose={() => setOpenModal(false)}>
            <ChipModalDetail color={color} style={'simple'} />
          </ColorModal>
        </ModalPortal>
      )}
    </>
  );
}
