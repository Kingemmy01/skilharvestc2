import { Link } from "react-router-dom";

function App () {
    return (
        <div>

          <h1>Starting Afresh</h1>

          <nav>
            <ul>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/contact"> Contact</Link>
                </li>
                <li>
                    <Link to="/posts"> Posts</Link>
                </li>
            </ul>

          </nav>
        </div>
    )
}

export default App;