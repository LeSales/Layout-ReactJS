import React, { useState } from 'react';
import RightNav from './RightNav';
import { SandwichButton } from './AppHeader.styles';

function Sandwich() {

    const [open, setOpen] = useState(false);

    return <>
        <SandwichButton open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </SandwichButton>
        <RightNav open={open} />
    </>
}

export default Sandwich;