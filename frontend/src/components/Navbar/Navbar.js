import Button from "../Buttons/LoginButton/Button";
import '../Navbar/NavbarStyle.scss';

function Navbar() {
     return (
         <div className="container">
             <div className="company-name">
                    <h1>Company Name</h1>
             </div>
             <div className="links" >
                <p>Home</p>
                <p>Products</p>
                <p>Auctions</p>
                <p>About</p>
                <p>Contacts</p>
             </div>
             <div className="buttons">
                 <Button  link = 'login' text = 'Login' />
                 <Button  link = 'register' text = 'Register' />
                 <Button  link = 'cart' text = 'Cart' />
             </div>
         </div>
     )
}

export default Navbar;