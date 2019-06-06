const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav
let navAnchors = [];
navAnchors = document.querySelectorAll('a');

// Work on this after MVP;  you were trying to plug in the content via a loop that iterated the siteContent object and the anchors in the 
// let navContent = Object.entries(siteContent.nav);

navAnchors[0].textContent = siteContent["nav"]['nav-item-1'];
navAnchors[1].textContent = siteContent['nav']['nav-item-2'];
navAnchors[2].textContent = siteContent['nav']['nav-item-3'];
navAnchors[3].textContent = siteContent['nav']['nav-item-4'];
navAnchors[4].textContent = siteContent['nav']['nav-item-5'];
navAnchors[5].textContent = siteContent['nav']['nav-item-6'];

//CTA
let callToAction = document.getElementsByClassName('cta');
let callToActionChildren = callToAction[0].children;
let ctaTextChildren = callToActionChildren[0].children;
ctaTextChildren[0].textContent = siteContent['cta']['h1'];
ctaTextChildren[1].textContent = siteContent['cta']['button'];
callToActionChildren[1].setAttribute('src', siteContent['cta']['img-src']);

//main content
let mainContent = document.getElementsByClassName('main-content');
let mainContentChildren = mainContent[0].children;
//main content : top content
let topContent = mainContentChildren[0];
let topContentChildren = topContent.children;
topContentChildren[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContentChildren[0].children[1].textContent = siteContent['main-content']['features-content'];
topContentChildren[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContentChildren[1].children[1].textContent = siteContent['main-content']['about-content'];
//main content : mid image
mainContentChildren[1].setAttribute('src', siteContent['main-content']['middle-img-src']);
//main content : bottom content
let bottomContent = mainContentChildren[2];
let bottomContentChildren = bottomContent.children;
bottomContentChildren[0].children[0].textContent = siteContent['main-content']['services-h4'];
bottomContentChildren[0].children[1].textContent = siteContent['main-content']['services-content'];
bottomContentChildren[1].children[0].textContent = siteContent['main-content']['product-h4'];
bottomContentChildren[1].children[1].textContent = siteContent['main-content']['product-content'];
bottomContentChildren[2].children[0].textContent = siteContent['main-content']['vision-h4'];
bottomContentChildren[2].children[1].textContent = siteContent['main-content']['vision-content'];

//contact
let contactContent = document.getElementsByClassName('contact')[0];
contactContent.children[0].textContent = siteContent['contact']['contact-h4'];
contactContent.children[1].textContent = siteContent['contact']['address'];
contactContent.children[2].textContent = siteContent['contact']['phone'];
contactContent.children[3].textContent = siteContent['contact']['email'];
console.log(contactContent);