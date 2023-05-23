import Badge from './ui/Badge';

const badgeList = [
  {
    id: 1,
    name: '편안한',
  },
  {
    id: 2,
    name: '자연의',
  },
  {
    id: 3,
    name: '우아한',
  },
  {
    id: 4,
    name: '온화한',
  },
  {
    id: 5,
    name: '귀여운',
  },
  {
    id: 6,
    name: '화려한',
  },
  {
    id: 7,
    name: '역동적인',
  },
  {
    id: 8,
    name: '모던한',
  },
  {
    id: 9,
    name: '격조있는',
  },
  {
    id: 10,
    name: '이지적인',
  },
];

export default function BadgeList() {
  return (
    // <div className='w-96 px-3 md:w-fit overflow-x-scroll whitespace-nowrap'>
    <div className='w-full md:w-fit overflow-x-scroll whitespace-nowrap'>
      <ul className='flex gap-4'>
        {badgeList.map(badge => (
          <li key={badge.id}>
            <Badge name={badge.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
