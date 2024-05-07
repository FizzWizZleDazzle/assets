
var currentPage = 0;
var loadtime = 350;
function ShowSpinner() {
  const spinner = document.createElement('div');
  spinner.className = 'spinner-container';
  spinner.id = 'spinner'
  spinner.innerHTML = `
    <div class="spinner-border spinner-border-lg" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `;
  document.body.appendChild(spinner);
  spinner.style.display = 'block';
  setTimeout(function() {
    spinner.style.display = 'none';
  }, loadtime);
}
(() => { document.addEventListener('DOMContentLoaded', ShowSpinner); })();

function MakeEverythingVanishForASecBecauseYes() {
  var div = document.getElementById('main');
  div.style.opacity = 0.01;
  setTimeout(function() {
    div.style.opacity = 1;
  }, loadtime);
}

var authors = "Artur S Misiurev (Lead Dev) & Ian C Linder (Lead Designer), With some webdev help from Ian Mehta and Elon Musk",
  hrefs = [
    "ReloadPage(0)",
    "ReloadPage(1)",
    "ReloadPage(2)",
    //dropdown
    "#",
    "ReloadPage(3)",
    "ReloadPage(4)",
    "ReloadPage(5)"
  ],
  hrefNames = [
    "Home",
    "About",
    "Blog",
    //dropdown name
    "More",
    "Sources",
    "Quiz",
    "Fun Facts"
  ],
  title = "All About Tides",
  url = "https://cdn-icons-png.flaticon.com/512/3815/3815440.png",
  LoadNavBar = function(page) {
    var div = document.getElementById('navbar');
    var onWhichPage = [`class="nav-link"`, `class="nav-link"`, `class="nav-link"`, ''];
    if (page > 3) page = 3;
    onWhichPage[page] = `class="nav-link active" aria-current="page"`
    div.innerHTML =
      `<nav class="navbar navbar-expand-lg bg-body-tertiary rounded fixed-top" style = "font-size:24px;">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav me-auto my-2 my-lg-0" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a ${onWhichPage[0]} href='#' 
 onclick=${hrefs[0]}>${hrefNames[0]}</a>
            </li>
            <li class="nav-item">
              <a ${onWhichPage[1]} href='#' 
 onclick=${hrefs[1]}>${hrefNames[1]}</a>
            </li>
            <li class="nav-item">
              <a ${onWhichPage[2]} href='#'  onclick=${hrefs[2]}>${hrefNames[2]}</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href='#'  href=${hrefs[3]} data-bs-toggle="dropdown" aria-expanded="false">${hrefNames[3]}</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href='#' onclick=${hrefs[4]}>${hrefNames[4]}</a></li>
                <li><a class="dropdown-item" href='#' onclick=${hrefs[5]}>${hrefNames[5]}</a></li>
                <li><a class="dropdown-item" href='#' onclick=${hrefs[6]}>${hrefNames[6]}</a></li>
              </ul>
            </li>
          </ul>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Donate</button>
        </div>
      </div>
    </nav>`
  },
  LoadFooter = function() {
    var div = document.getElementById('footer');
    var txtsize = 15;
    div.innerHTML = `<div class="container">
  <footer class="py-3 my-4" style="font-size:${txtsize}px;">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item" style="font-size:${txtsize}px;"><a href="#" onclick="${hrefs[0]}" class="nav-link px-2 text-body-secondary">${hrefNames[0]}</a></li>
      <li class="nav-item" style="font-size:${txtsize}px;"><a href="#" onclick="${hrefs[1]}" class="nav-link px-2 text-body-secondary">${hrefNames[1]}</a></li>
      <li class="nav-item" style="font-size:${txtsize}px;"><a href="#" onclick="${hrefs[2]}" class="nav-link px-2 text-body-secondary">${hrefNames[2]}</a></li>
      <li class="nav-item" style="font-size:${txtsize}px;"><a href="#" onclick="${hrefs[4]}" class="nav-link px-2 text-body-secondary">${hrefNames[4]}</a></li>
      <li class="nav-item" style="font-size:${txtsize}px;"><a href="#" class="nav-link px-2 text-body-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Donate</a></li>
    </ul>
    <p class="text-center text-body-secondary">&copy; 2024 ${authors}</p>
  </footer>
</div>
`;
  },
  LoadTitle = function(page) {
    document.title = hrefNames[page] + " - " + title;
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = url;
    document.head.appendChild(link);
  },
  Classify = function(itemName, className) {
    document.getElementById(itemName).className = className;
  },
  ScreenSize = [0, 0],
  paragraphPadding = 0;
  function CheckSize() {
    ScreenSize[0] = window.screen.width;
    ScreenSize[1] = window.screen.height;
    paragraphPadding = ScreenSize[0] / 5 - 10;
    console.log(paragraphPadding);
    if (ScreenSize[0] * ScreenSize[1] < 3840 * 2160) {
      pathappend = 'resized/';
    }
  }
  var LoadPage = function() {
    document.body.innerHTML += `<div id="main"><div id="navbar"></div><div id="content"><div id="default"></div><div id="other"></div></div><div id="footer"></div></div><div id='modals'></div>`
    var page = currentPage;
    document.getElementById('spinner').innerHTML=''
    ShowSpinner()
    MakeEverythingVanishForASecBecauseYes()
    CheckSize()
    LoadContentsafterSize();
    Classify('content', 'side-padding');
    Classify('navbar', 'bottom-padding');
    Classify('footer', 'top-padding');
    LoadTitle(page);
    LoadNavBar(page);
    LoadDefaultContent();
    LoadContent(page);
    LoadFooter();
    quizContent()
    Donate()
    //document.getElementById('box').innerHTML='All About Tides \n' + hrefNames[page];
    //document.body.style.display = 'none';
    document.addEventListener('resize', Resize);
  },
  Clear = function() {
    var stuff = document.getElementById('navbar');
    stuff.innerHTML = '';
    stuff = document.getElementById('other');
    stuff.innerHTML = '';
    document.title = 'noTitle';
  },
  ReloadPage = function(page) {
    removelistener()
    MakeEverythingVanishForASecBecauseYes();
    ShowSpinner();
    Clear();
    LoadNavBar(page);
    LoadContent(page);
    LoadTitle(page);
    //document.getElementById('box').innerHTML='All About Tides \n' + hrefNames[page];
    currentPage = page
  }

  , Resize = function() {
    for (let i in imgs) {
      document.getElementById(imgs[i]).style.width = Math.min(100, window.innerWidth * 0.8) + '%';
    }
    CheckSize()
    LoadContentsafterSize()
    ReloadPage(currentPage)
  }
