export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="skills-header">
                    <h2 className="section-title">
                        Technical Skills
                        <span role="img" aria-label="brain"> 🧠</span> 
                    </h2>
                    <p className="section-sub">
                        Technologies and tools I use to build amazing projects
                    </p>
                </div>

                <div className="tech-stack">
                    <div className="tech-icons">
                        <img
                            src="https://skillicons.dev/icons?i=c,cpp,py,js,react,html,css,grafana,java,postgres,linux,nodejs,vscode,gitlab,notion"
                            alt="Technology stack: C, C++, Python, JavaScript, React, HTML, CSS, Grafana, Java, PostgreSQL, Linux, Node.js, VS Code, GitLab, Notion"
                            className="tech-icons-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}