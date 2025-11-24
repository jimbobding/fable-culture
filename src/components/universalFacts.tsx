import React from "react";

type Fact = {
  title: string;
  description: string;
};

type Props = {
  facts: Fact[];
  regionName: string;
};

const UniversalFacts: React.FC<Props> = ({ facts, regionName }) => {
  return (
    <section>
      <h2>{regionName} Facts</h2>
      <div>
        {facts.map((fact, index) => (
          <div key={index} className="fact-card">
            <h3>{fact.title}</h3>
            <p>{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniversalFacts;
