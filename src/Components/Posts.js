import React, { useState,useEffect } from 'react';
import axios from "axios"
import Post from "./Post"
import { getDefaultWatermarks } from 'istanbul-lib-report';

function Posts(){
    const [data,setData]=useState([

    ])
    const [name,setName]=useState([{name:"ashraf",age:"16"},{name:"ashraf",age:"16"},{name:"ashraf",age:"16"}
    ])

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `https://jsonplaceholder.typicode.com/posts`,
          );
    
          setData(result.data);
        };
    
        fetchData();
      }, []);
      console.log(data)

    return(
    <div>
   {data.map((data,index)=>{
       return <Post data={data} key={index}/>
   })}
    </div>)
}
export default Posts;
