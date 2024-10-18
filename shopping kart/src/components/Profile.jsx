import React from 'react'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const Profile = () => {
  return (
    
    <div>
      <h1>Profile</h1>
      <h2>Name :- Sumit Sharma</h2>
      <h2>Class & Sec. :-  CSE(IOT A)</h2>
      <h2>Roll No. .{getRandomInt}</h2>
      

    </div>
  )
}

export default Profile
