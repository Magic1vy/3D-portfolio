import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 
        className='head-text'
        data-aos="fade-right"
      >
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Valeriia</span>
        </h1>
        <div className='mt-5 flex flex-col gap-3 text-slate-500' data-aos="fade-up">
          <p>Front-end Software Engineer based in BC, Canada, specializing in app development, debugging, and testing; integrating AI to enhance user experience, engagement, and conversion rates. 
            <br />Committed to translating complex client requirements into intuitive web solutions, driving improved user interaction and business outcomes. 
          </p>
        </div>
        <div className='py-10 flex flex-col' data-aos="fade-up">
          <h2 className='subhead-text'>My Skills</h2>
          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20' >
                <div  className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                    title={skill.name}
                  /> 
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='py-16' data-aos="fade-up">
              <h2 className='subhead-text'>Work Experience</h2>
              <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p> I've worked with diverse industries, including e-commerce, SaaS, manufacturing, and consulting</p>
              </div>
              <div className='mt-12 flex'>
                <VerticalTimeline>
                  {experiences.map((experience) => (
                    <VerticalTimelineElement 
                      key={experience.company_name}
                      date={experience.date}
                      icon={
                        <div className='flex justify-center items-center w-full h-full'>
                          <img 
                            src={experience.icon}
                            alt={experience.company_name}
                            className='w-[60%] h-[60%] object-contain'
                          />
                        </div>
                      }
                      iconStyle={{ background: experience.iconBg }}
                      contentStyle={{
                        borderBottom: '8px',
                        borderStyle: 'solid',
                        borderBottomColor: experience.iconBg,
                        boxShadow: 'none',
                      }}
                    >
                      <div>
                        <h3 className='text-clack text-xl font-poppins font-semibold'>
                          {experience.title}
                        </h3>
                        <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                          {experience.company_name}
                        </p>
                      </div>

                      <ul className='my-5 list-disc ml-5 space-y-2'>
                        {experience.points.map((point, index) => (
                          <li 
                            key={`experience-point-${index}`} 
                            className='text-black-500/50 font-normal pl-1 text-sm'
                            >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </div>
        </div>
        <hr className='border-slate-200'/>
        <div data-aos="fade-down">
          <CTA />
        </div>
    </section>
  )
}

export default About