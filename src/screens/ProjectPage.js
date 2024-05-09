import React, { useEffect, useState } from 'react'
import '../Styles/ProjectPage.css'
import Card from '../components/Card'
import LoadingCard from '../components/LoadingCard'
export default function ProjectPage() {


  const [Repositories, setRepositories] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    document.title = "TheDevPiyush - Projects"
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetch(`https://api.github.com/users/thedevpiyush/repos`);
      const response = await result.json();
      const filteredRepositories = response.filter(repo => !repo.private && !repo.disabled);
      setRepositories(filteredRepositories);
      setTimeout(() => {
        setloading(false)
      }, 3000);
    } catch (error) {
      return <div>API Limit has been reached, please try after few minutes.</div>
    }
  }

  return (
    <>
      <div className="projectpagetitle">
        <div id="titleText"><h1>Projects</h1></div>
        <div className="projectDesc">
          <h2> Check out my GitHub for live demos and source code of connected projects.</h2>
        </div>
      </div>

      {loading
        ?
        <div className="loadingContainer">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
        :
        <div className="projectContainer">
          {Repositories.map((ele) => (
            <Card key={ele.id} projectId={ele.id} title={ele.name} body={ele.description} liveOutputUrl={ele.homepage} sourceCodeUrl={ele.html_url} />
          ))}
        </div>
      }
    </>
  )
}
