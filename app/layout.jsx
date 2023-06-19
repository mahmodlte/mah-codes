import "./globals.css";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahmoud Mansour || Frontend Web developer",
  description: `Welcome to Mahmoud Mansour's website, the digital home of a passionate and skilled Frontend Web Developer. With a deep love for creating visually stunning and user-friendly websites, I am dedicated to delivering exceptional online experiences that captivate audiences and drive results.
  As a frontend specialist, I possess a comprehensive understanding of the latest web technologies and trends, allowing me to craft dynamic and responsive websites that seamlessly adapt across different devices and platforms. Whether it's building a captivating portfolio website, designing an engaging e-commerce platform, or enhancing an existing web presence, I'm here to transform your ideas into a pixel-perfect reality.
  My approach to frontend development is rooted in a blend of creativity and technical expertise. Through a meticulous attention to detail, I ensure that every element of your website is thoughtfully designed, from the intuitive user interface to the smooth navigation and optimal performance. I strive to create visually striking layouts that not only capture your brand's essence but also enhance user engagement and conversion rates.
  Collaboration is at the heart of my process. I believe in working closely with my clients to understand their unique goals and requirements, ensuring that every project is tailored to their specific needs. By maintaining transparent communication and providing regular updates throughout the development process, I ensure that your vision is realized and your expectations exceeded. 
  Whether you're a startup looking to establish an impressive online presence or an established business seeking a fresh and modern website makeover, I am ready to take your digital presence to new heights. Together, let's bring your ideas to life and create a memorable online experience that leaves a lasting impression on your audience.
  Explore my portfolio, get in touch, and let's embark on an exciting journey of web development excellence. I can't wait to collaborate with you and help your business thrive in the digital landscape.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main dark:bg-slate-900">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
