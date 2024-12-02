import Image from "next/image";

export default function FlipCard({
    description,
    img,
    title,
    back,
}: {
    back: Partial<{ title: string; description: string }>;
    description: Partial<string>;
    img: Partial<{ src: string; alt: string; height: number; width: number }>;
    title: Partial<string>;
}) {
    return (title || description || img?.src || img?.alt) &&
        (back?.title || back?.description) ? (
        <div className="flipcard">
            <div className="flipcard-front">
                {img.src && img.alt ? (
                    <Image
                        src={img.src}
                        alt={img.alt}
                        height={img.height}
                        width={img.width}
                    />
                ) : null}
                {title ? <h3>{title}</h3> : null}
                {description ? <p>{description}</p> : null}
            </div>
            {back.title || back.description ? (
                <div className="flipcard-back">
                    {back.title ? <h3>{back.title}</h3> : null}
                    {back.description ? <p>{back.description}</p> : null}
                </div>
            ) : null}
        </div>
    ) : null;
}
