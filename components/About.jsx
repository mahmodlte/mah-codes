import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="antialiased font-lato flex flex-col sm:flex-row justify-around"
    >
      <div>
        <h1 className="dark:text-white text-3xl ">
          Hi there👋️. This is Mahmoud
        </h1>
        <h2 className="text-2xl my-3 text-teal-500 w-80">
          <span className="text-red-500">{`{`}</span>A Front-End web developer,
          Tech enthusiast, and photographer at my free time.
          <span className="text-red-500">{`}`}</span>
        </h2>
      </div>
      <div className=" sm:w-96 dark:text-white text-base">
        <p className="my-3">
          growing up in a small village in Mosul, Iraq, and from childhood, I
          was immersed by technology. my father got me my first computer in
          2004. back then I was only playing games and thinking about how these
          games are made.
        </p>
        <p className="my-3">
          when I grow up I started questioning and researching on how games are
          made. I found out that programming is one of the main pillars of game
          development. so I decided to learn.
        </p>

        <p className="my-3">
          and as I started learning. a war has started in my city, a war that is
          considered one of the most brutal wars in modern history. during the
          war, I started to read books on Python and C++ and tried to learn but
          there was no chance of learning there was no hope for me of getting
          out. In the end, the war ended, and from that time I have started
          learning coding through an organization called Re:Coded {`it's`} an
          organization that teaches youth in conflict-affected areas how to code
          and get into the digital economy.
        </p>
      </div>
    </section>
  );
};

export default About;
