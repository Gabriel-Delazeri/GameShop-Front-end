"use client"
import {useEffect, useState} from "react";
import {findAll} from "@/service/gameService";
import {Game} from "@/types/game";
import Link from "next/link";
import {BadgeDollarSign} from "lucide-react";

export default function Home() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        setGames(findAll)
    }, []);

    return (
        <div>
            <div className={`main-container`}>
                <div className="background-image"
                     style={{
                         backgroundImage: `url("/game/covers/gta6.png")`,
                     }}
                ></div>
                <div className="overlay"></div>
                <div className="home-container">
                    <div className={`flex flex-col gap-2`}>
                        <img
                            src={"/game/covers/gta6.png"}
                            className={`rounded-tl-xl rounded-br-xl h-72 object-cover`}
                        />
                        <div className={`flex flex-row justify-between items-end`}>
                            <div className="flex flex-col">
                                <div className="text-xl font-semibold uppercase">
                                    Grand Theft Auto VI
                                </div>
                                <div className="text-xs font-semibold text-zinc-400">
                                    Coming 2026
                                </div>
                            </div>
                            <button className={`btn-primary`}>
                                Pre-Order now
                            </button>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-2 mt-4`}>
                        <h1 className={`font-bold text-lg flex flex-row gap-1 items-center`}><BadgeDollarSign/> On Sale</h1>
                        <div className={`grid grid-cols-2 gap-2`}>

                            {games.map(game => (
                                <Link
                                    href={`${game.slug}/guide`}
                                    className={`flex flex-col gap-2`}
                                >
                                    <img
                                        src={game.thumbnail?.url}
                                        className={`rounded-tl-xl rounded-br-xl`}
                                    />
                                    <div>
                                        <div className={`font-semibold`}>{game.title}</div>
                                        <div className={`flex flex-row items-center gap-2`}>
                                            <div className={`text-xs line-through text-zinc-400`}>${game.originalPrice}</div>
                                            <div>${game.currentPrice}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
