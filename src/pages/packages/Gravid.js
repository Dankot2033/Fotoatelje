import { useState } from "react";

//  COMPONENTS  //
import Image from "../../components/Image";
import Modal from "../../components/Modal";
//  COMPONENTS END  //

//  IMAGES
import PackageHeader from "../../components/img/package1/package1Header.jpg";
import PackageHeaderMini from "../../components/img/package1/package1HeaderMini.jpg";

import Package1 from "../../components/img/package1/package1-1.jpg";
import Package1Mini from "../../components/img/package1/package1-1Mini.jpg";

import Package2 from "../../components/img/package1/package1-2.jpg";
import Package2Mini from "../../components/img/package1/package1-2Mini.jpg";

import Package3 from "../../components/img/package1/package1-3.jpg";
import Package3Mini from "../../components/img/package1/package1-3Mini.jpg";

import Package4 from "../../components/img/package1/package1-4.jpg";
import Package4Mini from "../../components/img/package1/package1-4Mini.jpg";

import Package5 from "../../components/img/package1/package1-5.jpg";
import Package5Mini from "../../components/img/package1/package1-5Mini.jpg";

import Package6 from "../../components/img/package1/package1-6.jpg";
import Package6Mini from "../../components/img/package1/package1-6Mini.jpg";

import Package7 from "../../components/img/package1/package1-7.jpg";
import Package7Mini from "../../components/img/package1/package1-7Mini.jpg";

import Package8 from "../../components/img/package1/package1-8.jpg";
import Package8Mini from "../../components/img/package1/package1-8Mini.jpg";

import Package9 from "../../components/img/package1/package1-9.jpg";
import Package9Mini from "../../components/img/package1/package1-9Mini.jpg";
//  IMAGES END

const Gravid = () => {

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
            <h1>* Gravid *</h1>

            <Image action={() => showModal(Package1)} name="portfolioImage" source={Package1Mini} sourceBigger={Package1Mini} alt="Gravid 1" />
            <Image action={() => showModal(Package2)} name="portfolioImage" source={Package2Mini} sourceBigger={Package2Mini} alt="Gravid 2" />
            <Image action={() => showModal(Package3)} name="portfolioImage" source={Package3Mini} sourceBigger={Package3Mini} alt="Gravid 3" />
            <Image action={() => showModal(Package4)} name="portfolioImage" source={Package4Mini} sourceBigger={Package4Mini} alt="Gravid 4" />

            <div className="priceBox">
                <div>
                    <h3>Standard</h3>
                    <p>2500 kr</p>
                    <p>10 digitala bilder</p>
                    <p>10 prints i 15 x 21 format</p>
                    <p>Följande bilder: 150:-/st</p>
                </div>

                <div>
                    <h3>Premium</h3>
                    <p>3000 kr</p>
                    <p>15 digitala bilder</p>
                    <p>15 prints i 15 x 21 format</p>
                    <p>Följande bilder: 150:-/st</p>
                </div>
            </div>

            <Image name="packageHeaderImage" source={PackageHeaderMini} sourceBigger={PackageHeader} alt="Gravid Header" />

            <h2>Portfolio</h2>

            <Image action={() => showModal(Package5)} name="portfolioImage" source={Package5Mini} sourceBigger={Package5Mini} alt="Gravid 5" />
            <Image action={() => showModal(Package6)} name="portfolioImage" source={Package6Mini} sourceBigger={Package6Mini} alt="Gravid 6" />
            <Image action={() => showModal(Package7)} name="portfolioImage" source={Package7Mini} sourceBigger={Package7Mini} alt="Gravid 7" />
            <Image action={() => showModal(Package8)} name="portfolioImage" source={Package8Mini} sourceBigger={Package8Mini} alt="Gravid 8" />
            <Image action={() => showModal(Package9)} name="portfolioImage" source={Package9Mini} sourceBigger={Package9Mini} alt="Gravid 9" />

            <Modal action={hideModal} display={modalDisplay} source={activePhoto}  />
        </section>
    );
}

export default Gravid;