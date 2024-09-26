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
}

export type Trophy = {
    title: string;
    image: string;
    description: string;
    type: string;
    percentage: number;
    rareness: string;
}

export type GameImage = {
    url: string;
    alt: string;
}