import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';





const Footer = () => {
  return (
    <>
    <p className="text-secondary text-center ">made with 💜 by Pratham <br /></p>
    <div className="flex justify-center">
    <div className="flex flex-col my-auto items-center">
      <a href="https://github.com/Prat-The-Brat" className="flex social" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
    </div>
    <div className="flex flex-col my-auto items-center">
    <a href="https://www.linkedin.com/in/pratham-bhonge-2a131a232/" className="flex social" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
      </div>

      <div className="flex flex-col my-auto items-center">
      <a href="https://twitter.com/BhongePratham" className="flex social" target="_blank" rel="noopener noreferrer" ><FaTwitter/></a>
      </div>

      <div className="flex flex-col my-auto items-center">
      <a href="https://www.instagram.com/prat.the.brat/" className="flex social" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
      </div>

      </div>

    
    
    </>
  )
}

export default SectionWrapper(Footer, "");