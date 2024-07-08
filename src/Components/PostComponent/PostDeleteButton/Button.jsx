import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Button() {
  return (
    <div>
        <MoreHorizIcon onClick={() => setEditModel(!editmodel)} />
    </div>
  )
}

export default Button