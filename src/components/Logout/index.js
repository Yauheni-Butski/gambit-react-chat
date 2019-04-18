import React from 'react';
import PropTypes from 'prop-types';

import './Logout.css';

function Logout({logout}) {

    return (
        <div className="log-out">
            <button 
                onClick={logout}
                className="log-out-btn">
                    Logout
                    <img 
                        alt=""
                        className="log-out-icon"
                        src="/logout.svg"/>
                </button>
        </div>
    )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

export default Logout;