import { useState } from "react";
import ContentSlider from "./ContentSlider";
import TextWrapper from "./TextWrapper";

const images = [
  {
    id: 1,
    title: "Highlands",
    subtitle: "Scotland",
    description: "The mountains are calling",
  },
  {
    id: 2,
    title: "Machu Pichu",
    subtitle: "Peru",
    description: "Adventure is never far away",
  },
  {
    id: 3,
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
  },
];

const SlideWrapper = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Índice del slide actual (empezando en 1 que es el centro)

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex items-center justify-center overflow-hidden">
      <ContentSlider onSlideChange={handleSlideChange} />
      <TextWrapper
        title={images[currentSlide]?.title}
        subtitle={images[currentSlide]?.subtitle}
        description={images[currentSlide]?.description}
      />
    </div>
  );
};

export default SlideWrapper;
