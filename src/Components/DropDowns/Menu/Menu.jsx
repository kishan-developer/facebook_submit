import React from 'react';
import '../Menu/Menu.css';
import Social from './Social/Social';
import Create from './Create/Create';

function Menu({ closeModal }) {
  return (
      <div className="modal-overlays" onClick={closeModal}>
          <div className="menu shadow-lg hover:shadow-2xl">
            <h1 className="font-bold ">Menu</h1>
            <div className="parent flex flex-row w-[auto]">
                <div className="social p-1">
                    <h2 className="text-lg font-bold my-2">Social</h2>
                    <Social/>
                </div>
                <div className="create p-1">
                    <h2 className="text-lg font-bold my-2">Create</h2>
                    <Create/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu