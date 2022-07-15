//  COMPONENTS  //
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
//  COMPONENTS END  //

//  IMAGES  //
import HomeBack from "../components/img/homeBack.jpg";
import PackageImg1 from "../components/img/package1/package1HeaderMini.jpg";
import PackageImg2 from "../components/img/package2/package2HeaderMini.jpg";
import PackageImg3 from "../components/img/package3/package3HeaderMini.jpg";
import PackageImg4 from "../components/img/package4/package4HeaderMini.jpg";
import PackageImg5 from "../components/img/package5/package5HeaderMini.jpg";
//  IMAGES END  //

//  ICONS  //
import Instagram from "../components/img/icons/instagram.png";
import Facebook from "../components/img/icons/facebook.png";
//  ICONS END  //

const Home = () => {

    return(
        <main id="home" className="flexboxContainer">

            <div id="homeBackBox">
                <Image source={HomeBack} sourceBigger={HomeBack} alt="Background" />
            </div>

            <div id="homeContact">
                <div>
                    <a className="socialLink" target="_blank" href="https://www.instagram.com/fotoatelje_mr/" rel="noreferrer"><Image source={Instagram} sourceBigger={Instagram} alt="Instagram link" /></a>
                    <a className="socialLink" target="_blank" href="https://www.facebook.com/Fotoateljemarzenaraczycka/" rel="noreferrer"><Image source={Facebook} sourceBigger={Facebook} alt="Facebook link" /></a>
                </div>

                <a className="mailLink" href="mailto:fotoatelje.mr@hotmail.com">fotoatelje.mr@hotmail.com</a>

                <a href="./contact">Kontakt</a>
            </div>

            <div id="packageContainer">
                <div className="flexboxContainer">
                    <a href="./services/gravid" className="flexboxItem">
                        <Image source={PackageImg1} sourceBigger={PackageImg1} alt="Gravid" />
                        <p className="button">Gravid</p>
                    </a>

                    <a href="./services/nyfödd" className="flexboxItem">
                        <Image source={PackageImg2} sourceBigger={PackageImg2} alt="Nyfödd" />
                        <p className="button">Nyfödd</p>
                    </a>

                    <a href="./services/barn" className="flexboxItem">
                        <Image source={PackageImg3} sourceBigger={PackageImg3} alt="Barn" />
                        <p className="button">Barn</p>
                    </a>

                    <a href="./services/porträtt" className="flexboxItem">
                        <Image source={PackageImg4} sourceBigger={PackageImg4} alt="Porträtt" />
                        <p className="button">Porträtt</p>
                    </a>

                    <a href="./services/familj" className="flexboxItem">
                        <Image source={PackageImg5} sourceBigger={PackageImg5} alt="Familj" />
                        <p className="button">Familj</p>
                    </a>
                </div>
            </div>

            <ContactForm/>
        </main>
    );
}

export default Home;