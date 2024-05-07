import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ProjectDetails.css'

const ProjectDetails = () => {
  const [repoDetails, setRepoDetails] = useState(null);
  const [alert, setAlert] = useState(true)
  const { projectId } = useParams();

  useEffect(() => {

    document.title = `TheDevPiyush - Project/${projectId}`

    const fetchRepoDetails = async () => {
      try {
        const result = await fetch(`https://api.github.com/repositories/${projectId}`);
        const response = await result.json();
        setTimeout(() => {
          setRepoDetails(response);
          setTimeout(() => {
            setAlert(false)
          }, 10000);
        }, 2000);


      } catch (error) {
        return <div>API Limit has been reached for your IP. Please try after few minutes.</div>
      }
    };

    fetchRepoDetails();



  }, [projectId]);


  if (!repoDetails) {
    return <div className="spiinerduv">
      <div className="spinbox">
        <div className="spinner">
        </div>
        <div className="innerspinner"></div>
      </div>
    </div>;
  }

  document.title = `TheDevPiyush - Project/${repoDetails.name}`
  return (
    <>
      <div className="mainParent">

        <div className="parentContainer">

          <div className="projectTitle">
            {repoDetails.name}
          </div>

          <div className="projectDescription margin">


            <div className="desc">
              {repoDetails.description}
            </div>

            <div className="btnsContainer">
              <div className="btnContainer2">

                <div className="sourceCode a margin">
                  <a id='linktag' style={{ "color": "white" }} href={`${repoDetails.html_url}`} target='_blank' rel="noreferrer" >
                    Source Code
                  </a>
                </div>

                <div className="liveDemo a margin">
                  <a id='linktag' style={{ "color": "white" }} href={`${repoDetails.homepage}`} target='_blank' rel="noreferrer" >
                    Live Output
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* {alert && <div className="note">
            <div className="notemsg">If you are geeting a <span id='notfound'> page not found</span> error while visiting the project links, please leave a feedback.</div>
            <div className="progress"></div>
          </div>} */}
        </div>
      </div>

    </>
  );
};

export default ProjectDetails;
