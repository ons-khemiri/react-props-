import React from 'react'
import PropTypes from "prop-types"
import { Alert } from 'react-bootstrap';

function Profile(props) {
return (
    <div>
<h2 style={{border:"2px solid green"}}>Profile</h2>
 <h3>fullName : {props.fullName}</h3>
 <h3>bio : {props.bio}</h3>
 <h3>profession : {props.profession}</h3>
   {props.children}
   <Alert>
  <p>handleName : {props.handleName}</p>
</Alert>
    </div>
);
}
Profile.defaultProps={
    fullName : "Khemiri Ons",
    bio : "hello everyone",
    profession : "student",
}
Profile.propTypes={
fullName:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string,
}
export default Profile ;