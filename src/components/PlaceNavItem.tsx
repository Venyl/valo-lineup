import { ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SpotNavItem from './SpotNavItem';

interface props {
    name: string;
    place: {
        vidId: string;
        spot: string;
    }[];
    children?: ReactNode;
}

export default function PlaceNavItem({ name, place, children }: props) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <a
                className="place self-stretch text-center py-2 cursor-pointer outline outline-0 hover:outline-1"
                onClick={() => setOpen(open => !open)}
            >
                {name}
            </a>
            {open && place.map(spot => <SpotNavItem {...spot} key={spot.spot} />)}
        </>
    );
}
