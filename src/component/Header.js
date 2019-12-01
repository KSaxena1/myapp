import React, {Component} from 'react';

/* Class based to add styling */

class Header extends Component {
    render() {
        const hstyles = {
            header: {
                background: 'teal'
            },
            logo: {
                color: 'white',
                textAlign: 'center',
                fontSize: '30px'
            }
        }

        return(
            <header style = {hstyles.header}>
                <div style = {hstyles.logo}>React App</div>
                <center>
                    <input type="text"/>
                </center>
                <hr/>
            </header>
        )
    }
}


export default Header;