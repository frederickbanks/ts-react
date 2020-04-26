import * as React from "react";
import {Button} from 'react-bootstrap'


export function NavBarButton() {
  return (
    <Button type="button" className="navbar-toggles" data-toggle="collapse">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </Button>
  );
}
