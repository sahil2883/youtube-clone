import React from 'react';
import {HiOutlineMenuAlt2} from 'react-icons/hi';
import {BsYoutube,BsFillGrid3X3GapFill} from 'react-icons/bs';
import {SiYoutubestudio} from 'react-icons/si';
import {AiOutlineVideoCameraAdd , AiOutlineSearch} from 'react-icons/ai';
import {MdOutlineNotificationsNone,MdKeyboardVoice,MdClose} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';

const Header1 = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row p-2 align-items-center'>
                <div className='col-md-2'>
                    <HiOutlineMenuAlt2 className='custom-1' onClick={props.change}/>
                    <BsYoutube className='custom-2'/>
                    <SiYoutubestudio className='custom-3'/>
                </div>

                <div className='col-md-8'>
                    <div className='d-flex c-m align-items-center'>
                    <input className='form-control' placeholder='search' />
                    <MdClose className="custom-1 posir"/>
                    <button class="bnt"><AiOutlineSearch/></button>
                    <MdKeyboardVoice className="custom-1 mike" />
                    </div>
                </div>

                <div className='col-md-2'>
                    <AiOutlineVideoCameraAdd className="custom-1" />
                    <BsFillGrid3X3GapFill className="custom-1" />
                    <MdOutlineNotificationsNone className="custom-1" />
                    <CgProfile className="custom-1"/>
                </div>

            </div>
        </div>
    )
}

export default Header1;