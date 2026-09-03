export const projectsData = [
    {
        title: 'Crime & Unemployment Across US States',
        badge: 'Data Science',
        desc: 'Explores the relationship between unemployment and crime trends in the US, combining the FBI’s Estimated Crime Data (1960–2019) with state-level unemployment statistics from the Bureau of Labor Statistics (1976–2022) to surface patterns and correlations between the two.',
        tags: ['Python', 'FastAPI', 'Jupyter', 'Pandas', 'Matplotlib'],
        link: 'https://github.com/LuanMoreno10/AD_finalProject'
    },
    {
        title: 'Mikrotik Router Automation',
        badge: 'Networking',
        desc: 'Provisioning and configuring Mikrotik routers through WinBox. Automates firewall rules, user access management and network interface setup, streamlining the deployment of Mikrotik devices across a network.',
        tags: ['Bash', 'RouterOS', 'WinBox', 'Networking'],
        link: ''
    },
    {
        title: 'SchoolAir Monitoring System',
        badge: 'Software',
        desc: 'An IoT system built to monitor and improve classroom air quality. Sensors collect temperature, humidity, particulate matter (PM2.5 / PM10) and CO2 readings, processed with concurrent programming techniques for efficient analysis.',
        tags: ['C', 'OS', 'Linux'],
        link: 'https://github.com/LuanMoreno10/SO_Finalproject'
    }
];

/* Shown as the monochrome band under the hero. */
export const techStrip = [
    'Python',
    'JavaScript',
    'React',
    'Java',
    'PostgreSQL',
    'Linux'
];

/* The four areas of work, mirroring the services grid in the reference. */
export const servicesData = [
    {
        icon: 'code',
        title: 'Software Development',
        desc: 'Building applications in C, Python, Java and JavaScript — from low-level systems to web interfaces.'
    },
    {
        icon: 'network',
        title: 'Networks',
        desc: 'Designing, provisioning and automating network infrastructure, routing and firewall configuration.'
    },
    {
        icon: 'shield',
        title: 'Security & Systems',
        desc: 'Systems administration on Linux, hardening, access management and keeping services running reliably.'
    },
    {
        icon: 'chart',
        title: 'Data & Analysis',
        desc: 'Turning raw datasets into readable insight with Pandas, Matplotlib and reproducible notebooks.'
    }
];

/* ---------------------------------------------------------------------------
   Contact details — single source of truth for every link on the page.
   --------------------------------------------------------------------------- */

const EMAIL = 'luan22moreno14@gmail.com';

/* Digits only, with country code and no "+" or spaces (wa.me format).
   351 = Portugal. */
const WHATSAPP_NUMBER = '351932463605';

export const contact = {
    email: EMAIL,

    /* A bare mailto: does nothing on a desktop with no mail client configured,
       which is why the old links looked broken. Gmail's web compose always
       opens; the mailto: stays as the handler for mobile mail apps. */
    emailHref: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
    mailto: `mailto:${EMAIL}`,

    linkedin: 'https://www.linkedin.com/in/luan-moreno10',
    github: 'https://github.com/LuanMoreno10',

    whatsapp: WHATSAPP_NUMBER
        ? `https://wa.me/${WHATSAPP_NUMBER}`
        : '',

    cv: '/LuanCV.pdf'
};
