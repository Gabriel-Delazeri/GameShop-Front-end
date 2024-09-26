export type Game = {
    title: string;
    slug: string;
    genders: string[];
    platforms: string[];
    publisher: string;
    cover: GameImage;
    thumbnail?: GameImage;
    currentPrice: number;
    originalPrice: number;
    screenshots: GameImage[]
    esrbRating?: ESRBRating;
    synopsis?: GameSynopsis;
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

export type GameSynopsis = {
    title: string;
    paragraphs: string[];
}