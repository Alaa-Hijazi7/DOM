const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here
document.title = 'AlaaHijazi';
let navitems  = document.getElementsByTagName("a");
navitems[0].textContent = siteContent.nav['nav-item-1'];
navitems[1].textContent = siteContent.nav['nav-item-2'];
navitems[2].textContent = siteContent.nav['nav-item-3'];
navitems[3].textContent = siteContent.nav['nav-item-4'];
navitems[4].textContent = siteContent.nav['nav-item-5'];
navitems[5].textContent = siteContent.nav['nav-item-6'];
const newNavItem = document.querySelector('body > div > header > nav') 
let navItem7 = document.createElement('a');
navItem7.textContent = "Alaa";
newNavItem.appendChild(navItem7);

const newNavItem1 = document.querySelector('body > div > header > nav') 
let navItem8 = document.createElement('a');
navItem8.textContent = "Hijazi";
newNavItem1.appendChild(navItem8);


for(let i = 0; i<navitems.length; i++){
  navitems[i].style.color = "green";
}
document.getElementById("logo-img").src = siteContent.nav['img-src'];

let h1text = document.getElementsByTagName('h1');
h1text[0].textContent = siteContent.cta.h1;
let btn = document.getElementsByTagName('button');
btn[0].textContent = siteContent.cta.button;
document.getElementById("cta-img").src = siteContent.cta['img-src'];

let h4 = document.getElementsByTagName('h4');
h4[0].textContent = siteContent["main-content"]["features-h4"];
let par = document.getElementsByTagName('p');
par[0].textContent = siteContent["main-content"]["features-content"];

h4[1].textContent = siteContent["main-content"]["about-h4"];
par[1].textContent = siteContent["main-content"]["about-content"];
document.getElementById("middle-img").src =siteContent["main-content"]['middle-img-src'];

h4[2].textContent = siteContent["main-content"]["services-h4"];
par[2].textContent = siteContent["main-content"]["services-content"];

h4[3].textContent = siteContent["main-content"]["product-h4"];
par[3].textContent = siteContent["main-content"]["product-content"];

h4[4].textContent = siteContent["main-content"]["vision-h4"];
par[4].textContent = siteContent["main-content"]["vision-content"];

h4[5].textContent = siteContent.contact["contact-h4"];
par[5].textContent = siteContent.contact.address;
par[6].textContent = siteContent.contact.phone;
par[7].textContent = siteContent.contact.email;

par[8].textContent = siteContent.footer.copyright;
