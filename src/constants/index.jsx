import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from 'react-icons/fa6';

import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiPython } from 'react-icons/si';

import { SiJavascript, SiCplusplus, SiMysql } from 'react-icons/si';
import { GrDatabase } from 'react-icons/gr';

import image1 from '../assets/project1.png';
import image2 from '../assets/project2.png';
import image3 from '../assets/project3.png';
import image4 from '../assets/project4.png';
import image5 from '../assets/project5.jpeg';
import image6 from '../assets/project6.jpeg';
import image7 from '../assets/project7.jpeg';
import image8 from '../assets/project8.jpeg';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import { link } from 'framer-motion/client';

export const NAVIGATION_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Award', href: '#award' },
  // { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const PROFILE = {
  name: 'Nazmul Hossain',
  info: 'Software Developer with a flair for curiousity.',
};

export const ABOUT = {
  text1:
    'I create dynamic, responsive websites that blend creativity with efficiency',
  text2:
    "Hello! I'm Naz, a student studying computer science at the University of Delaware. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: 'MADRASA Website',
    subtitle:
      'Organization website for Muslim Association for Development in Religious Academia and Scholastic Achievement',
    image: image1,
    link: 'https://udmadrasa.org/',
  },
  {
    title: 'AI Image Generator',
    subtitle:
      'A Full-stack MERN project using OpenAI which generates AI generated images from any prompt from any user.',
    image: image4,
    link: 'https://github.com/Naz-Projects/AI-Image-Generator',
  },
  {
    title: 'Dream Job',
    subtitle:
      'A web application which uses OpenAI to take a survey and displays the best career which would suit the person based on the survey.',
    image: image2,
    link: 'https://paul156h.github.io/starter_helpi/#/',
  },
  {
    title: 'LangBot | Private',
    subtitle:
      'A research project and web application to come up with a better solution from translation and transliteration using openAI API.',
    image: image3,
  },
];

export const SKILLS = [
  {
    icon: <SiPython className="text-4xl lg:text-6xl text-yellow-400" />,
    name: 'Python',
    experience: '3+ years',
  },
  {
    icon: <SiCplusplus className="text-4xl lg:text-6xl text-blue-400" />,
    name: 'C++',
    experience: '2+ years',
  },
  {
    icon: <SiJavascript className="text-4xl lg:text-6xl text-yellow-400" />,
    name: 'JavaScript',
    experience: '2+ years',
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: 'React',
    experience: '2+ years',
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: 'Next.js',
    experience: '1+ year',
  },
  {
    icon: <GrDatabase className="text-4xl lg:text-6xl text-green-600" />,
    name: 'SQL',
    experience: '2+ years',
  },
];

export const ACHIEVEMENT = {
  title: 'International Hackaton - Tokyo',
  award: 'Gold Medalist - 2024',
  description:
    'Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.',
};

export const TESTIMONIALS = [
  {
    name: 'Emily Johnson',
    title: 'CEO, Tech Innovators',
    quote:
      'Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.',
    image: user1,
  },
  {
    name: 'Michael Lee',
    title: 'CTO, Creative Minds',
    quote:
      'Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.',
    image: user2,
  },
  {
    name: 'Sophia Martinez',
    title: 'Lead Developer, Digital Solutions',
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: 'Daniel Thompson',
    title: 'Project Manager, InnovateX',
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: 'https://github.com/Naz-Projects',
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: 'https://www.linkedin.com/in/hossain1223/',
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
