import { useGSAP } from "@gsap/react";
import { aboutImages } from "../constants";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const About = () => {
  useGSAP(() => {
    const text = SplitText.create("#about > h1", { type: "words" });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        stagger: 0.05,
      },
    });

    t1.from(text.words, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
    });
    t1.from("#content", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.04,
    });
  });

  return (
    <section
      id="about"
      className="flex flex-col pt-22 w-full text-start items-center justify-center gap-6 h-auto xs:pt-26"
    >
      <div className="flex flex-col w-full item-center justify-center gap-6 md:gap-70 md:flex md:flex-row md:justify-center">
        <div className="flex flex-col w-full gap-6 justify-start md:w-2/5">
          <button className="border w-[50%] p-1 rounded-full bg-white text-black capitalize xs:p-1.5 xs:w-[60%] sm:w-[30%] sm:p-4 md:p-2">
            best cocktails
          </button>
          <h2 className="font-modern-negra tracking-wider text-5xl">Where every detail matters -from muddle to garnish </h2>
        </div>
        <div className="flex flex-col w-full gap-6 justify-start md:gap-8 md:w-2/6">
          <p>
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.
          </p>
          <span className="flex">
            <h1 className="text-yellow">4.5</h1>/<p>5</p>
          </span>
          <p>More than +12000 customers</p>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center w-[90%] px-4 md:px-0 xl:grid-cols-12">
        {aboutImages.map((ele, i) => (
          <li
            id={`content`}
            key={i}
            className={`relative rounded-xl w-full h-80 overflow-hidden md:h-72 ${i === 1 ? " xl:col-span-6 " : i === aboutImages.length - 2 ? "xl:col-span-8" : i === aboutImages.length - 1 ? "xl:col-span-4" : "xl:col-span-3"}`}
          >
            <img
              className="size-full absolute object-cover object-center"
              src={ele}
              alt=""
            />
            <div className="absolute inset-0 bg-[url(/images/noise.png)] opacity-100"></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
