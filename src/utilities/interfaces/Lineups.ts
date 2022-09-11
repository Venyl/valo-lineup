export default interface Lineups {
    firstAbility?: {
        name: string;
        A?: {
            vidId: string;
            spot: string;
        }[];
        B?: {
            vidId: string;
            spot: string;
        }[];
        C?: {
            vidId: string;
            spot: string;
        }[];
        Mid?: {
            vidId: string;
            spot: string;
        }[];
        Other?: {
            vidId: string;
            spot: string;
        }[];
    };
    secondAbility?: {
        name: string;
        A?: {
            vidId: string;
            spot: string;
        }[];
        B?: {
            vidId: string;
            spot: string;
        }[];
        C?: {
            vidId: string;
            spot: string;
        }[];
        Mid?: {
            vidId: string;
            spot: string;
        }[];
        Other?: {
            vidId: string;
            spot: string;
        }[];
    };
    thirdAbility?: {
        name: string;
        A?: {
            vidId: string;
            spot: string;
        }[];
        B?: {
            vidId: string;
            spot: string;
        }[];
        C?: {
            vidId: string;
            spot: string;
        }[];
        Mid?: {
            vidId: string;
            spot: string;
        }[];
        Other?: {
            vidId: string;
            spot: string;
        }[];
    };
}
