function windowScroll() {
  window.onscroll = () => {
    if (document.documentElement.scrollTop > window.innerHeight * 0.5) {
      document.querySelector(".nav").style.background =
        "url('/img/banner-bg.jpg') bottom";
      document.querySelector(".logo img").src = "/img/logo_trans.png";
      let dropBtn = document.getElementsByClassName("dropdown-btn");
      for (let i = 0; i < dropBtn.length; i++) {
        dropBtn[i].style.color = "rgb(114, 106, 106)";
      }
      document.getElementById("account-btn").style.color = "rgb(114, 106, 106)";
    } else {
      document.querySelector(".nav").style.background = "transparent";
      let dropBtn = document.getElementsByClassName("dropdown-btn");
      if (document.documentElement.scrollTop > window.innerHeight * 0.5 - 29) {
        for (let i = 0; i < dropBtn.length; i++) {
          dropBtn[i].style.color = "rgb(114, 106, 106)";
        }
        document.querySelector(".logo img").src = "/img/logo_trans.png";
        document.getElementById("account-btn").style.color =
          "rgb(114, 106, 106)";
      } else {
        for (let i = 0; i < dropBtn.length; i++) {
          dropBtn[i].style.color = "#fff";
        }
        document.querySelector(".logo img").src = "/img/logo_trans_light.png";
        document.getElementById("account-btn").style.color = "#fff";
      }
    }
  };
}
function showSidebar() {
  document.getElementById("menuSidebar").style.width = "300px";
  document
    .getElementById("menuSidebar")
    .addEventListener("transitionend", () => {
      document.body.style.overflow = "hidden";
    });
}
function closeSidebar() {
  const sidebar = document.getElementById("menuSidebar");
  sidebar.style.width = "0";
  sidebar.addEventListener("transitionend", () => {
    if (!sidebar.offsetWidth) {
      document.body.style.overflow = "auto";
    }
  });
}
function toggleSubitem() {
  const subitem = document.getElementById("sidebarSubitem");
  if (subitem.offsetHeight === 0) subitem.style.height = "9em";
  else subitem.style.height = "0";
}
function showAppointmentStatus(status) {
  if (status === "success")
    alert("Thank you! Your appointment was successfully created!");
  else alert("Something went wrong please try again latter");
}
export {
  windowScroll,
  showSidebar,
  closeSidebar,
  toggleSubitem,
  showAppointmentStatus,
};
