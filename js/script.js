// Tab toggle
var TabList = document.querySelectorAll('.nav-tabs .nav-item a');

TabList.forEach(function(e){
    var Tabtrigger = new bootstrap.Tab(e);
    e.addEventListener('click', function(e){
        e.preventDefault();
        Tabtrigger.show();
    })

})

// isotope js

var grid = document.querySelector('.grid');
var iso;

imagesLoaded( grid, function(){

    iso = new Isotope(grid, {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        
    })

    var filterElm = document.querySelector('.portfolio-filter');

    filterElm.addEventListener('click', function(event){
        if(!matchesSelector(event.target, 'button')){
            return;
        }

        var filterValue = event.target.getAttribute('data-filter');

        iso.arrange({
            filter: filterValue
        })

    })


} );

var btnElem = document.querySelectorAll('.fil-btn');


btnElem.forEach(function(el, key){
    el.addEventListener('click', function(){
        el.classList.add('clicked');

        btnElem.forEach(function(ell, keys){
            if(key != keys){
                ell.classList.remove('clicked')
            }
        })

    })
})

window.addEventListener('scroll', function(){

    var scrolled = window.pageYOffset;
    var topbtn = document.querySelector('.scroll-to-top');

    if(scrolled > 700){
        topbtn.classList.add('d-inline-block');
    }
    if(scrolled < 700){
        topbtn.classList.remove('d-inline-block');
    }
    console.log(scrolled)
});

//Navbar

window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        document.getElementById('navbar-scroll').classList.add('fixed-top');
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } else {
        document.getElementById('navbar-scroll').classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
    }
})