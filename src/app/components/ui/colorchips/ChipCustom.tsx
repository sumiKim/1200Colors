'use client';

import { useCustomSchema } from '@/app/context/CustomSchemaContext';
import { Color } from '@/service/type';
import { useState } from 'react';
import ColorInfo from '../../ColorInfo';
import ColorModal from '../../ColorModal';
import Button from '../Button';
import ModalPortal from '../ModalPortal';
import ChipModalDetail from './ChipModalDetail';

type Props = {
  area: string;
  color: Color;
  handleEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export default function ChipCustom({ area, color, handleEdit }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className='flex mb-3 w-full h-20 flex-col lg:flex-row'>
        <div
          className='basis-1/2 mb-2 lg:mb-0 lg:me-3'
          style={{ backgroundColor: `#${color.HEX}` }}
        />
        <div className='basis-1/2 flex items-center'>
          <ColorInfo color={color} type={'simple'} />
          <Button icon={'info'} handleClick={handleOpenModal} />
          <Button icon={'edit'} handleClick={handleEdit} edit_value={area} />
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
