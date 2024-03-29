import React, { useState } from 'react';
import { guides } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import ImageCarousel from '../components/ImageCarousel';

const Guides = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <section className='max-container'>
    <h1 
      className='head-text'
      data-aos="fade-right"
    >
      My <span className='blue-gradient_text font-semibold drop-shadow'>Guides</span>
    </h1>
    <div 
      className='mt-5 flex flex-col gap-3 text-slate-500' 
      data-aos="fade-up"
    >
        <p>
        I wrote these guides to help people understand a specific topic. Some of the guides are absolutely free to download and are available in several languages.
        </p>
      </div>


      <div className="flex flex-wrap gap-10 justify-evenly">
      {guides.map((guide, index) => (
        <div 
          key={index} 
          className="flex flex-col justify-between w-full md:w-2/5 rounded-xl mt-5 md:p-5" 
          data-aos="fade-up"
        >
          <div>
            <h2 className='text-2xl font-poppins font-semibold text-center'>{guide.name}</h2>
          </div>
          <div>
            <ImageCarousel images={guide.images} />
            <p className='mt-2 text-slate-500'>{guide.description}</p>
          </div>
          <div>
            <div className='flex flex-col'>
              <label for="language" className='mt-4 text-slate-800'>Select a language:</label>
              <select 
                name='language'
                id='language'
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="border p-2 rounded-md mb-4"
              >
                {guide.languages.map((language, langIndex) => (
                  <option 
                    key={langIndex} 
                    value={language}
                  >
                    {language}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex gap-4 justify-between items-center'>
              <h3 className='text-lg font-poppins'>{guide.price}</h3>
              <div className="flex  items-center gap-2 font-poppins group">
                <a 
                  href={guide.downloadLinks[selectedLanguage]} 
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="font-semibold text-blue-600 flex gap-2"
                >
                    {guide.name.includes('SEO') ? 'Buy' : 'Download'}
                </a>
                <img 
                  src={arrow} 
                  alt="arrow"
                  className="w-4 h-4 object-contain transform transition duration-700 group-hover:translate-x-2"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div 
      data-aos="fade-down" 
      data-aos-delay="1000"
    >
      <CTA />
    </div>
    </section>
  )
}

export default Guides