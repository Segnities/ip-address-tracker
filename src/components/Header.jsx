
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
        if (ipv4RegexError.isValid == true && ip.length > 0) {
            setFetchByIp(ip)
            refetchIpQuery();
        }
    }

    useEffect(() => {
        const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
        if (ipv4Regex.test(ip) === false) {
            setIpv4RegexError({
                message: 'Invalid IP V4 mask',
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
            <form onSubmit={(e) => e.preventDefault()} className='ip-form'>
                <div className="input-group">
                    <input
                        type="text"
                        value={ip}
                        onChange={(e) => {
                            setIp(e.target.value)
                        }}
                        placeholder='Search of any IP address or domain'
                    />
                    <button title={ipv4RegexError.message} onClick={handleSendIpAddress} disabled={!ipv4RegexError.isValid}>
                        <img src={Arrow} />
                    </button>
                </div>

            </form>

        </header>
    )
}

export default Header;