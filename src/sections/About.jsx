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
      className="flex flex-col pt-22 w-[90%] text-start item-center justify-between gap-6 h-auto xs:pt-26"
    >
      <button className="border w-[50%] p-1 rounded-full bg-white text-black capitalize xs:p-1.5 xs:w-[60%]">
        best cocktails
      </button>
      <h1>Where every detail matters -from muddle to garnish </h1>
      <p>
        Every cocktail we serve is a reflection of our obsession with detail —
        from the first muddle to the final garnish. That care is what turns a
        simple drink into something truly memorable.
      </p>
      <span className="flex">
        <h1>4.5</h1>/<p>5</p>
      </span>
      <p>More than +12000 customers</p>

      <ul
        className="grid grid-cols-1 grid-rows-5 gap-4 justify-items-center"
        >
        {aboutImages.map((ele, i) => (
          <li
          id="content"
            key={i}
            className="border-0 relative rounded-xl w-full h-29 overflow-hidden xs:h-55"
          >
            <img
              className="size-full absolute object-cover object-center"
              src={ele}
            />
            <div className="absolute inset-0 bg-[url(/images/noise.png)] opacity-100"></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
