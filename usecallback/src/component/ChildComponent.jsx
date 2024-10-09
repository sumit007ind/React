import React from 'react'

const ChildComponent = (props) => {
    console.log("Child Component go re- rendered:");
  return (
    <div>
      {props.buttonName}
    </div>
  )
}

export default ChildComponent

