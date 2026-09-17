import { useGSAP } from "@gsap/react";
import { allCocktails } from "../constants";
import { useState } from "react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCocktail = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevCocktail = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const cocktail = (i) => allCocktails[i];

  useGSAP(() => {
    gsap.fromTo(
      "#cocktail",
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, [currentIndex]);

  return (
    <section
      id="menu"
      className="flex-col-center pt-22 justify-center h-auto w-full"
    >
        <img className="rotate-180 relative size-[40%] -right-15" src="images/slider-left-leaf.png" />
      <ul className="grid grid-cols-2 w-full justify-items-center h-40 gap-2">
        {allCocktails?.map((ele, i) => (
          <li
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`flex-row-center cursor-pointer border-b-2 w-full h-[80%] justify-center ${currentIndex === i ? "text-white" : "text-gray-400"}`}
          >
            <h2>{ele?.name}</h2>
          </li>
        ))}
      </ul>

      <div className="flex-row-center justify-between w-full text-center h-30">
        <div className="flex-col-center items-start cursor-pointer w-fit">
          <h2>
            {currentIndex === 0
              ? cocktail(allCocktails.length - 1)?.name
              : cocktail(currentIndex - 1)?.name}
          </h2>
          <img
            onClick={() =>
              currentIndex === 0
                ? setCurrentIndex(allCocktails.length - 1)
                : prevCocktail()
            }
            src="/images/right-arrow.png"
          />
        </div>
        <div className="flex-col-center items-start cursor-pointer w-fit">
          <h2>
            {currentIndex === allCocktails.length - 1
              ? cocktail(0)?.name
              : cocktail(currentIndex + 1)?.name}
          </h2>
          <img
            onClick={() =>
              currentIndex === allCocktails.length - 1
                ? setCurrentIndex(0)
                : nextCocktail()
            }
            src="/images/left-arrow.png"
          />
        </div>
      </div>

      <div className="w-[95%] h-120 radial-gradient [--gradient-size:18rem] [--gradient-y:30%] relative">
        <div className="cocktail flex items-end absolute justify-center w-full h-[55%]">
          <img
            src={cocktail(currentIndex)?.image}
            id="cocktail"
            className="object-contain size-[95%] object-center "
          />
        </div>

        <div className="absolute bottom-0 h-[40%] flex-col-center gap-4 w-full">
          <div className="flex flex-col h-[30%] w-full gap-3">
            <p>Recipe For:</p>
            <h2>{cocktail(currentIndex).name}</h2>
          </div>
          <div className="h-[70%] flex flex-col items-start gap-5">
            <h1>{cocktail(currentIndex).title}</h1>
            <p className=" text-start tracking-tight">
              {cocktail(currentIndex).description}
            </p>
          </div>
        </div>
      </div>
      
<img src="images/slider-right-leaf.png" className="rotate-180 size-[30%] relative -left-18" />
    </section>
  );
};

export default Menu;
