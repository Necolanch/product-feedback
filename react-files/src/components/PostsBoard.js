import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Post from "./Post";
import Button from "./Button";

function PostsBoard() {
    const [feedbackData, setFeedbackData]= useState([])
    const [isLoaded]=useState([{isLoaded:true}]);
    const [sortState, setSortState]=useState("Select sort");

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

    useEffect(()=> {
        const sortByLikes = method => {
            if(method === "Most likes") {
            const sorted = [...feedbackData].sort((a,b)=> b.likes-a.likes);
            console.log(sorted);
            setFeedbackData(sorted);
          };
        };

        sortByLikes(sortState);
    }, [sortState])

    return(<div>
        <BoardHeader>
            <BoardHeaderTitle>Feedback Posts</BoardHeaderTitle>
            <PostSortLabel>Sort by:</PostSortLabel>
            <SortSelection>{sortState}</SortSelection>
            <PostSort value={sortState} onChange={e=>setSortState(e.target.value)}>
                <option>Select sort</option>
                <option value="Most likes">Most likes</option>
                <option>Least likes</option>
                <option>Most comments</option>
                <option>Least comments</option>
            </PostSort>
            <Button btnText="Add"></Button>
        </BoardHeader>
    
    <div> {
        feedbackData.map(feedback=>{
            return(<Post key={feedback.id} data={feedback} title={feedback.title} body={feedback.body}></Post>)
        })
    }
    </div>
    </div>
    )

}

const BoardHeader = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background-color:#58130A;
width:45%;
border-radius:.5em;
padding:.5em 1em .5em 1em;
margin-left:33%;
margin-top:-8.75em;
`

const BoardHeaderTitle=styled.p`
color:white;
`

const PostSortLabel=styled.label`
color:white;
`

const SortSelection=styled.p`
color:white;
margin-left:-23%;
`

const PostSort=styled.select`
color:white;
background-color:white;
border:none;
width:2%;
margin-left:-22%;
`

export {PostsBoard};