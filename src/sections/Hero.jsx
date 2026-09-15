import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const videoRef = useRef();

  useGSAP(
    () => {
      const heroSplit = new SplitText(headingRef.current, {
        type: "chars,words",
        // wordsClass: "inline-block",
        // charsClass: "inline-block",
      });

      const paraSplit = new SplitText(paraRef.current, {
        type: "lines",
        // linesClass: "inline-block",
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
            // markers: true,
            scrub: true,
          },
        })
        .to("#right-leaf", {
          yPercent: 50,
        }, 0)
        .to("#left-leaf", {
          yPercent: -100,
        }, 0)

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "video",
          start: "top 45%",
          end: "bottom top",
          scrub: true,
          // markers: true,
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
        {/* Noise */}
        <div className="absolute inset-0 z-10 bg-[url('/images/noise.png')]" />

        {/* Content */}
        <div className="relative z-20">
          <div className="hero-content">
            <div className="hero-heading-wrapper">
              <h1 ref={headingRef} id="heading">
                mojito
              </h1>
            </div>

            <div className="hero-para-wrapper">
              <p ref={paraRef} id="para">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
            </div>
          </div>
        </div>
        {/* Leaves */}
        <div id="hero-leaf" className="absolute top-100 z-10 h-[45%] w-full">
          <h2>view cocktails</h2>

          <img
            id="left-leaf"
            className="absolute left-0 top-1 h-full"
            src="/images/hero-left-leaf.png"
            alt=""
          />

          <img
            id="right-leaf"
            className="absolute -top-25 right-0 h-[90%]"
            src="/images/hero-right-leaf.png"
            alt=""
          />
        </div>
        {/* Video */}
        <video
          id="video"
          ref={videoRef}
          className="absolute inset-x-0 bottom-0 w-full h-1/2 object-cover"
          playsInline
          muted
          preload="auto"
          src="/videos/output.mp4"
        />
      </section>
    </>
  );
};

export default Hero;
