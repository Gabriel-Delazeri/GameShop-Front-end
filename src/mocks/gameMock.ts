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
            {url: `/game/screenshots/tlou2/5.png`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/4.webp`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/1.webp`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/6.webp`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/2.webp`, alt: `The Last Of Us Part II Screenshot`},
            {url: `/game/screenshots/tlou2/3.webp`, alt: `The Last Of Us Part II Screenshot`},
        ],
        esrbRating: {
            name: `Mature`,
            description: `Blood and Gore, Intense Violence, Nudity, Sexual Content, Strong Language, Use of Drugs`,
            image: `/esrb/mature.png`
        },
        synopsis: {
            title: "What We’ve Lost",
            paragraphs: [
                `Ellie – driven by loss and vengeance – embarks on a relentless journey through a post-apocalyptic America.`,
                `Face brutal enemies, emotional conflicts, and a world crumbling under the weight of survival.`,
                `With each step, acclaimed studio Naughty Dog redefines storytelling in gaming, pushing the boundaries of human emotion.`
            ]
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
        },
        synopsis: {
            title: "Outlaws for life",
            paragraphs: [
                `Arthur Morgan – a loyal outlaw – must navigate the harsh realities of a dying Wild West as his gang falls apart.`,
                `Confront treacherous enemies, moral dilemmas, and a changing world where survival comes at a cost.`,
                `With every decision, Rockstar Games sets a new standard for immersive storytelling, redefining the open-world experience.`
            ]
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
        screenshots: [
            {url: `/game/screenshots/eldenring/1.jpg`, alt: `Elden Ring Screenshot`},
            {url: `/game/screenshots/eldenring/2.jpg`, alt: `Elden Ring Screenshot`},
            {url: `/game/screenshots/eldenring/3.jpg`, alt: `Elden Ring Screenshot`},
            {url: `/game/screenshots/eldenring/4.jpg`, alt: `Elden Ring Screenshot`},
            {url: `/game/screenshots/eldenring/5.jpg`, alt: `Elden Ring Screenshot`},
        ],
        esrbRating: {
            name: `Mature`,
            description: `Blood and Gore, Language, Suggestive Themes, Violence`,
            image: `/esrb/mature.png`
        },
        synopsis: {
            title: "Rise, Tarnished",
            paragraphs: [
                `A Tarnished – forsaken and exiled – rises to seek the Elden Ring and restore order to a fractured world.`,
                `Face towering foes, ancient mysteries, and the remnants of a once-glorious kingdom in a vast, open landscape.`,
                `FromSoftware reshapes the action RPG genre, blending deep lore and challenging combat in a world of unmatched scale and danger.`
            ]
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
        screenshots: [
            {url: `/game/screenshots/ds2/2.jpg`, alt: `Death Stranding 2 Screenshot`},
            {url: `/game/screenshots/ds2/3.jpg`, alt: `Death Stranding 2 Screenshot`},
            {url: `/game/screenshots/ds2/1.jpg`, alt: `Death Stranding 2 Screenshot`},
            {url: `/game/screenshots/ds2/4.jpg`, alt: `Death Stranding 2 Screenshot`},
        ],
        esrbRating: {
            name: `Mature`,
            description: `Blood, Intense Violence, Partial Nudity, Strong Language`,
            image: `/esrb/mature.png`
        },
        synopsis: {
            title: `Embark on an inspiring mission of human connection beyond the UCA`,
            paragraphs: [
                `Sam – with companions by his side – sets out on a new journey to save humanity from extinction.`,
                `Join them as they traverse a world beset by otherworldly enemies, obstacles and a haunting question: Should we have connected?`,
                `Step by step, legendary game creator Hideo Kojima changes the world once again.`
            ]
        }
    },
];