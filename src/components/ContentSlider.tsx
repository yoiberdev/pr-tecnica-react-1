import { useEffect, useRef, useState } from "react";
import Slider from "./Slider";

export const images = [
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
  const [currentIndex, setCurrentIndex] = useState(1); // Índice de la imagen central
  const [slideOrder, setSlideOrder] = useState([0, 1, 2]); // Orden actual de las imágenes
  const [isAnimating, setIsAnimating] = useState(false);
  const slidersRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Notificar al componente padre sobre el slide inicial
    onSlideChange?.(currentIndex);
  }, []);

  useEffect(() => {
    // Notificar al componente padre cuando cambie el slide
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  const handleSliderClick = (clickedImageIndex: number) => {
    if (clickedImageIndex === currentIndex || isAnimating) return; // No hacer nada si ya está en el centro o está animando

    setIsAnimating(true);
    
    const newOrder = [...slideOrder];
    const currentCenterPos = newOrder.indexOf(currentIndex);
    const clickedPos = newOrder.indexOf(clickedImageIndex);
    
    if (clickedPos < currentCenterPos) {
      // Si se clickeó la imagen de la izquierda, mover todas una posición a la derecha
      const temp = newOrder.pop();
      if (temp !== undefined) {
        newOrder.unshift(temp);
      }
    } else {
      // Si se clickeó la imagen de la derecha, mover todas una posición a la izquierda
      const temp = newOrder.shift();
      if (temp !== undefined) {
        newOrder.push(temp);
      }
    }
    
    setSlideOrder(newOrder);
    setCurrentIndex(clickedImageIndex);
    
    // Resetear estado de animación después de la transición
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const setSliderRef = (index: number) => (el: HTMLDivElement | null) => {
    slidersRefs.current[index] = el;
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto px-8 py-8">
      <div className="relative flex items-center justify-center w-full h-96">
        {slideOrder.map((imageIndex, position) => {
          const image = images[imageIndex];
          const isCenter = position === 1;
          
          return (
            <div
              key={`${image.id}-${position}`}
              ref={setSliderRef(imageIndex)}
              className={`
                absolute cursor-pointer transition-all duration-500 ease-in-out
                ${isAnimating ? 'pointer-events-none' : ''}
                hover:scale-105
              `}
              style={{
                transform: `
                  translateX(${position === 0 ? '-140px' : position === 1 ? '0px' : '140px'}) 
                  translateY(-50%) 
                  scale(${isCenter ? 1 : 0.8})
                `,
                top: '50%',
                left: '50%',
                zIndex: isCenter ? 20 : 10 - Math.abs(position - 1),
                opacity: isCenter ? 1 : 0.7
              }}
              onClick={() => handleSliderClick(imageIndex)}
            >
              <Slider 
                src={image.src} 
                isFocused={isCenter}
              />
            </div>
          );
        })}
      </div>
      
      {/* Botones de navegación */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 z-30 disabled:opacity-50"
        onClick={() => {
          const leftImageIndex = slideOrder[0];
          handleSliderClick(leftImageIndex);
        }}
        disabled={isAnimating}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 z-30 disabled:opacity-50"
        onClick={() => {
          const rightImageIndex = slideOrder[2];
          handleSliderClick(rightImageIndex);
        }}
        disabled={isAnimating}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default ContentSlider;