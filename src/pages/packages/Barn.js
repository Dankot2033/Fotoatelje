import { useState } from "react";

//  COMPONENTS  //
import Image from "../../components/Image";
import Modal from "../../components/Modal";
//  COMPONENTS END  //

//  IMAGES  //
import PackageHeader from "../../components/img/package3/package3Header.jpg";
import PackageHeaderMini from "../../components/img/package3/package3HeaderMini.jpg";

import Package1 from "../../components/img/package3/package3-1.jpg";
import Package1Mini from "../../components/img/package3/package3-1Mini.jpg";

import Package2 from "../../components/img/package3/package3-2.jpg";
import Package2Mini from "../../components/img/package3/package3-2Mini.jpg";

import Package3 from "../../components/img/package3/package3-3.jpg";
import Package3Mini from "../../components/img/package3/package3-3Mini.jpg";

import Package4 from "../../components/img/package3/package3-4.jpg";
import Package4Mini from "../../components/img/package3/package3-4Mini.jpg";

import Package5 from "../../components/img/package3/package3-5.jpg";
import Package5Mini from "../../components/img/package3/package3-5Mini.jpg";

import Package6 from "../../components/img/package3/package3-6.jpg";
import Package6Mini from "../../components/img/package3/package3-6Mini.jpg";

import Package7 from "../../components/img/package3/package3-7.jpg";
import Package7Mini from "../../components/img/package3/package3-7Mini.jpg";

import Package8 from "../../components/img/package3/package3-8.jpg";
import Package8Mini from "../../components/img/package3/package3-8Mini.jpg";

import Package9 from "../../components/img/package3/package3-9.jpg";
import Package9Mini from "../../components/img/package3/package3-9Mini.jpg";

import Package10 from "../../components/img/package3/package3-10.jpg";
import Package10Mini from "../../components/img/package3/package3-10Mini.jpg";

import Package11 from "../../components/img/package3/package3-11.jpg";
import Package11Mini from "../../components/img/package3/package3-11Mini.jpg";

import Package12 from "../../components/img/package3/package3-12.jpg";
import Package12Mini from "../../components/img/package3/package3-12Mini.jpg";

import Package13 from "../../components/img/package3/package3-13.jpg";
import Package13Mini from "../../components/img/package3/package3-13Mini.jpg";

import Package14 from "../../components/img/package3/package3-14.jpg";
import Package14Mini from "../../components/img/package3/package3-14Mini.jpg";

import Package15 from "../../components/img/package3/package3-15.jpg";
import Package15Mini from "../../components/img/package3/package3-15Mini.jpg";

import Package17 from "../../components/img/package3/package3-17.jpg";
import Package17Mini from "../../components/img/package3/package3-17Mini.jpg";

import Package18 from "../../components/img/package3/package3-18.jpg";
import Package18Mini from "../../components/img/package3/package3-18Mini.jpg";

import Package19 from "../../components/img/package3/package3-19.jpg";
import Package19Mini from "../../components/img/package3/package3-19Mini.jpg";

import Package20 from "../../components/img/package3/package3-20.jpg";
import Package20Mini from "../../components/img/package3/package3-20Mini.jpg";

import Package21 from "../../components/img/package3/package3-21.jpg";
import Package21Mini from "../../components/img/package3/package3-21Mini.jpg";

import Package22 from "../../components/img/package3/package3-22.jpg";
import Package22Mini from "../../components/img/package3/package3-22Mini.jpg";

import Package23 from "../../components/img/package3/package3-23.jpg";
import Package23Mini from "../../components/img/package3/package3-23Mini.jpg";

import Package24 from "../../components/img/package3/package3-24.jpg";
import Package24Mini from "../../components/img/package3/package3-24Mini.jpg";

import Package25 from "../../components/img/package3/package3-25.jpg";
import Package25Mini from "../../components/img/package3/package3-25Mini.jpg";

import Package26 from "../../components/img/package3/package3-26.jpg";
import Package26Mini from "../../components/img/package3/package3-26Mini.jpg";

import Package27 from "../../components/img/package3/package3-27.jpg";
import Package27Mini from "../../components/img/package3/package3-27Mini.jpg";

import Package28 from "../../components/img/package3/package3-28.jpg";
import Package28Mini from "../../components/img/package3/package3-28Mini.jpg";

import Package29 from "../../components/img/package3/package3-29.jpg";
import Package29Mini from "../../components/img/package3/package3-29Mini.jpg";

import Package30 from "../../components/img/package3/package3-30.jpg";
import Package30Mini from "../../components/img/package3/package3-30Mini.jpg";

import Package31 from "../../components/img/package3/package3-31.jpg";
import Package31Mini from "../../components/img/package3/package3-31Mini.jpg";

import Package32 from "../../components/img/package3/package3-32.jpg";
import Package32Mini from "../../components/img/package3/package3-32Mini.jpg";

import Package33 from "../../components/img/package3/package3-33.jpg";
import Package33Mini from "../../components/img/package3/package3-33Mini.jpg";
//  IMAGES END  //

