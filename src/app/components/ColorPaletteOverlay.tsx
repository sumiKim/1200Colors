'use client';

import { useState } from 'react';
import ColorPaletteOverlayBody from './ColorPaletteOverlayBody';
import Button from './ui/Button';

type Props = {
  openEditArea: boolean;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ColorPaletteOverlay({
  openEditArea,
  handleClose,
}: Props) {
  const [activeTab, setActiveTab] = useState('Search');

  const tabs = [
    {
      label: 'Search',
      component: '',
    },
    {
      label: 'MyColor',
      component: '',
    },
  ];

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };
  return (
    <section
      className={`absolute w-full h-full bg-gray-200/80 top-0 left-0 flex flex-col p-1 rounded-md ${
        openEditArea ? 'block' : 'hidden'
      }`}
    >
      <div className='flex justify-end'>
        <Button icon='close' handleClick={handleClose} border={false} />
      </div>
      {/* Tab */}
      <div className='flex flex-col mt-1 h-full'>
        {/* Tab Header */}
        <ul className='flex'>
          {tabs.map(tab => (
            <li key={tab.label} className='flex-auto text-center'>
              <button
                className={`w-full py-1 rounded-t-lg text-sm font-medium ${
                  activeTab !== tab.label
                    ? 'text-sh_text64 bg-gray-200'
                    : 'bg-white'
                }`}
                onClick={() => handleTabClick(tab.label)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Tab Body */}
        <div className='relative w-full h-full bg-white'>
          <ColorPaletteOverlayBody activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}
