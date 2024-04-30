import { useState } from "react";
import { Underline } from "./Underline";

type LinkProps = {
    href: string;
    children: React.ReactNode;
};

export const LinkWithUnderline = ({ href, children }: LinkProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                display: "inline-block",
            }}
        >
            {children}
            {isHovered ? (
                <span className="material-symbols-outlined" key="arrow_forward">
                    arrow_forward
                </span>
            ) : (
                <span className="material-symbols-outlined" key="chvron_right">
                    chevron_right
                </span>
            )}
            <Underline isHovered={isHovered} />
        </a>
    );
};
