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
          Born and raised in a small village in Mosul, Iraq, I was fascinated by
          technology from a young age. My father got me my first computer when I
          was 6. It opened up a whole new world for me. I was curious about how
          the video games I was playing were made. Later I found out that video
          games were made with lines of code, so I decided to learn computer
          programming on my own.
        </p>
        <p className="my-3">
          As I started learning, war started in my city and change my life. I
          tried to continue my self-education by reading on Python and C++, but
          there was little hope for an education during conflict. After the war
          ended, I started a coding boocamp with an international organization
          called Re:Coded, where I found a community of technologists and learn
          the skills I needed to become a developer. Today, I leverage my skills
          and life experience to build products for local and international
          clients.
        </p>
      </div>
    </section>
  );
};

export default About;
