import React from 'react';

class Profile extends React.Component {

    render() {
        return(
            <div style={{fontFamily: 'Electrolize'}} className="md:container md:mx-auto w-300 flex flex-wrap flex-row items-center justify-evenly text-base p-0 border-white rounded border-solid bg-white m-2 p-4 font-normal italic text-indigo-300">
                <div>
                    <img className="w-48 h-auto mx-auto rounded-full"src={this.props.userData.avatar_url} alt="profile pic"/>
                </div>
            <div className="text-center text-xs p-4">
                <h2>{this.props.userData.name}</h2>
                <p>{this.props.userData.bio}</p>
                <p>{this.props.userData.location}</p>
                <p>Followed By: {this.props.userData.followers}</p>
                <p>Profiles Tracked: {this.props.userData.following}</p>

            </div>
        </div>
        )
    }
}

export default Profile;