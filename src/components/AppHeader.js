import * as React from "react";

import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AppHeader() {
  return (
    <header className="header_area">
      <Container>
        <Row>
          <Col md={3} sm={4} xs={12}>
            <div className="header_social">
              <ul className="hd_social_icons">
                <li>
                  <a
                    href="https://twitter.com/Tracspecialty/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/TRAC%C2%BA-Specialty-Inc-137490960343774/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={9} sm={8} xs={12}>
            <div className="header_contact text-right">
              <ul className="hd_contact">
                <li>
                  <i className="icon-placeholder"></i> Location
                  <a href="www.google.com"> Hampton, Virginia</a>
                </li>
                <li>
                  <i className="icon-phone-call"></i> Call Now
                  <a href="tel:+1-757-827-9446">(757)-827-9446</a>
                </li>
                <li>
                  <i className="icon-clock"></i> Open 24 Hours
                  <a href="www.google.com"> </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <FontAwesomeIcon icon="twitter" />
      </div>
    </header>

  );
}
