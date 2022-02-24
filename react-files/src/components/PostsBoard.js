import React, {useState, useEffect} from "react";

import Post from "./Post";

function PostsBoard() {
    const [feedbackInfo, setFeedbackInfo]=useState([]);
    const [isLoaded]=useState([{isLoaded:true}]);

    useEffect(()=>{
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            const [feedback] = data.map(feedback=>setFeedbackInfo({
                id:`${feedback.id}`,
                title:`${feedback.title}`
            }));

            console.log(feedback);
        }

        if({isLoaded}) {
            getData();
        } else {
            console.log("Cannot load");
        }
    }, [isLoaded])

    return(
        <Post key={feedbackInfo.id} data={feedbackInfo} title={feedbackInfo.title}></Post>
    )

}

export default PostsBoard;