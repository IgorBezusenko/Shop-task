import React, {useState} from "react";
import NavList from "./nav-list";

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const handlerClose = () => setIsOpenMenu(false)
    return (<div className='container'>
            <div className='nav-mobile'>
                <div className=' d-flex justify-content-between py-2'><a href="/Shop-task"><h3>Logo</h3></a>
                    <button onClick={() => setIsOpenMenu(true)} className='btn btn-primary'>Menu open</button>
                </div>
                {isOpenMenu && <div  style={{
                    width: "100%",
                    height: "100%",
                    background: "#95a5a6",
                    zIndex: "10000",
                    position: "fixed",
                    top: 0,
                    right: 0
                }}
                >
                    <div className=' container d-flex justify-content-end py-2'>
                        <button onClick={handlerClose} className='btn btn-primary'>Х</button>
                    </div>
                    <NavList close={handlerClose}/>
                </div>}
            </div>
            <div className="nav-desktop"><NavList/></div>
        </div>);
};

export default Header;

