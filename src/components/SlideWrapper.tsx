import { useState } from "react";
import ContentSlider, { images } from "./ContentSlider";
import TextWrapper from "./TextWrapper";

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