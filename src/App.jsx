import React from "react";



const HeroSection = () => {
  return (
    <section className="flex justify-center items-center self-stretch px-16 py-16 mt-8 w-full text-gray-200 bg-slate-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center px-20 py-16 w-full rounded-3xl shadow max-w-[1200px] max-md:px-5 max-md:max-w-full bg-[#ffffff3d]">
        <h1 className="text-5xl font-bold tracking-widest text-center text-green-500 max-md:max-w-full max-md:text-4xl">
          <span className="font-extrabold text-white">Cyber Enthusiasts </span>
          <span className="font-extrabold text-green-500">Unleashed</span>
        </h1>
        <p className="mt-7 text-2xl leading-9 text-center max-md:max-w-full">
          Welcome to ForgeNet Labs, your go-to platform for demystifying cybersecurity through engaging video lectures, tutorials, and hands-on labs. 
          At ForgeNet Labs, we're dedicated to making cybersecurity education accessible, understandable, and actionable for everyone.
        </p>
        <button className="justify-center px-6 py-3 mt-7 text-base leading-6 whitespace-nowrap border border-gray-200 border-solid rounded-[60px] max-md:px-5">Explore</button>
      </div>
    </section>
  );
};

const Feature = ({ title, content, imgSrc }) => {
  return (
    <div className="flex flex-col grow self-stretch px-16 py-16 w-full text-gray-200 rounded-3xl shadow max-md:px-5 max-md:mt-6 max-md:max-w-full bg-[#ffffff3d]">
      <img loading="lazy" src={imgSrc} className="aspect-square w-[50px]" alt={`Icon depicting ${title}`} />
      <h2 className="mt-4 text-3xl font-medium tracking-normal leading-10 max-md:max-w-full">{title}</h2>
      <p className="mt-2.5 text-lg leading-7 max-md:max-w-full">{content}</p>
    </div>
  );
};

const ForgeNetLabApp = () => {
  const features = [
    {
      title: "Interactive Learning Experience",
      content: "Learning by doing is key to mastering cybersecurity. That's why we offer hands-on labs that allow learners to apply what they've learned in real-world scenarios.",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c91e35b9fa8a3869b7132a9892b75a7407d20dd9bc37c8bd07694b676ef088cf?apiKey=46b573670fcd4baca026e60e8d91a5ed&"
    },
    {
      title: "Comprehensive Content",
      content: "Whether you're a complete beginner or an experienced professional, CyberHub Nexus has something for you.",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a439b9ac70bf3e965929215805eb420c40a0302961427dbe5bf02b15f5c63c6d?apiKey=46b573670fcd4baca026e60e8d91a5ed&"
    },
  ];

  return (
    <div className="flex flex-col items-center pt-6 pb-20 bg-slate-900 p-3">
      <HeroSection />
      <section className="mt-24 w-full max-w-[1180px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {features.map((feature) => (
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full" key={feature.title}>
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </section>
      <section className="px-12 py-16 mt-24 max-w-full rounded-3xl shadow w-[1180px] max-md:px-5 max-md:mt-10 bg-[#ffffff3d] ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <article className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col pb-12 text-gray-200 max-md:mt-10 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/677296d73cabeae895e22eae8e06ee61283e371505171cf45db56134f6c6d551?apiKey=46b573670fcd4baca026e60e8d91a5ed&" className="aspect-square w-[50px]" alt="Our Mission Icon" />
              <h3 className="mt-6 text-5xl font-medium tracking-normal leading-[62.4px] max-md:max-w-full max-md:text-4xl">Our Mission</h3>
              <p className="mt-2.5 text-xl leading-7 max-md:max-w-full">
                Cybersecurity doesn't have to be complicated. Our mission is to break down the complexities of cybersecurity and make it easy for individuals 
                and organizations to learn, understand, and implement effective security practices.
              </p>
            </div>
          </article>
          <aside className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bf96788601a85e17d23b6c53af28f77d6eaa9803b5d1cc632d435042a3546cb?apiKey=46b573670fcd4baca026e60e8d91a5ed&" className="grow w-full aspect-[1.16]" alt="Our Team Working" />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ForgeNetLabApp;