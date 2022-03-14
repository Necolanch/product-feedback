import React, {useState, useEffect} from "react";

import Post from "./Post";

function PostsBoard() {
    const [feedbackInfo, setFeedbackInfo]=useState([]);
    const [isLoaded]=useState([{isLoaded:true}]);

    useEffect(()=>{
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            const feedback=data.map(fb=>{
                return{
                    id:fb.id,
                    title:fb.title,
                    body:fb.body
                }
            })
            setFeedbackInfo(feedback);
        }

        if({isLoaded}) {
            getData();
        } else {
            console.log("Cannot load");
        }
    }, [isLoaded])

    return(
    <div> {
        feedbackInfo.map(feedback=>{
            return(<Post key={feedback.id} data={feedback} title={feedback.title} body={feedback.body}></Post>)
        })
    }
    </div>
    )

}

export default PostsBoard;