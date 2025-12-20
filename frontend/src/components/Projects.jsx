import { projectsData } from '../data.js';

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Main Projects</h2>
                <div className="grid grid-3">
                    {projectsData.map((p, i) => (
                        <article className="card" key={i}>
                            <div className="card-body">
                                <div className="badge">{p.badge}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                                {p.link && <p><a href={p.link}>Ver mais →</a></p>}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}