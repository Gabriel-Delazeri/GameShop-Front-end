import {Game} from "@/types/game";

export const games: Game[] = [
    {
        title: "The Last Of Us Part II",
        publisher: "Naught Dog",
        platforms: ["ps4", "ps5"],
        genders: ["Action", "Adventure", "Survival horror"],
        slug: "the-last-of-us-part-2",
        cover: {url: `/game/covers/tlou2.jpg`, alt: `The Last Of Us Part II Cover`},
        originalPrice: 59.99,
        currentPrice: 29.99,
        screenshots: [
            {url: `/game/screenshots/tlou2/4.webp`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/5.webp`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/1.webp`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/6.webp`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/2.webp`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/3.webp`, alt: `The Last Of Us Part II Screenshot`},
        ],
        esrbRating: {
            name: `Mature`,
            description: `Blood and Gore, Intense Violence, Nudity, Sexual Content, Strong Language, Use of Drugs`,
            image: `/esrb/mature.png`
        }
    },
    {
        title: "Red Dead Redemption II",
        publisher: "Rockstar Games",
        platforms: ["ps4", "ps5"],
        genders: ["Action", "Adventure", "Open world"],
        slug: "red-dead-redemption-2",
        cover: {url: `/game/covers/rdr2.jpg`, alt: `Red Dead Redemption II Cover`},
        originalPrice: 59.99,
        currentPrice: 29.99,
        screenshots: [
            {url: `/game/screenshots/rdr2/1.jpg`, alt: `Red Dead Redemption II Screenshot`},
            {url: `/game/screenshots/rdr2/2.jpg`, alt: `Red Dead Redemption II Screenshot`},
            {url: `/game/screenshots/rdr2/3.jpg`, alt: `Red Dead Redemption II Screenshot`},
            {url: `/game/screenshots/rdr2/4.jpg`, alt: `Red Dead Redemption II Screenshot`},
        ],
        esrbRating: {
            name: `Mature`,
            description: `Blood and Gore, Intense Violence, Nudity, Sexual Content, Strong Language, Use of Drugs and Alcohol`,
            image: `/esrb/mature.png`
        }
    },
    {
        title: "Elden Ring",
        publisher: "From Software",
        platforms: ["ps4", "ps5"],
        genders: ["Action", "Adventure", "Open world"],
        slug: "elden-ring",
        cover: {url: `/game/covers/eldenring.jpg`, alt: `Elden Ring Cover`},
        originalPrice: 59.99,
        currentPrice: 49.99,
        screenshots: [],
        esrbRating: {
            name: `Mature`,
            description: `Blood and Gore, Language, Suggestive Themes, Violence`,
            image: `/esrb/mature.png`
        }
    },
    {
        title: "Death Stranding 2: On the Beach",
        publisher: "Kojima Productions",
        platforms: ["ps4", "ps5"],
        genders: ["Action", "Adventure", "Open world"],
        slug: "death-stranding-2",
        cover: {url: `/game/covers/deathstranding.jpg`, alt: `Death Stranding 2 Cover`},
        originalPrice: 59.99,
        currentPrice: 59.99,
        screenshots: []
    },
];