import React from 'react';

const TrackedProfile = (props) => {
    return (
        <div style={{ fontFamily: 'Electrolize' }} className="text-base p-0 border-white rounded border-solid bg-white m-2 p-4 font-normal italic text-indigo-300">
            <div>
                <img className="w-32 h-auto mx-auto" src={props.profile.avatar_url} alt="profile pic" />
            </div>
            <div className="text-center text-xs mt-2">
                <h2>User Name: {props.profile.login}</h2>
                <a href=" "> Learn More....</a>
            </div>
        </div>
    )
}

export default TrackedProfile;