import React from "react";
import "./style.css";
import vector from "../../../Assets/vector.jpg";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function CustFeedback() {

let Customer=[
  {
    userphoto:vector,
    username:"Jenny Wilson",
    feedback:`The food was excellent and so was the service.I had the mushroom ristotto with scallops whaich was awesome.
     I hada burger over greens was alaso very good. `,
    star:4
  },
    {
    userphoto:vector,
    username:"Dianne Russell",
    feedback:`We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffe. Perfect service `,
    star:5
  },
    {
    userphoto:vector,
    username:"Jenny Wilson",
    feedback:`The food was excellent and so was the service.I had the mushroom ristotto with scallops whaich was awesome.
     I hada burger over greens was alaso very good. `,
    star:4
  },
   {
    userphoto:vector,
    username:"John",
    feedback:`We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffe. Perfect service `,
    star:5
  },
]


  return (
    <div className="feedbackDiv">
      {Customer.map((item,index)=>{return(
        <article key={index}>
        <div className="custDiv">
          <img src={item.userphoto} className="CustImg"></img>
          <span>{item.username}</span>
        </div>
        <div className="starDiv">
          <Rating
            name="size-small"
            defaultValue={item.star}
            readOnly
            size="small"
            emptyIcon={
              <StarIcon
                style={{ opacity: 0.55, color: "white" }}
                fontSize="inherit"
              />
            }
          />
        </div>
        <p className="description">
          {item.feedback}
        </p>
        <hr></hr>
      </article>
      )})}
      
    </div>
  );
}

export default CustFeedback;
