import './ModalContent.css';
const ModalContent = (props) => {
    return (
        <div className="modal-content">
            <div className="modal-content-body">
                {props.children}
            </div>
        </div>
    )
};

export default ModalContent;