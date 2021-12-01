import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import Carousel1 from "./Carousel1";
import {AvForm, AvField } from 'availity-reactstrap-validation'
class Navbar extends Component {
    state={
        openModal:false
    };
    changeModal=()=>{
        this.setState({
            openModal:!this.state.openModal
        })
    };
    render() {
        const {openMenu}=this.state;
        return (
         <div>
             <div className="container">
                 <div className="row ">
                     <div className="d-flex justify-content-between">
                         <ul className={"nav"}>
                             <li className={"nav-item"}>
                                 <a href="/" className={"nav-link"}>O`zb</a>
                             </li>
                             <div className="box1"></div>
                             <li className={"nav-item"}>
                                 <a href="/Узб" className={"nav-link"}>Узб</a>
                             </li>
                             <div className="box2"></div>
                             <li className={"nav-item"}>
                                 <a href="Рус" className={"nav-link"}>Рус</a>
                             </li>
                         </ul>
                         <ul className={"nav"}>
                             <li className={"nav-item"}>
                                 <a href="/" className={"nav-link"}>Muddatli to`lov</a>
                             </li>
                             <li className={"nav-item"}>
                                 <a href="/Узб" className={"nav-link"}>Chegirmalar</a>
                             </li>
                             <li className={"nav-item"}>
                                 <a href="Рус" className={"nav-link"}>Yetkazib berish</a>
                             </li>
                             <li className={"nav-item"}>
                                 <a href="Рус" className={"nav-link"}>Yordam</a>
                             </li>

                         </ul>

                     </div>
                     <hr/>
                     <div className="meniu d-flex">
                         <div className="olcha "> <Link to="/">Olcha.uz</Link> </div>
                         <input type="text" className="input"/>
                         <button className={"icon"} ><img src="img/1.png" alt=""/> </button>
                         <div className="vayti">
                             <button className="btn d-flex"  onClick={this.changeModal}>
                                 <img src="img/odam.png" alt=""/>
                                 <div className="viti" >Войти</div>
                             </button>
                         </div>
                         <div className="vayti1">
                             <button className="btn d-flex"  >
                                 <img src="img/yur.png" alt=""/>
                                 <div className="viti1" ><a href="https://olcha.uz/cabinet#/favorite">Избранные</a> </div>
                             </button>
                         </div>
                         <div className="vayti2">
                             <button className="btn d-flex"  >
                                 <img src="img/karzinki.png" alt=""/>
                                 <div className="viti1" ><a href="https://olcha.uz/cart">Корзина</a> </div>
                             </button>
                         </div>
                     </div>
                 </div>
                 <div className="row">
                     <Modal className="w-25" isOpen={this.state.openModal} toggle={this.changeModal}>
                         <ModalHeader>
                             <div className="aft">Авторизация</div>
                             <AvForm  className="form-control1"  >

                                 <AvField
                                     type="text"
                                     name="firstName"
                                     placeholder="+998(__)___-__-__"
                                     required
                                     className=" mt-4"
                                 />

                                 <AvField
                                     type="text"
                                     name="firstName"
                                     placeholder="Пароль"
                                     required
                                     className="mt-2"
                                 />
                                 <AvField
                                     style={{transform:"scale(1)"}}
                                     type="checkbox"
                                     name="isMarried"
                                     label="Запомнить пароль"
                                     className="mt-2"
                                 />
                                 <h6 className="mt-4">Неверный логин или пароль</h6>
                                 <button className="btn bt w-100 ">Войти</button>
                                 <button className="btn border w-100 mt-3">Зарегистрироваться</button>
                                 <div className="div">
                                     <ul >
                                         <li>
                                             <a href="#">Забыли пароль?</a>
                                         </li>
                                     </ul>
                                 </div>
                             </AvForm>
                         </ModalHeader>
                     </Modal>
                 </div>

             </div>
             <div className="container">
                 <div className="row mx-5">
                  <div className="col-md-12    bottinlar d-flex">
                      <button className="btn btn2"><a href="https://olcha.uz/cabinet#/favorite">Телефоны</a></button>
                      <button className="btn btn2"><a href="https://olcha.uz/cabinet#/favorite">Кондицанеры</a></button>
                      <button className="btn btn3"><a href="https://olcha.uz/cabinet#/favorite">Vivo</a></button>
                      <button className="btn btn4"><a href="https://olcha.uz/cabinet#/favorite">Xiaomi</a></button>
                      <button className="btn btn3"><a href="https://olcha.uz/cabinet#/favorite">Samsung</a></button>
                      <button className="btn btn5"><a href="https://olcha.uz/cabinet#/favorite">Для геймеров</a></button>
                      <button className="btn btn2"><a href="https://olcha.uz/cabinet#/favorite">Парфюмерия</a></button>
                      <button className="btn btn6"><a href="https://olcha.uz/cabinet#/favorite">Realme</a></button>
                      <button className="btn btn2"><a href="https://olcha.uz/cabinet#/favorite">Авто товары</a></button>
                  </div>
                 </div>
                 <div className="row">
                         <Carousel1/>
                 </div>
             </div>
         </div>
        );
    }
}

export default Navbar;