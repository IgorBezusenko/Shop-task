import React, {useEffect, useState} from "react";
import NavList from "./nav-list";

const Header = () => {
    const [isBurger, setIsBurger] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const width = window && window.innerWidth<768
    useEffect(() => {
        if (width) {
            setIsBurger(true)
        }
    }, [width])
    return (
        <div style={{position:"relative"}}>
            {isBurger ? <>
                    <button onClick={() => setIsOpenMenu(true)} className='btn btn-primary'>Menu open</button>
                    {isOpenMenu && <div style={{ width:"100%", background:"wheat", zIndex:"10000", position:"absolute", top:0, right:0}}>
                        <button onClick={() => setIsOpenMenu(false)} className='btn btn-primary'>Х</button>
                        <NavList/></div>}</> :
                <NavList/>}
        </div>
    );
};

export default Header;

