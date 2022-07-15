//  COMPONENTS  //
import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";
//  COMPONENTS END  //

const Contact = () =>{
    return(
        <main id="contact">
            <h1>Marzena Raczycka Fotograf</h1>

            <h2>Älvängen 446-32</h2>

            <h2>Göteborgsvägen 89</h2>

            <a className="mailLink" href="mailto:fotoatelje.mr@hotmail.com">fotoatelje.mr@hotmail.com</a>

            <GoogleMap/>
            
            <ContactForm/>
        </main>
    );
}

export default Contact;