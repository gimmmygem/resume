import React, { useEffect, useState } from "react";

import styles from "./Info.module.css";

const LINKED_IN = "https://www.linkedin.com/in/gemma-hannan/";

export const Info: React.FC = () => {
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
            Content Specialist | Web Designer
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
            Determined & intuitive problem solver with a proven track record of
            delivering successful projects and empowering teammates.
          </p>
        </div>
      </section>
    </>
  );
};
