type TextWrapperProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};

const TextWrapper = ({ 
  title = "Highlands", 
  subtitle = "Scotland", 
  description = "The mountains are calling" 
}: TextWrapperProps) => {
  return (
    <div className="text-white flex flex-col font-bold absolute top-1/2 left-90 hover:left-100  transform -translate-y-1/2 z-20">
      <div className="data-title text-4xl mb-2 transition-all duration-300 ease-in-out">
        <span className="drop-shadow-lg">{title}</span>
      </div>
      <div className="data-subtitle text-2xl mb-4 transition-all duration-300 ease-in-out">
        <span className="drop-shadow-lg">{subtitle}</span>
      </div>
      <div className="data-description text-base transition-all duration-300 ease-in-out">
        <span className="drop-shadow-lg">{description}</span>
      </div>
    </div>
  );
};

export default TextWrapper;