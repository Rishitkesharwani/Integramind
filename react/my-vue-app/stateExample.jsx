import { useEffect,useState } from "react";

const Posts={} =>{
    const [posts,setPosts ]= useState([]);
    
    const getPosts=async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data =await response.json();
        setPosts(data);
    }

    useEffect(()=>{
        getPosts();
    },[]);

return{

}