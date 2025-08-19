import { forwardRef } from "react";

type SliderProps = {
  src: string;
  isFocused?: boolean;
};

const Slider = forwardRef<HTMLDivElement, SliderProps>(({ src = "", isFocused = false }, ref) => {
  return (
    <div 
      className={`
        max-w-sm h-80 mx-auto transition-all duration-300 ease-in-out rotate-1
        ${isFocused ? 'scale-110 z-10 hover:rotate-3' : 'scale-90 z-1'}
      `} 
      ref={ref}
    >
      <img 
        className={`
          bg-cover w-full h-full object-cover rounded-lg transition-all duration-300 ease-in-out
          ${isFocused 
            ? 'brightness-100 saturate-120 shadow-2xl' 
            : 'brightness-75 saturate-75 shadow-lg opacity-80 hover:opacity-90'
          }
        `}
        src={src}
        alt={src}
      />
    </div>
  );
});

Slider.displayName = "Slider";

export default Slider;