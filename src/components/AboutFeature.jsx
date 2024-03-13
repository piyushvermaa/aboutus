import React from 'react'

const AboutFeature = ({ title, content, imgSrc }) => {
  return (
    <div className="flex flex-col grow self-stretch px-16 py-16 w-full text-gray-200 rounded-3xl shadow max-md:px-5 max-md:mt-6 max-md:max-w-full bg-[#ffffff3d]">
      <img loading="lazy" src={imgSrc} className="aspect-square w-[50px]" alt={`Icon depicting ${title}`} />
      <h2 className="mt-4 text-3xl font-medium tracking-normal leading-10 max-md:max-w-full">{title}</h2>
      <p className="mt-2.5 text-lg leading-7 max-md:max-w-full">{content}</p>
    </div>
  )
}

export default AboutFeature