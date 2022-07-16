import React from 'react';
import Carousel from "react-multi-carousel";
import {HiOutlineDotsVertical} from 'react-icons/hi';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5

    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 12,
        autoplay: true
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Index = (props) => {
    let toggle = props.toggle
    return (
        <div className={toggle?"flex-basics-1":"click-flex-basics-1"}>
            <div className='blog'>
                <Carousel responsive={responsive}>
                    <div className='youtude'><p>All</p></div>
                    <div className='youtude'><p>Mixes</p></div>
                    <div className='youtude'><p>Music</p></div>
                    <div className='youtude'><p>Gaming</p></div>
                    <div className='youtude'><p>Film Criticisms</p></div>
                    <div className='youtude'><p>Scene</p></div>
                    <div className='youtude'><p>Kapil Sharma</p></div>
                    <div className='youtude'><p>History</p></div>
                    <div className='youtude'><p>JavaScript</p></div>
                    <div className='youtude'><p>Lo-fi</p></div>
                    <div className='youtude'><p>Live</p></div>
                    <div className='youtude'><p>Bollywood Music</p></div>
                    <div className='youtude'><p>Cricket</p></div>
                    <div className='youtude'><p>Trending</p></div>
                </Carousel>
            </div>
            <div className="content-container">
                <div className="row ">
                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <img src="https://wallpaperaccess.com/full/1615377.jpg" className="img-fluid" alt="youtude" />
                        <div className='mt-2'>
                            <div className='d-flex'>
                                <img src="https://wallpaperaccess.com/full/1615377.jpg" alt="author" width={"30px"} height={"30px"} className="round" />
                                <div className='cuyto'>
                                    <p><strong>sg duis eidu eifu ewiu</strong></p>

                                    <p className='para-new'><small>code step by step</small></p>

                                    <div className='d-flex small-head align-items-center '>
                                    <p ><small>247k views </small></p>
                                    <p className="normal-m">-</p>
                                    <p ><small> 22 hours ago</small></p>
                                    </div>
                                </div>
                                <div>
                                    <HiOutlineDotsVertical className='dots-icons'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index;