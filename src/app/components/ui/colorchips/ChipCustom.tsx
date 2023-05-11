'use client';

import { Color } from '@/service/1200colors';
import { useState } from 'react';
import ColorInfo from '../../ColorInfo';
import ColorModal from '../../ColorModal';
import Button from '../Button';
import ModalPortal from '../ModalPortal';
import ChipModalDetail from './ChipModalDetail';

type Props = {
  color: Color;
};
export default function ChipCustom({ color }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className='flex m-1 w-full h-20 flex-col lg:flex-row'>
        <div
          className='basis-1/2 mb-2 lg:mb-0 lg:me-3'
          style={{ backgroundColor: `#${color.HEX}` }}
        />
        <div className='basis-1/2 flex items-center'>
          <ColorInfo color={color} type={'simple'} />
          <Button icon={'info'} handleClick={handleOpenModal} />
          <Button icon={'edit'} />
        </div>
      </div>

      {openModal && (
        <ModalPortal>
          <ColorModal onClose={() => setOpenModal(false)}>
            <ChipModalDetail color={color} style={'detail'} />
          </ColorModal>
        </ModalPortal>
      )}
    </>
  );
}
