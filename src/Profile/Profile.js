import React, { Children } from 'react';

const Profile = props => {
const profileStyle = {
  textAlign: "center",
  backgroundColor: 'orange',
  borderRadius: '10px',
  color: "white",
  width: '300px'

}

    console.log(`props:`, props.name);
    return (
      <div style = {profileStyle}>
      <h1>My name is {props.fullName}</h1>
      <p>{props.bio}</p>
      <p>{props.profession}</p>
      {props.children}

      <button onClick={() => props.handleName(`My name is Sara Campbell `)} style = {{backgroundColor:'white', color: 'black'}}>
        ClickMe
      </button>
      </div>
    );
   };

   Welcome.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleName: propTypes.func
   }

   Welcome.defaultProps = {
    fullName: "John Doe",
    bio: 'Add bio here',
    profession: 'Add Social Media'
   }

export default Profile;