import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);
const Cocktails = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: "320px" });

  useGSAP(() => {
    const start = isSmallDevice ? "top top+=400" : "top 45%";
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".cocktail-leaf",
        start,
        // markers: true,
        scrub: true,
      },
    });
    t1.to("#cocktail-leaf-right", {
      xPercent: -50,
      yPercent: -100,
      duration: 1.5
    });
    t1.to("#cocktail-leaf-left", {
      yPercent: -100,
      xPercent: 20,
    });
  }, []);

  return (  
    <section
      id="cocktails"
      className="bg-[url('/images/noise.png')] h-auto z-10 relative w-full xs:pt-22 xs:pt-26"
    >
      <div className="cocktail-leaf pt-2">
        <img
          id="cocktail-leaf-left"
          className="absolute -top-10 z-0 -left-8 w-[40%] xs:top-50 sm:w-[28%] sm:-left-10"
          src="/images/cocktail-left-leaf.png"
          alt=""
        />

        <img
          id="cocktail-leaf-right"
          className="absolute top-80 -right-20 w-[40%] xs:top-120 sm:w-[28%] sm:-right-30 sm:top-160"
          src="/images/cocktail-right-leaf.png"
          alt=""
        />
      </div>
      <div className="flex relative flex-col items-start justify-between capitalize w-full gap-2 z-10 mb-10">
        <h2>most popular cocktails:</h2>

        <ul className="flex-col-center justify-around gap-5 size-full">
          {cocktailLists.map((ele) => (
            <li
              key={ele.name}
              className="flex text-[12px] font-semibold flex-col w-[90%] xs:text-[14px] sm:text-[17px]"
            >
              <span className="flex justify-between w-full">
                <h3 className="text-yellow">{ele.name}</h3>
                <p>-{ele.price}</p>
              </span>

              <p>
                {ele.country} | {ele.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex relative flex-col items-start justify-between capitalize w-full gap-2 z-10 mb-10">
        <h2>most loved mocktails:</h2>

        <ul className="flex-col-center justify-around gap-5 size-full">
          {mockTailLists.map((ele) => (
            <li
              key={ele.name}
              className="flex text-[12px] font-semibold  flex-col w-[90%]  xs:text-[14px] sm:text-[17px]"
            >
              <span className="flex justify-between w-full">
                <h3 className="text-yellow">{ele.name}</h3>
                <p>-{ele.price}</p>
              </span>

              <p>
                {ele.country} | {ele.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cocktails;
