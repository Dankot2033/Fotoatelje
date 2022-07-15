import { useState } from "react";

const CookiesBox = () =>{

    const [cookieBoxDisplay, setCookieBoxDisplay] = useState("block");

    function cookieConsent(){
      sessionStorage.setItem("cookieConsent", "given");
      setCookieBoxDisplay("none");
    }

    return(
        //Display cookie box if consent was not yet given, else render nothing
        <div>
          {(() => {
            if(sessionStorage.getItem("cookieConsent") === "given"){
              return null;
            }else{
              return(
                <div id="cookieBox" style={{display: cookieBoxDisplay}}>
                    <h3>Webbplatsen använder kakor</h3>
                    <h4>Vi använder kakor för att förbättra din upplevelse (Google Maps) på vår hemsida och för webbanalys (Google Analytics).</h4>
                    <h4>Genom att klicka på ”Okej, jag förstår” godkänner du användandet av cookies.</h4>
                    <button onClick={() => cookieConsent()}>Okej, jag förstår</button>
                </div>
              )
            }
          })()}
        </div>
    )
}

export default CookiesBox;