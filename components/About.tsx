import Image from "next/image";
import FlipCard from "./FlipCard";

export default function About() {
    return (
        <div className="about-wrapper">
            <Image
                width="211"
                height="213"
                src="/me.png"
                alt="Profile image of Justin Bench"
            />
            <div className="flipcardcontainer">
                <FlipCard
                    back={{ title: "back title" }}
                    title="Title"
                    description="Description"
                    img={{}}
                />
                <FlipCard
                    back={{ title: "back title" }}
                    title="Title"
                    description="Description"
                    img={{}}
                />
                <FlipCard
                    back={{ title: "back title" }}
                    title="Title"
                    description="Description"
                    img={{}}
                />
            </div>
        </div>
    );
}
