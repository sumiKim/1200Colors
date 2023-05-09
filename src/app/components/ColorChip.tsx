'use client';

import { Color } from '@/service/colors';
import { useEffect, useState } from 'react';
import { useSelectedColor } from '../context/SelectedColorContext';
import ChipModalDetail from './ChipModalDetail';
import ColorModal from './ColorModal';
import ModalPortal from './ui/ModalPortal';

type Props = {
  color: Color;
  state?: boolean;
};

export default function ColorChip({ color }: Props) {
  const { selectedList, removeColor, insertColor } = useSelectedColor();
  const state =
    selectedList.find(select => select.id === color.id) === undefined
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

  useEffect(() => {
    // 색 배경
    const color__value = `#${color.HEX}`;

    const divElement = document.getElementById(
      `${color.page_code}`
    )! as HTMLDivElement;
    divElement.style.backgroundColor = color__value;

    const selectedDivElement = document.getElementById(
      `selected_${color.page_code}`
    )! as HTMLDivElement;

    if (state) {
      selectedDivElement.classList.add('selected');
      setSelected(state);
    } else {
      if (selectedDivElement.classList.contains('selected')) {
        selectedDivElement.classList.remove('selected');
      }
    }
  }, [color, state]);

  return (
    <>
      <button
        id={`${color.page_code}`}
        className={`w-[72px] h-[72px] relative hover:scale-105 duration-200`}
        onClick={handleClick}
      >
        <div id={`selected_${color.page_code}`}></div>
      </button>

      {openModal && (
        <ModalPortal>
          <ColorModal onClose={() => setOpenModal(false)}>
            <ChipModalDetail color={color} />
          </ColorModal>
        </ModalPortal>
      )}
    </>
  );
}
