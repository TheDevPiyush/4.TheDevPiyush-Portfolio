import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ProjectDetails.css'

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

  document.title = `TheDevPiyush - Project/${repoDetails.name}`
  return (
    <>

      <div className="parentContainer">

        <div className="projectTitle">
          {repoDetails.name}
        </div>

        <div className="projectDesccription margin">
          <div className="notation">About the project:</div>
          {repoDetails.description}
        </div>

        <div className="sourceCode margin">
          <div className="notation">Source code of the project:</div>
          <a id='linktag' href={`${repoDetails.url}`} target='_blank' rel="noreferrer" >
            {repoDetails.url}
          </a>
        </div>

        <div className="liveDemo margin">
          <div className="notation">Live working output:</div>
          <a id='linktag' href={`${repoDetails.homepage}`} target='_blank' rel="noreferrer" >
            {repoDetails.homepage}
          </a>
        </div>

        <div className="note">
          If you are geeting a <span id='notfound'> page not found</span> or any other errors when visiting the project links, please leave a feedback. <br /> I may need to update some project servers. Thank you!
        </div>
      </div>

    </>
  );
};

export default ProjectDetails;
