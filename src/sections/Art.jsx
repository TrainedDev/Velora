import { useGSAP } from "@gsap/react";
import { featureLists } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);
const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: '640px'})

  useGSAP(() => {
    const start = isMobile ? "25% 18%": "20% 25%"
    const end = isMobile ? "bottom top" : "bottom top"
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#art-text",
          start,
          end,
          // markers: true,
          scrub: 1,
          pin: true,
          pinSpacing: "margin",
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
      .to("#art-img", {
        scale: 1,
        maskSize: "500%",
        duration: 1,
        maskPosition: "center",
        ease: "power1.inOut",
      });
  }, []);

  return (
    <>
      <section
        id="art-text"
        className="w-full flex-col-center justify-start h-auto capitalize radial-gradient [--gradient-size:20rem] [--gradient-y:75%] xs:[--gradient-size:28rem] xs:[--gradient-y:82%]"
      >
        <div className="flex-col-center items-center relative w-full min-h-dvh">
          <div className="flex absolute justify-center items-end w-full h-[65%] xs:h-[75%]">
            <h1
              id="art-heading"
              className="absolute tracking-widest font-extrabold h-[60%] w-full flex-row-center justify-center text-3xl xs:text-6xl sm:text-7xl "
            >
              the art
            </h1>
            <div className="absolute overflow-hidden rounded-[7%] flex items-end justify-center h-[60%] w-full xs:h-[70%] sm:h-[75%] sm:w-[90%] md:w-[65%]">
              <img
                id="art-img"
                className="masked-img size-full object-center object-cover"
                src="/images/under-img.jpg"
                alt="Artistic cocktail asset"
              />
            </div>

            <ul
              id="art-feature"
              className="absolute -bottom-42 flex-col-center justify-end w-full gap-5 xs:-bottom-35 xs:gap-4 sm:-bottom-25 sm:gap-4"
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
      </section>
      <div className="flex-col-center relative capitalize justify-end w-[80%] h-20 text-center gap-5 xs:h-40 xs:w-[95%]">
        <h1 className="w-full">made with craft, poured with passion</h1>

        <p className="w-full text-start xs:w-[90%] xs:text-[15px] sm:text-center">
          this isn't just a drink.it's a carefully crafted moment made just for
          you.
        </p>
      </div>
    </>
  );
};

export default Art;
