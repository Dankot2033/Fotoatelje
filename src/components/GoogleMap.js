const GoogleMap = () =>{
    return (
        //Display Google map if cookie consent was given, else render text
        <div>
          {(() => {
            if(sessionStorage.getItem("cookieConsent") === "given"){
                return(
                    <div>
                        <iframe title="Google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2116.822660579235!2d12.117467851666943!3d57.95696042723434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46455cde838521bb%3A0xd3038fd4f417ce99!2zR8O2dGVib3Jnc3bDpGdlbiA4OSwgNDQ2IDMyIMOEbHbDpG5nZW4!5e0!3m2!1ssv!2sse!4v1634397869554!5m2!1ssv!2sse"></iframe>
                    </div>
                );
            }else{
              console.log("/GoogleMap.js: Google Map waiting for cookie consent");
              return(
                  <h3>Kartan inte tillgänglig förre godkännande av cookies</h3>
                );
            }
          })()}
        </div>
    )
}

export default GoogleMap;