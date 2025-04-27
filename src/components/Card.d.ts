declare module 'Card' {
    interface CardProps {
        logo: string;
        title: string;
        color: string;
        link: string;
        text: string;
    }

    const Card: React.FC<CardProps>;
    export default Card;
}