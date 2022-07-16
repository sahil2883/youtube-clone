import React from 'react';
import { Link } from 'react-router-dom';
import {MdHomeFilled,MdOutlineExplore} from 'react-icons/md';
import {ImPlay2} from 'react-icons/im';
import {BsCollectionPlay} from 'react-icons/bs';


const Sidebar = (props) => {
    let toggle = props.toggle;
    return (
        <div className={toggle?"flex-basics":"click-flex-basics"}>
            <div className='list'>
                <ul>
                    <li className='#'><Link to="#"><MdHomeFilled className='ivons'/>{toggle?"Home":""}</Link></li>
                    <li><Link to="#"><MdOutlineExplore className='ivons'/>{toggle?"Expolre":""}</Link></li>
                    <li><Link to="#"><ImPlay2 className='ivons'/>{toggle?"Shorts":""}</Link></li>
                    <li><Link to="#"><BsCollectionPlay className='ivons'/>{toggle?"Subscriptions":""}</Link></li>
                </ul>

                <ul>
                    <li className='#'><Link to="#"><MdHomeFilled className='ivons'/>{toggle?"Home":""}</Link></li>
                    <li><Link to="#"><MdOutlineExplore className='ivons'/>{toggle?"Expolre":""}</Link></li>
                    <li><Link to="#"><ImPlay2 className='ivons'/>{toggle?"Shorts":""}</Link></li>
                    <li><Link to="#"><BsCollectionPlay className='ivons'/>{toggle?"Subscriptions":""}</Link></li>
                    <li><Link to="#"><MdOutlineExplore className='ivons'/>{toggle?"Expolre":""}</Link></li>
                    <li><Link to="#"><ImPlay2 className='ivons'/>{toggle?"Shorts":""}</Link></li>
                </ul>

                <ul>
                    <p style={{marginLeft:"28px"}}>{toggle?"SUBSCRIPTIONS":""}</p>
                    <li className='#'><Link to="#"><MdHomeFilled className='ivons'/>{toggle?"Home":""}</Link></li>
                    <li><Link to="#"><MdOutlineExplore className='ivons'/>{toggle?"Expolre":""}</Link></li>
                    <li><Link to="#"><ImPlay2 className='ivons'/>{toggle?"Shorts":""}</Link></li>
                    <li><Link to="#"><BsCollectionPlay className='ivons'/>{toggle?"Subscriptions":""}</Link></li>
                    <li><Link to="#"><MdOutlineExplore className='ivons'/>{toggle?"Expolre":""}</Link></li>
                    <li><Link to="#"><ImPlay2 className='ivons'/>{toggle?"Shorts":""}</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar;