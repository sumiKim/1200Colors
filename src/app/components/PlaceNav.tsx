import PlaceNavItem from './PlaceNavItem';

export type IPlaceNav = {
  id: string;
  type: string;
  side?: string;
  form?: string;
  data?: string;
};

type Props = {
  placeNav: IPlaceNav[];
};

export default function PlaceNav({ placeNav }: Props) {
  return (
    <ul>
      {placeNav.map(item => (
        <li key={`web_${item.id}`}>
          <PlaceNavItem item={item} useType={'web'} />
        </li>
      ))}
    </ul>
  );
}
