import React, { useEffect, useState } from "react";

import styles from "./Info.module.css";

const LINKED_IN = "https://www.linkedin.com/in/gemma-hannan/";
type InfoProps = {
  subtitle?:string
  tagline?:string
}
export const Info: React.FC<InfoProps> = (props) => {
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    setLocation(window.location.href);
  }, []);
  return (
    <>
      <header>
        <h1 className={styles.pageHeader}>Gem Hannan</h1>
        <div className={styles.headerInfo}>
          <div className={styles.subtitle}>
            {props.subtitle}
          </div>
          <div className={styles.links}>
            <div className={styles.webLinks}>
              <a href={LINKED_IN}>LinkedIn</a>
            </div>
            {location && (
              <div className={styles.printLinks}>
                View on the web at: {location}
              </div>
            )}
          </div>
        </div>
      </header>
      <section>
        <div>
          <p>
            {props.tagline}
          </p>
        </div>
      </section>
    </>
  );
};

Info.defaultProps = {
  subtitle: "Content Specialist | Web Designer",
  tagline: "Intuitive problem solver and creative thinker — demonstrated success in delivering ground-breaking projects and empowering others to thrive in their work."
}