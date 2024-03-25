import Head from "next/head";
import {
  Education,
  Info,
  Projects,
  Referees,
  Skills,
  WorkHistory,
} from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resume | Gem Hannan</title>
        <meta
          name="description"
          content="Resume - Content Specialist & Web Designer | Gem Hannan."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Info subtitle="Heckin doodle" tagline="King of doodles" />
        <Skills sections={[
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
            ],
          },
          {
            heading: "Professional",
            items: ["Internal Comms", "Project Management", "Stakeholder Management", "Product Research", "Competitor Analysis", "Grant Applications", "Award Applications"],
          },
        ]} />
        <Education />
        <WorkHistory />
        <WorkHistory title="Volunteering" roles={[{
          title: "Web Designer (Contract)",
          employer: "Avivo Australia",
          start: "Dec 2023",
          end: "Feb 2024",
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
          title: "Web Designer (Contract)",
          employer: "Avivo Australia",
          start: "Dec 2023",
          end: "Feb 2024",
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
        }]} />
        <Projects />
        <Referees />
      </main>
    </>
  );
}
