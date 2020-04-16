import Link from "next/link";

const linkStyle = {
    marginRight: 15
};

const Header = () => (
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
);

export default Header;