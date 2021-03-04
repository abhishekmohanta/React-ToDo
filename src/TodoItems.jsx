import React, {useState} from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function TodoItems(props){
  const[line, setLine]= useState(false)


  function cut(){
    setLine(true)

  }
  return(
    <>
    <span onClick={cut}>
      <DeleteForeverIcon />
    </span>
    <li style={{textDecoration: line? "line-through" : "none"}}>{props.text}</li>
    </>
  )
} 