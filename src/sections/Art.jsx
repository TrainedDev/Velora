import { useGSAP } from "@gsap/react";
import { featureLists } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const Art = () => {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#art-text",
        start: "20% 25%",
        end: "bottom top",
        // markers: true,
        scrub: 1,
        pin: true,
        pinSpacing: 'margin'
      },
    })
    .to("#art-heading", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    })
    .to("#art-feature", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    })
    .to('#art-img', {
      scale: 1,
      maskSize: '300%',
      duration: 1,
      maskPosition: 'center',
      ease: "power1.inOut",
    })

    

  }, []);

  return (
    <section
      id="art-text"
    className="w-full flex-col-center justify-start h-auto w-full capitalize radial-gradient">
      <div
       className="flex-col-center items-center relative w-full min-h-dvh">
        <div
          className="flex absolute justify-center items-end w-full h-[75%]"
        >
          <h1
            id="art-heading"
            className="absolute tracking-widest font-extrabold h-[60%] w-[100%] flex-row-center justify-center text-6xl"
          >
            the art
          </h1>
          <div  className="absolute overflow-hidden rounded-[9%] flex items-end justify-center h-[60%] w-full flex justify-center">
            <img
            id="art-img"
              className="masked-img size-full object-center object-cover"
              src="/images/under-img.jpg"
              alt="Artistic cocktail asset"
            />
          </div>

        <ul
          id="art-feature"
          className="absolute -bottom-42 flex-col-center justify-end w-full gap-5"
          >
          {featureLists.map((ele, i) => (
            <li
            key={i}
            className="flex w-full items-center justify-start gap-2"
            >
              <img src="/images/check.png" />
              <p>{ele}</p>
            </li>
          ))}
        </ul>
          </div>
      </div>
      <div className="flex-col-center relative justify-end p-2 w-full h-70 text-center gap-5">
        <h1 className="w-2/3">made with craft, poured with passion</h1>

        <p className="w-3/4 text-start">
          this isn't just a drink.it's a carefully crafted moment made just for
          you.
        </p>
      </div>
    </section>
  );
};

export default Art;
