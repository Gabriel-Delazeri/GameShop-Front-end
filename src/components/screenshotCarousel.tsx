import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Game, GameImage} from "@/types/game";
import {useEffect, useState} from "react";
import {X} from "lucide-react";

interface ScreenshotCarouselProps {
    game: Game;
}

export default function ScreenshotCarousel({game}: ScreenshotCarouselProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<GameImage | null>(null);

    const openModal = (image: GameImage) => {
        setSelectedImage(image);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            <Carousel>
                <CarouselContent>
                    {game.screenshots.map((screenshot, index) => (
                        <CarouselItem className={`basis-5/6`}>
                            <img
                                src={screenshot.url}
                                alt={screenshot.alt}
                                className={`rounded-md`}
                                onClick={() => openModal(screenshot)}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {(isOpen && selectedImage) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-xl"
                        >
                            <X/>
                        </button>
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-screen rounded-md"
                        />
                    </div>
                </div>
            )}
        </>
    )
}