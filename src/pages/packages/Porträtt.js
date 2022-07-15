import { useState } from "react";

//  COMPONENTS  //
import Image from "../../components/Image";
import Modal from "../../components/Modal";
//  COMPONENTS END  //

//  IMAGES  //
import PackageHeader from "../../components/img/package4/package4Header.jpg";
import PackageHeaderMini from "../../components/img/package4/package4HeaderMini.jpg";

import Package1 from "../../components/img/package4/package4-1.jpg";
import Package1Mini from "../../components/img/package4/package4-1Mini.jpg";

import Package2 from "../../components/img/package4/package4-2.jpg";
import Package2Mini from "../../components/img/package4/package4-2Mini.jpg";

import Package3 from "../../components/img/package4/package4-3.jpg";
import Package3Mini from "../../components/img/package4/package4-3Mini.jpg";

import Package4 from "../../components/img/package4/package4-4.jpg";
import Package4Mini from "../../components/img/package4/package4-4Mini.jpg";

import Package5 from "../../components/img/package4/package4-5.jpg";
import Package5Mini from "../../components/img/package4/package4-5Mini.jpg";

import Package6 from "../../components/img/package4/package4-6.jpg";
import Package6Mini from "../../components/img/package4/package4-6Mini.jpg";

import Package7 from "../../components/img/package4/package4-7.jpg";
import Package7Mini from "../../components/img/package4/package4-7Mini.jpg";

import Package8 from "../../components/img/package4/package4-8.jpg";
import Package8Mini from "../../components/img/package4/package4-8Mini.jpg";

import Package9 from "../../components/img/package4/package4-9.jpg";
import Package9Mini from "../../components/img/package4/package4-9Mini.jpg";
//  IMAGES END  //

const Porträtt = () => {

    const [modalDisplay, setModalDisplay] = useState("none");
    const [activePhoto, setActivePhoto] = useState();

    const showModal = (source) => {
        if(window.innerWidth > 500){
            setModalDisplay("block")
            setActivePhoto(source)
        }
    }

    const hideModal = () => {
        setModalDisplay("none")
    }

    return(
        <section className="packageSection">
            <h1>* Porträtt *</h1>

            <Image action={() => showModal(Package1)} name="portfolioImage" source={Package1Mini} sourceBigger={Package1Mini} alt="Porträtt 1" />
            <Image action={() => showModal(Package2)} name="portfolioImage" source={Package2Mini} sourceBigger={Package2Mini} alt="Porträtt 2" />
            <Image action={() => showModal(Package3)} name="portfolioImage" source={Package3Mini} sourceBigger={Package3Mini} alt="Porträtt 3" />
            <Image action={() => showModal(Package4)} name="portfolioImage" source={Package4Mini} sourceBigger={Package4Mini} alt="Porträtt 4" />

            <div className="priceBox">
                <div>
                    <h3>Standard</h3>
                    <p>2000 kr</p>
                    <p>3 digitala bilder</p>
                    <p>3 prints i 15 x 21 format</p>
                    <p>Följande bilder: 150:-/st</p>
                </div>

                <div>
                    <h3>Premium</h3>
                    <p>2500 kr</p>
                    <p>5 digitala bilder</p>
                    <p>5 prints i 15 x 21 format</p>
                    <p>Följande bilder: 150:-/st</p>
                </div>
            </div>

            <Image name="packageHeaderImage" source={PackageHeaderMini} sourceBigger={PackageHeader} alt="Porträtt Header" />

            <h2>Portfolio</h2>

            <Image action={() => showModal(Package5)} name="portfolioImage" source={Package5Mini} sourceBigger={Package5Mini} alt="Porträtt 5" />
            <Image action={() => showModal(Package6)} name="portfolioImage" source={Package6Mini} sourceBigger={Package6Mini} alt="Porträtt 6" />
            <Image action={() => showModal(Package7)} name="portfolioImage" source={Package7Mini} sourceBigger={Package7Mini} alt="Porträtt 7" />
            <Image action={() => showModal(Package8)} name="portfolioImage" source={Package8Mini} sourceBigger={Package8Mini} alt="Porträtt 8" />
            <Image action={() => showModal(Package9)} name="portfolioImage" source={Package9Mini} sourceBigger={Package9Mini} alt="Porträtt 9" />

            <Modal action={hideModal} display={modalDisplay} source={activePhoto}  />
            
        </section>
    );
}

export default Porträtt;