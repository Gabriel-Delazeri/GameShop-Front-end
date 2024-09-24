import {games} from "@/mocks/gameMock";

export const findAll = () => {
    return games;
};

export const findBySlug = (slug: string) => {
    return games.find((game) => game.slug === slug);
};