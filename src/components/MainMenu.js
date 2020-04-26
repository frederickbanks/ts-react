import * as React from "react";

import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import logo from '../assets/images/second_trac_logo.jpg'
import {NavBarButton} from './NavBarButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function MainMenu() {
  return (
      
    <div className="main_menu_area">
      <Container>
        <Row>
          <Col md={2} sm={12}>
              <NavBarButton/>
            <a href="Home.html">
              <img
                src={logo}
                id="second_trac_logo"
                alt="Logo"
              />
            </a>
          </Col>
          <Col md={10} sm={9} className="collapse_responsive">
        
            <div className="collapse navbar-collapse remove_padding" id="myNavbar">
                        <ul className="nav navbar-nav text-center">
                            <li>
                                <a href="Home.html">Home </a>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="service.html">Services <i className="fa fa-angle-down"><FontAwesomeIcon icon= "angle-down"/> </i></a> <span className="responsive_menu"><i class="fa fa-angle-down"></i></span>
                                <ul className="dropdown-menu dropdown-menu-responsive2">
                                    <li><a href="Cooling.html"> Cooling </a></li>
                                    <li><a href="Heating.html">Heating </a></li>
                                    <li><a href="Refrigeration.html">Refrigeration </a></li>
                                    <li><a href="Ventilation.html">Ventilation </a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                            <li className="header_right_btn">
                                <a className="btn-yellow" href="contact.html">BOOK TODAY</a>
                            </li>
                        </ul>
                    
                    </div>



          </Col>
        </Row>
      </Container>
    </div>

  );
}
