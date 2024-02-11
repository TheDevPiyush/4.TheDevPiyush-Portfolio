import React, { useEffect, useState } from 'react'
import '../Styles/ProjectPage.css'
import Card from '../components/Card'
import LoadingCard from '../components/LoadingCard'
export default function ProjectPage() {


  const [Repositories, setRepositories] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetch(`https://api.github.com/users/thedevpiyush/repos`);
      const response = await result.json();
      setRepositories(response);
      setTimeout(() => {
        setloading(false)
      }, 3000);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  }

  return (
    <>
      <div className="projectpagetitle">
        <div id="titleText">Projects</div>
        <div className="projectDesc">
          Projects listed here are connected to my github. You can see Live demo of the projects as well as their source code from my github.
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
            <Card key={ele.id} projectId={ele.id} title={ele.name} body={ele.description} button={"Details"} />
          ))}
        </div>
      }
    </>
  )
}
