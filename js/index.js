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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Anchors
const anchors = document.querySelectorAll('a');
for (let i = 0; i < anchors.length; i++) {
  anchors[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  anchors[i].style.color = 'green';
}

//blog & news
const anchorBlog = document.createElement('a');
const anchorNews = document.createElement('a');
anchorBlog.href = '#';
anchorBlog.textContent = 'Blog';
anchorNews.href = '#';
anchorNews.textContent = 'News';
const nav = document.querySelector('header nav');
nav.prepend(anchorNews);
nav.appendChild(anchorBlog);
anchorBlog.style.color = 'green';
anchorNews.style.color = 'green';

//cta
const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

const codeSnipImg = document.querySelector('#cta-img');
codeSnipImg.src = siteContent.cta['img-src'];

//main-content
const paragraphs = document.querySelectorAll('.text-content');

const paragraphsEntries = Object.entries(siteContent["main-content"]);

paragraphsEntries.splice(4, 1);

for (let i = 0; i < paragraphs.length; i++) {
  let h4Temp = paragraphs[i].children[0];
  let pTemp = paragraphs[i].children[1];
  h4Temp.textContent = paragraphsEntries[0][1];
  pTemp.textContent = paragraphsEntries[1][1];
  paragraphsEntries.shift();
  paragraphsEntries.shift();
}

const midPageImg = document.querySelector('.middle-img');

midPageImg.src = 'img/mid-page-accent.jpg';

//contact
const contactInfo = document.querySelector('.contact').children;

const contactEntries = Object.entries(siteContent.contact);

for (let i = 0; i < contactInfo.length; i++) {
  let tempElement = contactInfo[i];
  tempElement.textContent = contactEntries[i][1];
}

//footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;