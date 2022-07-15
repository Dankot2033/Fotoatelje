import { useState } from "react";

//  COMPONENTS  //
import Image from "../../components/Image";
import Modal from "../../components/Modal";
//  COMPONENTS END  //

//  IMAGES  //
import PackageHeader from "../../components/img/package2/package2Header.jpg";
import PackageHeaderMini from "../../components/img/package2/package2HeaderMini.jpg";

import Package1 from "../../components/img/package2/package2-1.jpg";
import Package1Mini from "../../components/img/package2/package2-1Mini.jpg";

import Package2 from "../../components/img/package2/package2-2.jpg";
import Package2Mini from "../../components/img/package2/package2-2Mini.jpg";

import Package3 from "../../components/img/package2/package2-3.jpg";
import Package3Mini from "../../components/img/package2/package2-3Mini.jpg";

import Package4 from "../../components/img/package2/package2-4.jpg";
import Package4Mini from "../../components/img/package2/package2-4Mini.jpg";

import Package5 from "../../components/img/package2/package2-5.jpg";
import Package5Mini from "../../components/img/package2/package2-5Mini.jpg";

import Package6 from "../../components/img/package2/package2-6.jpg";
import Package6Mini from "../../components/img/package2/package2-6Mini.jpg";

import Package7 from "../../components/img/package2/package2-7.jpg";
import Package7Mini from "../../components/img/package2/package2-7Mini.jpg";

import Package8 from "../../components/img/package2/package2-8.jpg";
import Package8Mini from "../../components/img/package2/package2-8Mini.jpg";

import Package9 from "../../components/img/package2/package2-9.jpg";
import Package9Mini from "../../components/img/package2/package2-9Mini.jpg";

import Package10 from "../../components/img/package2/package2-10.jpg";
import Package10Mini from "../../components/img/package2/package2-10Mini.jpg";

import Package11 from "../../components/img/package2/package2-11.jpg";
import Package11Mini from "../../components/img/package2/package2-11Mini.jpg";

import Package12 from "../../components/img/package2/package2-12.jpg";
import Package12Mini from "../../components/img/package2/package2-12Mini.jpg";

import Package13 from "../../components/img/package2/package2-13.jpg";
import Package13Mini from "../../components/img/package2/package2-13Mini.jpg";

import Package14 from "../../components/img/package2/package2-14.jpg";
import Package14Mini from "../../components/img/package2/package2-14Mini.jpg";

import Package15 from "../../components/img/package2/package2-15.jpg";
import Package15Mini from "../../components/img/package2/package2-15Mini.jpg";

import Package16 from "../../components/img/package2/package2-16.jpg";
import Package16Mini from "../../components/img/package2/package2-16Mini.jpg";

import Package17 from "../../components/img/package2/package2-17.jpg";
import Package17Mini from "../../components/img/package2/package2-17Mini.jpg";

import Package18 from "../../components/img/package2/package2-18.jpg";
import Package18Mini from "../../components/img/package2/package2-18Mini.jpg";

import Package19 from "../../components/img/package2/package2-19.jpg";
import Package19Mini from "../../components/img/package2/package2-19Mini.jpg";

import Package20 from "../../components/img/package2/package2-20.jpg";
import Package20Mini from "../../components/img/package2/package2-20Mini.jpg";

import Package21 from "../../components/img/package2/package2-21.jpg";
import Package21Mini from "../../components/img/package2/package2-21Mini.jpg";

import Package22 from "../../components/img/package2/package2-22.jpg";
import Package22Mini from "../../components/img/package2/package2-22Mini.jpg";

import Package23 from "../../components/img/package2/package2-23.jpg";
import Package23Mini from "../../components/img/package2/package2-23Mini.jpg";

import Package24 from "../../components/img/package2/package2-24.jpg";
import Package24Mini from "../../components/img/package2/package2-24Mini.jpg";

import Package25 from "../../components/img/package2/package2-25.jpg";
import Package25Mini from "../../components/img/package2/package2-25Mini.jpg";

import Package26 from "../../components/img/package2/package2-26.jpg";
import Package26Mini from "../../components/img/package2/package2-26Mini.jpg";
//  IMAGES END  //

