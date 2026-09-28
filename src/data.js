/* ---------------------------------------------------------------------------
   Contact & identity — single source of truth for every link and name on
   the page.
   --------------------------------------------------------------------------- */

const EMAIL = 'luan22moreno14@gmail.com';

/* Digits only, with country code and no "+" or spaces (wa.me format).
   351 = Portugal. */
const WHATSAPP_NUMBER = '351932463605';

export const contact = {
    name: 'Luan Moreno',
    role: 'Software Engineer & Web Developer',

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

/* ---------------------------------------------------------------------------
   Projects — client work first, then personal/academic projects, in the
   order they should appear in the horizontal showcase.
   --------------------------------------------------------------------------- */

export const projectsData = [
    {
        title: 'José Nunes Lda',
        badge: 'E-commerce',
        desc: 'E-commerce platform built for Repsol gas bottle and accessory sales — product browsing, ordering and purchase management online.',
        tags: ['PHP', 'MySQL', 'Bootstrap'],
        link: 'https://github.com/andrenunes120/josenunesldaphp'
    },
    {
        title: 'SchoolAir',
        badge: 'IoT Monitoring Platform',
        desc: 'An IoT system built to monitor and improve classroom air quality. Sensors collect temperature, humidity, particulate matter (PM2.5 / PM10) and CO2 readings, processed with concurrent programming techniques for efficient analysis.',
        tags: ['C', 'OS', 'Linux'],
        link: 'https://github.com/LuanMoreno10/SO_Finalproject'
    },
    {
        title: 'Rota Report',
        badge: 'Logistics',
        desc: 'A travel route planning and reporting system — tracking trips, generating reports and calculating the costs associated with each journey.',
        tags: [],
        link: ''
    },
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
    }
];

/* ---------------------------------------------------------------------------
   What I Build — the services grid, framed as client-facing offerings
   rather than a personal skills list.
   --------------------------------------------------------------------------- */

export const whatIBuild = [
    {
        icon: 'globe',
        title: 'Business Websites',
        desc: 'Modern, responsive websites designed around your business.'
    },
    {
        icon: 'cart',
        title: 'E-commerce',
        desc: 'Online stores with products, checkout, payments and order management.'
    },
    {
        icon: 'app',
        title: 'Web Applications',
        desc: 'Custom platforms, dashboards and internal business tools.'
    },
    {
        icon: 'plug',
        title: 'Integrations & Automation',
        desc: 'APIs, automated workflows, notifications and third-party integrations.'
    },
    {
        icon: 'dashboard',
        title: 'Dashboards',
        desc: 'Data visualization and management dashboards for businesses.'
    }
];

/* ---------------------------------------------------------------------------
   Technical Skills — grouped by category instead of one long, undifferentiated
   list, so a visiting client sees a stack, not noise.
   --------------------------------------------------------------------------- */

export const techSkills = [
    {
        category: 'Development',
        items: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Python']
    },
    {
        category: 'Backend & Data',
        items: ['REST APIs', 'PostgreSQL', 'SQL']
    },
    {
        category: 'Infrastructure',
        items: ['Linux', 'Docker', 'Cloudflare', 'Networking']
    },
    {
        category: 'Tools',
        items: ['Git', 'GitLab', 'VS Code']
    }
];
