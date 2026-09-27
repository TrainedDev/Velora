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
      className="flex-col-center pt-22 justify-center h-auto w-full p-5 radial-gradient [--gradient-size:18rem] [--gradient-y:50%] xs:[--gradient-size:42rem] xs:[--gradient-y:50%]  sm:[--gradient-size:45rem]"
    >
      <img
        className="rotate-180 relative size-[40%] -right-15 xs:-right-40 sm:-right-75 md:-right-80 sm:size-[27%] lg:-right-150"
        src="images/slider-left-leaf.png"
      />
      <ul className="grid grid-cols-2 w-full justify-items-center h-40 gap-2 font-modern-negra tracking-wider lg:flex lg:gap-15 lg:h-20 lg:font-extralight">
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

      <div className="flex-row-center justify-between w-full text-center h-30 font-modern-negra tracking-wider">
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

      <div className="w-full h-220 relative">
        <div className="cocktail flex items-end absolute justify-center w-full h-[55%]">
          <img
            src={cocktail(currentIndex)?.image}
            id="cocktail"
            className="object-contain size-full object-center "
          />
        </div>

        <div className="absolute bottom-0 h-[40%] flex flex-col gap-4 w-full xs:-bottom-10 md:flex-row lg:bottom-65">
          <div className="flex flex-col h-[30%] w-full gap-3 lg:h-full lg:justify-center">
            <p>Recipe For:</p>
            <h1 className="font-modern-negra text-yellow tracking-wider">{cocktail(currentIndex).name}</h1>
          </div>
          <div className="h-[70%] flex flex-col items-start gap-5 lg:w-[70%]">
            <h1>{cocktail(currentIndex).title}</h1>
            <p className=" text-start tracking-tight">
              {cocktail(currentIndex).description}
            </p>
          </div>
        </div>
      </div>

      <img
        src="images/slider-right-leaf.png"
        className="rotate-180 size-[35%] relative -left-30 xs:-left-45 xs:w-[50%] sm:size-[30%] sm:-left-70 md:-left-90 lg:-left-122 lg:size-[25%] xl:-left-140 xl:size-[20%]"
      />
    </section>
  );
};

export default Menu;
