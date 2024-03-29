import React from 'react';
import { Link } from "react-router-dom";
import { projects } from '../constants';
import { arrow } from '../assets/icons';

const PetProjects = () => {
  return (
    <div>
        <h2 
            className='text-3xl font-poppins font-semibold mt-10' 
            data-aos="fade-up"
        >
            Pet Projects
            </h2>
        <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) =>(
          <div 
            className='lg:w-[400px] w-full' 
            key={project.name} 
            data-aos="fade-up" 
            data-aos-delay="300"
          >
              <div className='btn-front rounded-xl flex justify-center'>
                <img 
                  src={project.image} 
                  alt='Project Icon'
                  className="w-full object-contain"
                  
                />
            </div>
            <div className="mt-5 flex flex-col">
              <h2 className='text-2xl font-poppins font-semibold'>{project.name}</h2>
              <div className="flex items-center gap-4 mt-2">
                    {project.skillsUsed.map((skill, index) => (
                        <div key={index} className="flex items-center">
                            <img
                                src={skill.imageUrl} 
                                alt={skill.name}
                                className="w-6 h-6 object-contain" 
                                title={skill.name}
                            />
                        </div>
                    ))}
                </div>
                <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins group">
                <Link 
                  target="_blank"
                  rel="nofollow noreferrer"
                  to={project.link} 
                  className="font-semibold text-blue-600 flex items-center gap-2"
                >
                  Live Link
                </Link>
                <img 
                  src={arrow} 
                  alt='arrow'
                  className="w-4 h-4 object-contain transform transition duration-700 group-hover:translate-x-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PetProjects