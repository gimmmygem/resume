import React from "react";
import styles from "./WorkHistory.module.css";

type Role = {
  title: string;
  employer: string;
  start: string;
  end: string;
  description: string;
  responsibilities: string[];
};

export interface Props {
  roles?: Role[];
}

export const WorkHistory: React.FC<Props> = (props) => {
  const roles = props.roles || ROLES;
  return (
    <section>
      <h2>Work History</h2>
      <div>
        {roles.map((role, i) => (
          <div key={i} className={styles.role}>
            <div className={styles.header}>
              <h3>
                {role.title}
                <small>{role.employer}</small>
              </h3>
              <div className={styles.date}>
                {role.start} - {role.end}
              </div>
            </div>
            <p>{role.description}</p>
            <ul>
              {role.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const ROLES: Role[] = [
  {
    title: "Web Designer (Contract)",
    employer: "Avivo Australia",
    start: "Dec 2023",
    end: "Feb 2024",
    description:
      "Contracted to deliver a new website for Avivo Elite Tutoring using Wordpress CMS. Our main goals were to engage current and potential clients, and to create a responsive, optimised website that the internal team could manage efficiently moving forward.",
    responsibilities: [
      "Defining and delivering website, SEO & SEM strategy to meet business goals",
      "Concepting original website design and creating flexible webpage templates",
      "Establishing and maintaining responsive design standards",
      "Copywriting based on established brand guidelines",
      "Optimisation and QA testing across desktop, tablet and mobile",
      "Upskilling Avivo team in ongoing website content management",
    ],
  },
  {
    title: "Digital Content & Marketing Consultant (Contract)",
    employer: "AirMentor",
    start: "Aug 2023",
    end: "Dec 2023",
    description:
      "Platform development and go-to-market strategy for new digital mentoring marketplace.",
    responsibilities: [
      "Working with Founder & Director to develop AirMentor platform",
      "Comprehensive process mapping",
      "Researching and proposing solutions to meet business contraints",
      "Recruitment strategy and developing internal training program 'MentorCheck'",
      "Delivering platform shopfront using Shopify CMS",
      "Building brand awareness with social media strategy",
    ],
  },
  {
    title: "Communications Manager",
    employer: "Phoria",
    start: "Jan 2021",
    end: "Aug 2023",
    description:
      "Full stack development for embedded linux devices and cloud applications for enabling connectivity in automated driving",
    responsibilities: [
      "Full-stack TDD with Ruby, Javascript and Kotlin",
      "Linux application development with C++",
      "Rapid POC developments",
    ],
  },
  {
    title: "Content Manager",
    employer: "Phoria",
    start: "Jan 2019",
    end: "Jan 2021",
    description:
      "Full stack development for embedded linux devices and cloud applications for enabling connectivity in automated driving",
    responsibilities: [
      "Full-stack TDD with Ruby, Javascript and Kotlin",
      "Linux application development with C++",
      "Rapid POC developments",
    ],
  },
  {
    title: "Copywriter (Freelance)",
    employer: "Phoria",
    start: "Aug 2018",
    end: "Jan 2019",
    description: "Automated testing and quality assurance of IoT projects",
    responsibilities: [
      "Automating testing of hardware and software products using javascript and C#",
      "Debugging issues in embedded linux devices",
    ],
  },
  {
    title: "Graduate Intern",
    employer: "Script to Screen",
    start: "Jan 2018",
    end: "Aug 2018",
    description: "Automated testing and quality assurance of IoT projects",
    responsibilities: [
      "Automating testing of hardware and software products using javascript and C#",
      "Debugging issues in embedded linux devices",
    ],
  },
];
