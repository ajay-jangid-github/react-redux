import React from "react";

const User=(props)=>{



  const {data,aboutus} = props
  return(
    <>
    <div>{data.name}</div>
    <div>{data.age}</div>
    <div>{aboutus.aboutname}</div>
    </>
  );
}

export default User;