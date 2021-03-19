import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue : "",
        }
    }

    changeHandler = (e) => {
        console.log(e.target.value);
        this.setState({...this.state, inputValue: e.target.value})
    }

    searchForProfile = (e) => {
        e.preventDefault();
        this.props.updateUser(this.state.inputValue);
        this.setState({...this.state, inputValue : ""});
    }

    render() {
        return(
            <div className="flex items-center justify-end mb-2">
                <form onSubmit = {this.searchForProfile} className="p-2">
                    <input onChange={this.changeHandler}className="bg-pink-700 text-gray-100 p-2 border-white rounded border-solid" name="user" value = {this.state.inputValue} placeholder="Look Up Profiles"/>
                    <button className="bg-pink-700 text-gray-100 p-2 border-white rounded border-solid ml-3">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;