import { aboutImages } from "../constants";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col w-[90%] text-start item-center justify-between gap-2 h-auto mt-20"
    >
      <button className="border w-[30%] p-2 rounded-full bg-white text-black capitalize">
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

      <ul className="grid grid-cols-1 grid-rows-5 gap-4 justify-items-center">
        {aboutImages.map((ele, i) => (
          <li key={i} className="border-0 relative rounded-4xl w-[90%] h-70 overflow-hidden">
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