const Nyfödd = () => {

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
            <h1>* Nyfödd *</h1>

            <Image action={() => showModal(Package1)} name="portfolioImage" source={Package1Mini} sourceBigger={Package1Mini} alt="Nyfödd 1" />
            <Image action={() => showModal(Package2)} name="portfolioImage" source={Package2Mini} sourceBigger={Package2Mini} alt="Nyfödd 2" />
            <Image action={() => showModal(Package3)} name="portfolioImage" source={Package3Mini} sourceBigger={Package3Mini} alt="Nyfödd 3" />
            <Image action={() => showModal(Package4)} name="portfolioImage" source={Package4Mini} sourceBigger={Package4Mini} alt="Nyfödd 4" />

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

            <Image name="packageHeaderImage" source={PackageHeaderMini} sourceBigger={PackageHeader} alt="Nyfödd Header" />

            <h2>Portfolio</h2>

            <Image action={() => showModal(Package5)} name="portfolioImage" source={Package5Mini} sourceBigger={Package5Mini} alt="Nyfödd 5" />
            <Image action={() => showModal(Package6)} name="portfolioImage" source={Package6Mini} sourceBigger={Package6Mini} alt="Nyfödd 6" />
            <Image action={() => showModal(Package7)} name="portfolioImage" source={Package7Mini} sourceBigger={Package7Mini} alt="Nyfödd 7" />
            <Image action={() => showModal(Package8)} name="portfolioImage" source={Package8Mini} sourceBigger={Package8Mini} alt="Nyfödd 8" />
            <Image action={() => showModal(Package9)} name="portfolioImage" source={Package9Mini} sourceBigger={Package9Mini} alt="Nyfödd 9" />
            <Image action={() => showModal(Package10)} name="portfolioImage" source={Package10Mini} sourceBigger={Package10Mini} alt="Nyfödd 10" />
            <Image action={() => showModal(Package11)} name="portfolioImage" source={Package11Mini} sourceBigger={Package11Mini} alt="Nyfödd 11" />
            <Image action={() => showModal(Package12)} name="portfolioImage" source={Package12Mini} sourceBigger={Package12Mini} alt="Nyfödd 12" />
            <Image action={() => showModal(Package13)} name="portfolioImage" source={Package13Mini} sourceBigger={Package13Mini} alt="Nyfödd 13" />
            <Image action={() => showModal(Package14)} name="portfolioImage" source={Package14Mini} sourceBigger={Package14Mini} alt="Nyfödd 14" />
            <Image action={() => showModal(Package15)} name="portfolioImage" source={Package15Mini} sourceBigger={Package15Mini} alt="Nyfödd 16" />
            <Image action={() => showModal(Package16)} name="portfolioImage" source={Package16Mini} sourceBigger={Package16Mini} alt="Nyfödd 16" />
            <Image action={() => showModal(Package17)} name="portfolioImage" source={Package17Mini} sourceBigger={Package17Mini} alt="Nyfödd 17" />
            <Image action={() => showModal(Package18)} name="portfolioImage" source={Package18Mini} sourceBigger={Package18Mini} alt="Nyfödd 18" />
            <Image action={() => showModal(Package19)} name="portfolioImage" source={Package19Mini} sourceBigger={Package19Mini} alt="Nyfödd 19" />
            <Image action={() => showModal(Package20)} name="portfolioImage" source={Package20Mini} sourceBigger={Package20Mini} alt="Nyfödd 20" />
            <Image action={() => showModal(Package21)} name="portfolioImage" source={Package21Mini} sourceBigger={Package21Mini} alt="Nyfödd 21" />
            <Image action={() => showModal(Package22)} name="portfolioImage" source={Package22Mini} sourceBigger={Package22Mini} alt="Nyfödd 22" />
            <Image action={() => showModal(Package23)} name="portfolioImage" source={Package23Mini} sourceBigger={Package23Mini} alt="Nyfödd 23" />
            <Image action={() => showModal(Package24)} name="portfolioImage" source={Package24Mini} sourceBigger={Package24Mini} alt="Nyfödd 24" />
            <Image action={() => showModal(Package25)} name="portfolioImage" source={Package25Mini} sourceBigger={Package25Mini} alt="Nyfödd 25" />
            <Image action={() => showModal(Package26)} name="portfolioImage" source={Package26Mini} sourceBigger={Package26Mini} alt="Nyfödd 26" />

            <Modal action={hideModal} display={modalDisplay} source={activePhoto}  />
        </section>
    );
}

export default Nyfödd;