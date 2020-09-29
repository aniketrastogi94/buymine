import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const profileItem = ({profile:{
    user:{_id,name,avatar},
    semester,institute,location}}) => {
    return (
        <div className="profile bg-light" >
             <img src={avatar} alt="" className="round-img" />
            <div>
                <h2>{name}</h2>
                <p>{semester} {institute && <span>at {institute}</span> } </p>
                <p className="my-1" >{location && <span>{location} </span>}</p>
                <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>
            </div>
        </div>
    )
}

profileItem.propTypes = {
    profile:PropTypes.object.isRequired,
}

export default profileItem
