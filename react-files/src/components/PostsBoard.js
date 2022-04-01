import React from "react";

import Post from "./Post";

function PostsBoard({posts}) {
    return(
    <div> {
        posts.map(feedback=>{
            return(<Post key={feedback.id} data={feedback} title={feedback.title} body={feedback.body}></Post>)
        })
    }
    </div>
    )

}

export {PostsBoard};