import { useEffect, useRef } from "react";
import Slider from "./Slider";

const images = {
  image1:
    "https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg",
  image2: "https://devloop01.github.io/voyage-slider/images/machu-pichu.jpg",
  image3: "https://devloop01.github.io/voyage-slider/images/chamonix.jpg",
};

const ContentSlider = () => {

  const focus = useRef<HTMLDivElement>(null);

  useEffect(() => {
    focus.current = document.querySelector("[data-current]") as HTMLDivElement;
  }, []);

  return (
    <div className="grid grid-cols-3 px-8">
      <Slider src={images.image1} />
      <Slider ref={focus} src={images.image2} />
      <Slider src={images.image3} />
    </div>
  );
};

export default ContentSlider;
