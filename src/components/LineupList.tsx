import AbilityNavItem from './AbilityNavItem';
import Lineups from '../utilities/interfaces/Lineups';

export default function LineupList({ firstAbility, secondAbility, thirdAbility }: Lineups) {
    return (
        <nav className="flex items-center justify-around gap-2 flex-col overflow-auto p-2 md:basis-96  md:justify-start">
            {firstAbility && <AbilityNavItem ability={firstAbility} />}
            {secondAbility && <AbilityNavItem ability={secondAbility} />}
            {thirdAbility && <AbilityNavItem ability={thirdAbility} />}
        </nav>
    );
}
