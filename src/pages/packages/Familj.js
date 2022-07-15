import { useState } from "react";

//  COMPONENTS  //
import Image from "../../components/Image";
import Modal from "../../components/Modal";
//  COMPONENTS END  //

//  IMAGES  //
import PackageHeader from "../../components/img/package5/package5Header.jpg";
import PackageHeaderMini from "../../components/img/package5/package5HeaderMini.jpg";

import Package1 from "../../components/img/package5/package5-1.jpg";
import Package1Mini from "../../components/img/package5/package5-1Mini.jpg";

import Package2 from "../../components/img/package5/package5-2.jpg";
import Package2Mini from "../../components/img/package5/package5-2Mini.jpg";

import Package3 from "../../components/img/package5/package5-3.jpg";
import Package3Mini from "../../components/img/package5/package5-3Mini.jpg";

import Package4 from "../../components/img/package5/package5-4.jpg";
import Package4Mini from "../../components/img/package5/package5-4Mini.jpg";

import Package5 from "../../components/img/package5/package5-5.jpg";
import Package5Mini from "../../components/img/package5/package5-5Mini.jpg";

import Package6 from "../../components/img/package5/package5-6.jpg";
import Package6Mini from "../../components/img/package5/package5-6Mini.jpg";

import Package7 from "../../components/img/package5/package5-7.jpg";
import Package7Mini from "../../components/img/package5/package5-7Mini.jpg";

import Package8 from "../../components/img/package5/package5-8.jpg";
import Package8Mini from "../../components/img/package5/package5-8Mini.jpg";

import Package9 from "../../components/img/package5/package5-9.jpg";
import Package9Mini from "../../components/img/package5/package5-9Mini.jpg";

import Package10 from "../../components/img/package5/package5-10.jpg";
import Package10Mini from "../../components/img/package5/package5-10Mini.jpg";

import Package11 from "../../components/img/package5/package5-11.jpg";
import Package11Mini from "../../components/img/package5/package5-11Mini.jpg";

import Package13 from "../../components/img/package5/package5-13.jpg";
import Package13Mini from "../../components/img/package5/package5-13Mini.jpg";
//  IMAGES END  //

const Familj = () => {

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
            <h1>* Familj *</h1>

            <Image action={() => showModal(Package1)} name="portfolioImage" source={Package1Mini} sourceBigger={Package1Mini} alt="Familj 1" />
            <Image action={() => showModal(Package2)} name="portfolioImage" source={Package2Mini} sourceBigger={Package2Mini} alt="Familj 2" />
            <Image action={() => showModal(Package3)} name="portfolioImage" source={Package3Mini} sourceBigger={Package3Mini} alt="Familj 3" />
            <Image action={() => showModal(Package4)} name="portfolioImage" source={Package4Mini} sourceBigger={Package4Mini} alt="Familj 4" />

            <div className="priceBox">
                <div>
                    <h3>Premium</h3>
                    <p>3000 kr</p>
                    <p>15 digitala bilder</p>
                    <p>15 prints i 15 x 21 format</p>
                    <p>Följande bilder: 150:-/st</p>
                </div>
            </div>

            <Image name="packageHeaderImage" source={PackageHeaderMini} sourceBigger={PackageHeader} alt="Familj Header" />

            <h2>Portfolio</h2>

            <Image action={() => showModal(Package5)} name="portfolioImage" source={Package5Mini} sourceBigger={Package5Mini} alt="Familj 5" />
            <Image action={() => showModal(Package6)} name="portfolioImage" source={Package6Mini} sourceBigger={Package6Mini} alt="Familj 6" />
            <Image action={() => showModal(Package7)} name="portfolioImage" source={Package7Mini} sourceBigger={Package7Mini} alt="Familj 7" />
            <Image action={() => showModal(Package8)} name="portfolioImage" source={Package8Mini} sourceBigger={Package8Mini} alt="Familj 8" />
            <Image action={() => showModal(Package9)} name="portfolioImage" source={Package9Mini} sourceBigger={Package9Mini} alt="Familj 9" />
            <Image action={() => showModal(Package10)} name="portfolioImage" source={Package10Mini} sourceBigger={Package10Mini} alt="Familj 10" />
            <Image action={() => showModal(Package11)} name="portfolioImage" source={Package11Mini} sourceBigger={Package11Mini} alt="Familj 11" />
            <Image action={() => showModal(Package13)} name="portfolioImage" source={Package13Mini} sourceBigger={Package13Mini} alt="Familj 13" />

            <Modal action={hideModal} display={modalDisplay} source={activePhoto}  />
        </section>
    );
}

export default Familj;