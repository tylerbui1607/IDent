import { Component } from 'react';
import React from 'react';

import Nav from '../../common/nav';
import Footer from '../../common/footer';
import Banner from './child/banner';
import Popup from '../../components/popup';
import ServiceList from './child/listService';
import DentistList from './child/listDentist';
import ClinicInfo from './child/clinicInfo';
import MenuSidebar from '../../common/menuSidebar';
import IdentInNumber from './child/identInNumber';
class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Banner />
        <ServiceList />
        <ClinicInfo />
        <DentistList />
        <IdentInNumber />
        <Popup />
        <Footer />
        <MenuSidebar />
      </React.Fragment>
    )
  }
}

export { HomePage }