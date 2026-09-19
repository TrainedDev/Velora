import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { openingHours, socials, storeInfo } from "../constants";

gsap.registerPlugin(SplitText);
const Footer = () => {
  useGSAP(() => {
    const text = SplitText.create(".footer > h1", {
      type: "lines,words",
    });
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top center",
      },
    });
    t1.from(text.lines, { y: 100, opacity: 0, duration: 1, stagger: 0.02 });
    t1.from('.content', { y: 100, opacity: 0, duration: 1, stagger: 0.02 });
    t1.from('.f-left-leaf', { y: 130, opacity: 0, duration: 1});
    t1.from('.f-right-leaf', { y: -130, opacity: 0, duration: 1 });

  }, []);

  const {
    heading,
    address,
    contact: { phone, email },
  } = storeInfo;
  return (
    <footer
     className="h-auto flex-col-center relative overflow-hidden w-full">
      <div
    id="contact"
      className="footer flex-col-center z-10 top-0 justify-center gap-5 w-full h-200 radial-gradient [--gradient-size:25rem] [--gradient-y:50%] relative xs:pt-22 sm:pt-3">
        <h1>{heading}</h1>
        <div className="content w-[90%] text-center">
          <h2>visit our bar</h2>
          <p>{address}</p>
        </div>

        <div className="content">
          <h2>contact us</h2>
          <p>{phone}</p>
          <p>{email}</p>
        </div>

        <div className="content">
          <h2>Open Every Day</h2>
          <ul className="content gap-2">
            {openingHours.map((ele, i) => (
              <li key={i}>
                <p>
                  {ele.day} : {ele.time}{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="content">
          <h2>socials</h2>
          <ul className="flex-row-center gap-4 justify-center w-full">
            {socials.map((ele, i) => (
              <li key={i}>
                <a href={ele.url}>
                  <img src={ele.icon} alt={ele.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <img
        className="w-[40%] f-left-leaf absolute z-0 bottom-5 left-0 xs:w-[30%] xs:bottom-20 sm:w-[25%]"
        src="/images/footer-left-leaf.png"
      />
      <img
        className="w-[35%] f-right-leaf absolute z-0 top-25 right-0 xs:w-[30%] sm:w-[25%]"
        src="/images/footer-right-leaf.png"
      />
    </footer>
  );
};

export default Footer;
