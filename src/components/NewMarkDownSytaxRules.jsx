import React, { useState } from "react";
import data from "./markdownRules.json";
import "../styles/TextToMarkdown.css";

export default function MarkDownRules() {
  const [showExamplesIndex, setShowExamplesIndex] = useState(null);

  const ToggleExamples = (index) => {
    setShowExamplesIndex(showExamplesIndex === index ? null : index);
  };

  const renderRules = () => {
    return data["Syntax-Rules"].map((rule, index) => (
      <div className="rules-list" key={rule.character}>
        <div>
          <span>
            <b>
              {rule.character} = {rule.description}
            </b>
          </span>
        </div>
        <div className="Example-btn" onClick={() => ToggleExamples(index)}>
          <b>Examples</b>
        </div>
        {showExamplesIndex === index ? (
          <div>
            {rule.Examples.map((example) => (
              <div key={Object.keys(example)[0]}>
                <span>{Object.values(example)}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    ));
  };
  return <div>{renderRules()}</div>;
}
