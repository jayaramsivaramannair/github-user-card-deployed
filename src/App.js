import React from 'react';
import Profile from './Profile.js';
import TrackedProfile from './TrackedProfile.js';
import SearchBar from './SearchBar.js';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : "jayaramsivaramannair",
      currentUserData : {},
      followingData : []
    }
  }

  fetchData = (currentUser) => {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then((res) => {
      console.log(res.data);
      this.setState({...this.state, currentUserData : res.data});
    })
    .catch((err) => console.log(err))


    axios.get(`https://api.github.com/users/${this.state.currentUser}/following`)
    .then((res) => {
      console.log(res.data);
      this.setState({...this.state, followingData : res.data});
    })
    .catch(err => console.log(err))
  }

  componentDidMount () {
    this.fetchData(this.state.currentUser);
  }

  updateCurrentUser = (newUser) => {
    this.setState({...this.state, currentUser : newUser})
  }

  componentDidUpdate(prevProps, prevState) {
    //Do something if the current user changes
    if(prevState.currentUser !== this.state.currentUser) {
      this.fetchData(this.state.currentUser);
    }
  }

  render() {
    return (
      <div className="App flex flex-col m-4 ">
          <h1 style={{fontFamily: 'Electrolize'}}className="font-sans text-left text-pink-700 font-extrabold tracking-widest text-4xl">Coderbook</h1>
          <SearchBar updateUser={this.updateCurrentUser}/>
          <blockquote style={{fontFamily: 'Anton'}}className="text-right italic font-thin text-pink-400">It's not who I am underneath, but what I do that defines me. <p>- Bruce Wayne</p></blockquote>
          {this.state.currentUserData && <Profile userData = {this.state.currentUserData}/>}
          <h2 style={{fontFamily: 'Anton'}} className="text-center font-thin tracking-wider text-pink-400">Profiles Tracked by {this.state.currentUserData.name}</h2>
          <div className="followingProfiles flex flex-row flex-wrap items-center justify-evenly m-4 p-3">
            {this.state.followingData && 
              this.state.followingData.map((profile) => {
                return <TrackedProfile key={profile.id} profile={profile}/>
              })
            }
          </div>
      </div>
    )
  }
}

export default App;
