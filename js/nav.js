var nav = {};

nav.nav = `
<a class="navbar-brand" href="/">
            <img src="/img/favicon/apple-touch-icon.png" width="30" height="30" class="d-inline-block align-top mr-2" alt="" loading="lazy">TRANSIENT SOUNDS</a>
        

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" id="homeLink">
              <a class="nav-link" href="/">HOME</a>
            </li>
            <li class="nav-item" id="packsLink">
              <a class="nav-link" href="/sample-packs">SAMPLE PACKS</a>
            </li>
            <!--<li class="nav-item" id="freeLink">
                <a class="nav-link" href="#">FREE PACKS</a>
              </li>--!>
              <li class="nav-item" id="aboutLink">
                <a class="nav-link" href="/about">ABOUT</a>
              </li>
            
          </ul>
        
          <button onclick="window.open('https://gumroad.com/transientsounds/');" class="btn btn-outline-light my-2 my-sm-0" type="submit">SHOP NOW</button>
        </div>
`;

nav.footer = `
<div class="row" id="socialLinks">
    <a class="col" href="https://gumroad.com/transientsounds/" target="_blank">
        <img src="img/social/gumroad.png" alt="Gumroad" />
    </a>
    <a class="col" href="https://www.instagram.com/transient_sounds/" target="_blank"> <img src="img/social/instagram.png" alt="Instagram" /> </a>
    <a class="col" href="https://soundcloud.com/transientsounds321/" target="_blank"> <img src="img/social/soundcloud.png" alt="SoundCloud" /> </a>
    <a class="col" href="https://www.youtube.com/channel/UCST-0wwXbYwRKO0Yd9M37Hg" target="_blank"> <img src="img/social/youtube.png" alt="YouTube" /> </a>
</div>
<div class="bg-primary bg-darker align-items-center"><p class="text-center py-3 text-white m-0">© 2020 Copyright: Transient Sound</p></div>
`;
	
 
    
$(document).ready(function () {
        $("nav")[0].innerHTML = nav.nav;
        $("#footer")[0].innerHTML = nav.footer;
    });
