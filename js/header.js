const btns = document.querySelector("#btn-mbl-nav");

btns.addEventListener("click", (e) => {
  const btn = document.querySelector("#btn-mbl-nav button");
  btn.classList.toggle('open')
  let stylenav = document.querySelector("#header-main-list");
  let headerMain = document.querySelector(".header-main").style;
  if (stylenav.style.display === "none" || stylenav.style.display === "") {
    stylenav.style.display = "block";
    headerMain.position = "sticky";
    headerMain.top = "0";
  } else {

      stylenav.style.display = "none";
      headerMain.position = "static";
  }
});


// we use a simple 1 pixel wide line
