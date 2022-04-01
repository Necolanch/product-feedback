import React, {useState, useEffect} from "react";

import TitlePiece from "./components/TitlePiece";
import PostsBoardHeader from "./components/PostsBoardHeader";
import {PostsBoard} from "./components/PostsBoard";


function App() {
  const [feedbackData, setFeedbackData]= useState([]);
  const [isLoaded]=useState([{isLoaded:true}]);

  useEffect(()=>{
    async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        const feedback=data.map(fb=>{
            return{
                id:fb.id,
                title:fb.title,
                body:fb.body,
                likes:fb.userId
            }
        })
        setFeedbackData(feedback);
    }

    if({isLoaded}) {
        getData();
    } else {
        console.log("Cannot load");
    }
}, [isLoaded])


  const [sortState, setSortState]=useState("Select sort");

  useEffect(()=> {
    const sortByLikes = method => {
        if(method === "Most likes") {
        const sorted = [...feedbackData].sort((a,b)=> b.likes-a.likes);
        setFeedbackData(sorted);
      } else {
        const defaultSort=[...feedbackData].sort((a,b)=>a.id-b.id);
        setFeedbackData(defaultSort);
      };
    };

    sortByLikes(sortState);
  }, [sortState])

  return (
    <div className="App">
      <TitlePiece titleText="Product Feedback"></TitlePiece>
        <PostsBoardHeader sort={setSortState}></PostsBoardHeader>
        <PostsBoard posts={feedbackData}></PostsBoard>
    </div>
  );
}

export default App;