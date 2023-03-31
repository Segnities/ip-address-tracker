
import { useEffect, useState } from "react";
import Arrow from "../assets/img/icon-arrow.svg"

import "../assets/scss/Header.scss";

const Header = (props) => {
    const { ip, setIp, setFetchByIp, refetchIpQuery } = props;
    const [ipv4RegexError, setIpv4RegexError] = useState({
        message: "",
        isValid: true
    });

    const handleSendIpAddress = () => {
        if (ipv4RegexError.isValid == true && trackIp.length > 0) {
            setFetchByIp(ip)
            refetchIpQuery();
        }
    }

    useEffect(() => {
        const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
            if (ipv4Regex.test(ip) === false) {
            setIpv4RegexError({
                message: 'Invalid IP mask',
                isValid: false
            });
        } else {
            setIpv4RegexError({
                message: "",
                isValid: true
            });
        }
    }, [ip])

    return (
        <header data-testid='header-id'>
            <h1>IP Address Tracker</h1>
            <div className="input-group">
                <input
                    type="text"
                    value={ip}
                    onChange={(e) => {
                        setIp(e.target.value)
                    }}
                    placeholder='Search of any IP address or domain'
                />
                <button onClick={handleSendIpAddress} disabled={!ipv4RegexError.isValid}>
                    <img src={Arrow} />
                </button>
            </div>
            {
                ipv4RegexError.isValid == false && (<p>{ipv4RegexError.message}</p>)
            }
        </header>
    )
}

export default Header;