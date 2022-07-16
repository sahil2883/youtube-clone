import React from "react";
import img from '../img/i.jpg';
import img1 from '../img/2.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import about from '../img/about.jpg';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5

    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        autoplay:true
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


const Home = () => {
    const data = [{
        "img": img,
        "head": "this is first head",
        "desc": "this is first and first description. this is first and first description"
    },
    {
        "img": img1,
        "head": "this is second head",
        "desc": "this is second and second description"
    },
    {
        "img": img,
        "head": "this is third head",
        "desc": "this is third and third description"
    },
    {
        "img": img1,
        "head": "this is fouth head",
        "desc": "this is fouth and fouth description"
    },
    {
        "img": img,
        "head": "this is five head",
        "desc": "this is five and five description"
    },
    {
        "img": img1,
        "head": "this is six head",
        "desc": "this is six and six description"
    }]
    return (
        <div className="container mt-5">
            <div className="row">
                <div>
                    <h2>Blogs</h2>
                </div>
            </div>
            <div className="row">
                {data.map((e, index) => {
                    return (
                        <div className="col-md-4 mt-3">
                            <div key={index} className="dashboard">
                                <img src={e.img} width={"100%"} height={"250px"} />
                                <div className="p-3">
                                    <h5>{e.head}</h5>
                                    <p>{e.desc}</p>
                                </div>
                            </div>
                        </div>
                    )

                })}

            </div>
            <section className="mt-5">
                <div className="row">
                    <div>
                        <h2>About Us</h2>
                    </div>
                </div>

                <div className="row">
                    <Carousel responsive={responsive}>
                        <div className="about row ">
                            <div className="col-md-5">
                                <img src={about} alt="img" width={"100%"} />
                            </div>
                            <div className="col-md-7">
                                <h2>About us</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nam delectus, doloremque numquam explicabo quaerat laudantium accusamus. Sequi error unde deserunt fugiat praesentium minus modi aut consequatur minima, quisquam, quod a, illum et doloremque atque. Veniam adipisci animi quas! Fugit maxime alias itaque doloremque saepe?</p>
                            </div>
                        </div>

                        <div className="about row ">
                            <div className="col-md-5">
                                <img src={img} alt="img" width={"100%"} />
                            </div>
                            <div className="col-md-7">
                                <h2>About us</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nam delectus, doloremque numquam explicabo quaerat laudantium accusamus. Sequi error unde deserunt fugiat praesentium minus modi aut consequatur minima, quisquam, quod a, illum et doloremque atque. Veniam adipisci animi quas! Fugit maxime alias itaque doloremque saepe?</p>
                            </div>
                        </div>

                        <div className="about row ">
                            <div className="col-md-5">
                                <img src={about} alt="img" width={"100%"} />
                            </div>
                            <div className="col-md-7">
                                <h2>About us</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nam delectus, doloremque numquam explicabo quaerat laudantium accusamus. Sequi error unde deserunt fugiat praesentium minus modi aut consequatur minima, quisquam, quod a, illum et doloremque atque. Veniam adipisci animi quas! Fugit maxime alias itaque doloremque saepe?</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
        </div>
    )
}

export default Home;