export const ModalMakeWish = (props) => {

    if (!props.show){
        return null;
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title"> Write Your Wish here! </h4>
                </div>
                <div className="modal-body">This is body</div>
                <div className="modal-footer"><button type="button" className="modal-button">Send</button>
                    <button onClick={props.onClose} type="button" className="modal-button">close</button>
                </div>
            </div>
        </div>
    )
}