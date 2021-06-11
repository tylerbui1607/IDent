import Appointment from "./child/appointment";
import Nav from "../../common/nav";
import MenuSidebar from "../../common/menuSidebar";
import Footer from "../../common/footer";
import Popup from "../../components/popup";
import React from "react";
function AppointmentPage() {
  return (
    <React.Fragment>
      <Nav />
      <Appointment />
      <Footer />
      <Popup />
      <MenuSidebar />
    </React.Fragment>
  )
}

export { AppointmentPage }