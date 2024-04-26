import React from "react";

const Prop = (props)=>{

  const {action,con} = props
  return(
    <>
    <div>{action.new}</div>
    <div>{action.newage}</div>
    <div>{con.names}</div>
    </>
  );
}

export default Prop;