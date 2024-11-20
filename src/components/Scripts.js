import React from 'react';
import PythonDisplay from './PythonDisplay';

const Scripts = () => {
	return (
		<article id="scripts">
		  <h2 className="major">Scripts</h2>
		  <section>
		    <p>
		    	Simple and useful example script to use the library.
		    </p>
		    <hr />
		    <h5>main.py</h5>
		    <PythonDisplay scriptPath={`${process.env.PUBLIC_URL}/files/scripts/main.py`} />
		    <h5>workflow.py</h5>
		    <PythonDisplay scriptPath={`${process.env.PUBLIC_URL}/files/scripts/workflow.py`} />
		  </section>
		</article>
	);
};


export default Scripts;