import React from 'react';
import '../Message/Message.css';

function MessageComponent({ closeModal }) {
    return (
        <div className="modal-overlays" onClick={closeModal}>
            <div className="massage flex items-start justify-evenly font-semibold pt-3 text-[1.3rem] cursor-pointer ">
                <span>Messages</span> 
                <button>click</button>
            </div>
        </div>
    )
}

export default MessageComponent;