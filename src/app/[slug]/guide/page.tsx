"use client"
import {Game} from "@/types/game";
import {useEffect, useState} from "react";
import {findBySlug} from "@/service/gameService";
import "../styles.css";
import TrophyCount from "@/components/trophyCount";

interface GamePageProps {
    params: {
        slug: string;
    }
}

export default function GamePage({params}: GamePageProps) {
    const [game, setGame] = useState<Game>();

    useEffect(() => {
        setGame(findBySlug(params.slug));
    }, [params]);

    const getTrophyIconByType = (type: string) => {
        switch (type) {
            case `Bronze`:
                return `/trophy/icon/bronze.png`
            case `Silver`:
                return `/trophy/icon/silver.png`;
            case `Gold`:
                return `/trophy/icon/gold.png`
            case `Platinum`:
                return `/trophy/icon/platinum.png`;
        }
    }

    return (
        <div>
            <div className={`main-container`}>
                <div className="background-image"
                     style={{
                         backgroundImage: `url(${game?.image.url})`,
                     }}
                ></div>
                <div className="overlay"></div>
                <div className="game-container">
                    <img
                        className={`w-full`}
                        src={game?.image.url}
                        alt={game?.title}
                    />
                    <div className={`title-container`}>
                        <h1>{game?.title}</h1>
                        <h2>{game?.publisher}</h2>
                    </div>
                    <div className={`flex flex-row gap-2 justify-center`}>
                        {game?.platforms.map((platform, key) => (
                            <div className={`platform-badge`} key={key}>{platform}</div>
                        ))}
                    </div>
                    {game?.trophies && (
                        <div className={`flex flex-row gap-2 justify-center mt-4`}>
                            <TrophyCount trophyList={game?.trophies} type={"Platinum"}
                                         imageUrl={`/trophy/icon/platinum.png`}/>
                            <TrophyCount trophyList={game?.trophies} type={"Gold"} imageUrl={`/trophy/icon/gold.png`}/>
                            <TrophyCount trophyList={game?.trophies} type={"Silver"}
                                         imageUrl={`/trophy/icon/silver.png`}/>
                            <TrophyCount trophyList={game?.trophies} type={"Bronze"}
                                         imageUrl={`/trophy/icon/bronze.png`}/>
                        </div>
                    )}
                </div>
            </div>
            <div className={`trophies-container`}>
                <h1>Trophy List</h1>
                <ul className={`trophy-list`}>
                    {game?.trophies.map((trophy, index) => (
                        <li key={index}>
                            <div className={`flex flex-row gap-2`}>
                                <img
                                    className={`w-16 h-16`}
                                    src={trophy.image}
                                    alt={trophy.title}
                                />
                                <div className={`flex flex-col`}>
                                    <h2 className={`text-sm`}>{trophy.title}</h2>
                                    <h3 className={`text-xs text-zinc-300`}>{trophy.description}</h3>
                                </div>
                            </div>
                            <img
                                className={`w-10 h-10`}
                                src={getTrophyIconByType(trophy.type)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}