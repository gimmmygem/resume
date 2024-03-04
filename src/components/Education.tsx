import React from "react";

export type Props = {};

export const Education: React.FC<Props> = (props) => {
  return (
    <section>
      <h2>Education</h2>
      <h3>
        University of Melbourne <small>(2015-2017)</small>
      </h3>
      <ul>
        <li>
          Bachelor of Arts (Honors) <small>English & Theatre Studies</small> <small>Creative Writing</small> <small>Shakespeare Scholarship 2016</small>
        </li>
      </ul>
    </section>
  );
};
