const Image = ({name, source, sourceBigger, alt, action }) => {

    if(window.innerWidth > 500){
        return <img onClick={action} className={name} src={sourceBigger} alt={alt}></img>
    } else{
        return <img onClick={action} className={name} src={source} alt={alt}></img>
    }    
}

export default Image