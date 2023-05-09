'use client';

import { useState } from 'react';

type Props = {
  name: string;
};
export default function Badge({ name }: Props) {
  const [select, setSelect] = useState(false);
  return (
    <button
      className={`${
        select ? 'font-bold' : 'text-gray-400'
      } border-[1px] border-grey-100 rounded py-0.5 px-1.5`}
    >
      {name}
    </button>
  );
}
