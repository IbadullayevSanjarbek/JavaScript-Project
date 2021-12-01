import React, {Component} from 'react';
import {Modal, ModalBody, } from "reactstrap";
import {AvForm, AvField } from 'availity-reactstrap-validation'
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
import Telefon from "./Meniu/Telefon";
import Nautvuk from "./Meniu/Nautvuk";
import Telivizr from "./Meniu/Telivizr";
import KamOyin from "./Meniu/KamOYIN";
import './Main.css';
import Language from "./Language";



class Button extends Component {
    state={
        openModal:false
    };

    changeOpenMenu=()=>{
        this.setState({
            openMenu:!this.state.openMenu
        });
    };
    changeModal=()=>{
        this.setState({
            openModal:!this.state.openModal
        })
    };

    render() {
        const {openMenu}=this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="but">
                        <button type="button" className="btn button1 " onClick={this.changeModal}><img src="img/log.png" alt=""/>Каталог</button>
                    </div>
                </div>
                <div className="row">
                  <div className="modol">
                      <Modal isOpen={this.state.openModal} toggle={this.changeModal}>
                          <ModalBody className={"Modal"}>
                              <BrowserRouter>
                                  <div className="user-dashboard">
                                      <div className={openMenu ? "left-side" :"close-left-side" }>
                                          <ul>
                                              <li>
                                                  <Link to="/">Telefon</Link>
                                              </li>
                                              <li>
                                                  <Link to="/Nautvuk">Nautvuk</Link>
                                              </li>
                                              <li>
                                                  <Link to="/Televizr">Televizr</Link>
                                              </li>
                                              <li>
                                                  <Link to="/KamOyin">Oyin</Link>
                                              </li>

                                          </ul>
                                      </div>

                                      <div className={openMenu ? 'right-side': 'active-right-side'}>
                                          <div className="top-menu">
                                              <div onClick={this.changeOpenMenu} className="menu">
                                                  <img src="images/menu.png" alt=""/>
                                              </div>
                                          </div>

                                          <div className="container1">
                                              <Switch>
                                                  <Route exact path="/" component={Telefon}/>
                                                  <Route path="/Nautvuk" component={Nautvuk}/>
                                                  <Route path="/Televizr" component={Telivizr}/>
                                                  <Route path="/KamOyin" component={KamOyin}/>


                                              </Switch>
                                          </div>
                                      </div>
                                  </div>
                              </BrowserRouter>
                          </ModalBody>
                      </Modal>
                  </div>
                </div>
            </div>
        );
    }
}

export default Button;


