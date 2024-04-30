import { LinkWithUnderline } from "../link_with_underline/LinkWithUnderline";
import { HighlightKeywords } from "../../hightlight_keywords/HightLightKeywords";
import "./ProjectCardContentStyles.css";

type ProjectCardContentProps = {
    title: string;
    isHovered: boolean;
    keywords: string;
    description: string;
    link: string;
};

export const ProjectCardContent = ({
    title,
    isHovered,
    keywords,
    description,
    link,
}: ProjectCardContentProps) => {
    return (
        <div className="project-content">
            <h3>{title}</h3>
            <div className="project-overview">
                <HighlightKeywords
                    isHovered={isHovered}
                    keywords={keywords}
                    text={description}
                />
            </div>
            <div className="project-info">
                <LinkWithUnderline href={link}>Github Repo</LinkWithUnderline>
            </div>
        </div>
    );
};
