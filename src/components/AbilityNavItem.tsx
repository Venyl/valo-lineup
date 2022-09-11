import { ReactNode, useState } from 'react';
import PlaceNavItem from './PlaceNavItem';
import { v4 as uuidv4 } from 'uuid';

type Place = {
    vidId: string;
    spot: string;
}[];

interface props {
    ability: {
        name: string;
        A?: Place;
        B?: Place;
        C?: Place;
        Mid?: Place;
        Other?: Place;
    };
    children?: ReactNode;
}

export default function AbilityNavItem({ ability, children }: props) {
    const [open, setOpen] = useState<boolean>(false);
    const entries = Object.entries(ability).slice(1);

    return (
        <>
            <a
                className="ability self-stretch text-center py-2 cursor-pointer outline outline-0 hover:outline-1"
                onClick={() => setOpen(open => !open)}
            >
                {ability.name}
            </a>

            {open && entries.map(([k, v]) => <PlaceNavItem name={k} place={v as Place} key={k} />)}
        </>
    );
}
