import {Trophy} from "@/types/game";

interface TrophyCountProps {
    trophyList: Trophy[];
    type: string;
    imageUrl: string;
}

export default function TrophyCount({trophyList, type, imageUrl}: TrophyCountProps) {
    return (
        <div className={`flex flex-col items-center`}>
            <img
                src={imageUrl}
                className={`w-12`}
                alt="Trophy icon"
            />
            <div>{trophyList.filter(trophy => trophy.type == type).length}</div>
        </div>
    )
}