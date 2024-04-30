import "./FigureContainerStyles.css";

type FigureContainerProps = {
    image: string;
};

export const FigureContainer = ({ image }: FigureContainerProps) => {
    return (
        <figure>
            <img src={"./assets/" + image} alt="Not Found" />
        </figure>
    );
};
