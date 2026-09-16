const ooter = () => {
  return (
    <section className="flex-col-center h-screen z-10 justify-center gap-5 w-full relative radial-gradient [--gradient-y:50%]">
      <h1>where to find us</h1>
      <div className="flex-col-center justify-center gap-4 w-full">
        <h2>visit our bar</h2>
        <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
      </div>

      <div className="flex-col-center justify-center gap-4 w-full">
        <h2>contact us</h2>
        <p>(555) 987-6543</p>
        <p>hello@jsmcocktail.com</p>
      </div>

      <div className="flex-col-center justify-center gap-4 w-full">
        <h2>Open Every Day</h2>
        <span>
          <p>Mon–Thu : 11:00am – 12am </p>
          <p>Fri : 11:00am – 2am </p>
          <p> Sat : 9:00am – 2am</p>
          <p>Sun : 9:00am – 1am </p>
        </span>
        <p>hello@jsmcocktail.com</p>
      </div>

      <div className="flex-col-center justify-center gap-4 w-full">
        <h2>socials</h2>
        <div className="flex-row-center gap-1">
          <img src="/images/insta.png" />
          <img src="/images/x.png" />
          <img src="/images/fb.png" />
        </div>
      </div>

      <img className="w-[40%] absolute bottom-0 left-0" src="/images/footer-left-leaf.png" />
      <img className="w-[35%] absolute top-0 right-0" src="/images/footer-right-leaf.png" />
    </section>
  );
};

export default ooter;
