
/*
Design Name: Mojo Services 
Site URI: CodeTambay.com
Repo: 
Author: aljun
Description: Mojo Service Demo Web HTML, CSS, JavaScript. Static Website for Video Series Demo of CodeTambay Web Videos.
Year Create: 2019
Version: 1.0.1
*/

jQuery(document).ready(function($) {

    "use strict";

    $('.flexslider').flexslider({});

    //Bootstrap Carousel Init
    $('.carousel').carousel();

/*
|--------------------------------------------------------------------------
| Global myTheme Obj / Variable Declaration
|--------------------------------------------------------------------------
|
|
|
*/

    var myTheme = window.myTheme || {},
    $win = $( window );
    
/*
|--------------------------------------------------------------------------
| Fancybox
|--------------------------------------------------------------------------
|
|
|
*/      

    myTheme.Fancybox = function () {
        
        $(".fancybox-pop").fancybox({
            maxWidth    : 900,
            maxHeight   : 700,
            fitToView   : true,
            width       : '80%',
            height      : '80%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'elastic',
            closeEffect : 'elastic'
        });
    
    };
  


    /*
    |--------------------------------------------------------------------------
    | Functions Initializers
    |--------------------------------------------------------------------------
    |
    |
    |
    */

    myTheme.Fancybox();

    /*
    |--------------------------------------------------------------------------
    | isotope
    |--------------------------------------------------------------------------
    |
    |
    |
    */      
    //Run this in Gallery Page Only | gallery.html
    if ($(".isotopeContainer")[0]){
        console.log("Run this in Gallery Page Only!");
        $('.isotopeContainer').isotope({
            // options
            itemSelector: '.isotopeSelector',
            layoutMode: 'fitRows',
            // slow transitions
            transitionDuration: '0.8s',
        });   
    }






});