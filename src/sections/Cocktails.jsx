import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Cocktails = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom top",
        // markers: true,
        scrub: true,
      },
    });
    t1.to("#cocktail-leaf-left", {
      xPercent: 50,
      yPercent: -100,
    });
    t1.to(
      "#cocktail-leaf-right",
      {
        xPercent: -50,
        yPercent: -100,
      },
      "<",
    );
  }, []);

  return (
    <section
      id="cocktails"
      className="bg-[url('/images/noise.png')] h-auto z-10 overflow-hidden relative w-full xs:pt-26"
    >
      <img
        id="cocktail-leaf-left"
        className="absolute -left-10 -top-25 w-2/4  xs:-left-20 xs:w-2/5 sm:-top-50 md:-bottom-60 md:-left-40 md:top-auto md:w-fit"
        src="/images/cocktail-left-leaf.png"
        alt=""
      />

      <img
        id="cocktail-leaf-right"
        className="absolute -right-15 -top-25 w-2/4 xs:-right-30 xs:top-90 xs:w-2/5 md:-bottom-60 md:-right-50 md:top-auto md:w-fit "
        src="/images/cocktail-right-leaf.png"
        alt=""
      />
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
