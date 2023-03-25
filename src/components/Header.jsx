
import { useState } from "react";
import Arrow from "../assets/img/icon-arrow.svg"

import "../assets/scss/Header.scss";

function Header(props) {
    const {ip, setIp} = props;
    return (
        <header data-testid='header-id'>
            <h1>IP Address Tracker</h1>
            <div className="input-group">
                <input 
                    type="text" 
                    value={ip} 
                    onChange={(e) => setIp(e.target.value)} 
                    placeholder='Search of any IP address or domain'    
                />
                <button>
                    <img src={Arrow} />
                </button>
            </div>
        </header>
    )
}

export default Header;