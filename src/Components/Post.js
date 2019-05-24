import React, { useState,useEffect } from 'react';
import axios from "axios"

function Posts(props){

console.log("my props",props)
    return(
        <div className="container">
    <div className="data-container">
      <div className="title-container">
     <h4> {props.data.title}</h4>
  </div>
  <hr/>
  <div className="body-container">
<div className="id-container">{props.data.id}-   </div>   <div className="id-container">{props.data.body}   </div>   
</div>
    </div>
    </div>
    )
}
export default Posts;
