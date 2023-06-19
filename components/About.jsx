import React from "react";

const About = () => {
  return (
    <section id="about" className="font-lato flex justify-around">
      <div>
        <h1 className="dark:text-white text-3xl ">
          Hi there👋️. This is Mahmoud
        </h1>
        <h2 className="text-2xl my-3 text-teal-500 w-80">
          A Front-End web developer, Tech enthusiast, and photographer at my
          free time,
        </h2>
      </div>
      <div className="w-96 dark:text-white text-base">
        <p className="my-3">
          I grow up in a small village in Mosul, Iraq and from childhood, I was
          immersed by technology. my father got me my first computer at 2004.
          back then I was only playing games and thinking about how these games
          are made.
        </p>
        <p className="my-3">
          when I grow up I started questioning and researching on how games are
          made. I found out that programming is one of the main pillars of game
          development. so I decided to learn.
        </p>

        <p className="my-3">
          and as I had started learning. a war has started in my city, a war
          that is considered one of the toughest wars in modern history. during
          the war, I started to read books on Python and C++ tried to learn but
          there was no chance of learning there was no hope for me of getting
          out. In the end the war has ended, and from that time I have started
          learning coding through an organization called re:coded {`it's`} an
          orginaztion that teachs youth in confliect affected areas how to code
          and get into the digital economy.
        </p>
      </div>
    </section>
  );
};

export default About;