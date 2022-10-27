import React from 'react';
import { CDBFooter,CDBBox,  CDBBtn, CDBIcon,  } from 'cdbreact';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <CDBFooter className="shadow text-primary bg-light" >
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <Link href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="https://media.istockphoto.com/photos/graphic-digital-eagle-flying-connection-technology-concept-picture-id1155816684?b=1&k=20&m=1155816684&s=170667a&w=0&h=3Rn1G5A052tsGaffVHwLw9ta3S8VB1c73DU0LDICVSI="
              width="40px"
            />
            <span className="ml-4 h5 mb-0 font-weight-bold">TechEagle</span>
          </Link>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; TechEagle, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
        </div>
    );
};

export default Footer;