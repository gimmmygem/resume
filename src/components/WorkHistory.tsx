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
  title?: string
}

export const WorkHistory: React.FC<Props> = (props) => {
  const roles = props.roles || ROLES;
  return (
    <section>
      <h2>{props.title || "Work History"}</h2>
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
    title: "Digital Content Specialist",
    employer: "Kinetic IT",
    start: "April 2024",
    end: "Present",
    description:
      "Leading Kinetic IT's shift to strategic, account-based content marketing — creating opportunities, enhancing customer relationships and driving growth.",
    responsibilities: [
      "Developing and executing content strategies to strengthen brand authority and nurture MQLs",
      "Supporting Marketing Directors with targeted content tactics for 1:1 and 1:Few ABM programs",
      "Working with Campaign and Brand Specialists to generate end-to-end campaigns",
      "Delivering multi-channel content — including socials, LinkedIn ads, blogs and sales collateral",
      "Leading SEO and web content modernisation, managing external agency relationship",
      "Collaborating with account directors and IT experts to craft detailed case studies",
      "Amplifying partnership, sponsorship, and DEI community initiatives",
    ],
  },
  {
    title: "Web Designer (Contract)",
    employer: "Avivo Australia",
    start: "Dec 2023",
    end: "March 2024",
    description:
      "Contracted to deliver a new website for Avivo Elite Tutoring using Wordpress CMS.",
    responsibilities: [
      "Defining and delivering website, SEO & SEM strategy to engage current and potential clients",
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
      "Business development and go-to-market strategy for new digital mentoring platform.",
    responsibilities: [
      "Working with Founder & Director to develop AirMentor platform",
      "Comprehensive process mapping",
      "Researching and proposing solutions to meet business contraints",
      "Recruitment strategy and developing internal training program 'MentorCheck'",
      "Delivering platform shopfront using Shopify CMS",
      "Building brand awareness with organic social media & marketing strategy",
    ],
  },
  {
    title: "Communications Manager",
    employer: "Phoria / Captur3d",
    start: "Jan 2021",
    end: "Aug 2023",
    description:
      "Communications Lead across all creative projects, 3D camera sales and digital twin SaaS platform.",
    responsibilities: [
      "Communications strategy and content creation for global immersive tech projects",
      "Coordinating with client stakeholders on campaigns",
      "Full-stack organic and paid marketing",
      "UI/UX copywriting and UX narrative writing for products and experiences",
      "Management of all social media and email marketing",
      "PR and outreach for partnerships and experiences",
      "Acquiring awards and festival spots for studio experiences",
      "Nurture SaaS customer engagement with community forums and webinars",
      "Contribute to feature ideation and competitor research",
      "Assisting SaaS product team with QA and support article generation",
      "Automated CRM workflows for camera sales team",
      "Working with developers to maintain custom websites and create landing pages",
      "Creating and documenting internal processes to enhance team efficiency",
    ],
  },
  {
    title: "Content Manager",
    employer: "Phoria / Captur3d",
    start: "Jan 2019",
    end: "Jan 2021",
    description:
      "Content specialist across all creative projects, 3D camera sales and digital twin SaaS platform.",
    responsibilities: [
      "Social media design and video content generation",
      "Maximising brand awareness with organic marketing and campaigns",
      "Provide immersive studio with project management and creative production support",
      "Support COO with sales campaign materials",
      "Working with developers to maintain custom websites and create landing pages",
      "Creating and documenting internal marketing processes",
    ],
  },
  {
    title: "Copywriter (Freelance)",
    employer: "Phoria / Captur3d",
    start: "Aug 2018",
    end: "Jan 2019",
    description: "UI/UX copywriting and content creation across creative projects and digital twin SaaS platform.",
    responsibilities: [
      "Supporting CEO and co-founders with UI/UX copywriting for AR and VR experiences",
      "Social media and original blog content to support new releases",
      "Creation of brand strategy and messaging pillars",
    ],
  },
  {
    title: "Graduate Intern",
    employer: "Script to Screen",
    start: "Jan 2018",
    end: "Aug 2018",
    description: "Script writing for new film, television and web projects.",
    responsibilities: [
      "Writing and reviewing scripts",
      "Storyline and character development",
      "Pitching material creation",
    ],
  },
];
