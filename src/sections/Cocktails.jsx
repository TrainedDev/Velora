import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Cocktails = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".cocktail-leaf",
          start: "top 40%",
          end: "bottom top",
          // markers: true,
          scrub: 1.5,
        },
      })
      .to("#cocktail-leaf-right", {
        xPercent: -50,
      })
      .to("#cocktail-leaf-left", {
            yPercent: -60,
        xPercent: 50,
      });
  }, []);

  return (
    <section id='cocktails' className="bg-[url('/images/noise.png')] h-auto z-10 relative w-full">
      <div className="cocktail-leaf">
        <img
          id="cocktail-leaf-left"
          className="absolute -top-10 z-0 -left-30 w-[40%]"
          src="/images/cocktail-left-leaf.png"
          alt=""
        />

        <img
          id="cocktail-leaf-right"
          className="absolute top-80 -right-30 w-[40%]"
          src="/images/cocktail-right-leaf.png"
          alt=""
        />
      </div>
      <div className="flex relative flex-col items-start justify-between capitalize w-full gap-2 z-10 mb-10">
        <h2>most popular cocktails:</h2>

        <ul className="flex-col-center justify-around gap-5 size-full">
          {cocktailLists.map((ele) => (
            <li key={ele.name} className="flex text-[12px] font-semibold flex-col w-[90%]">
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
            <li key={ele.name} className="flex text-[12px] font-semibold  flex-col w-[90%]">
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
