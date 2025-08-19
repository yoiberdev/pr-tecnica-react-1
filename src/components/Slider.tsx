
type SliderProps = {
  src: string;
  ref?: React.RefObject<HTMLDivElement>;
};

const Slider = ({ src = "", ref }: SliderProps) => {
  return (
    <div className="max-w-sm h-100 mx-auto" ref={ref}>
        
      <img className="bg-cover w-full h-full object-cover rounded-lg"
        src={src}
        alt={src}
      />

    </div>
  );
};

export default Slider;
