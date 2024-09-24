"use client"
import {useEffect, useState} from "react";
import {findAll} from "@/service/gameService";
import {Game} from "@/types/game";
import Link from "next/link";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setGames(findAll)
  }, []);

  return (
    <div className="flex flex-col">
      {games?.map((game: Game) => (
          <Link href={`${game.slug}/guide`} key={game.slug}>{game.title}</Link>
      ))}
    </div>
  );
}
