import './Header.css';
const Header = () =>{
    return(
        <>
        <header className="header">
            <div className="header-container">
            <div className="header-info">
            <i className="fa-solid fa-envelope"></i>&nbsp;
            <a href="mailto:veera2403@gmail.com">lithiksha2012@gmail.com</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <i className="fa-solid fa-phone phone"></i>&nbsp;
            <a href='tel:+91 1234567890'>+91 9087654321</a>
            </div>
            </div>
        </header>
        </>
    )
}
export default Header;