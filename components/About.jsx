import Image from "next/image";

export default function About() {
    return (
        <section>
            <Image
                width="211"
                height="213"
                src="/me.png"
                alt="Profile image of Justin Bench"
            />
        </section>
    );
}
