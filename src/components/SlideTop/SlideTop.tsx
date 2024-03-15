import "./SlideTop.css";
import { TbSquareArrowUpFilled } from "react-icons/tb";

function SlideTop({ topRef }: any) {
  const scrollToTop = () => {
    setTimeout(() => {
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 340);
  };

  return (
    <span className="containerSlide" onClick={scrollToTop}>
      <TbSquareArrowUpFilled cursor="pointer" size={60} />
    </span>
  );
}

export default SlideTop;
