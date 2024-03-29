
import CTA from '../components/CTA';
import ClientsProjects from '../components/ClientsProjects';
import PetProjects from '../components/PetProjects';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 
        className='head-text' 
        data-aos="fade-right"
      >
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500' data-aos="fade-up">
        <p>
          I've embarked on numerous projects throughout the years, but there are the ones I hold closest to my heart.
        </p>
      </div>

      <ClientsProjects />
      <PetProjects />
      <hr className='border-slate-200' />
      <div 
        data-aos="fade-down"
        data-aos-delay="1000"
      >
        <CTA />
      </div>
    </section>
  )
}

export default Projects