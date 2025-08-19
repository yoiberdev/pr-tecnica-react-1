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
    <div className="absolute top-1/2 right-16 transform -translate-y-1/2 z-30 text-white font-bold max-w-sm">
      <div className="space-y-4 text-right">
        <div className="overflow-hidden">
          <div 
            key={title} // Key para forzar re-render en cambios
            className="data-title text-5xl lg:text-6xl font-black leading-tight transition-all duration-700 ease-out transform animate-slideInRight"
            style={{
              fontFamily: 'var(--font-clash-display), sans-serif',
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
            }}
          >
            {title}
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div 
            key={subtitle}
            className="data-subtitle text-xl lg:text-2xl font-semibold text-blue-200 transition-all duration-700 ease-out delay-100 transform animate-slideInRight"
            style={{
              fontFamily: 'var(--font-archivo), sans-serif',
              textShadow: '1px 1px 4px rgba(0,0,0,0.6)'
            }}
          >
            {subtitle}
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div 
            key={description}
            className="data-description text-base lg:text-lg font-normal text-gray-200 leading-relaxed transition-all duration-700 ease-out delay-200 transform animate-slideInRight"
            style={{
              fontFamily: 'var(--font-archivo), sans-serif',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
            }}
          >
            {description}
          </div>
        </div>
        
        {/* Línea decorativa */}
        <div className="flex justify-end mt-6">
          <div 
            key={`line-${title}`}
            className="w-20 h-1 bg-gradient-to-l from-blue-400 to-transparent animate-expandWidth delay-300"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TextWrapper;