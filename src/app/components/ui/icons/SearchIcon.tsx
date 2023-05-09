import {BiSearch} from 'react-icons/bi';

type Prop = {
    color?: string ;
}
export default function SearchIcon({color}:Prop) {
    return <BiSearch className={(color ?? 'text-white') + " w-5 h-5"}/>;
}

