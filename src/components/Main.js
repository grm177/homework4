import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <ul>
                    <li>
                        <Link id="profile-link" to="/profile">
                            profile
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Main
