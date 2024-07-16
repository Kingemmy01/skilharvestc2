import { Link } from "react-router-dom"

export default function NavBar() {
    return (
         
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="./images/logo-dark.png" alt="Cartizilla" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="recipes" className="nav-link">Get Recipes</Link>
                        </li>
                     </ul>

                    <div className="icons" role="search">
                        <i className="bi-search icon"></i>
                        <i className="bi-person icon"></i>
                    </div>
                </div>
            </div>
        </nav>
      
    )
}