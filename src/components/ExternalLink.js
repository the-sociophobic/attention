import React from 'react'

import isTouchDevice from 'utils/isTouchDevice'


export default props =>
  <a
    className={props.className}
    href={props.to}
    target={props.newTab ? "_blank" : ""}
    rel="noopener noreferrer"
    onClick={() => props.changeColor()}
    // onMouseEnter={() => !isTouchDevice() && props.changeColor()}
  >
    {props.children}
  </a>