import {useState, useEffect} from "react";

const GlobalState = () =>{
    const [feedbackData, setFeedbackData]= useState([]);
    const [isLoaded]=useState([{isLoaded:true}]);

  useEffect(()=>{
    const getData = async()=> {
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

const [sort, setSort]=useState("Select sort");

  useEffect(()=> {
    const sortByLikes = method => {
        if(method === "Most likes") {
        const sorted = [...feedbackData].sort((a,b)=> b.likes-a.likes);
        setFeedbackData(sorted);
      } else {
        const defaultSort=[...feedbackData].sort((a,b)=>a.likes-b.likes);
        setFeedbackData(defaultSort);
      };
    };

    sortByLikes(sort);
  }, [sort])

  return {
      setSort,
      feedbackData, setFeedbackData
  }
}

export default GlobalState;