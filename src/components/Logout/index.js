import React from 'react';
import PropTypes from 'prop-types';

import styles from './Logout.module.css';

function Logout({logout}) {

    return (
        <button 
            onClick={logout}
            className={styles.logOutBtn}>
                Logout
                <img 
                    alt=""
                    className={styles.logOutIcon}
                    src="/logout.svg"/>
            </button>
    )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

export default Logout;