import React from "react";

import styles from "./Skills.module.css";

export const DEFAULT_SKILLS: Section[] = [
  {
    heading: "Languages",
    items: [
      "Typescript",
      "Javascript",
      "Ruby",
      "Rust",
      "C++",
      "C#",
      "Kotlin",
      "Bash",
    ],
  },
  {
    heading: "Frameworks and Tools",
    items: ["React", "Ruby on Rails", "PostgreSQL", "Three.js"],
  },
  {
    heading: "Devops",
    items: ["AWS", "Pulumi", "Docker", "Linux", "Cloudflare", "Bitbucket CI"],
  },
  {
    heading: "Professional",
    items: ["Code Review", "Written and Verbal Communication"],
  },
];

type Section = {
  heading: string;
  items: string[];
};

export type Props = {
  sections?: Section[];
};

export const Skills: React.FC<Props> = (props) => {
  const { sections } = props;
  return (
    <section>
      <h2>Skills</h2>
      <div className={styles.skills}>
        {(sections || []).map((s, i) => (
          <SectionDisplay key={i} section={s} />
        ))}
      </div>
    </section>
  );
};

Skills.defaultProps = {
  sections: DEFAULT_SKILLS,
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
