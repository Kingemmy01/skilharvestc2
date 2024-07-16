

export default function Footer() {
    return (
    <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 details">
                        <div className="row">
                            <div className="col-lg-3 logo">
                                <img src="./images/footer-logo-light.png" alt="logo" />
                            </div>

                            <div className="col-lg-3 backlinks">
                                <h3>Join Us</h3>
                                <ul className="widget-list">
                                    <li><a className="link" href="#">Careers</a></li>
                                    <li><a className="link" href="#">Restaurants</a></li>
                                    <li><a className="link" href="#">Become a Courier</a></li>
                                    <li><a className="link" href="#">About</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 backlinks">
                                <h3>Let us help you</h3>
                                <ul className="widget-list">
                                    <li><a className="link" href="#">Help Center</a></li>
                                    <li><a className="link" href="#">Support</a></li>
                                    <li><a className="link" href="#">Contacts</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 backlinks">
                                <h3>Follow Us</h3>
                                <ul className="widget-list">
                                    <li><a className="link" href="#">Facebook</a></li>
                                    <li><a className="link" href="#">Twitter</a></li>
                                    <li><a className="link" href="#">Instagram</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 backlinks">
                        <h3>Download Our App</h3>
                        
                        <div className="">
                            <a className="btn" href="#" role="button">
                                <img src="./images/app-store.png" alt="app store" />
                            </a>
                            <a className="btn" href="#" role="button">
                                <img src="./images/google-store.png" alt="google store" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-lg-12 extra">
                        <div className="d-md-flex justify-content-between">
                            <p className="text">&copy; { new Date().getFullYear } Cartizilla. All rights reserved.</p>

                            <div className="others">
                                <a className="link" href="#">Privacy Policy</a>
                                <a className="link" href="#">Terms of Use</a>
                                <a className="link" href="#">Cookies Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}