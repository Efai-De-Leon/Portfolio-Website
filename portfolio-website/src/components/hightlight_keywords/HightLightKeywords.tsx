import { motion } from "framer-motion";
import "./HightLightKeywords.css";
type HighlightKeywordsProps = {
    isHovered: boolean;
    keywords: string;
    text: string;
};

export const HighlightKeywords = ({
    isHovered,
    keywords,
    text,
}: HighlightKeywordsProps) => {
    if (!keywords && !text) return <div>Loading Description...</div>;

    const splitText = text.split(" ");
    const splitKeywords = keywords.split(" ");
    const isKeyword = (word: string) => {
        return splitKeywords.includes(word);
    };

    return (
        <div className="description">
            {splitText.map((word, index) => (
                <motion.span
                    key={index}
                    animate={{
                        color:
                            isKeyword(word) && isHovered
                                ? "white"
                                : "rgb(167, 167, 167)",
                        transition: { duration: 4, ease: "easeOut" },
                    }}
                >
                    {word}{" "}
                </motion.span>
            ))}
        </div>
    );
};
