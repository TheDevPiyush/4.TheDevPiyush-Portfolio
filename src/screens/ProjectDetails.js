import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const [repoDetails, setRepoDetails] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {

    document.title = `TheDevPiyush - Project/${projectId}`

    const fetchRepoDetails = async () => {
      try {
        const result = await fetch(`https://api.github.com/repositories/${projectId}`);
        const response = await result.json();
        setRepoDetails(response);

      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepoDetails();
  }, [projectId]);


  if (!repoDetails) {
    return <p>Loading...</p>;
  }

  { document.title = `TheDevPiyush - Project/${repoDetails.name}` }
  return (
    <>
      {repoDetails.name}
      {repoDetails.description}
      <div className="div"></div>
    </>
  );
};

export default ProjectDetails;
