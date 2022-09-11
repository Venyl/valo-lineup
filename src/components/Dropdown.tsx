import DropdownItem from './DropdownItem';

interface props {
    name: string;
}

export default function Dropdown({ name }: props) {
    return <DropdownItem>{name}</DropdownItem>;
}
