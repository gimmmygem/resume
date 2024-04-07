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
          content="Resume - Content & Education Specialist | Gem Hannan."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Info subtitle="Content & Education Specialist" tagline="Intuitive problem solver and creative thinker — demonstrated success in delivering ground-breaking projects and empowering others to thrive in their work."/>
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
        <WorkHistory title="Volunteer Work" roles={[{
          title: "Grade 6 Camp at The Ranch, Mornington Peninsula",
          employer: "Balwyn North Primary School",
          start: "",
          end: "2024",
          description:
            "Volunteer supervisor on 3 day camp",
          responsibilities: [
            "Supporting BNPS staff members with travel, activities & behaviour management",
            "Managing assigned groups when staff members needed elsewhere",
            "Upholding BNPS child safe and other policies",
          ],
        },
        {
          title: "Mirabel Family Camp",
          employer: "Lord Somers Camp and Power House | Mirabel Foundation",
          start: "2017",
          end: "2018",
          description:
            "Volunteer staff member on a weekend camp for children and families impacted by drug or substance abuse.",
          responsibilities: [
            "Managing and supervising actvities for the children",
            "Supporting other volunteer staff members in their assigned roles",
            "Upholding the expectations, policies and procedures of LSCPH and Mirabel Foundation",
          ],
        },
        {
          title: "Very Special Kids (VSK) Camp",
          employer: "Lord Somers Camp and Power House | Very Special Kids Foundation",
          start: "2018",
          end: "2019",
          description:
            "Volunteer staff member of a weekend camp for children or young people affected by life-limiting conditions, and their families.",
          responsibilities: [
            "Managing and supervising actvities for the children",
            "Supporting other volunteer staff members in their assigned roles",
            "Upholding the expectations, policies and procedures of LSCPH and the Very Special Kids Foundation",
          ],
        },
        {
          title: "Lady Somers Camp | Big Camp",
          employer: "Lord Somers Camp and Power House",
          start: "2015",
          end: "2017",
          description:
            "Volunteer staff member on a week long camp for 100 young women, female identifying or non-binary youth. The aim of Big Camp is to challenge the perspectives that young people hold about themselves and others.",
          responsibilities: [
            "Offering support and encouragement to all groupers during a diverse range of activities and challenges",
            "Performing all assigned tasks within team and reporting to team leader",
            "Supporting the other 300 volunteer staff members in their roles",
            "Upholding the expectations, policies and procedures of LSCPH",
          ],
        }]} />
        <Projects />
        <Referees />
      </main>
    </>
  );
}
