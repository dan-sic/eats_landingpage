// Google map API /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

let map;
function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 37.839333, lng: -84.27002 },
    zoom: 8
  });
}

// Smooth navigation scrolling effect //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let scroll = new SmoothScroll('a[href*="#"]');

// Carousel on testimonial page ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

(function() {
  const btnRight = document.querySelector("#js--carousel-btn-right");
  const btnLeft = document.querySelector("#js--carousel-btn-left");
  const slide1 = document.querySelector("#js--slide-1");
  const slide2 = document.querySelector("#js--slide-2");
  const slide3 = document.querySelector("#js--slide-3");

  const slides = [slide1, slide2, slide3];

  function changeSlides(direction) {
    let previouslyActive = null;

    slides.forEach((slide, index) => {
      // for each slide - if slide is active > make it inactive and fade out / else reset classes
      if (slide.classList.contains("slideActive")) {
        hideSlide(slide, direction);
        previouslyActive = index;
      } else {
        slide.className = "testimonials__testimonial";
      }
    });

    // now we know what slide was previously active; based on type of button clicked, either next or previous slide is displayed
    // if on the first or last slide - switches to last or first slide respectively
    if (direction === "right" && previouslyActive === 2) {
      slides[0].classList.add("slideActive", "carouselFadeInFromRight");
    } else if (direction === "right") {
      slides[previouslyActive + 1].classList.add(
        "slideActive",
        "carouselFadeInFromRight"
      );
    } else if (direction === "left" && previouslyActive === 0) {
      slides[2].classList.add("slideActive", "carouselFadeInFromLeft");
    } else {
      slides[previouslyActive - 1].classList.add(
        "slideActive",
        "carouselFadeInFromLeft"
      );
    }
  }

  // function removes active class and adds proper fadeout class, based on type of button clicked
  function hideSlide(slide, direction) {
    if (direction === "right") {
      slide.className = "testimonials__testimonial carouselFadeOutToLeft";
    } else {
      slide.className = "testimonials__testimonial carouselFadeOutToRight";
    }
  }

  btnRight.addEventListener("click", changeSlides.bind(null, "right"));
  btnLeft.addEventListener("click", changeSlides.bind(null, "left"));
})();

// Waypoint animations  ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

(function() {
  const aboutImg = document.querySelector("#js--aboutImg");
  const menuCard1 = document.querySelector("#js--menuCard-1");
  const menuCard2 = document.querySelector("#js--menuCard-2");
  const menuCard3 = document.querySelector("#js--menuCard-3");
  const menuCard4 = document.querySelector("#js--menuCard-4");
  const menuCard5 = document.querySelector("#js--menuCard-5");
  const menuCard6 = document.querySelector("#js--menuCard-6");
  const navbar = document.querySelector("#js--nav");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      aboutImg.classList.add("about__img--visible");
    }
    if (window.scrollY > 1000) {
      menuCard1.classList.add("menu__card--visible-1");
      menuCard2.classList.add("menu__card--visible-2");
      menuCard3.classList.add("menu__card--visible-3");
      menuCard4.classList.add("menu__card--visible-4");
      menuCard5.classList.add("menu__card--visible-5");
      menuCard6.classList.add("menu__card--visible-6");
    }

    if (window.scrollY > 700) {
      navbar.classList.add("nav--sticky");
    } else if (window.scrollY < 700) {
      navbar.classList.remove("nav--sticky");
    }
  });
})();

// Modal control ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
(function() {
  const buttonsOpenModal = document.querySelectorAll(".js--modal-open");
  const buttonCloseModal = document.querySelector(".js--modal-close");
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal-overlay");

  buttonsOpenModal.forEach(btn =>
    btn.addEventListener("click", () => {
      modal.classList.remove("modal--hidden");
      modal.classList.toggle("modal--active");
      modalOverlay.classList.remove("modal-overlay--hidden");
      modalOverlay.classList.toggle("modal-overlay--active");
    })
  );
  [buttonCloseModal, modalOverlay].forEach(el => {
    el.addEventListener("click", () => {
      modal.classList.toggle("modal--active");
      modal.classList.add("modal--hidden");
      modalOverlay.classList.toggle("modal-overlay--active");
      modalOverlay.classList.add("modal-overlay--hidden");
    });
  });
})();
// Mobile-nav control ///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
(function() {
  const buttonMobileNav = document.querySelector(".js--btn-nav");
  const navList = document.querySelector(".js--nav-list");
  const navLinks = document.querySelectorAll(".js--nav-link");
  const navIcon = document.querySelector(".js--nav-icon");

  buttonMobileNav.addEventListener("click", () => {
    if (navList.classList.contains("nav__links--active")) {
      navList.classList.remove("nav__links--active");
      navList.classList.add("nav__links--hidden");
      navIcon.classList.toggle("nav__icon--close");
    } else {
      navList.classList.remove("nav__links--hidden");
      navList.classList.add("nav__links--active");
      navIcon.classList.toggle("nav__icon--close");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1030) {
      navList.classList.remove("nav__links--hidden");
      navList.classList.remove("nav__links--active");
    }
  });

  navLinks.forEach(link =>
    link.addEventListener("click", () => {
      if (window.innerWidth < 1030) {
        navList.classList.remove("nav__links--active");
        navList.classList.add("nav__links--hidden");
        navIcon.classList.toggle("nav__icon--close");
      }
    })
  );
})();
