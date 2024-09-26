import {Game} from "@/types/game";

export const calculateDiscount = (game: Game) : string  => {
    return (game.originalPrice - game.currentPrice).toFixed(2);
}

export const checkGameHasDiscount = (game: Game) : boolean => {
    return game.currentPrice < game.originalPrice;
}