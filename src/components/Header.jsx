import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <nav className="navigation">
                <p>
                    <Link className="linktext" to="">Home</Link>
                </p>
                <p>
                    <Link className="linktext" to="first">First page</Link>
                </p>
                <p>
                    <Link className="linktext" to="second">Second page</Link>
                </p>
            </nav>
        </header>
    )
}