import "./footer.scss"


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="navigation">
                    <img src="/src/assets/img/logo.png" alt="logo" />
                    <ul>
                        <li><a href="">What is Chaplean</a> </li>
                        <li><a href="">Our difference</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Docs</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>


                <div className="download">
                    <button className="download-button">
                        <img src="/src/assets/svg/download.png" alt="download" />
                        <p>Download</p>
                    </button>
                </div>
            </div>

            <div className="privacy">Privacy & Policy - Cookies</div>

        </>
    )
}

export default Footer