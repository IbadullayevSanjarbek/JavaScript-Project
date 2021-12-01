import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel1 extends Component {
    render() {
        const settings1 = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-9 corou">

                            <Carousel prevLabel={true} nextLabel={true}>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block coruselimg "
                                        src="img/SOAT.png"

                                    />
                                </Carousel.Item>
                                <Carousel.Item  interval={2000}>
                                    <img
                                        className="d-block coruselimg "
                                        src="img/redbluts.png"

                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block coruselimg "
                                        src="img/blackbluts.png"

                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block coruselimg "
                                        src="img/bluebluts.png"
                                        alt="Third slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block coruselimg "
                                        src="img/kalonka.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block coruselimg "
                                        src="img/atir.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block coruselimg "
                                        src="img/click.png"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-3">
                            <div className="card mx-1">
                                <div className="card1">
                                    <div className="kond">Кондиционеры</div>
                                    <div className="lor">Кондиционеры в рассрочку по самой выгодной цене</div>
                                    <img className={'imgi'} src="img/kandisaner.png" alt=""/>
                                    <button type={'button'} className={'btn btnbtn'}>Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <header className="section-heading">
                            <a href="/popular">
                                <h3 className={'section-title'}>Популярные товары</h3>
                            </a>

                        </header>
                        <div className="body">
                            <Slider {...settings}>
                                <div className="col-md-3">
                                    <div className="card card1 mx-2">
                                        <img
                                            className="d-block telefonlarimg "
                                            src="img/A32.jpeg"

                                        />
                                        <div className="smartfon">
                                            Смартфоны
                                        </div>
                                        <div className="sumaa d-flex ">
                                            <div className="baxosi ">
                                                <b>  2 994 000 сум</b>
                                            </div>
                                            <div className="baxosi1 mx-2 ">
                                                <b> <del>3 334 000 сум</del></b>
                                            </div>
                                        </div>
                                        <button className={'sumaa1'}>291 000 сум / мес.</button>
                                        <div className="Samsung32">Samsung Galaxy A32 <br/> 4/64GB Awesome Black</div>
                                        <button type='button' className={'kupit'}><a href="#">Купить</a></button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card1 mx-2">
                                        <img
                                            className="d-block telefonlarimg "
                                            src="img/A12.jpeg"

                                        />
                                        <div className="smartfon">
                                            Смартфоны
                                        </div>
                                        <div className="sumaa d-flex ">
                                            <div className="baxosi ">
                                                <b>  1 885 000 сум</b>
                                            </div>
                                            <div className="baxosi1 mx-2 ">
                                                <b> <del>2 274 000 сум</del></b>
                                            </div>
                                        </div>
                                        <button className={'sumaa1'}>183 000 сум / мес.</button>
                                        <div className="Samsung32">Samsung Galaxy A12 <br/> 3/32GB, A125 Black</div>
                                        <button type='button' className={'kupit'}><a href="#">Купить</a></button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card1 mx-2">
                                        <img
                                            className="d-block telefonlarimg "
                                            src="img/node10.jpeg"

                                        />
                                        <div className="smartfon">
                                            Смартфоны
                                        </div>
                                        <div className="sumaa d-flex ">
                                            <div className="baxosi ">
                                                <b>  4 222 000 сум</b>
                                            </div>
                                            <div className="baxosi1 mx-2 ">
                                                <b> <del>4 823 000 сум</del></b>
                                            </div>
                                        </div>
                                        <button className={'sumaa1'}>410 000 сум / мес.</button>
                                        <div className="Samsung32">Xiome Redmi Node 10 Pro <br/> 8/128GB</div>
                                        <button type='button' className={'kupit'}><a href="#">Купить</a></button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card1 mx-2">
                                        <img
                                            className="d-block telefonlarimg "
                                            src="img/nokia.jpeg"

                                        />
                                        <div className="smartfon">
                                            Кнопочные телефоны
                                        </div>
                                        <div className="sumaa d-flex ">
                                            <div className="baxosi ">
                                                <b>  1 142 000 сум</b>
                                            </div>

                                        </div>
                                        <button className={'sumaa1'}>111 000 сум / мес.</button>
                                        <div className="Samsung32">Nokia 2720 Dual, Blak <br/> <br/></div>
                                        <button type='button' className={'kupit'}><a href="#">Купить</a></button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card1 mx-2">
                                        <img
                                            className="d-block telefonlarimg "
                                            src="img/Xiomess.jpeg"

                                        />
                                        <div className="smartfon">
                                            Смартфоны
                                        </div>
                                        <div className="sumaa d-flex ">
                                            <div className="baxosi ">
                                                <b>299 000 сум</b>
                                            </div>
                                            <div className="baxosi1 mx-2 ">
                                                <b> <del>399 000 сум</del></b>
                                            </div>
                                        </div>
                                        <button className={'sumaa1'}>29 000 сум / мес.</button>
                                        <div className="Samsung32">Xiome Mi Band 5, Black <br/> XMSH10HM (Global version</div>
                                        <button type='button' className={'kupit'}><a href="#">Купить</a></button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card1 mx-2">
                                        <img
                                            className="d-block telefonlarimg "
                                            src="img/redmi9t.jpeg"

                                        />
                                        <div className="smartfon">
                                            Смартфоны
                                        </div>
                                        <div className="sumaa d-flex ">
                                            <div className="baxosi ">
                                                <b>  2 208 000 сум</b>
                                            </div>
                                            <div className="baxosi1 mx-2 ">
                                                <b> <del>2 481 000 сум</del></b>
                                            </div>
                                        </div>
                                        <button className={'sumaa1'}>215 000 сум / мес.</button>
                                        <div className="Samsung32">Xiome Redmi 9T 4/128GB <br/>Carbon Gray</div>
                                        <button type='button' className={'kupit'}><a href="#">Купить</a></button>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div>
                            <Slider {...settings1}>
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

        );
    }
}

export default Carousel1;