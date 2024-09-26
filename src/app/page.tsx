"use client"
import {useEffect, useState} from "react";
import {findAll} from "@/service/gameService";
import {Game} from "@/types/game";
import Link from "next/link";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {checkGameHasDiscount} from "@/utils/price.util";

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
                             backgroundImage: `url("")`,
                         }}
                    ></div>
                    <div className="overlay"></div>
                    <div className="game-container">
                        <Carousel>
                            <CarouselContent>
                                {games.map((game, index) => (
                                    <CarouselItem className={`flex flex-row justify-center`}>
                                        <Link href={`${game.slug}/guide`}
                                            className={`flex flex-col gap-2`}
                                        >
                                            <img
                                                src={game.cover.url}
                                                className={`h-96 w-max`}
                                            />
                                            <div className={`flex flex-col`}>
                                                <h1 className={`text-xl font-bold uppercase`}>
                                                    {game.title}
                                                </h1>
                                                <div className={`flex flex-row gap-2 items-end`}>
                                                    {checkGameHasDiscount(game) && (
                                                        <span className={`line-through text-zinc-500`}>${game?.originalPrice}</span>
                                                    )}
                                                    <div className={`text-lg font-semibold`}>${game.currentPrice}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </CarouselItem>

                                ))}
                            </CarouselContent>
                            <CarouselPrevious className={`bg-black`}/>
                            <CarouselNext className={`bg-black`}/>
                        </Carousel>
                    </div>
                </div>
        </div>
    );
}
