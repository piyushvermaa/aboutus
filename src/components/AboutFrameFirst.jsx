import React from 'react'

const AboutFrameFirst = () => {
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
  )
}

export default AboutFrameFirst