//  COMPONENTS  //
import Image from "../components/Image";
//  COMPONENTS END  //

//  ICONS  //
import Instagram from "./img/icons/instagram.png";
import Facebook from "./img/icons/facebook.png";
//  ICONS END  //

const Footer = () =>{
    return(
        <footer>
            <div>
                <a className="socialLink" target="_blank" href="https://www.instagram.com/fotoatelje_mr/" rel="noreferrer"><Image source={Instagram} sourceBigger={Instagram} alt="Instagram link" /></a>
                <a className="socialLink" target="_blank" href="https://www.facebook.com/Fotoateljemarzenaraczycka/" rel="noreferrer"><Image source={Facebook} sourceBigger={Facebook} alt="Facebook link" /></a>
            </div>

            <a className="mailLink" href="mailto:fotoatelje.mr@hotmail.com">fotoatelje.mr@hotmail.com</a>

            <p>© Copyright {new Date().getFullYear()} Marzena Raczycka</p>
        </footer>
    );
}

export default Footer;