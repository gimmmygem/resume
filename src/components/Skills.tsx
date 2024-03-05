import { classes } from "@/utils";
import React from "react";

import styles from "./Skills.module.css";

export const DEFAULT_SKILLS: Section[] = [
  {
    heading: "Content & Marketing",
    items: [
      "Campaign & Feature Launches",
      "Go-to-Market Strategy",
      "Copywriting",
      "Brand Storytelling",
      "Social Media Design",
      "Content Scheduling",
      "CRM + Support Hub Content",
      "Email Marketing",
      "Marketing Automations",
      "SEO + SEM",
      "PR Writing + Outreach",
    ],
  },
  {
    heading: "Web Design",
    items: ["CMS", "Wordpress", "Elementor", "Shopify", "HTML + CSS", "UI/UX Copywriting", "Wireframing", "Lofi Design", "SEO", "Domain Management", "Performance Optimisation", "QA Testing", "Review Processes",]
  },
  {
    heading: "Program Competencies",
    items: [
      "Adobe PS",
      "Adobe XD",
      "Canva",
      "Capcut",
      "Hubspot CRM",
      "Mailchimp",
      "Zapier",
      "Zendesk",
      "Hootsuite",
      "Semrush",
      "Meta Business Suite",
      "Meta Events Manager",
      "GA4",
    ],
  },
  {
    heading: "Professional",
    items: ["Internal Comms", "Project Management", "Stakeholder Management", "Product Research", "Competitor Analysis", "Grant Applications", "Award Applications"],
  },
];

type Section = {
  heading: string;
  items: string[];
};

export type Props = {
  flex?: boolean;
  sections?: Section[];
};

export const Skills: React.FC<Props> = (props) => {
  const { sections, flex } = props;
  return (
    <section>
      <h2>Skills</h2>
      <div className={classes(styles.skills, flex && styles.skillsFlex)}>
        {(sections || []).map((s, i) => (
          <SectionDisplay key={i} section={s} />
        ))}
      </div>
    </section>
  );
};

Skills.defaultProps = {
  sections: DEFAULT_SKILLS,
  flex: true,
};

export const SectionDisplay: React.FC<{ section: Section }> = (props) => {
  const {
    section: { heading, items },
  } = props;
  return (
    <div>
      <h3>{heading}</h3>
      <ul className={styles.badges}>
        {items.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
};
