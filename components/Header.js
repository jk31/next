import Link from "next/link";
import Cookies from "js-cookie";

const linkStyle = {
    marginRight: 15
};

function loggedIn() {
    let token = Cookies.get("tokenjk");
    if (token) {
        console.log("header check");
        return true
    }
    else {
        return false
    }
}

function Header() {

    loggedIn()
    
    return (  
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/signup">
                <a style={linkStyle}>Signup</a>
            </Link>
            <Link href="/login">
                <a style={linkStyle}>Login</a>
            </Link>
            <Link href="/tasks">
                <a style={linkStyle}>Tasks</a>
            </Link>
            <Link href="/test">
                <a style={linkStyle}>Test</a>
            </Link>
        </div>
    ) 
};

export default Header;