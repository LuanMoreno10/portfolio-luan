import React from 'react';
import { LuCode, LuNetwork, LuShieldCheck, LuChartLine } from 'react-icons/lu';
import { servicesData } from '../data.js';

const icons = {
  code: LuCode,
  network: LuNetwork,
  shield: LuShieldCheck,
  chart: LuChartLine
};

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="headline">
        Turning ideas into software that runs reliably.
      </h2>

      <div className="eyebrow-rule">
        <span className="eyebrow">What I work on</span>
      </div>

      <div className="services">
        {servicesData.map((service) => {
          const Icon = icons[service.icon];
          return (
            <div className="service" key={service.title}>
              <Icon className="service-icon" size={22} strokeWidth={1.4} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
