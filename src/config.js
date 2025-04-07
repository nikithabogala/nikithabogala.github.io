module.exports = {
  siteTitle: 'Nikitha Bogala | Software Engineer',
  siteDescription:
    'Nikitha Bogala holds a Bachelors degree in Computer Science from Chaitanya Bharathi Institute of Technology and is pursuing Masters in Computer Science(July\'25) at Arizona State University, Tempe.',
  siteKeywords:
    'Nikitha Bogala, Nikitha Reddy, Nikitha , nikitha, Software Developer, Software Engineer, Competitive Programmer, Java Developer, Barclays, Arizona State University, Tempe, ASU',
  siteUrl: 'https://nikithabogala.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Nikitha Bogala',
  location: 'Arizona State University',
  email: 'bogalanikitha@gmail.com',
  github: 'https://github.com/nikithabogala',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nikithabogala',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nikitha-bogala/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/__nikithabogala/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
