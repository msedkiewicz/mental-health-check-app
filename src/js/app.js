import { select, classNames } from './settings.js';
import Home from './Components/Home.js';

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;
    for( let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks){
      link.addEventListener('click', function(e){
        const clickedElement = this;
        e.preventDefault();
        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);
        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }
  },
  initHomePage: function(){
    const thisApp = this;

    const homeElement  = document.querySelector(select.containerOf.home);

    thisApp.home = new Home(homeElement);
  },
  activatePage: function(pageId){
    const thisApp = this;

    /* add class "active" to matching pages, remove from non-matching pages */
    for (let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class "active" to matching links, remove from non-matching links */
    for (let link of thisApp.navLinks){
      link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
    }

  },
  init: function(){
    const thisApp = this;

    thisApp.initPages();
    thisApp.initHomePage();
  },
};
app.init();