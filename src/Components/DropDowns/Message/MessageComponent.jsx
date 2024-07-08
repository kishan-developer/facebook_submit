import React from 'react';
import '../Message/Message.css';

function MessageComponent({ closeModal }) {
    return (
        <div className="modal-overlays" onClick={closeModal}>
            <div className="massage">MessageComponent</div>
        </div>
    )
}

export default MessageComponent;