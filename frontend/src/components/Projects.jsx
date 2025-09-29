const data = [
    {
    title: 'Data Analysis - Relationship between crime and unemployment across US States',
    badge: 'Data Science',
    desc: 'This project explores the relationship between unemployment and crime trends in the United States using two publicly available datasets: the FBI’s Estimated Crime Data (1960–2019) and state-level unemployment statistics from the U.S. Bureau of Labor Statistics (1976-2022). By combining these datasets, we aim to uncover patterns and correlations that may shed light on whether changes in unemployment rates can help explain fluctuations in criminal activity.',
    tags: ['Python','FastAPI','Jupyter','Pandas','Matplotlib'],
    link: 'https://github.com/LuanMoreno10/AD_finalProject'
    },
    {
    title: 'Mikrotik Router Automation',
    badge: 'Networking',
    desc: 'Provisioning and configuring Mikrotik routers using WinBox. This project automates tasks such as setting up firewall rules, managing user access, and configuring network interfaces, streamlining the deployment and management of Mikrotik devices in a network environment.',
    tags: ['Bash','RouterOS','WinBox','Networking'],
    link: ''
    },
    {
    title: 'SchoolAir Monitoring System',
    badge: 'Software',
    desc: 'The SchoolAir project was developed to monitor and improve air quality in classrooms. Using IoT sensors, the system collects and processes data on temperature, humidity, suspended particles (PM2.5 and PM10), and CO2 levels, employing concurrent programming techniques for efficient data analysis.',
    tags: ['C', 'OS', 'Linux'],
    link: 'https://github.com/LuanMoreno10/SO_Finalproject'
    }
];


export default function Projects(){
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Main Projects</h2>
                <div className="grid grid-3">
                    {data.map((p, i) => (
                        <article className="card" key={i}>
                            <div className="card-body">
                                <div className="badge">{p.badge}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                                <p><a href={p.link}>Ver mais →</a></p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
</section>
);
}