import { motion } from "framer-motion";

type UnderlineProps = {
    isHovered: boolean;
};


export const Underline = ({isHovered}: UnderlineProps) => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{
                width: isHovered ? "39.5%" : 0,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            style={{
                height: "3px",
                backgroundColor: "white",
                position: "relative",
                bottom: 0,
                left: 0,
            }}
        />
    );
};