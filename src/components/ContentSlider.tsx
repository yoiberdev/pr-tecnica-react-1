import { useEffect, useRef, useState } from "react";
import Slider from "./Slider";

const images = [
  {
    id: 1,
    src: "https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg",
    title: "Highlands",
    subtitle: "Scotland",
    description: "The mountains are calling"
  },
  {
    id: 2,
    src: "https://devloop01.github.io/voyage-slider/images/machu-pichu.jpg",
    title: "Machu Pichu",
    subtitle: "Peru",
    description: "Adventure is never far away"
  },
  {
    id: 3,
    src: "https://devloop01.github.io/voyage-slider/images/chamonix.jpg",
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true"
  }
];

type ContentSliderProps = {
  onSlideChange?: (index: number) => void;
};

const ContentSlider = ({ onSlideChange }: ContentSliderProps) => {
  const [focusedIndex, setFocusedIndex] = useState(1); // El del centro por defecto
  const slidersRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Notificar al componente padre sobre el slide inicial
    onSlideChange?.(focusedIndex);
  }, []);

  useEffect(() => {
    // Notificar al componente padre cuando cambie el slide
    onSlideChange?.(focusedIndex);
  }, [focusedIndex, onSlideChange]);

  const handleSliderClick = (index: number) => {
    setFocusedIndex(index);
  };

  const setSliderRef = (index: number) => (el: HTMLDivElement | null) => {
    slidersRefs.current[index] = el;
  };

  return (
    <div className="grid grid-cols-3 gap-4 px-8 py-8 ">
      {images.map((image, index) => (
        <div
          key={image.id}
          ref={setSliderRef(index)}
          className="cursor-pointer"
          onClick={() => handleSliderClick(index)}
        >
          <Slider 
            src={image.src} 
            isFocused={index === focusedIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default ContentSlider;