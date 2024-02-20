// ExampleComponent.js

import React, { useState, useEffect } from 'react';
import { collection, getDocs, } from "firebase/firestore";
import { db } from '../services/Firebase';

import '../Styles/notification.css'

const NotificationPage = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetchtext()
  }, []);

  const fetchtext = async () => {
    const data = await getDocs(collection(db, "Messages"))
    data.forEach((doc) => {
      setText(doc.data())

      if (localStorage.getItem("message") !== doc.data().content) {
        console.log("new Data")
        localStorage.setItem("message", doc.data().content)
      }
    })
  }

  return (
    <>
      <div className="some" style={{ width: "100%" }}>

        <div className='annoucementTitle'>
          {text.title}
        </div>
      </div>

      <div className="content-div">
        <div className="content">
        &#8220;{text.content}&#8221;
        </div>
      </div>

    </>
  );
};


export default NotificationPage;

