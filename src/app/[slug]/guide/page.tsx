"use client"
import {Game} from "@/types/game";
import {useEffect, useState} from "react";
import {findBySlug} from "@/service/gameService";
import "../styles.css";
import {ShoppingCart} from "lucide-react";

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
                    <div className={`flex flex-row gap-2`}>
                        {game?.platforms.map((platform, key) => (
                            <div className={`platform-badge`} key={key}>{platform}</div>
                        ))}
                    </div>
                    <div className={`buy-container`}>
                        <div className={`price-information-container`}>
                            <div>
                                <span className={`original-price`}>${game?.originalPrice}</span>
                                <span className={`current-price`}>${game?.currentPrice}</span>
                            </div>
                            <div>
                                <span className={`offer`}>Save 50%. This offer ends soon.</span>
                            </div>
                        </div>
                        <div className={`btn-container`}>
                            <button className={`btn-primary`}>
                                <ShoppingCart/>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}