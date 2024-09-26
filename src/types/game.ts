export type Game = {
    title: string;
    slug: string;
    genders: string[];
    platforms: string[];
    publisher: string;
    cover: GameImage;
    currentPrice: number;
    originalPrice: number;
    screenshots: GameImage[]
    esrbRating?: ESRBRating;
}

export type GameImage = {
    url: string;
    alt: string;
}

export type ESRBRating = {
    name: string;
    image: string;
    description: string;
}