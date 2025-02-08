import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav>
                <p>
                    Link 1:<Link to="first">First</Link>
                </p>
                <p>
                    Link 2:<Link to="second">Second</Link>
                </p>
            </nav>
        </header>
    )
}