const Barn = () => {

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
            <h1>* Barn *</h1>

            <Image action={() => showModal(Package1)} name="portfolioImage" source={Package1Mini} sourceBigger={Package1Mini} alt="Barn 1" />
            <Image action={() => showModal(Package3)} name="portfolioImage" source={Package3Mini} sourceBigger={Package3Mini} alt="Barn 2" />
            <Image action={() => showModal(Package4)} name="portfolioImage" source={Package4Mini} sourceBigger={Package4Mini} alt="Barn 3" />
            <Image action={() => showModal(Package2)} name="portfolioImage" source={Package2Mini} sourceBigger={Package2Mini} alt="Barn 4" />

            <div className="priceBox">
                <div>
                    <h3>Standard</h3>
                    <p>1500 kr</p>
                    <p>5 digitala bilder</p>
                    <p>5 prints i 15 x 21 format</p>
                    <p>Följande bilder: 150:-/st</p>
                </div>

                <div>
                    <h3>Premium</h3>
                    <p>2000 kr</p>
                    <p>10 digitala bilder</p>
                    <p>10 prints i 15 x 21 format</p>
                    <p>Följande bilder: 150:-/st</p>
                </div>
            </div>

            <Image name="packageHeaderImage" source={PackageHeaderMini} sourceBigger={PackageHeader} alt="Barn Header" />

            <h2>Portfolio</h2>

            <Image action={() => showModal(Package5)} name="portfolioImage" source={Package5Mini} sourceBigger={Package5Mini} alt="Barn 5" />
            <Image action={() => showModal(Package6)} name="portfolioImage" source={Package6Mini} sourceBigger={Package6Mini} alt="Barn 6" />
            <Image action={() => showModal(Package7)} name="portfolioImage" source={Package7Mini} sourceBigger={Package7Mini} alt="Barn 7" />
            <Image action={() => showModal(Package8)} name="portfolioImage" source={Package8Mini} sourceBigger={Package8Mini} alt="Barn 8" />
            <Image action={() => showModal(Package9)} name="portfolioImage" source={Package9Mini} sourceBigger={Package9Mini} alt="Barn 9" />
            <Image action={() => showModal(Package10)} name="portfolioImage" source={Package10Mini} sourceBigger={Package10Mini} alt="Barn 10" />
            <Image action={() => showModal(Package11)} name="portfolioImage" source={Package11Mini} sourceBigger={Package11Mini} alt="Barn 11" />
            <Image action={() => showModal(Package12)} name="portfolioImage" source={Package12Mini} sourceBigger={Package12Mini} alt="Barn 12" />
            <Image action={() => showModal(Package13)} name="portfolioImage" source={Package13Mini} sourceBigger={Package13Mini} alt="Barn 13" />
            <Image action={() => showModal(Package14)} name="portfolioImage" source={Package14Mini} sourceBigger={Package14Mini} alt="Barn 14" />
            <Image action={() => showModal(Package15)} name="portfolioImage" source={Package15Mini} sourceBigger={Package15Mini} alt="Barn 15" />
            <Image action={() => showModal(Package17)} name="portfolioImage" source={Package17Mini} sourceBigger={Package17Mini} alt="Barn 17" />
            <Image action={() => showModal(Package18)} name="portfolioImage" source={Package18Mini} sourceBigger={Package18Mini} alt="Barn 18" />
            <Image action={() => showModal(Package19)} name="portfolioImage" source={Package19Mini} sourceBigger={Package19Mini} alt="Barn 19" />
            <Image action={() => showModal(Package20)} name="portfolioImage" source={Package20Mini} sourceBigger={Package20Mini} alt="Barn 20" />
            <Image action={() => showModal(Package21)} name="portfolioImage" source={Package21Mini} sourceBigger={Package21Mini} alt="Barn 21" />
            <Image action={() => showModal(Package22)} name="portfolioImage" source={Package22Mini} sourceBigger={Package22Mini} alt="Barn 22" />
            <Image action={() => showModal(Package23)} name="portfolioImage" source={Package23Mini} sourceBigger={Package23Mini} alt="Barn 23" />
            <Image action={() => showModal(Package24)} name="portfolioImage" source={Package24Mini} sourceBigger={Package24Mini} alt="Barn 24" />
            <Image action={() => showModal(Package25)} name="portfolioImage" source={Package25Mini} sourceBigger={Package25Mini} alt="Barn 25" />
            <Image action={() => showModal(Package26)} name="portfolioImage" source={Package26Mini} sourceBigger={Package26Mini} alt="Barn 26" />
            <Image action={() => showModal(Package27)} name="portfolioImage" source={Package27Mini} sourceBigger={Package27Mini} alt="Barn 27" />
            <Image action={() => showModal(Package28)} name="portfolioImage" source={Package28Mini} sourceBigger={Package28Mini} alt="Barn 28" />
            <Image action={() => showModal(Package29)} name="portfolioImage" source={Package29Mini} sourceBigger={Package29Mini} alt="Barn 29" />
            <Image action={() => showModal(Package30)} name="portfolioImage" source={Package30Mini} sourceBigger={Package30Mini} alt="Barn 30" />
            <Image action={() => showModal(Package31)} name="portfolioImage" source={Package31Mini} sourceBigger={Package31Mini} alt="Barn 31" />
            <Image action={() => showModal(Package32)} name="portfolioImage" source={Package32Mini} sourceBigger={Package32Mini} alt="Barn 32" />
            <Image action={() => showModal(Package33)} name="portfolioImage" source={Package33Mini} sourceBigger={Package33Mini} alt="Barn 33" />

            <Modal action={hideModal} display={modalDisplay} source={activePhoto}  />
        </section>
    );
}

export default Barn;