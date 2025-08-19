import { useState } from "react";
import ContentSlider from "./ContentSlider";
import TextWrapper from "./TextWrapper";

const images = [
  {
    id: 1,
    title: "Highlands",
    subtitle: "Scotland",
    description: "The mountains are calling"
  },
  {
    id: 2,
    title: "Machu Pichu",
    subtitle: "Peru",
    description: "Adventure is never far away"
  },
  {
    id: 3,
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true"
  }
];

const SlideWrapper = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Índice del slide actual (empezando en 1 que es el centro)

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex items-center justify-center overflow-hidden">
      {/* Fondo con patrón de puntos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Efectos de luz ambiental */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
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