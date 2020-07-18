import React from 'react';
import { LayoutWrapper } from './Styles/layout'

//functional component needs to be uppercase, or else just a function, cannot use "this" in functional components, have to pass through props to use it
//this handles the layout of the entire site
const Layout = (props) => {
    return(
        // <div>
        <LayoutWrapper>
            {props.children}
        </LayoutWrapper>
        // </div>
    )
}

export default Layout;