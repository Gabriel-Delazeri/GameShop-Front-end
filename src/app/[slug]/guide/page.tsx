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

    return (
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
                        <TrophyCount trophyList={game?.trophies} type={"Platinum"} imageUrl={`/trophy/icon/platinum.png`}/>
                        <TrophyCount trophyList={game?.trophies} type={"Gold"} imageUrl={`/trophy/icon/gold.png`}/>
                        <TrophyCount trophyList={game?.trophies} type={"Silver"} imageUrl={`/trophy/icon/silver.png`}/>
                        <TrophyCount trophyList={game?.trophies} type={"Bronze"} imageUrl={`/trophy/icon/bronze.png`}/>
                    </div>
                )}
            </div>
        </div>
    )
}