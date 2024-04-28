import { useState } from "react";
import { Underline } from "./Underline";
import { motion } from "framer-motion";

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
            style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
        >
            {children}
            {isHovered ? (
                <motion.span
                    className="material-symbols-outlined"
                    key="arrow_forward"
                    whileHover={{ opacity: 1 }}
                >
                    arrow_forward
                </motion.span>
            ) : (
                <motion.span
                    className="material-symbols-outlined"
                    key="chvron_right"
                    whileHover={{ opacity: 0 }}
                >
                    chevron_right
                </motion.span>
            )}
            <Underline isHovered={isHovered} />
        </a>
    );
};