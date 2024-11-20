import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PythonDisplay = ({ scriptPath }) => {
  const [scriptContent, setScriptContent] = useState("");

  useEffect(() => {
    if (scriptPath) {
      fetch(scriptPath)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error fetching script: ${response.statusText}`);
          }
          return response.text();
        })
        .then((text) => setScriptContent(text))
        .catch((error) => console.error("Error loading Python script:", error));
    }
  }, [scriptPath]);

  return (
    <section>
      <pre>
        <code className="pythonscript">{scriptContent}</code>
      </pre>
    </section>
  );
};

PythonDisplay.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default PythonDisplay;