import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const container = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const videoRef = useRef();
  const isSmallDevice = useMediaQuery({ maxWidth: "320px" });
  // const isSmallDevice = useMediaQuery({ maxWidth: "320px" });

  useGSAP(
    () => {
      const heroSplit = new SplitText(headingRef.current, {
        type: "chars,words",
      });

      const paraSplit = new SplitText(paraRef.current, {
        type: "lines",
      });

      gsap.from(heroSplit.chars, {
        yPercent: 100,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.05,
        duration: 1,
      });

      gsap.fromTo(
        paraSplit.lines,
        {
          opacity: 0,
          yPercent: 100,
        },
        {
          opacity: 1,
          yPercent: 0,
          ease: "expo.out",
          duration: 1,
          delay: 1,
          stagger: 0.05,
        },
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#hero-leaf",
            start: "top 55%",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(
          "#right-leaf",
          {
            yPercent: 100,
          },
          0,
        )
        .to(
          "#left-leaf",
          {
            yPercent: -100,
          },
          0,
        );

      const start = isSmallDevice ? "top 45%" : "top 45%";
      const end = isSmallDevice ? "bottom top" : "bottom top";

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "video",
          start: start,
          end: end,
          scrub: 1,
          markers: true,
          pin: true,
        },
      });

      videoRef.current.onloadedmetadata = () => {
        t1.to(videoRef.current, {
          currentTime: videoRef.current.duration,
        });
      };
    },
    {
      scope: container,
    },
  );

  return (
    <>
      <section ref={container} id="hero">
        <div className="body">
          <div className="hero-content size-full">
            <div className="hero-heading-wrapper">
              <h1 ref={headingRef} id="heading">
                mojito
              </h1>
            </div>

            <div className="hero-para-wrapper text-wrap">
              <p ref={paraRef} id="para">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
            </div>
          </div>

          <div id="hero-leaf" className="absolute top-75 z-10 h-[50%] w-full">
            <h2>view cocktails</h2>

            <img
              id="left-leaf"
              className="absolute -left-2 top-5 h-[45%]"
              src="/images/hero-left-leaf.png"
              alt=""
            />

            <img
              id="right-leaf"
              className="absolute -top-1 right-0 h-[50%]"
              src="/images/hero-right-leaf.png"
              alt=""
            />
          </div>
          <div className="video">
            <video
              ref={videoRef}
              playsInline
              muted
              preload="auto"
              src="/videos/output.mp4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
