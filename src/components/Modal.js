const Modal = ({ display, action, source }) => {

    return(
        <div onClick={action} style={{ display: display }} id="modal">
            <div id="modalContent">
                <img src={source} alt="Portfolio"></img>
            </div>
        </div>
    );
}

export default Modal