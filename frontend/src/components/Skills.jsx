function Bar({label, percent}){
    return (
        <div style={{marginBottom:10}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <strong>{label}</strong><span style={{color:'var(--muted)'}}>{percent}%</span>
            </div>
            <div style={{height:10, background:'#1e2233', borderRadius:999}}>
                <div style={{width:`${percent}%`, height:'100%', background:'linear-gradient(90deg,var(--brand),var(--accent))', borderRadius:999}}/>
            </div>
        </div>
    );
}


export default function Skills(){
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">
                    Skills<span role="img" aria-label="brain"> 🧠</span> 
                </h2>
                <div className="stacks-row" style={{ marginTop: "1rem" }}>
                    <img
                        src="https://skillicons.dev/icons?i=c,cpp,py,js,react,html,css,grafana,java,postgres,linux,nodejs,vscode,gitlab,notion"
                        alt="Skills icons"
                        className="skils-icons"
                    />
                </div>
            </div>
        </section>
    );
}