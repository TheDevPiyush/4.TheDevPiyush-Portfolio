import React, { useEffect } from 'react';
import '../Styles/ProjectPage.css';
import Card from '../components/Card';
import LoadingCard from '../components/LoadingCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectsSlice';

export default function ProjectPage() {
  const dispatch = useDispatch();
  const myprojects = useSelector((state) => state.projects.items);
  const status = useSelector((state) => state.projects.status);
  const error = useSelector((state) => state.projects.error);

  useEffect(() => {
    document.title = "TheDevPiyush - Projects";
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  return (
    <div className="parentProject">
      <div className="projectpagetitle">
        <div id="titleText"><h1>Projects</h1></div>
        <div className="projectDesc">
          <h2>
            View source code of listed projects on my GitHub{' '}
            <span>
              <a href="https://github.com/thedevpiyush" target='_blank' rel='noreferrer'>
                @TheDevPiyush
              </a>
            </span>
          </h2>
        </div>
      </div>

      {status === 'loading' && (
        <div className="loadingContainer">
          {[...Array(6)].map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      )}

      {status === 'failed' && (
        <div className="failedContainer">
          <div style={{ textAlign: 'center' }}>
            Couldn't connect to server <span><i class="fa-solid fa-cloud-slash"></i></span>
            <br /> Refresh to try again <span><i class="fa-solid fa-rotate-right"></i></span>
          </div>
        </div>
      )}

      {status === 'succeeded' && (
        <div className="projectContainer">
          {myprojects.map((project) => (
            <Card
              key={project.id}
              projectId={project.id}
              title={project.name}
              body={project.description}
              liveOutputUrl={project.homepage}
              sourceCodeUrl={project.html_url}
            />
          ))}
        </div>
      )}
    </div>
  );
}
