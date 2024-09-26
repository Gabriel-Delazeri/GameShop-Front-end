import {Game} from "@/types/game";

export const games: Game[] = [
    {
        title: "The Last Of Us Part II",
        publisher: "Naught Dog",
        platforms: ["ps4", "ps5"],
        genders: ["Action", "Adventure", "Survival horror"],
        slug: "the-last-of-us-part-2",
        image: {url: `/game/covers/tlou2.jpg`, alt: `The Last Of Us Part II Cover`},
        originalPrice: 59.99,
        currentPrice: 29.99
    },
    {
        title: "Red Dead Redemption II",
        publisher: "Rockstar Games",
        platforms: ["ps4", "ps5"],
        genders: ["Action", "Adventure", "Open world"],
        slug: "red-dead-redemption-2",
        image: {url: `/game/covers/rdr2.jpg`, alt: `Red Dead Redemption II Cover`},
        originalPrice: 59.99,
        currentPrice: 29.99
    },
    {
        title: "Elden Ring",
        publisher: "From Software",
        platforms: ["ps4", "ps5"],
        genders: ["Action", "Adventure", "Open world"],
        slug: "elden-ring",
        image: {url: `/game/covers/eldenring.jpg`, alt: `Elden Ring Cover`},
        originalPrice: 59.99,
        currentPrice: 49.99
    },
    {
        title: "Death Stranding 2: On the Beach",
        publisher: "Kojima Productions",
        platforms: ["ps4", "ps5"],
        genders: ["Action", "Adventure", "Open world"],
        slug: "death-stranding-2",
        image: {url: `/game/covers/deathstranding.jpg`, alt: `Death Stranding 2 Cover`},
        originalPrice: 59.99,
        currentPrice: 59.99
    },
];