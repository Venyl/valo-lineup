import { ReactNode, useContext, useState } from 'react';
import { VidIdContext } from './LineupMenu';

interface props {
    vidId: string;
    spot: string;
}

export default function SpotNavItem({ vidId, spot }: props) {
    const { setVidId } = useContext(VidIdContext);

    return (
        <>
            <a
                className="self-stretch text-center py-2 cursor-pointer outline outline-0 hover:outline-1"
                onClick={() => setVidId!(vidId)}
            >
                {spot}
            </a>
        </>
    );
}
