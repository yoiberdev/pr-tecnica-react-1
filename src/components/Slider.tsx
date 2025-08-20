
type SliderProps = {
  src: string;
};

const Slider = ({ src=""}: SliderProps) => {
  return (
    <div className="max-w-sm h-10 mx-auto">
        
      <img className="bg-cover w-full h-full object-cover rounded-lg"
        src={src}
        alt={src}
      />

    </div>
  );
};

export default Slider;
