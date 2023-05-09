import Badge from './ui/Badge';

const badgeList = [
  {
    id: 1,
    name: '모던한',
  },
  {
    id: 2,
    name: '우아한',
  },
  {
    id: 3,
    name: '깔끔한',
  },
  {
    id: 4,
    name: '심플한',
  },
  {
    id: 5,
    name: '차분한',
  },
  {
    id: 6,
    name: '따뜻한',
  },
  {
    id: 7,
    name: '편안한',
  },
  {
    id: 8,
    name: '컬러풀한',
  },
  {
    id: 9,
    name: '독특한',
  },
];

export default function BadgeList() {
  return (
    <div className='w-96 px-3 md:w-fit overflow-x-scroll whitespace-nowrap'>
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
