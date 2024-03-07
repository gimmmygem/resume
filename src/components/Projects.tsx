import React from "react";

import styles from "./Projects.module.css";

const DEFAULT_PROJECTS = [
  {
    heading: "Raw: Emotions Unite Us",
    description:
      "Worked closely with Meta and International Paralympics Committee on Emmy nominated WebVR experience for the Tokyo Paralympic Games. 80,000+ users interacted with the experience with an average session time of over 5 minutes.",
    items: [
      "Research, development and delivery of communications and marketing strategy",
      "Collaborating with key Meta stakeholders on global marketing campaign",
      "PR campaign with featured Para athletes",
      "Award submissions and materials on behalf of project partners",
    ],
  },
  {
    heading: "Mt Resilience: WebXR Experience",
    description:
      "Lead producer for cutting-edge WebXR experience with ABC, CSIRO and Bureau of Meterology. Launched alongisde the ABC documentary series 'Big Weather (and how to survive it)'.",
    items: [
      "Project managed and delivered experience with rapid 6 month turnaround",
      "Assisted spatial development team with client feedback and QA testing",
      "Worked with lead ABC producers and 35+ scientists on UX narrative and voice-over scripts",
      "Created pitching materials to gain internal ABC stakeholder buy-in",
    ],
  },
  {
    heading: "CAPTUR3D Creator Studio & ARConnect",
    description:
      "Lead content specialist on feature releases for CAPTUR3D SaaS platform and ARConnect app.",
    items: [
      "Worked closely with Tech Lead and Design Lead on Creator Studio feature development",
      "Created brand and marketing strategy for ARConnect digital twin app",
      "New pricing system development and implementation",
      "Increased daily active providers with Hubspot CRM",
      "Created CAPTUR3D Community Group and built following to 1.5k members",
    ],
  },
  {
    heading: "ecosphere VR Nature Series",
    description:
      "Led global PR launch for the award winning 'ecosphere' series and subsequent VR nature film, Sea of Islands. Worked closely with project partners Meta, WWF, Silverback Films and the United Nations.",
    items: [
      "Delivered brand messaging and marketing strategy",
      "Developed app release strategy with VR team",
      "Coordinated global PR campaign with key stakeholders",
      "Created case study web page for award and festival submissions",
    ],
  },
  {
    heading: "Digital Twin Awards 2021-2023",
    description:
      "Conceptualised and managed Digital Twin Awards for industry providers with Matterport. Achieved a 50% YoY increase in participants from countries around the world.",
    items: [
      "Built Digital Twin Awards website and set-up management platform",
      "Delivered communications and marketing strategy",
      "Strengthened brand awareness with Matterport partnership",
    ],
  },
];

type Project = {
  heading: string;
  description: string;
  items: string[];
};

export interface Props {
  projects?: Project[];
}

export const Projects: React.FC<Props> = ({ projects }) => {
  if (!projects) return null;

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i} className={styles.project}>
          <h3>{p.heading}</h3>
          <p>{p.description}</p>
          <ul>
            {p.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

Projects.defaultProps = { projects: DEFAULT_PROJECTS };
