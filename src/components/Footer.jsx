import { Link } from "react-router-dom";

import { socialLinks } from "../constants";
import { contact } from "../assets/icons";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2024 <span className='blue-gradient_text font-semibold drop-shadow'>Valeriia Isaienko</span>. All rights reserved.
        </p>
        <div className='flex gap-3 justify-center items-center'>
          <Link to='/contact'> 
            <img
              src={contact}
              alt='Contact'
              className='w-6 h-6 object-contain'
                />
          </Link>
          <div className='flex gap-3 justify-center items-center'>
            {socialLinks.map((link) => (
              <Link key={link.name} to={link.link} target='_blank'>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;