import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Profile extends Component {
    state = {
        username: '',
        birthday: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target
        const { username, birthday, link } = this.state
        this.setState({
            [name]: value,
        })
    }

    render() {
        const { username, birthday, link } = this.state

        return (
            <div className="Profile">
                <h1>Tell us about you</h1>
                <input
                    id="username-input"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    id="birthday-input"
                    name="birthday"
                    type="date"
                    value={birthday}
                    onChange={this.handleChange}
                />
                <br />
                {username && birthday && (
                    <Link to={'/fortune/' + username + '&' + birthday}>
                        {`${username}&${birthday}`}
                    </Link>
                )}
            </div>
        )
    }
}

export default Profile
