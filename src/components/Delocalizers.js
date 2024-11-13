import React, { useEffect, useState } from 'react';
import JsonDisplay from './JsonDisplay';

const Delocalizers = () => {
    const [fileList, setFileList] = useState([]);
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        // Fetch the files.json data from the public folder
        const fetchFiles = async () => {
          try {
            const response = await fetch(`${process.env.PUBLIC_URL}/files/files.json`); // Path relative to public folder
            if (!response.ok) {
              throw new Error('Failed to load files');
            }
            const data = await response.json();
            setFileList(data.delocalizers); // Update state with "delos" array from files.json
          } catch (error) {
            console.error('Error loading files:', error);
          }
        };
    
        fetchFiles();
      }, []);

    const handleFileSelect = async (event) => {
        const selectedFile = event.target.value;
    
        if (selectedFile) {
          try {
            const response = await fetch(`${process.env.PUBLIC_URL}/files/delocalizers/${selectedFile}`);
            if (!response.ok) {
              throw new Error(`Failed to load ${selectedFile}`);
            }
            const data = await response.json();
            setFileContent(JSON.stringify(data, null, 2)); // Format JSON data with indentation
          } catch (error) {
            console.error('Error loading file:', error);
            setFileContent('Error loading file content');
          }
        } else {
          setFileContent(''); // Clear content if no file is selected
        }
    };

    return (
        <article id="delocalizers">
            <h2 className="major">Delocalizers</h2>
            <section>
            <form method="post" action="#">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="demo-category">Category</label>
                        <select name="demo-category" id="demo-category" onChange={handleFileSelect}>
                        <option value="">-</option>
                        {fileList.map((file, index) => (
                            <option key={index} value={file}>
                                {file}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>
            </form>
            </section>
            <JsonDisplay content={fileContent} />
        </article>
    );
};

export default Delocalizers;
