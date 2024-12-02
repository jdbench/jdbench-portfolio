import Image from "next/image";
import FlipCard from "./FlipCard";

export default function About() {
    return (
        <section>
            <FlipCard />
            <FlipCard />
            <FlipCard />
            <Image
                width="211"
                height="213"
                src="/me.png"
                alt="Profile image of Justin Bench"
            />
        </section>
    );
}
