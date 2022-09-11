interface props {
    vidId: string;
}

export default function LineupVideo({ vidId }: props) {
    if (!vidId) return <></>;
    return (
        <iframe
            className=" bg-theme aspect-video md:grow md:aspect-auto"
            frameBorder="0"
            allowFullScreen
            allow="autoplay;encrypted-media;"
            src={`https://www.youtube.com/embed/${vidId}`}
        ></iframe>
    );
}
