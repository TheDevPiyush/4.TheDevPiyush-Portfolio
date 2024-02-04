import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const [repoDetails, setRepoDetails] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
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

  return (
    <div>
      <h2>Repository Details</h2>
      <p>Name: {repoDetails.name}</p>
      <p>Description: {repoDetails.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProjectDetails;
