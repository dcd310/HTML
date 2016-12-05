$ = jQuery;
// page init
jQuery(function () {
    initTouchNav();
    initMobileNav();
    initDropDownClasses();
    initBxSlider();
    // initAnchors();
    initStellarParallax();
    initScrollClass();
    initScrollReveal();
    initFancyBox();
    // jQuery(".progress-bar").loading();
    initCustomForms();
    initSameHeight();
    jQuery('input, textarea').placeholder();
    initSlickSlider();
    initTopicSelect();
    initTabs();
});

!function(a,b){"use strict";function c(a,b){this.$holder=a,this.options=b,this.init()}c.prototype={init:function(){this.$tabLinks=this.$holder.find(this.options.tabLinks),this.setStartActiveIndex(),this.setActiveTab(),this.options.autoHeight&&(this.$tabHolder=a(this.$tabLinks.eq(0).attr(this.options.attrib)).parent())},setStartActiveIndex:function(){var d,a=this.getClassTarget(this.$tabLinks),b=a.filter("."+this.options.activeClass),c=this.$tabLinks.filter("["+this.options.attrib+'="'+location.hash+'"]');this.options.checkHash&&c.length&&(b=c),d=a.index(b),this.activeTabIndex=this.prevTabIndex=d===-1?this.options.defaultTab?0:null:d},setActiveTab:function(){var b=this;this.$tabLinks.each(function(c,d){var e=a(d),f=b.getClassTarget(e),g=a(e.attr(b.options.attrib));c!==b.activeTabIndex?(f.removeClass(b.options.activeClass),g.addClass(b.options.tabHiddenClass).removeClass(b.options.activeClass)):(f.addClass(b.options.activeClass),g.removeClass(b.options.tabHiddenClass).addClass(b.options.activeClass)),b.attachTabLink(e,c)})},attachTabLink:function(a,b){var c=this;a.on(this.options.event+".tabset",function(a){a.preventDefault(),c.activeTabIndex===c.prevTabIndex&&c.activeTabIndex!==b&&(c.activeTabIndex=b,c.switchTabs())})},resizeHolder:function(a){var b=this;a?(this.$tabHolder.height(a),setTimeout(function(){b.$tabHolder.addClass("transition")},10)):b.$tabHolder.removeClass("transition").height("")},switchTabs:function(){var a=this,b=this.$tabLinks.eq(this.prevTabIndex),c=this.$tabLinks.eq(this.activeTabIndex),d=this.getTab(b),e=this.getTab(c);d.removeClass(this.options.activeClass),a.haveTabHolder()&&this.resizeHolder(d.outerHeight()),setTimeout(function(){a.getClassTarget(b).removeClass(a.options.activeClass),d.addClass(a.options.tabHiddenClass),e.removeClass(a.options.tabHiddenClass).addClass(a.options.activeClass),a.getClassTarget(c).addClass(a.options.activeClass),a.haveTabHolder()?(a.resizeHolder(e.outerHeight()),setTimeout(function(){a.resizeHolder(),a.prevTabIndex=a.activeTabIndex},a.options.animSpeed)):a.prevTabIndex=a.activeTabIndex},this.options.autoHeight?this.options.animSpeed:1)},getClassTarget:function(a){return this.options.addToParent?a.parent():a},getActiveTab:function(){return this.getTab(this.$tabLinks.eq(this.activeTabIndex))},getTab:function(b){return a(b.attr(this.options.attrib))},haveTabHolder:function(){return this.$tabHolder&&this.$tabHolder.length},destroy:function(){var b=this;this.$tabLinks.off(".tabset").each(function(){var c=a(this);b.getClassTarget(c).removeClass(b.options.activeClass),a(c.attr(b.options.attrib)).removeClass(b.options.activeClass+" "+b.options.tabHiddenClass)}),this.$holder.removeData("Tabset")}},a.fn.tabset=function(b){return b=a.extend({activeClass:"active",addToParent:!1,autoHeight:!1,checkHash:!1,defaultTab:!0,animSpeed:500,tabLinks:"a",attrib:"href",event:"click",tabHiddenClass:"js-tab-hidden"},b),b.autoHeight=b.autoHeight&&a.support.opacity,this.each(function(){var d=a(this);d.data("Tabset")||d.data("Tabset",new c(d,b))})}}(jQuery,jQuery(window));

// content tabs init
function initTabs() {
    jQuery('ul.tabset').tabset({
        tabLinks: 'a',
        addToParent: true,
        defaultTab: false
    });
}

jQuery(window).scroll(function () {
    initProgressBarLoading();
    initPieChart();
})

jQuery(window).load(function () {
    initProgressBarLoading();
})

function initTopicSelect() {
    // $('.topic-slide').hide();
    $('.topics-block').on('click', '.topic-toggle', function(e){
        e.preventDefault();
        $('.topic-slide').toggle();
    });
    $('.topic-list').on('click', 'a', function(e){
        if($(this).parents('.category-list')){
            return true;
        }
        e.preventDefault();
        var aText = $(this).text();
        $('.topics-block').find('.topic-toggle').html(aText);
        $('.topic-slide').hide();
    });
}

// initialize custom form elements
function initCustomForms() {
    jcf.setOptions('Select', {
        wrapNative: false
    });
    jcf.replaceAll();
}

function initSlickSlider() {
    jQuery(".mobile-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide:'.slide',
        responsive: [{
            breakpoint: 5000,
            settings: "unslick"
        }, {
            breakpoint: 768,
            settings: "slick"
        }]
    });
}

/*
SLICK.JS
Version: 1.6.0
Author: Ken Wheeler
Website: http://kenwheeler.github.io
Docs: http://kenwheeler.github.io/slick
Repo: http://github.com/kenwheeler/slick
Issues: http://github.com/kenwheeler/slick/issues
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
    d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});


// align blocks height
function initSameHeight() {
    jQuery('.items-block').sameHeight({
        elements: '.item-holder',
        flexible: true,
        multiLine: true
    });
}

/*
 * jQuery SameHeight plugin
 */
 ;
 (function ($) {
    $.fn.sameHeight = function (opt) {
        var options = $.extend({
            skipClass: 'same-height-ignore',
            leftEdgeClass: 'same-height-left',
            rightEdgeClass: 'same-height-right',
            elements: '>*',
            flexible: false,
            multiLine: false,
            useMinHeight: false,
            biggestHeight: false
        }, opt);
        return this.each(function () {
            var holder = $(this), postResizeTimer, ignoreResize;
            var elements = holder.find(options.elements).not('.' + options.skipClass);
            if (!elements.length)
                return;

            // resize handler
            function doResize() {
                elements.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', '');
                if (options.multiLine) {
                    // resize elements row by row
                    resizeElementsByRows(elements, options);
                } else {
                    // resize elements by holder
                    resizeElements(elements, holder, options);
                }
            }
            doResize();

            // handle flexible layout / font resize
            var delayedResizeHandler = function () {
                if (!ignoreResize) {
                    ignoreResize = true;
                    doResize();
                    clearTimeout(postResizeTimer);
                    postResizeTimer = setTimeout(function () {
                        doResize();
                        setTimeout(function () {
                            ignoreResize = false;
                        }, 10);
                    }, 100);
                }
            };

            // handle flexible/responsive layout
            if (options.flexible) {
                $(window).bind('resize orientationchange fontresize', delayedResizeHandler);
            }

            // handle complete page load including images and fonts
            $(window).bind('load', delayedResizeHandler);
        });
    };

    // detect css min-height support
    var supportMinHeight = typeof document.documentElement.style.maxHeight !== 'undefined';

    // get elements by rows
    function resizeElementsByRows(boxes, options) {
        var currentRow = $(), maxHeight, maxCalcHeight = 0, firstOffset = boxes.eq(0).offset().top;
        boxes.each(function (ind) {
            var curItem = $(this);
            if (curItem.offset().top === firstOffset) {
                currentRow = currentRow.add(this);
            } else {
                maxHeight = getMaxHeight(currentRow);
                maxCalcHeight = Math.max(maxCalcHeight, resizeElements(currentRow, maxHeight, options));
                currentRow = curItem;
                firstOffset = curItem.offset().top;
            }
        });
        if (currentRow.length) {
            maxHeight = getMaxHeight(currentRow);
            maxCalcHeight = Math.max(maxCalcHeight, resizeElements(currentRow, maxHeight, options));
        }
        if (options.biggestHeight) {
            boxes.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', maxCalcHeight);
        }
    }

    // calculate max element height
    function getMaxHeight(boxes) {
        var maxHeight = 0;
        boxes.each(function () {
            maxHeight = Math.max(maxHeight, $(this).outerHeight());
        });
        return maxHeight;
    }

    // resize helper function
    function resizeElements(boxes, parent, options) {
        var calcHeight;
        var parentHeight = typeof parent === 'number' ? parent : parent.height();
        boxes.removeClass(options.leftEdgeClass).removeClass(options.rightEdgeClass).each(function (i) {
            var element = $(this);
            var depthDiffHeight = 0;
            var isBorderBox = element.css('boxSizing') === 'border-box' || element.css('-moz-box-sizing') === 'border-box' || element.css('-webkit-box-sizing') === 'border-box';

            if (typeof parent !== 'number') {
                element.parents().each(function () {
                    var tmpParent = $(this);
                    if (parent.is(this)) {
                        return false;
                    } else {
                        depthDiffHeight += tmpParent.outerHeight() - tmpParent.height();
                    }
                });
            }
            calcHeight = parentHeight - depthDiffHeight;
            calcHeight -= isBorderBox ? 0 : element.outerHeight() - element.height();

            if (calcHeight > 0) {
                element.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', calcHeight);
            }
        });
        boxes.filter(':first').addClass(options.leftEdgeClass);
        boxes.filter(':last').addClass(options.rightEdgeClass);
        return calcHeight;
    }
}(jQuery));

/*
 * jQuery FontResize Event
 */
 jQuery.onFontResize = (function ($) {
    $(function () {
        var randomID = 'font-resize-frame-' + Math.floor(Math.random() * 1000);
        var resizeFrame = $('<iframe>').attr('id', randomID).addClass('font-resize-helper');

        // required styles
        resizeFrame.css({
            width: '100em',
            height: '10px',
            position: 'absolute',
            borderWidth: 0,
            top: '-9999px',
            left: '-9999px'
        }).appendTo('body');

        // use native IE resize event if possible
        if (window.attachEvent && !window.addEventListener) {
            resizeFrame.bind('resize', function () {
                $.onFontResize.trigger(resizeFrame[0].offsetWidth / 100);
            });
        }
        // use script inside the iframe to detect resize for other browsers
        else {
            var doc = resizeFrame[0].contentWindow.document;
            doc.open();
            doc.write('<scri' + 'pt>window.onload = function(){var em = parent.jQuery("#' + randomID + '")[0];window.onresize = function(){if(parent.jQuery.onFontResize){parent.jQuery.onFontResize.trigger(em.offsetWidth / 100);}}};</scri' + 'pt>');
            doc.close();
        }
        jQuery.onFontResize.initialSize = resizeFrame[0].offsetWidth / 100;
    });
    return {
        // public method, so it can be called from within the iframe
        trigger: function (em) {
            $(window).trigger("fontresize", [em]);
        }
    };
}(jQuery));

 /*! http://mths.be/placeholder v2.0.7 by @mathias */
 ;
 (function (window, document, $) {

    // Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
    var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function () {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function () {
            var $this = this;
            $this
            .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
            .not('.placeholder')
            .bind({
                'focus.placeholder': clearPlaceholder,
                'blur.placeholder': setPlaceholder
            })
            .data('placeholder-enabled', true)
            .trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function (element) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }

                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function (element, value) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }

                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != safeActiveElement()) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }

        $(function () {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function () {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function () {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function () {
            $('.placeholder').each(function () {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function (i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({'type': 'text'});
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), {'type': 'text'}));
                    }
                    $replacement
                    .removeAttr('name')
                    .data({
                        'placeholder-password': $input,
                        'placeholder-id': id
                    })
                    .bind('focus.placeholder', clearPlaceholder);
                    $input
                    .data({
                        'placeholder-textinput': $replacement,
                        'placeholder-id': id
                    })
                    .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

    function safeActiveElement() {
        // Avoid IE9 `document.activeElement` of death
        // https://github.com/mathiasbynens/jquery-placeholder/pull/99
        try {
            return document.activeElement;
        } catch (err) {
        }
    }

}(this, document, jQuery));

/*!
 * JavaScript Custom Forms
 *
 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.1.3
 */
 ;
 (function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.jcf = factory(jQuery);
    }
}(this, function ($) {
    'use strict';

    // define version
    var version = '1.1.3';

    // private variables
    var customInstances = [];

    // default global options
    var commonOptions = {
        optionsKey: 'jcf',
        dataKey: 'jcf-instance',
        rtlClass: 'jcf-rtl',
        focusClass: 'jcf-focus',
        pressedClass: 'jcf-pressed',
        disabledClass: 'jcf-disabled',
        hiddenClass: 'jcf-hidden',
        resetAppearanceClass: 'jcf-reset-appearance',
        unselectableClass: 'jcf-unselectable'
    };

    // detect device type
    var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
    isWinPhoneDevice = /Windows Phone/.test(navigator.userAgent);
    commonOptions.isMobileDevice = !!(isTouchDevice || isWinPhoneDevice);

    // create global stylesheet if custom forms are used
    var createStyleSheet = function () {
        var styleTag = $('<style>').appendTo('head'),
        styleSheet = styleTag.prop('sheet') || styleTag.prop('styleSheet');

        // crossbrowser style handling
        var addCSSRule = function (selector, rules, index) {
            if (styleSheet.insertRule) {
                styleSheet.insertRule(selector + '{' + rules + '}', index);
            } else {
                styleSheet.addRule(selector, rules, index);
            }
        };

        // add special rules
        addCSSRule('.' + commonOptions.hiddenClass, 'position:absolute !important;left:-9999px !important;height:1px !important;width:1px !important;margin:0 !important;border-width:0 !important;-webkit-appearance:none;-moz-appearance:none;appearance:none');
        addCSSRule('.' + commonOptions.rtlClass + ' .' + commonOptions.hiddenClass, 'right:-9999px !important; left: auto !important');
        addCSSRule('.' + commonOptions.unselectableClass, '-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0);');
        addCSSRule('.' + commonOptions.resetAppearanceClass, 'background: none; border: none; -webkit-appearance: none; appearance: none; opacity: 0; filter: alpha(opacity=0);');

        // detect rtl pages
        var html = $('html'), body = $('body');
        if (html.css('direction') === 'rtl' || body.css('direction') === 'rtl') {
            html.addClass(commonOptions.rtlClass);
        }

        // handle form reset event
        html.on('reset', function () {
            setTimeout(function () {
                api.refreshAll();
            }, 0);
        });

        // mark stylesheet as created
        commonOptions.styleSheetCreated = true;
    };

    // simplified pointer events handler
    (function () {
        var pointerEventsSupported = navigator.pointerEnabled || navigator.msPointerEnabled,
        touchEventsSupported = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
        eventList, eventMap = {}, eventPrefix = 'jcf-';

        // detect events to attach
        if (pointerEventsSupported) {
            eventList = {
                pointerover: navigator.pointerEnabled ? 'pointerover' : 'MSPointerOver',
                pointerdown: navigator.pointerEnabled ? 'pointerdown' : 'MSPointerDown',
                pointermove: navigator.pointerEnabled ? 'pointermove' : 'MSPointerMove',
                pointerup: navigator.pointerEnabled ? 'pointerup' : 'MSPointerUp'
            };
        } else {
            eventList = {
                pointerover: 'mouseover',
                pointerdown: 'mousedown' + (touchEventsSupported ? ' touchstart' : ''),
                pointermove: 'mousemove' + (touchEventsSupported ? ' touchmove' : ''),
                pointerup: 'mouseup' + (touchEventsSupported ? ' touchend' : '')
            };
        }

        // create event map
        $.each(eventList, function (targetEventName, fakeEventList) {
            $.each(fakeEventList.split(' '), function (index, fakeEventName) {
                eventMap[fakeEventName] = targetEventName;
            });
        });

        // jQuery event hooks
        $.each(eventList, function (eventName, eventHandlers) {
            eventHandlers = eventHandlers.split(' ');
            $.event.special[eventPrefix + eventName] = {
                setup: function () {
                    var self = this;
                    $.each(eventHandlers, function (index, fallbackEvent) {
                        if (self.addEventListener)
                            self.addEventListener(fallbackEvent, fixEvent, false);
                        else
                            self['on' + fallbackEvent] = fixEvent;
                    });
                },
                teardown: function () {
                    var self = this;
                    $.each(eventHandlers, function (index, fallbackEvent) {
                        if (self.addEventListener)
                            self.removeEventListener(fallbackEvent, fixEvent, false);
                        else
                            self['on' + fallbackEvent] = null;
                    });
                }
            };
        });

        // check that mouse event are not simulated by mobile browsers
        var lastTouch = null;
        var mouseEventSimulated = function (e) {
            var dx = Math.abs(e.pageX - lastTouch.x),
            dy = Math.abs(e.pageY - lastTouch.y),
            rangeDistance = 25;

            if (dx <= rangeDistance && dy <= rangeDistance) {
                return true;
            }
        };

        // normalize event
        var fixEvent = function (e) {
            var origEvent = e || window.event,
            touchEventData = null,
            targetEventName = eventMap[origEvent.type];

            e = $.event.fix(origEvent);
            e.type = eventPrefix + targetEventName;

            if (origEvent.pointerType) {
                switch (origEvent.pointerType) {
                    case 2:
                        e.pointerType = 'touch';
                        break;
                        case 3:
                            e.pointerType = 'pen';
                            break;
                            case 4:
                                e.pointerType = 'mouse';
                                break;
                                default:
                                e.pointerType = origEvent.pointerType;
                            }
                        } else {
                e.pointerType = origEvent.type.substr(0, 5); // "mouse" or "touch" word length
            }

            if (!e.pageX && !e.pageY) {
                touchEventData = origEvent.changedTouches ? origEvent.changedTouches[0] : origEvent;
                e.pageX = touchEventData.pageX;
                e.pageY = touchEventData.pageY;
            }

            if (origEvent.type === 'touchend') {
                lastTouch = {x: e.pageX, y: e.pageY};
            }
            if (e.pointerType === 'mouse' && lastTouch && mouseEventSimulated(e)) {
                return;
            } else {
                return ($.event.dispatch || $.event.handle).call(this, e);
            }
        };
    }());

    // custom mousewheel/trackpad handler
    (function () {
        var wheelEvents = ('onwheel' in document || document.documentMode >= 9 ? 'wheel' : 'mousewheel DOMMouseScroll').split(' '),
        shimEventName = 'jcf-mousewheel';

        $.event.special[shimEventName] = {
            setup: function () {
                var self = this;
                $.each(wheelEvents, function (index, fallbackEvent) {
                    if (self.addEventListener)
                        self.addEventListener(fallbackEvent, fixEvent, false);
                    else
                        self['on' + fallbackEvent] = fixEvent;
                });
            },
            teardown: function () {
                var self = this;
                $.each(wheelEvents, function (index, fallbackEvent) {
                    if (self.addEventListener)
                        self.removeEventListener(fallbackEvent, fixEvent, false);
                    else
                        self['on' + fallbackEvent] = null;
                });
            }
        };

        var fixEvent = function (e) {
            var origEvent = e || window.event;
            e = $.event.fix(origEvent);
            e.type = shimEventName;

            // old wheel events handler
            if ('detail'      in origEvent) {
                e.deltaY = -origEvent.detail;
            }
            if ('wheelDelta'  in origEvent) {
                e.deltaY = -origEvent.wheelDelta;
            }
            if ('wheelDeltaY' in origEvent) {
                e.deltaY = -origEvent.wheelDeltaY;
            }
            if ('wheelDeltaX' in origEvent) {
                e.deltaX = -origEvent.wheelDeltaX;
            }

            // modern wheel event handler
            if ('deltaY' in origEvent) {
                e.deltaY = origEvent.deltaY;
            }
            if ('deltaX' in origEvent) {
                e.deltaX = origEvent.deltaX;
            }

            // handle deltaMode for mouse wheel
            e.delta = e.deltaY || e.deltaX;
            if (origEvent.deltaMode === 1) {
                var lineHeight = 16;
                e.delta *= lineHeight;
                e.deltaY *= lineHeight;
                e.deltaX *= lineHeight;
            }

            return ($.event.dispatch || $.event.handle).call(this, e);
        };
    }());

    // extra module methods
    var moduleMixin = {
        // provide function for firing native events
        fireNativeEvent: function (elements, eventName) {
            $(elements).each(function () {
                var element = this, eventObject;
                if (element.dispatchEvent) {
                    eventObject = document.createEvent('HTMLEvents');
                    eventObject.initEvent(eventName, true, true);
                    element.dispatchEvent(eventObject);
                } else if (document.createEventObject) {
                    eventObject = document.createEventObject();
                    eventObject.target = element;
                    element.fireEvent('on' + eventName, eventObject);
                }
            });
        },
        // bind event handlers for module instance (functions beggining with "on")
        bindHandlers: function () {
            var self = this;
            $.each(self, function (propName, propValue) {
                if (propName.indexOf('on') === 0 && $.isFunction(propValue)) {
                    // dont use $.proxy here because it doesn't create unique handler
                    self[propName] = function () {
                        return propValue.apply(self, arguments);
                    };
                }
            });
        }
    };

    // public API
    var api = {
        version: version,
        modules: {},
        getOptions: function () {
            return $.extend({}, commonOptions);
        },
        setOptions: function (moduleName, moduleOptions) {
            if (arguments.length > 1) {
                // set module options
                if (this.modules[moduleName]) {
                    $.extend(this.modules[moduleName].prototype.options, moduleOptions);
                }
            } else {
                // set common options
                $.extend(commonOptions, moduleName);
            }
        },
        addModule: function (proto) {
            // add module to list
            var Module = function (options) {
                // save instance to collection
                if (!options.element.data(commonOptions.dataKey)) {
                    options.element.data(commonOptions.dataKey, this);
                }
                customInstances.push(this);

                // save options
                this.options = $.extend({}, commonOptions, this.options, getInlineOptions(options.element), options);

                // bind event handlers to instance
                this.bindHandlers();

                // call constructor
                this.init.apply(this, arguments);
            };

            // parse options from HTML attribute
            var getInlineOptions = function (element) {
                var dataOptions = element.data(commonOptions.optionsKey),
                attrOptions = element.attr(commonOptions.optionsKey);

                if (dataOptions) {
                    return dataOptions;
                } else if (attrOptions) {
                    try {
                        return $.parseJSON(attrOptions);
                    } catch (e) {
                        // ignore invalid attributes
                    }
                }
            };

            // set proto as prototype for new module
            Module.prototype = proto;

            // add mixin methods to module proto
            $.extend(proto, moduleMixin);
            if (proto.plugins) {
                $.each(proto.plugins, function (pluginName, plugin) {
                    $.extend(plugin.prototype, moduleMixin);
                });
            }

            // override destroy method
            var originalDestroy = Module.prototype.destroy;
            Module.prototype.destroy = function () {
                this.options.element.removeData(this.options.dataKey);

                for (var i = customInstances.length - 1; i >= 0; i--) {
                    if (customInstances[i] === this) {
                        customInstances.splice(i, 1);
                        break;
                    }
                }

                if (originalDestroy) {
                    originalDestroy.apply(this, arguments);
                }
            };

            // save module to list
            this.modules[proto.name] = Module;
        },
        getInstance: function (element) {
            return $(element).data(commonOptions.dataKey);
        },
        replace: function (elements, moduleName, customOptions) {
            var self = this,
            instance;

            if (!commonOptions.styleSheetCreated) {
                createStyleSheet();
            }

            $(elements).each(function () {
                var moduleOptions,
                element = $(this);

                instance = element.data(commonOptions.dataKey);
                if (instance) {
                    instance.refresh();
                } else {
                    if (!moduleName) {
                        $.each(self.modules, function (currentModuleName, module) {
                            if (module.prototype.matchElement.call(module.prototype, element)) {
                                moduleName = currentModuleName;
                                return false;
                            }
                        });
                    }
                    if (moduleName) {
                        moduleOptions = $.extend({element: element}, customOptions);
                        instance = new self.modules[moduleName](moduleOptions);
                    }
                }
            });
            return instance;
        },
        refresh: function (elements) {
            $(elements).each(function () {
                var instance = $(this).data(commonOptions.dataKey);
                if (instance) {
                    instance.refresh();
                }
            });
        },
        destroy: function (elements) {
            $(elements).each(function () {
                var instance = $(this).data(commonOptions.dataKey);
                if (instance) {
                    instance.destroy();
                }
            });
        },
        replaceAll: function (context) {
            var self = this;
            $.each(this.modules, function (moduleName, module) {
                $(module.prototype.selector, context).each(function () {
                    if (this.className.indexOf('jcf-ignore') < 0) {
                        self.replace(this, moduleName);
                    }
                });
            });
        },
        refreshAll: function (context) {
            if (context) {
                $.each(this.modules, function (moduleName, module) {
                    $(module.prototype.selector, context).each(function () {
                        var instance = $(this).data(commonOptions.dataKey);
                        if (instance) {
                            instance.refresh();
                        }
                    });
                });
            } else {
                for (var i = customInstances.length - 1; i >= 0; i--) {
                    customInstances[i].refresh();
                }
            }
        },
        destroyAll: function (context) {
            if (context) {
                $.each(this.modules, function (moduleName, module) {
                    $(module.prototype.selector, context).each(function (index, element) {
                        var instance = $(element).data(commonOptions.dataKey);
                        if (instance) {
                            instance.destroy();
                        }
                    });
                });
            } else {
                while (customInstances.length) {
                    customInstances[0].destroy();
                }
            }
        }
    };

    // always export API to the global window object
    window.jcf = api;

    return api;
}));

/*!
 * JavaScript Custom Forms : Select Module
 *
 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.1.3
 */
 ;
 (function ($, window) {
    'use strict';

    jcf.addModule({
        name: 'Select',
        selector: 'select',
        options: {
            element: null,
            multipleCompactStyle: false
        },
        plugins: {
            ListBox: ListBox,
            ComboBox: ComboBox,
            SelectList: SelectList
        },
        matchElement: function (element) {
            return element.is('select');
        },
        init: function () {
            this.element = $(this.options.element);
            this.createInstance();
        },
        isListBox: function () {
            return this.element.is('[size]:not([jcf-size]), [multiple]');
        },
        createInstance: function () {
            if (this.instance) {
                this.instance.destroy();
            }
            if (this.isListBox() && !this.options.multipleCompactStyle) {
                this.instance = new ListBox(this.options);
            } else {
                this.instance = new ComboBox(this.options);
            }
        },
        refresh: function () {
            var typeMismatch = (this.isListBox() && this.instance instanceof ComboBox) ||
            (!this.isListBox() && this.instance instanceof ListBox);

            if (typeMismatch) {
                this.createInstance();
            } else {
                this.instance.refresh();
            }
        },
        destroy: function () {
            this.instance.destroy();
        }
    });

    // combobox module
    function ComboBox(options) {
        this.options = $.extend({
            wrapNative: true,
            wrapNativeOnMobile: true,
            fakeDropInBody: true,
            useCustomScroll: true,
            flipDropToFit: true,
            maxVisibleItems: 10,
            fakeAreaStructure: '<span class="jcf-select"><span class="jcf-select-text"></span><span class="jcf-select-opener"></span></span>',
            fakeDropStructure: '<div class="jcf-select-drop"><div class="jcf-select-drop-content"></div></div>',
            optionClassPrefix: 'jcf-option-',
            selectClassPrefix: 'jcf-select-',
            dropContentSelector: '.jcf-select-drop-content',
            selectTextSelector: '.jcf-select-text',
            dropActiveClass: 'jcf-drop-active',
            flipDropClass: 'jcf-drop-flipped'
        }, options);
        this.init();
    }
    $.extend(ComboBox.prototype, {
        init: function () {
            this.initStructure();
            this.bindHandlers();
            this.attachEvents();
            this.refresh();
        },
        initStructure: function () {
            // prepare structure
            this.win = $(window);
            this.doc = $(document);
            this.realElement = $(this.options.element);
            this.fakeElement = $(this.options.fakeAreaStructure).insertAfter(this.realElement);
            this.selectTextContainer = this.fakeElement.find(this.options.selectTextSelector);
            this.selectText = $('<span></span>').appendTo(this.selectTextContainer);
            makeUnselectable(this.fakeElement);

            // copy classes from original select
            this.fakeElement.addClass(getPrefixedClasses(this.realElement.prop('className'), this.options.selectClassPrefix));

            // handle compact multiple style
            if (this.realElement.prop('multiple')) {
                this.fakeElement.addClass('jcf-compact-multiple');
            }

            // detect device type and dropdown behavior
            if (this.options.isMobileDevice && this.options.wrapNativeOnMobile && !this.options.wrapNative) {
                this.options.wrapNative = true;
            }

            if (this.options.wrapNative) {
                // wrap native select inside fake block
                this.realElement.prependTo(this.fakeElement).css({
                    position: 'absolute',
                    height: '100%',
                    width: '100%'
                }).addClass(this.options.resetAppearanceClass);
            } else {
                // just hide native select
                this.realElement.addClass(this.options.hiddenClass);
                this.fakeElement.attr('title', this.realElement.attr('title'));
                this.fakeDropTarget = this.options.fakeDropInBody ? $('body') : this.fakeElement;
            }
        },
        attachEvents: function () {
            // delayed refresh handler
            var self = this;
            this.delayedRefresh = function () {
                setTimeout(function () {
                    self.refresh();
                    if (self.list) {
                        self.list.refresh();
                        self.list.scrollToActiveOption();
                    }
                }, 1);
            };

            // native dropdown event handlers
            if (this.options.wrapNative) {
                this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    click: this.onChange,
                    keydown: this.onChange
                });
            } else {
                // custom dropdown event handlers
                this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    keydown: this.onKeyDown
                });
                this.fakeElement.on({
                    'jcf-pointerdown': this.onSelectAreaPress
                });
            }
        },
        onKeyDown: function (e) {
            if (e.which === 13) {
                this.toggleDropdown();
            } else if (this.dropActive) {
                this.delayedRefresh();
            }
        },
        onChange: function () {
            this.refresh();
        },
        onFocus: function () {
            if (!this.pressedFlag || !this.focusedFlag) {
                this.fakeElement.addClass(this.options.focusClass);
                this.realElement.on('blur', this.onBlur);
                this.toggleListMode(true);
                this.focusedFlag = true;
            }
        },
        onBlur: function () {
            if (!this.pressedFlag) {
                this.fakeElement.removeClass(this.options.focusClass);
                this.realElement.off('blur', this.onBlur);
                this.toggleListMode(false);
                this.focusedFlag = false;
            }
        },
        onResize: function () {
            if (this.dropActive) {
                this.hideDropdown();
            }
        },
        onSelectDropPress: function () {
            this.pressedFlag = true;
        },
        onSelectDropRelease: function (e, pointerEvent) {
            this.pressedFlag = false;
            if (pointerEvent.pointerType === 'mouse') {
                this.realElement.focus();
            }
        },
        onSelectAreaPress: function (e) {
            // skip click if drop inside fake element or real select is disabled
            var dropClickedInsideFakeElement = !this.options.fakeDropInBody && $(e.target).closest(this.dropdown).length;
            if (dropClickedInsideFakeElement || e.button > 1 || this.realElement.is(':disabled')) {
                return;
            }

            // toggle dropdown visibility
            this.selectOpenedByEvent = e.pointerType;
            this.toggleDropdown();

            // misc handlers
            if (!this.focusedFlag) {
                if (e.pointerType === 'mouse') {
                    this.realElement.focus();
                } else {
                    this.onFocus(e);
                }
            }
            this.pressedFlag = true;
            this.fakeElement.addClass(this.options.pressedClass);
            this.doc.on('jcf-pointerup', this.onSelectAreaRelease);
        },
        onSelectAreaRelease: function (e) {
            if (this.focusedFlag && e.pointerType === 'mouse') {
                this.realElement.focus();
            }
            this.pressedFlag = false;
            this.fakeElement.removeClass(this.options.pressedClass);
            this.doc.off('jcf-pointerup', this.onSelectAreaRelease);
        },
        onOutsideClick: function (e) {
            var target = $(e.target),
            clickedInsideSelect = target.closest(this.fakeElement).length || target.closest(this.dropdown).length;

            if (!clickedInsideSelect) {
                this.hideDropdown();
            }
        },
        onSelect: function () {
            this.refresh();

            if (this.realElement.prop('multiple')) {
                this.repositionDropdown();
            } else {
                this.hideDropdown();
            }

            this.fireNativeEvent(this.realElement, 'change');
        },
        toggleListMode: function (state) {
            if (!this.options.wrapNative) {
                if (state) {
                    // temporary change select to list to avoid appearing of native dropdown
                    this.realElement.attr({
                        size: 4,
                        'jcf-size': ''
                    });
                } else {
                    // restore select from list mode to dropdown select
                    if (!this.options.wrapNative) {
                        this.realElement.removeAttr('size jcf-size');
                    }
                }
            }
        },
        createDropdown: function () {
            // destroy previous dropdown if needed
            if (this.dropdown) {
                this.list.destroy();
                this.dropdown.remove();
            }

            // create new drop container
            this.dropdown = $(this.options.fakeDropStructure).appendTo(this.fakeDropTarget);
            this.dropdown.addClass(getPrefixedClasses(this.realElement.prop('className'), this.options.selectClassPrefix));
            makeUnselectable(this.dropdown);

            // handle compact multiple style
            if (this.realElement.prop('multiple')) {
                this.dropdown.addClass('jcf-compact-multiple');
            }

            // set initial styles for dropdown in body
            if (this.options.fakeDropInBody) {
                this.dropdown.css({
                    position: 'absolute',
                    top: -9999
                });
            }

            // create new select list instance
            this.list = new SelectList({
                useHoverClass: true,
                handleResize: false,
                alwaysPreventMouseWheel: true,
                maxVisibleItems: this.options.maxVisibleItems,
                useCustomScroll: this.options.useCustomScroll,
                holder: this.dropdown.find(this.options.dropContentSelector),
                multipleSelectWithoutKey: this.realElement.prop('multiple'),
                element: this.realElement
            });
            $(this.list).on({
                select: this.onSelect,
                press: this.onSelectDropPress,
                release: this.onSelectDropRelease
            });
        },
        repositionDropdown: function () {
            var selectOffset = this.fakeElement.offset(),
            selectWidth = this.fakeElement.outerWidth(),
            selectHeight = this.fakeElement.outerHeight(),
            dropHeight = this.dropdown.css('width', selectWidth).outerHeight(),
            winScrollTop = this.win.scrollTop(),
            winHeight = this.win.height(),
            calcTop, calcLeft, bodyOffset, needFlipDrop = false;

            // check flip drop position
            if (selectOffset.top + selectHeight + dropHeight > winScrollTop + winHeight && selectOffset.top - dropHeight > winScrollTop) {
                needFlipDrop = true;
            }

            if (this.options.fakeDropInBody) {
                bodyOffset = this.fakeDropTarget.css('position') !== 'static' ? this.fakeDropTarget.offset().top : 0;
                if (this.options.flipDropToFit && needFlipDrop) {
                    // calculate flipped dropdown position
                    calcLeft = selectOffset.left;
                    calcTop = selectOffset.top - dropHeight - bodyOffset;
                } else {
                    // calculate default drop position
                    calcLeft = selectOffset.left;
                    calcTop = selectOffset.top + selectHeight - bodyOffset;
                }

                // update drop styles
                this.dropdown.css({
                    width: selectWidth,
                    left: calcLeft,
                    top: calcTop
                });
            }

            // refresh flipped class
            this.dropdown.add(this.fakeElement).toggleClass(this.options.flipDropClass, this.options.flipDropToFit && needFlipDrop);
        },
        showDropdown: function () {
            // do not show empty custom dropdown
            if (!this.realElement.prop('options').length) {
                return;
            }

            // create options list if not created
            if (!this.dropdown) {
                this.createDropdown();
            }

            // show dropdown
            this.dropActive = true;
            this.dropdown.appendTo(this.fakeDropTarget);
            this.fakeElement.addClass(this.options.dropActiveClass);
            this.refreshSelectedText();
            this.repositionDropdown();
            this.list.setScrollTop(this.savedScrollTop);
            this.list.refresh();

            // add temporary event handlers
            this.win.on('resize', this.onResize);
            this.doc.on('jcf-pointerdown', this.onOutsideClick);
        },
        hideDropdown: function () {
            if (this.dropdown) {
                this.savedScrollTop = this.list.getScrollTop();
                this.fakeElement.removeClass(this.options.dropActiveClass + ' ' + this.options.flipDropClass);
                this.dropdown.removeClass(this.options.flipDropClass).detach();
                this.doc.off('jcf-pointerdown', this.onOutsideClick);
                this.win.off('resize', this.onResize);
                this.dropActive = false;
                if (this.selectOpenedByEvent === 'touch') {
                    this.onBlur();
                }
            }
        },
        toggleDropdown: function () {
            if (this.dropActive) {
                this.hideDropdown();
            } else {
                this.showDropdown();
            }
        },
        refreshSelectedText: function () {
            // redraw selected area
            var selectedIndex = this.realElement.prop('selectedIndex'),
            selectedOption = this.realElement.prop('options')[selectedIndex],
            selectedOptionImage = selectedOption ? selectedOption.getAttribute('data-image') : null,
            selectedOptionText = '',
            selectedOptionClasses,
            self = this;

            if (this.realElement.prop('multiple')) {
                $.each(this.realElement.prop('options'), function (index, option) {
                    if (option.selected) {
                        selectedOptionText += (selectedOptionText ? ', ' : '') + option.innerHTML;
                    }
                });
                if (!selectedOptionText) {
                    selectedOptionText = self.realElement.attr('placeholder') || '';
                }
                this.selectText.removeAttr('class').html(selectedOptionText);
            } else if (!selectedOption) {
                if (this.selectImage) {
                    this.selectImage.hide();
                }
                this.selectText.removeAttr('class').empty();
            } else if (this.currentSelectedText !== selectedOption.innerHTML || this.currentSelectedImage !== selectedOptionImage) {
                selectedOptionClasses = getPrefixedClasses(selectedOption.className, this.options.optionClassPrefix);
                this.selectText.attr('class', selectedOptionClasses).html(selectedOption.innerHTML);

                if (selectedOptionImage) {
                    if (!this.selectImage) {
                        this.selectImage = $('<img>').prependTo(this.selectTextContainer).hide();
                    }
                    this.selectImage.attr('src', selectedOptionImage).show();
                } else if (this.selectImage) {
                    this.selectImage.hide();
                }

                this.currentSelectedText = selectedOption.innerHTML;
                this.currentSelectedImage = selectedOptionImage;
            }
        },
        refresh: function () {
            // refresh fake select visibility
            if (this.realElement.prop('style').display === 'none') {
                this.fakeElement.hide();
            } else {
                this.fakeElement.show();
            }

            // refresh selected text
            this.refreshSelectedText();

            // handle disabled state
            this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(':disabled'));
        },
        destroy: function () {
            // restore structure
            if (this.options.wrapNative) {
                this.realElement.insertBefore(this.fakeElement).css({
                    position: '',
                    height: '',
                    width: ''
                }).removeClass(this.options.resetAppearanceClass);
            } else {
                this.realElement.removeClass(this.options.hiddenClass);
                if (this.realElement.is('[jcf-size]')) {
                    this.realElement.removeAttr('size jcf-size');
                }
            }

            // removing element will also remove its event handlers
            this.fakeElement.remove();

            // remove other event handlers
            this.doc.off('jcf-pointerup', this.onSelectAreaRelease);
            this.realElement.off({
                focus: this.onFocus
            });
        }
    });

    // listbox module
    function ListBox(options) {
        this.options = $.extend({
            wrapNative: true,
            useCustomScroll: true,
            fakeStructure: '<span class="jcf-list-box"><span class="jcf-list-wrapper"></span></span>',
            selectClassPrefix: 'jcf-select-',
            listHolder: '.jcf-list-wrapper'
        }, options);
        this.init();
    }
    $.extend(ListBox.prototype, {
        init: function () {
            this.bindHandlers();
            this.initStructure();
            this.attachEvents();
        },
        initStructure: function () {
            this.realElement = $(this.options.element);
            this.fakeElement = $(this.options.fakeStructure).insertAfter(this.realElement);
            this.listHolder = this.fakeElement.find(this.options.listHolder);
            makeUnselectable(this.fakeElement);

            // copy classes from original select
            this.fakeElement.addClass(getPrefixedClasses(this.realElement.prop('className'), this.options.selectClassPrefix));
            this.realElement.addClass(this.options.hiddenClass);

            this.list = new SelectList({
                useCustomScroll: this.options.useCustomScroll,
                holder: this.listHolder,
                selectOnClick: false,
                element: this.realElement
            });
        },
        attachEvents: function () {
            // delayed refresh handler
            var self = this;
            this.delayedRefresh = function (e) {
                if (e && e.which === 16) {
                    // ignore SHIFT key
                    return;
                } else {
                    clearTimeout(self.refreshTimer);
                    self.refreshTimer = setTimeout(function () {
                        self.refresh();
                        self.list.scrollToActiveOption();
                    }, 1);
                }
            };

            // other event handlers
            this.realElement.on({
                focus: this.onFocus,
                click: this.delayedRefresh,
                keydown: this.delayedRefresh
            });

            // select list event handlers
            $(this.list).on({
                select: this.onSelect,
                press: this.onFakeOptionsPress,
                release: this.onFakeOptionsRelease
            });
        },
        onFakeOptionsPress: function (e, pointerEvent) {
            this.pressedFlag = true;
            if (pointerEvent.pointerType === 'mouse') {
                this.realElement.focus();
            }
        },
        onFakeOptionsRelease: function (e, pointerEvent) {
            this.pressedFlag = false;
            if (pointerEvent.pointerType === 'mouse') {
                this.realElement.focus();
            }
        },
        onSelect: function () {
            this.fireNativeEvent(this.realElement, 'change');
            this.fireNativeEvent(this.realElement, 'click');
        },
        onFocus: function () {
            if (!this.pressedFlag || !this.focusedFlag) {
                this.fakeElement.addClass(this.options.focusClass);
                this.realElement.on('blur', this.onBlur);
                this.focusedFlag = true;
            }
        },
        onBlur: function () {
            if (!this.pressedFlag) {
                this.fakeElement.removeClass(this.options.focusClass);
                this.realElement.off('blur', this.onBlur);
                this.focusedFlag = false;
            }
        },
        refresh: function () {
            this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(':disabled'));
            this.list.refresh();
        },
        destroy: function () {
            this.list.destroy();
            this.realElement.insertBefore(this.fakeElement).removeClass(this.options.hiddenClass);
            this.fakeElement.remove();
        }
    });

    // options list module
    function SelectList(options) {
        this.options = $.extend({
            holder: null,
            maxVisibleItems: 10,
            selectOnClick: true,
            useHoverClass: false,
            useCustomScroll: false,
            handleResize: true,
            multipleSelectWithoutKey: false,
            alwaysPreventMouseWheel: false,
            indexAttribute: 'data-index',
            cloneClassPrefix: 'jcf-option-',
            containerStructure: '<span class="jcf-list"><span class="jcf-list-content"></span></span>',
            containerSelector: '.jcf-list-content',
            captionClass: 'jcf-optgroup-caption',
            disabledClass: 'jcf-disabled',
            optionClass: 'jcf-option',
            groupClass: 'jcf-optgroup',
            hoverClass: 'jcf-hover',
            selectedClass: 'jcf-selected',
            scrollClass: 'jcf-scroll-active'
        }, options);
        this.init();
    }
    $.extend(SelectList.prototype, {
        init: function () {
            this.initStructure();
            this.refreshSelectedClass();
            this.attachEvents();
        },
        initStructure: function () {
            this.element = $(this.options.element);
            this.indexSelector = '[' + this.options.indexAttribute + ']';
            this.container = $(this.options.containerStructure).appendTo(this.options.holder);
            this.listHolder = this.container.find(this.options.containerSelector);
            this.lastClickedIndex = this.element.prop('selectedIndex');
            this.rebuildList();
        },
        attachEvents: function () {
            this.bindHandlers();
            this.listHolder.on('jcf-pointerdown', this.indexSelector, this.onItemPress);
            this.listHolder.on('jcf-pointerdown', this.onPress);

            if (this.options.useHoverClass) {
                this.listHolder.on('jcf-pointerover', this.indexSelector, this.onHoverItem);
            }
        },
        onPress: function (e) {
            $(this).trigger('press', e);
            this.listHolder.on('jcf-pointerup', this.onRelease);
        },
        onRelease: function (e) {
            $(this).trigger('release', e);
            this.listHolder.off('jcf-pointerup', this.onRelease);
        },
        onHoverItem: function (e) {
            var hoverIndex = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute));
            this.fakeOptions.removeClass(this.options.hoverClass).eq(hoverIndex).addClass(this.options.hoverClass);
        },
        onItemPress: function (e) {
            if (e.pointerType === 'touch' || this.options.selectOnClick) {
                // select option after "click"
                this.tmpListOffsetTop = this.list.offset().top;
                this.listHolder.on('jcf-pointerup', this.indexSelector, this.onItemRelease);
            } else {
                // select option immediately
                this.onSelectItem(e);
            }
        },
        onItemRelease: function (e) {
            // remove event handlers and temporary data
            this.listHolder.off('jcf-pointerup', this.indexSelector, this.onItemRelease);

            // simulate item selection
            if (this.tmpListOffsetTop === this.list.offset().top) {
                this.listHolder.on('click', this.indexSelector, {savedPointerType: e.pointerType}, this.onSelectItem);
            }
            delete this.tmpListOffsetTop;
        },
        onSelectItem: function (e) {
            var clickedIndex = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute)),
            pointerType = e.data && e.data.savedPointerType || e.pointerType || 'mouse',
            range;

            // remove click event handler
            this.listHolder.off('click', this.indexSelector, this.onSelectItem);

            // ignore clicks on disabled options
            if (e.button > 1 || this.realOptions[clickedIndex].disabled) {
                return;
            }

            if (this.element.prop('multiple')) {
                if (e.metaKey || e.ctrlKey || pointerType === 'touch' || this.options.multipleSelectWithoutKey) {
                    // if CTRL/CMD pressed or touch devices - toggle selected option
                    this.realOptions[clickedIndex].selected = !this.realOptions[clickedIndex].selected;
                } else if (e.shiftKey) {
                    // if SHIFT pressed - update selection
                    range = [this.lastClickedIndex, clickedIndex].sort(function (a, b) {
                        return a - b;
                    });
                    this.realOptions.each(function (index, option) {
                        option.selected = (index >= range[0] && index <= range[1]);
                    });
                } else {
                    // set single selected index
                    this.element.prop('selectedIndex', clickedIndex);
                }
            } else {
                this.element.prop('selectedIndex', clickedIndex);
            }

            // save last clicked option
            if (!e.shiftKey) {
                this.lastClickedIndex = clickedIndex;
            }

            // refresh classes
            this.refreshSelectedClass();

            // scroll to active item in desktop browsers
            if (pointerType === 'mouse') {
                this.scrollToActiveOption();
            }

            // make callback when item selected
            $(this).trigger('select');
        },
        rebuildList: function () {
            // rebuild options
            var self = this,
            rootElement = this.element[0];

            // recursively create fake options
            this.storedSelectHTML = rootElement.innerHTML;
            this.optionIndex = 0;
            this.list = $(this.createOptionsList(rootElement));
            this.listHolder.empty().append(this.list);
            this.realOptions = this.element.find('option');
            this.fakeOptions = this.list.find(this.indexSelector);
            this.fakeListItems = this.list.find('.' + this.options.captionClass + ',' + this.indexSelector);
            delete this.optionIndex;

            // detect max visible items
            var maxCount = this.options.maxVisibleItems,
            sizeValue = this.element.prop('size');
            if (sizeValue > 1 && !this.element.is('[jcf-size]')) {
                maxCount = sizeValue;
            }

            // handle scrollbar
            var needScrollBar = this.fakeOptions.length > maxCount;
            this.container.toggleClass(this.options.scrollClass, needScrollBar);
            if (needScrollBar) {
                // change max-height
                this.listHolder.css({
                    maxHeight: this.getOverflowHeight(maxCount),
                    overflow: 'auto'
                });

                if (this.options.useCustomScroll && jcf.modules.Scrollable) {
                    // add custom scrollbar if specified in options
                    jcf.replace(this.listHolder, 'Scrollable', {
                        handleResize: this.options.handleResize,
                        alwaysPreventMouseWheel: this.options.alwaysPreventMouseWheel
                    });
                    return;
                }
            }

            // disable edge wheel scrolling
            if (this.options.alwaysPreventMouseWheel) {
                this.preventWheelHandler = function (e) {
                    var currentScrollTop = self.listHolder.scrollTop(),
                    maxScrollTop = self.listHolder.prop('scrollHeight') - self.listHolder.innerHeight();

                    // check edge cases
                    if ((currentScrollTop <= 0 && e.deltaY < 0) || (currentScrollTop >= maxScrollTop && e.deltaY > 0)) {
                        e.preventDefault();
                    }
                };
                this.listHolder.on('jcf-mousewheel', this.preventWheelHandler);
            }
        },
        refreshSelectedClass: function () {
            var self = this,
            selectedItem,
            isMultiple = this.element.prop('multiple'),
            selectedIndex = this.element.prop('selectedIndex');

            if (isMultiple) {
                this.realOptions.each(function (index, option) {
                    self.fakeOptions.eq(index).toggleClass(self.options.selectedClass, !!option.selected);
                });
            } else {
                this.fakeOptions.removeClass(this.options.selectedClass + ' ' + this.options.hoverClass);
                selectedItem = this.fakeOptions.eq(selectedIndex).addClass(this.options.selectedClass);
                if (this.options.useHoverClass) {
                    selectedItem.addClass(this.options.hoverClass);
                }
            }
        },
        scrollToActiveOption: function () {
            // scroll to target option
            var targetOffset = this.getActiveOptionOffset();
            if (typeof targetOffset === 'number') {
                this.listHolder.prop('scrollTop', targetOffset);
            }
        },
        getSelectedIndexRange: function () {
            var firstSelected = -1, lastSelected = -1;
            this.realOptions.each(function (index, option) {
                if (option.selected) {
                    if (firstSelected < 0) {
                        firstSelected = index;
                    }
                    lastSelected = index;
                }
            });
            return [firstSelected, lastSelected];
        },
        getChangedSelectedIndex: function () {
            var selectedIndex = this.element.prop('selectedIndex'),
            targetIndex;

            if (this.element.prop('multiple')) {
                // multiple selects handling
                if (!this.previousRange) {
                    this.previousRange = [selectedIndex, selectedIndex];
                }
                this.currentRange = this.getSelectedIndexRange();
                targetIndex = this.currentRange[this.currentRange[0] !== this.previousRange[0] ? 0 : 1];
                this.previousRange = this.currentRange;
                return targetIndex;
            } else {
                // single choice selects handling
                return selectedIndex;
            }
        },
        getActiveOptionOffset: function () {
            // calc values
            var dropHeight = this.listHolder.height(),
            dropScrollTop = this.listHolder.prop('scrollTop'),
            currentIndex = this.getChangedSelectedIndex(),
            fakeOption = this.fakeOptions.eq(currentIndex),
            fakeOptionOffset = fakeOption.offset().top - this.list.offset().top,
            fakeOptionHeight = fakeOption.innerHeight();

            // scroll list
            if (fakeOptionOffset + fakeOptionHeight >= dropScrollTop + dropHeight) {
                // scroll down (always scroll to option)
                return fakeOptionOffset - dropHeight + fakeOptionHeight;
            } else if (fakeOptionOffset < dropScrollTop) {
                // scroll up to option
                return fakeOptionOffset;
            }
        },
        getOverflowHeight: function (sizeValue) {
            var item = this.fakeListItems.eq(sizeValue - 1),
            listOffset = this.list.offset().top,
            itemOffset = item.offset().top,
            itemHeight = item.innerHeight();

            return itemOffset + itemHeight - listOffset;
        },
        getScrollTop: function () {
            return this.listHolder.scrollTop();
        },
        setScrollTop: function (value) {
            this.listHolder.scrollTop(value);
        },
        createOption: function (option) {
            var newOption = document.createElement('span');
            newOption.className = this.options.optionClass;
            newOption.innerHTML = option.innerHTML;
            newOption.setAttribute(this.options.indexAttribute, this.optionIndex++);

            var optionImage, optionImageSrc = option.getAttribute('data-image');
            if (optionImageSrc) {
                optionImage = document.createElement('img');
                optionImage.src = optionImageSrc;
                newOption.insertBefore(optionImage, newOption.childNodes[0]);
            }
            if (option.disabled) {
                newOption.className += ' ' + this.options.disabledClass;
            }
            if (option.className) {
                newOption.className += ' ' + getPrefixedClasses(option.className, this.options.cloneClassPrefix);
            }
            return newOption;
        },
        createOptGroup: function (optgroup) {
            var optGroupContainer = document.createElement('span'),
            optGroupName = optgroup.getAttribute('label'),
            optGroupCaption, optGroupList;

            // create caption
            optGroupCaption = document.createElement('span');
            optGroupCaption.className = this.options.captionClass;
            optGroupCaption.innerHTML = optGroupName;
            optGroupContainer.appendChild(optGroupCaption);

            // create list of options
            if (optgroup.children.length) {
                optGroupList = this.createOptionsList(optgroup);
                optGroupContainer.appendChild(optGroupList);
            }

            optGroupContainer.className = this.options.groupClass;
            return optGroupContainer;
        },
        createOptionContainer: function () {
            var optionContainer = document.createElement('li');
            return optionContainer;
        },
        createOptionsList: function (container) {
            var self = this,
            list = document.createElement('ul');

            $.each(container.children, function (index, currentNode) {
                var item = self.createOptionContainer(currentNode),
                newNode;

                switch (currentNode.tagName.toLowerCase()) {
                    case 'option':
                        newNode = self.createOption(currentNode);
                        break;
                        case 'optgroup':
                            newNode = self.createOptGroup(currentNode);
                            break;
                        }
                        list.appendChild(item).appendChild(newNode);
                    });
            return list;
        },
        refresh: function () {
            // check for select innerHTML changes
            if (this.storedSelectHTML !== this.element.prop('innerHTML')) {
                this.rebuildList();
            }

            // refresh custom scrollbar
            var scrollInstance = jcf.getInstance(this.listHolder);
            if (scrollInstance) {
                scrollInstance.refresh();
            }

            // refresh selectes classes
            this.refreshSelectedClass();
        },
        destroy: function () {
            this.listHolder.off('jcf-mousewheel', this.preventWheelHandler);
            this.listHolder.off('jcf-pointerdown', this.indexSelector, this.onSelectItem);
            this.listHolder.off('jcf-pointerover', this.indexSelector, this.onHoverItem);
            this.listHolder.off('jcf-pointerdown', this.onPress);
        }
    });

    // helper functions
    var getPrefixedClasses = function (className, prefixToAdd) {
        return className ? className.replace(/[\s]*([\S]+)+[\s]*/gi, prefixToAdd + '$1 ') : '';
    };
    var makeUnselectable = (function () {
        var unselectableClass = jcf.getOptions().unselectableClass;
        function preventHandler(e) {
            e.preventDefault();
        }
        return function (node) {
            node.addClass(unselectableClass).on('selectstart', preventHandler);
        };
    }());

}(jQuery, this));


function initProgressBarLoading() {
    if (jQuery('.progress-bar').length) {
        if ((jQuery(window).scrollTop() + jQuery(window).height() - 200) >= jQuery('.progress-bar').offset().top) {
            if (!jQuery(".progress-bar").hasClass('was-animated')) {
                jQuery(".progress-bar").addClass('was-animated').loading();
            }
        }
    }
}

function initPieChart() {
    "use strict";
    if (jQuery(".q_percentage_with_icon").length && !jQuery(".q_percentage_with_icon").hasClass('finish-animation')) {
        var $myEl = jQuery(".q_percentage_with_icon");

        var e = '#fd0';
        "" !== $myEl.data("active") && (e = $myEl.data("active"));
        var t = "#eeeeee";
        "" !== $myEl.data("noactive") && (t = $myEl.data("noactive"));
        var i = 10;
        "" !== $myEl.data("linewidth") && (i = $myEl.data("linewidth"));
        var o = 174;

        if ((jQuery(window).scrollTop() + jQuery(window).height() - 200) >= jQuery('.q_percentage_with_icon').offset().top) {
            $myEl.addClass('finish-animation')
            var chart = window.chart = new EasyPieChart(document.querySelector('.q_percentage_with_icon'), {
                // easing: 'easeOutElastic',
                // delay: 3000,
                barColor: e,
                trackColor: t,
                scaleColor: false,
                lineWidth: i,
                animate: 1500,
                // trackWidth: 16,
                lineCap: 'butt',
                size: o
            });
        }

    }
}

;
(function ($) {
    $.fn.loading = function () {
        var DEFAULTS = {
            backgroundColor: '#b3cef6',
            progressColor: '#4b86db',
            percent: 75,
            duration: 1800,
            iconClass: 'fa-shield'
        };

        $(this).each(function () {
            var $target = $(this);

            var opts = {
                backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
                progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
                percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
                iconClass: $target.data('iconClass') ? $target.data('iconClass') : DEFAULTS.iconClass,
                duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
            };
            // console.log(opts);

            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span><i class="fa ' + opts.iconClass + '"></i></div>');

            $target.find('.background').css('background-color', opts.backgroundColor);
            $target.find('.left').css('background-color', opts.backgroundColor);
            $target.find('.rotate').css('background-color', opts.progressColor);
            $target.find('.right').css('background-color', opts.progressColor);

            var $rotate = $target.find('.rotate');
            setTimeout(function () {
                $rotate.css({
                    'transition': 'transform ' + opts.duration + 'ms linear',
                    'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
                });
            }, 1);

            if (opts.percent > 50) {
                var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
                var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1
                });
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0
                });
            }
        });
    }
})(jQuery);

jQuery(document).ready(function () {
    initPieChart()
    jQuery('.anchor-link').on('click', function () {
        if ($(window).scrollTop() == 0) {
            $('html, body').animate({scrollTop: $(window).scrollTop() + 5}, 5);
        }
        var toWhere = $(this).attr('href').substring(1);
        setTimeout(function () {
            if ($(window).width() > 1007) {
                $('html, body').animate({scrollTop: $('#' + toWhere).offset().top - $('#header').outerHeight()}, 1000);
            }
            else {
                $('html, body').animate({scrollTop: $('#' + toWhere).offset().top}, 1000);
            }
        }, 50)
        return false;
    })
});

// mobile menu init
function initMobileNav() {
    jQuery('body').mobileNav({
        hideOnClickOutside: true,
        menuDrop: '.nav-drop',
        menuActiveClass: 'nav-active',
        menuOpener: '.nav-opener'
    });
}

// handle dropdowns on mobile devices
function initTouchNav() {
    jQuery('#nav').each(function () {
        new TouchNav({
            navBlock: this
        });
    });
}

// add classes if item has dropdown
function initDropDownClasses() {
    jQuery('#nav li').each(function () {
        var item = jQuery(this);
        var drop = item.find('.drop');
        var link = item.find('a').eq(0);
        if (drop.length) {
            item.addClass('has-drop-down');
            if (link.length)
                link.addClass('has-drop-down-a');
        }
    });
}

jQuery(".search-toogle").click(function () {
    jQuery("#search-form").slideToggle("fast");
});

function initScrollClass() {
    var scrollClass = 'page-scrolled';
    var body = jQuery('body');
    var win = jQuery(window);

    win.on('scroll resize orentationchange', function () {
        if (win.scrollTop() > 0) {
            body.addClass(scrollClass);
        } else {
            body.removeClass(scrollClass);
        }
    });
}

// StellarParallax
function initStellarParallax() {
    if (!('ontouchstart' in document.documentElement)) {
        jQuery.stellar({
            horizontalScrolling: false
        });
    }
    ;
}
;

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function (a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
    }
    var f = "stellar", g = {scrollProperty: "scroll", positionProperty: "position", horizontalScrolling: !0, verticalScrolling: !0, horizontalOffset: 0, verticalOffset: 0, responsive: !1, parallaxBackgrounds: !0, parallaxElements: !0, hideDistantElements: !0, hideElement: function (a) {
        a.hide()
    }, showElement: function (a) {
        a.show()
    }}, h = {scroll: {getLeft: function (a) {
        return a.scrollLeft()
    }, setLeft: function (a, b) {
        a.scrollLeft(b)
    }, getTop: function (a) {
        return a.scrollTop()
    }, setTop: function (a, b) {
        a.scrollTop(b)
    }}, position: {getLeft: function (a) {
        return-1 * parseInt(a.css("left"), 10)
    }, getTop: function (a) {
        return-1 * parseInt(a.css("top"), 10)
    }}, margin: {getLeft: function (a) {
        return-1 * parseInt(a.css("margin-left"), 10)
    }, getTop: function (a) {
        return-1 * parseInt(a.css("margin-top"), 10)
    }}, transform: {getLeft: function (a) {
        var b = getComputedStyle(a[0])[k];
        return"none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
    }, getTop: function (a) {
        var b = getComputedStyle(a[0])[k];
        return"none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
    }}}, i = {position: {setLeft: function (a, b) {
        a.css("left", b)
    }, setTop: function (a, b) {
        a.css("top", b)
    }}, transform: {setPosition: function (a, b, c, d, e) {
        a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
    }}}, j = function () {
        var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, d = a("script")[0].style, e = "";
        for (b in d)
        if (c.test(b)) {
            e = b.match(c)[0];
            break
        }
        return"WebkitOpacity"in d && (e = "Webkit"), "KhtmlOpacity"in d && (e = "Khtml"), function (a) {
            return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
        }
    }(), k = j("transform"), l = a("<div />", {style: "background:#fff"}).css("background-position-x") !== d, m = l ? function (a, b, c) {
        a.css({"background-position-x": b, "background-position-y": c})
    } : function (a, b, c) {
        a.css("background-position", b + " " + c)
    }, n = l ? function (a) {
        return[a.css("background-position-x"), a.css("background-position-y")]
    } : function (a) {
        return a.css("background-position").split(" ")
    }, o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) {
        setTimeout(a, 1e3 / 60)
    };
    e.prototype = {init: function () {
        this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
    }, _defineElements: function () {
        this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
    }, _defineGetters: function () {
        var a = this, b = h[a.options.scrollProperty];
        this._getScrollLeft = function () {
            return b.getLeft(a.$scrollElement)
        }, this._getScrollTop = function () {
            return b.getTop(a.$scrollElement)
        }
    }, _defineSetters: function () {
        var b = this, c = h[b.options.scrollProperty], d = i[b.options.positionProperty], e = c.setLeft, f = c.setTop;
        this._setScrollLeft = "function" == typeof e ? function (a) {
            e(b.$scrollElement, a)
        } : a.noop, this._setScrollTop = "function" == typeof f ? function (a) {
            f(b.$scrollElement, a)
        } : a.noop, this._setPosition = d.setPosition || function (a, c, e, f, g) {
            b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
        }
    }, _handleWindowLoadAndResize: function () {
        var c = this, d = a(b);
        c.options.responsive && d.bind("load." + this.name, function () {
            c.refresh()
        }), d.bind("resize." + this.name, function () {
            c._detectViewport(), c.options.responsive && c.refresh()
        })
    }, refresh: function (c) {
        var d = this, e = d._getScrollLeft(), f = d._getScrollTop();
        c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function () {
            var a = d._getScrollLeft(), b = d._getScrollTop();
            d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
        }), this._setScrollLeft(e), this._setScrollTop(f)
    }, _detectViewport: function () {
        var a = this.$viewportElement.offset(), b = null !== a && a !== d;
        this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
    }, _findParticles: function () {
        {
            var b = this;
            this._getScrollLeft(), this._getScrollTop()
        }
        if (this.particles !== d)
            for (var c = this.particles.length - 1; c >= 0; c--)
        this.particles[c].$element.data("stellar-elementIsActive", d);
        this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
            var c, e, f, g, h, i, j, k, l, m = a(this), n = 0, o = 0, p = 0, q = 0;
            if (m.data("stellar-elementIsActive")) {
                if (m.data("stellar-elementIsActive") !== this)
                    return
            } else
            m.data("stellar-elementIsActive", this);
            b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
            }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({$element: m, $offsetParent: j, isFixed: "fixed" === m.css("position"), horizontalOffset: c, verticalOffset: e, startingPositionLeft: f, startingPositionTop: g, startingOffsetLeft: k, startingOffsetTop: l, parentOffsetLeft: n, parentOffsetTop: o, stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1, width: m.outerWidth(!0), height: m.outerHeight(!0), isHidden: !1})
        })
    }, _findBackgrounds: function () {
        var b, c = this, e = this._getScrollLeft(), f = this._getScrollTop();
        this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function () {
            var b, g, h, i, j, k, l, o = a(this), p = n(o), q = 0, r = 0, s = 0, t = 0;
            if (o.data("stellar-backgroundIsActive")) {
                if (o.data("stellar-backgroundIsActive") !== this)
                    return
            } else
            o.data("stellar-backgroundIsActive", this);
            o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
            }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({$element: o, $offsetParent: l, isFixed: "fixed" === o.css("background-attachment"), horizontalOffset: b, verticalOffset: g, startingValueLeft: p[0], startingValueTop: p[1], startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10), startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10), startingPositionLeft: o.position().left, startingPositionTop: o.position().top, startingOffsetLeft: j, startingOffsetTop: k, parentOffsetLeft: q, parentOffsetTop: r, stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")})
        }))
    }, _reset: function () {
        var a, b, c, d, e;
        for (e = this.particles.length - 1; e >= 0; e--)
        a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
        for (e = this.backgrounds.length - 1; e >= 0; e--)
        d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
    }, destroy: function () {
        this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
    }, _setOffsets: function () {
        var c = this, d = a(b);
        d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function () {
            c.horizontalOffset = c.options.horizontalOffset()
        })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function () {
            c.verticalOffset = c.options.verticalOffset()
        })) : this.verticalOffset = this.options.verticalOffset
    }, _repositionElements: function () {
        var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(), l = this._getScrollTop(), n = !0, o = !0;
        if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
            for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--)
            a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
            for (j = this.backgrounds.length - 1; j >= 0; j--)
            c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
        }
    }, _handleScrollEvent: function () {
        var a = this, b = !1, c = function () {
            a._repositionElements(), b = !1
        }, d = function () {
            b || (o(c), b = !0)
        };
        this.$scrollElement.bind("scroll." + this.name, d), d()
    }, _startAnimationLoop: function () {
        var a = this;
        this._animationLoop = function () {
            o(a._animationLoop), a._repositionElements()
        }, this._animationLoop()
    }}, a.fn[f] = function (b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function () {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function () {
            var d = a.data(this, "plugin_" + f);
            d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
        }) : void 0
    }, a[f] = function () {
        var c = a(b);
        return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
    }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);


// initialize smooth anchor links
function initAnchors() {
    new SmoothScroll({
        anchorLinks: '.anchor-link'
    });
}

// Easy scroll animations for web and mobile browsers v3.0.6
function initScrollReveal() {
    window.sr = ScrollReveal();
    sr.reveal('.anim-right', {
        origin: 'right',
        distance: '30%',
        duration: 1000,
        delay: 300,
        scale: 1,
        easing: 'ease-out',
        mobile: false,
    });
    sr.reveal('.anim-left', {
        origin: 'left',
        distance: '30%',
        duration: 1000,
        delay: 300,
        scale: 1,
        easing: 'ease-out',
        mobile: false,
    });
    sr.reveal('.anim-top', {
        origin: 'top',
        distance: '30%',
        duration: 1000,
        delay: 300,
        scale: 1,
        easing: 'ease-out',
        mobile: false,
    });
    sr.reveal('.anim-fade', {
        distance: '0px',
        duration: 1000,
        delay: 300,
        scale: 1,
        easing: 'ease-out',
        mobile: false,
    });
}

// https://scrollrevealjs.org — https://github.com/jlmakes/scrollreveal.js
!function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.ScrollReveal = e()
}(this, function (t, e, n) {
    return function () {
        var t, e, n;
        this.ScrollReveal = function () {
            function i(n) {
                return window == this ? new i(n) : (e = this, e.tools = new t, e.tools.extend(e.defaults, n || {}), e.tools.isMobile() && !e.defaults.mobile ? !1 : e.tools.isSupported("transform") && e.tools.isSupported("transition") ? (e.store = {elements: {}, containers: []}, e.history = [], e.counter = 0, e.running = !1, e.initialized = !1, e) : console.warn("ScrollReveal is not supported in this browser."))
            }
            return i.prototype.defaults = {origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: {x: 0, y: 0, z: 0}, opacity: 0, scale: .9, easing: "cubic-bezier( 0.6, 0.2, 0.1, 1 )", container: null, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: {top: 0, right: 0, bottom: 0, left: 0}, afterReveal: function (t) {
            }, afterReset: function (t) {
            }}, i.prototype.reveal = function (t, n, i) {
                var o, r, s, a;
                if (r = n && n.container ? n.container : e.defaults.container ? e.defaults.container : window.document.documentElement, o = Array.prototype.slice.call(r.querySelectorAll(t)), !o.length)
                    return console.warn("reveal('" + t + "') failed: no elements found."), e;
                for (var l = 0; l < o.length; l++)
                s = {}, a = o[l].getAttribute("data-sr-id"), a ? s = e.store.elements[a] : (s = {id: ++e.counter, domEl: o[l], seen: !1, revealed: !1}, s.domEl.setAttribute("data-sr-id", s.id)), e.configure(s, n || {}), e.style(s), e.updateStore(s), s.revealed || s.domEl.setAttribute("style", s.styles.inline + s.styles.transform.initial);
                return i || (e.record(t, n), e.initTimeout && window.clearTimeout(e.initTimeout), e.initTimeout = window.setTimeout(e.init, 0)), e
            }, i.prototype.configure = function (t, n) {
                t.config ? t.config = e.tools.extendClone(t.config, n) : t.config = e.tools.extendClone(e.defaults, n), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X", ("top" === t.config.origin || "left" === t.config.origin) && (t.config.distance = "-" + t.config.distance)
            }, i.prototype.style = function (t) {
                function e(e) {
                    parseInt(n.distance) && (e.initial += " translate" + n.axis + "(" + n.distance + ")", e.target += " translate" + n.axis + "(0)"), n.scale && (e.initial += " scale(" + n.scale + ")", e.target += " scale(1)"), n.rotate.x && (e.initial += " rotateX(" + n.rotate.x + "deg)", e.target += " rotateX(0)"), n.rotate.y && (e.initial += " rotateY(" + n.rotate.y + "deg)", e.target += " rotateY(0)"), n.rotate.z && (e.initial += " rotateZ(" + n.rotate.z + "deg)", e.target += " rotateZ(0)"), e.initial += "; opacity: " + n.opacity + ";", e.target += "; opacity: " + t.styles.computed.opacity + ";"
                }
                var n = t.config, i = window.getComputedStyle(t.domEl);
                t.styles || (t.styles = {transition: {}, transform: {}, computed: {}}, t.styles.inline = t.domEl.getAttribute("style") || "", t.styles.inline += "; visibility: visible; ", t.styles.computed.opacity = i.opacity, i.transition && "all 0s ease 0s" != i.transition ? t.styles.computed.transition = i.transition + ", " : t.styles.computed.transition = ""), t.styles.transition.instant = "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " 0s, opacity " + n.duration / 1e3 + "s " + n.easing + " 0s; transition: " + t.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " 0s, opacity " + n.duration / 1e3 + "s " + n.easing + " 0s; ", t.styles.transition.delayed = "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + n.delay / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + n.delay / 1e3 + "s; transition: " + t.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + n.delay / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + n.delay / 1e3 + "s; ", t.styles.transform.initial = " -webkit-transform:", t.styles.transform.target = " -webkit-transform:", e(t.styles.transform), t.styles.transform.initial += "transform:", t.styles.transform.target += "transform:", e(t.styles.transform)
            }, i.prototype.updateStore = function (t) {
                var n = t.config.container;
                n && -1 == e.store.containers.indexOf(n) && e.store.containers.push(t.config.container), e.store.elements[t.id] = t
            }, i.prototype.record = function (t, n) {
                var i = {selector: t, config: n};
                e.history.push(i)
            }, i.prototype.init = function () {
                e.animate();
                for (var t = 0; t < e.store.containers.length; t++)
                e.store.containers[t].addEventListener("scroll", e.handler), e.store.containers[t].addEventListener("resize", e.handler);
                return e.initialized || (window.addEventListener("scroll", e.handler), window.addEventListener("resize", e.handler), e.initialized = !0), e
            }, i.prototype.handler = function () {
                e.running || n(function () {
                    e.running = !0, e.animate()
                })
            }, i.prototype.animate = function () {
                function t(t, e) {
                    var n = 0, i = 0, o = "after";
                    switch (t) {
                        case"reveal":
                            i = e.config.duration + e.config.delay, o += "Reveal";
                            break;
                            case"reset":
                                i = e.config.duration, o += "Reset"
                            }
                            return e.timer && (n = Math.abs(e.timer.started - new Date), window.clearTimeout(e.timer.clock)), e.timer = {started: new Date}, e.timer.clock = window.setTimeout(function () {
                                e.config[o](e.domEl), e.timer = null
                            }, i - n), "reveal" === t ? e.revealed = !0 : e.revealed = !1
                        }
                        var n, i;
                        e.tools.forOwn(e.store.elements, function (o) {
                            n = e.store.elements[o], i = e.isElemVisible(n), i && !n.revealed ? ("always" === n.config.useDelay || "onload" === n.config.useDelay && !e.initialized || "once" === n.config.useDelay && !n.seen ? n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.delayed) : n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.instant), n.seen = !0, t("reveal", n)) : !i && n.config.reset && n.revealed && (n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.initial + n.styles.transition.instant), t("reset", n))
                        }), e.running = !1
                    }, i.prototype.getContainer = function (t) {
                        t || (t = window.document.documentElement);
                        var e = t.clientWidth, n = t.clientHeight;
                        return{width: e, height: n}
                    }, i.prototype.getScrolled = function (t) {
                        if (t) {
                            var n = e.getOffset(t);
                            return{x: t.scrollLeft + n.left, y: t.scrollTop + n.top}
                        }
                        return{x: window.pageXOffset, y: window.pageYOffset}
                    }, i.prototype.getOffset = function (t) {
                        var e = 0, n = 0, i = t.offsetHeight, o = t.offsetWidth;
                        do
                        isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (n += t.offsetLeft);
                        while (t = t.offsetParent);
                        return{top: e, left: n, height: i, width: o}
                    }, i.prototype.isElemVisible = function (t) {
                        function n() {
                            var e = f + l * a, n = d + c * a, i = u - l * a, o = y - c * a, p = s.y + t.config.viewOffset.top, g = s.x + t.config.viewOffset.left, m = s.y - t.config.viewOffset.bottom + r.height, w = s.x - t.config.viewOffset.right + r.width;
                            return m > e && i > p && n > g && w > o
                        }
                        function i() {
                            return"fixed" === window.getComputedStyle(t.domEl).position
                        }
                        var o = e.getOffset(t.domEl), r = e.getContainer(t.config.container), s = e.getScrolled(t.config.container), a = t.config.viewFactor, l = o.height, c = o.width, f = o.top, d = o.left, u = f + l, y = d + c;
                        return n() || i()
                    }, i.prototype.sync = function () {
                        if (e.history.length) {
                            for (var t = 0; t < e.history.length; t++) {
                                var n = e.history[t];
                                e.reveal(n.selector, n.config, !0)
                            }
                            e.init()
                        } else
                        console.warn("sync() failed: no reveals found.");
                        return e
                    }, i
                }();
                var t = function () {
                    function t() {
                    }
                    return t.prototype.isObject = function (t) {
                        return null !== t && "object" == typeof t && t.constructor == Object
                    }, t.prototype.forOwn = function (t, e) {
                        if (!this.isObject(t))
                            throw new TypeError("Expected 'object', but received '" + typeof t + "'.");
                        for (var n in t)
                        t.hasOwnProperty(n) && e(n)
                    }, t.prototype.extend = function (t, e) {
                        return this.forOwn(e, function (n) {
                            this.isObject(e[n]) ? (t[n] && this.isObject(t[n]) || (t[n] = {}), this.extend(t[n], e[n])) : t[n] = e[n]
                        }.bind(this)), t
                    }, t.prototype.extendClone = function (t, e) {
                        return this.extend(this.extend({}, t), e)
                    }, t.prototype.isMobile = function () {
                        return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    }, t.prototype.isSupported = function (t) {
                        for (var e = document.createElement("sensor"), n = "Webkit,Moz,O,".split(","), i = (t + n.join(t + ",")).split(","), o = 0; o < i.length; o++)
                        if ("" === !e.style[i[o]])
                            return!1;
                        return!0
                    }, t
                }(), n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
            }.call(this), this.ScrollReveal
        });


// SmoothScroll for websites v1.4.0 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me.
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any
// extension for browsers or native application
// without getting a written permission first.
//

(function () {

// Scroll Variables (tweakable)
var defaultOptions = {
        // Scrolling Core
        frameRate: 150, // [Hz]
        animationTime: 500, // [ms]
        stepSize: 100, // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        // Acceleration
        accelerationDelta: 50, // 50
        accelerationMax: 3, // 3

        // Keyboard Settings
        keyboardSupport: true, // option
        arrowScroll: 50, // [px]

        // Other
        touchpadSupport: false, // ignore touchpad by default
        fixedBackground: true,
        excluded: ''
    };

    var options = defaultOptions;

    // Other Variables
    var isExcluded = false;
    var isFrame = false;
    var direction = {
        x: 0,
        y: 0
    };
    var initDone = false;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var refreshSize;
    var deltaBuffer = [];
    var isMac = /^Mac/.test(navigator.platform);

    var key = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };


    /***********************************************
     * INITIALIZE
     ***********************************************/

    /**
     * Tests if smooth scrolling is allowed. Shuts down everything if not.
     */
     function initTest() {
        if (options.keyboardSupport) {
            addEvent('keydown', keydown);
        }
    }

    /**
     * Sets up scrolls array, determines if frames are involved.
     */
     function init() {

        if (initDone || !document.body)
            return;

        initDone = true;

        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;

        // check compat mode for root element
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;

        initTest();

        // Checks if this script is running in a frame
        if (top != self) {
            isFrame = true;
        }

        /**
         * Please duplicate this radar for a Safari fix!
         * rdar://22376037
         * https://openradar.appspot.com/radar?id=4965070979203072
         *
         * Only applies to Safari now, Chrome fixed it in v45:
         * This fixes a bug where the areas left and right to
         * the content does not trigger the onmousewheel event
         * on some pages. e.g.: html, body { height: 100% }
         */
         else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight ||
                html.offsetHeight <= windowHeight)) {

            var fullPageElem = document.createElement('div');
        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
        'top:0; left:0; right:0; height:' +
        root.scrollHeight + 'px';
        document.body.appendChild(fullPageElem);

            // DOM changed (throttled) to fix height
            var pendingRefresh;
            refreshSize = function () {
                if (pendingRefresh)
                    return; // could also be: clearTimeout(pendingRefresh);
                pendingRefresh = setTimeout(function () {
                    if (isExcluded)
                        return; // could be running after cleanup
                    fullPageElem.style.height = '0';
                    fullPageElem.style.height = root.scrollHeight + 'px';
                    pendingRefresh = null;
                }, 500); // act rarely to stay fast
            };

            setTimeout(refreshSize, 10);

            addEvent('resize', refreshSize);

            // TODO: attributeFilter?
            var config = {
                attributes: true,
                childList: true,
                characterData: false
                        // subtree: true
                    };

                    observer = new MutationObserver(refreshSize);
                    observer.observe(body, config);

                    if (root.offsetHeight <= windowHeight) {
                        var clearfix = document.createElement('div');
                        clearfix.style.clear = 'both';
                        body.appendChild(clearfix);
                    }
                }

        // disable fixed background
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = 'scroll';
            html.style.backgroundAttachment = 'scroll';
        }
    }

    /**
     * Removes event listeners and other traces left on the page.
     */
     function cleanup() {
        observer && observer.disconnect();
        removeEvent(wheelEvent, wheel);
        removeEvent('mousedown', mousedown);
        removeEvent('keydown', keydown);
        removeEvent('resize', refreshSize);
        removeEvent('load', init);
    }


    /************************************************
     * SCROLLING
     ************************************************/

     var que = [];
     var pending = false;
     var lastScroll = Date.now();

    /**
     * Pushes scroll actions to the scrolling queue.
     */
     function scrollArray(elem, left, top) {

        directionCheck(left, top);

        if (options.accelerationMax != 1) {
            var now = Date.now();
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + (50 / elapsed)) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top *= factor;
                }
            }
            lastScroll = Date.now();
        }

        // push a scroll command
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top < 0) ? 0.99 : -0.99,
            start: Date.now()
        });

        // don't act if there's a pending queue
        if (pending) {
            return;
        }

        var scrollWindow = (elem === document.body);

        var step = function (time) {

            var now = Date.now();
            var scrollX = 0;
            var scrollY = 0;

            for (var i = 0; i < que.length; i++) {

                var item = que[i];
                var elapsed = now - item.start;
                var finished = (elapsed >= options.animationTime);

                // scroll position: [0, 1]
                var position = (finished) ? 1 : elapsed / options.animationTime;

                // easing [optional]
                if (options.pulseAlgorithm) {
                    position = pulse(position);
                }

                // only need the difference
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;

                // add this to the total scrolling
                scrollX += x;
                scrollY += y;

                // update last values
                item.lastX += x;
                item.lastY += y;

                // delete and step back if it's over
                if (finished) {
                    que.splice(i, 1);
                    i--;
                }
            }

            // scroll left and top
            if (scrollWindow) {
                window.scrollBy(scrollX, scrollY);
            } else {
                if (scrollX)
                    elem.scrollLeft += scrollX;
                if (scrollY)
                    elem.scrollTop += scrollY;
            }

            // clean up if there's nothing left to do
            if (!left && !top) {
                que = [];
            }

            if (que.length) {
                requestFrame(step, elem, (1000 / options.frameRate + 1));
            } else {
                pending = false;
            }
        };

        // start a new queue of actions
        requestFrame(step, elem, 0);
        pending = true;
    }


    /***********************************************
     * EVENTS
     ***********************************************/

    /**
     * Mouse wheel handler.
     * @param {Object} event
     */
     function wheel(event) {

        if (!initDone) {
            init();
        }

        var target = event.target;
        var overflowing = overflowingAncestor(target);

        // use default if there's no overflowing
        // element or default action is prevented
        // or it's a zooming event with CTRL
        if (!overflowing || event.defaultPrevented || event.ctrlKey) {
            return true;
        }

        // leave embedded content alone (flash & pdf)
        if (isNodeName(activeElement, 'embed') ||
            (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
            isNodeName(activeElement, 'object')) {
            return true;
    }

    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;

    if (isMac) {
        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
            deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
        }
        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
            deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
        }
    }

        // use wheelDelta if deltaX/Y is not available
        if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0;
        }

        // line based scrolling (Firefox mostly)
        if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40;
        }

        // check if it's a touchpad scroll that should be ignored
        if (!options.touchpadSupport && isTouchpad(deltaY)) {
            return true;
        }

        // scale by step size
        // delta is 120 most of the time
        // synaptics seems to send 1 sometimes
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
        }

        scrollArray(overflowing, deltaX, deltaY);
        event.preventDefault();
        scheduleClearCache();
    }

    /**
     * Keydown event handler.
     * @param {Object} event
     */
     function keydown(event) {

        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey ||
        (event.shiftKey && event.keyCode !== key.spacebar);

        // our own tracked active element could've been removed from the DOM
        if (!document.contains(activeElement)) {
            activeElement = document.activeElement;
        }

        // do nothing if user is editing text
        // or using a modifier key (except shift)
        // or in a dropdown
        // or inside interactive elements
        var inputNodeNames = /^(textarea|select|embed|object)$/i;
        var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (inputNodeNames.test(target.nodeName) ||
            isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
            isNodeName(activeElement, 'video') ||
            isInsideYoutubeVideo(event) ||
            target.isContentEditable ||
            event.defaultPrevented ||
            modifier) {
            return true;
    }

        // spacebar should trigger button press
        if ((isNodeName(target, 'button') ||
            isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
            event.keyCode === key.spacebar) {
            return true;
    }

    var shift, x = 0,
    y = 0;
    var elem = overflowingAncestor(activeElement);
    var clientHeight = elem.clientHeight;

    if (elem == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
            case key.down:
                y = options.arrowScroll;
                break;
            case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
            case key.pageup:
                y = -clientHeight * 0.9;
                break;
                case key.pagedown:
                    y = clientHeight * 0.9;
                    break;
                    case key.home:
                        y = -elem.scrollTop;
                        break;
                        case key.end:
                            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                            y = (damt > 0) ? damt + 10 : 0;
                            break;
                            case key.left:
                                x = -options.arrowScroll;
                                break;
                                case key.right:
                                    x = options.arrowScroll;
                                    break;
                                    default:
                return true; // a key we don't care about
            }

            scrollArray(elem, x, y);
            event.preventDefault();
            scheduleClearCache();
        }

    /**
     * Mousedown event only for updating activeElement
     */
     function mousedown(event) {
        activeElement = event.target;
    }


    /***********************************************
     * OVERFLOW
     ***********************************************/

     var uniqueID = (function () {
        var i = 0;
        return function (el) {
            return el.uniqueID || (el.uniqueID = i++);
        };
    })();

    var cache = {}; // cleared out after a scrolling session
    var clearCacheTimer;

    //setInterval(function () { cache = {}; }, 10 * 1000);

    function scheduleClearCache() {
        clearTimeout(clearCacheTimer);
        clearCacheTimer = setInterval(function () {
            cache = {};
        }, 1 * 1000);
    }

    function setCache(elems, overflowing) {
        for (var i = elems.length; i--; )
        cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }

    //  (body)                (root)
    //         | hidden | visible | scroll |  auto  |
    // hidden  |   no   |    no   |   YES  |   YES  |
    // visible |   no   |   YES   |   YES  |   YES  |
    // scroll  |   no   |   YES   |   YES  |   YES  |
    // auto    |   no   |   YES   |   YES  |   YES  |

    function overflowingAncestor(el) {
        var elems = [];
        var body = document.body;
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = cache[uniqueID(el)];
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
                var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
                if (isFrame && isContentOverflowing(root) ||
                    !isFrame && isOverflowCSS) {
                    return setCache(elems, getScrollRoot());
            }
        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
            return setCache(elems, el);
        }
    } while (el = el.parentElement);
}

function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
}

    // typically for <body> and <html>
    function overflowNotHidden(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow !== 'hidden');
    }

    // for all other elements
    function overflowAutoOrScroll(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow === 'scroll' || overflow === 'auto');
    }


    /***********************************************
     * HELPERS
     ***********************************************/

     function addEvent(type, fn) {
        window.addEventListener(type, fn, false);
    }

    function removeEvent(type, fn) {
        window.removeEventListener(type, fn, false);
    }

    function isNodeName(el, tag) {
        return (el.nodeName || '').toLowerCase() === tag.toLowerCase();
    }

    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0;
        }
    }

    var deltaBufferTimer;

    if (window.localStorage && localStorage.SS_deltaBuffer) {
        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    }

    function isTouchpad(deltaY) {
        if (!deltaY)
            return;
        if (!deltaBuffer.length) {
            deltaBuffer = [deltaY, deltaY, deltaY];
        }
        deltaY = Math.abs(deltaY)
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        deltaBufferTimer = setTimeout(function () {
            if (window.localStorage) {
                localStorage.SS_deltaBuffer = deltaBuffer.join(',');
            }
        }, 1000);
        return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
    }

    function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor);
    }

    function allDeltasDivisableBy(divisor) {
        return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
    }

    function isInsideYoutubeVideo(event) {
        var elem = event.target;
        var isControl = false;
        if (document.URL.indexOf('www.youtube.com/watch') != -1) {
            do {
                isControl = (elem.classList &&
                    elem.classList.contains('html5-video-controls'));
                if (isControl)
                    break;
            } while (elem = elem.parentNode);
        }
        return isControl;
    }

    var requestFrame = (function () {
        return (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback, element, delay) {
                window.setTimeout(callback, delay || (1000 / 60));
            });
    })();

    var MutationObserver = (window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver);

    var getScrollRoot = (function () {
        var SCROLL_ROOT;
        return function () {
            if (!SCROLL_ROOT) {
                var dummy = document.createElement('div');
                dummy.style.cssText = 'height:10000px;width:1px;';
                document.body.appendChild(dummy);
                var bodyScrollTop = document.body.scrollTop;
                var docElScrollTop = document.documentElement.scrollTop;
                window.scrollBy(0, 3);
                if (document.body.scrollTop != bodyScrollTop)
                    (SCROLL_ROOT = document.body);
                else
                    (SCROLL_ROOT = document.documentElement);
                window.scrollBy(0, -3);
                document.body.removeChild(dummy);
            }
            return SCROLL_ROOT;
        };
    })();


    /***********************************************
     * PULSE (by Michael Herf)
     ***********************************************/

    /**
     * Viscous fluid with a pulse for part and decay for the rest.
     * - Applies a fixed force over an interval (a damped acceleration), and
     * - Lets the exponential bleed away the velocity over a longer interval
     * - Michael Herf, http://stereopsis.com/stopping/
     */
     function pulse_(x) {
        var val, start, expx;
        // test
        x = x * options.pulseScale;
        if (x < 1) { // acceleartion
            val = x - (1 - Math.exp(-x));
        } else { // tail
            // the previous animation ended here:
            start = Math.exp(-1);
            // simple viscous drag
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start));
        }
        return val * options.pulseNormalize;
    }

    function pulse(x) {
        if (x >= 1)
            return 1;
        if (x <= 0)
            return 0;

        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }


    /***********************************************
     * FIRST RUN
     ***********************************************/

     var userAgent = window.navigator.userAgent;
    var isEdge = /Edge/.test(userAgent); // thank you MS
    var isChrome = /chrome/i.test(userAgent) && !isEdge;
    var isSafari = /safari/i.test(userAgent) && !isEdge;
    var isMobile = /mobile/i.test(userAgent);
    var isEnabledForBrowser = (isChrome || isSafari) && !isMobile;

    var wheelEvent;
    if ('onwheel' in document.createElement('div'))
        wheelEvent = 'wheel';
    else if ('onmousewheel' in document.createElement('div'))
        wheelEvent = 'mousewheel';

    if (wheelEvent && isEnabledForBrowser) {
        addEvent(wheelEvent, wheel);
        addEvent('mousedown', mousedown);
        addEvent('load', init);
    }


    /***********************************************
     * PUBLIC INTERFACE
     ***********************************************/

     function SmoothScroll(optionsToSet) {
        for (var key in optionsToSet)
        if (defaultOptions.hasOwnProperty(key))
            options[key] = optionsToSet[key];
    }
    SmoothScroll.destroy = cleanup;

    if (window.SmoothScrollOptions) // async API
        SmoothScroll(window.SmoothScrollOptions)

    if (typeof define === 'function' && define.amd)
        define(function () {
            return SmoothScroll;
        });
    else if ('object' == typeof exports)
        module.exports = SmoothScroll;
    else
        window.SmoothScroll = SmoothScroll;

})();

// bxSlider
function initBxSlider() {
    var homeVideSlider = [];
    jQuery('.bxslider').bxSlider({
        controls: true,
        pager: true,
        auto: true,
        speed: 1000,
        pause: $('.bxslider').attr('pause-time'),
        autoHover: true,
        adaptiveHeight: true,
        touchEnabled: ($('.bxslider').children().length < 2) ? false : true,
        wrapperClass: 'promo-gallery',
        onSliderLoad: function (currentIndex) {
            if ($('.bg-video', $('div[slide-index="' + currentIndex + '"]')).length > 0) {
                var $cslide = $('.bg-video', $('div[slide-index="' + currentIndex + '"]'));
                homeVideSlider[currentIndex] = $cslide.vide({
                    mp4: $cslide.attr('ammp4'),
                    webm: $cslide.attr('amwebm')
                }, {
                    posterType: 'jpg',
                    loop: true,
                    muted: true,
                    position: '50% 50%',
                    autoplay: true
                });
            }
            if ($('.home.page .promo-gallery').length === 0) {
                $('.bx-pager').hide();
                $('.go-down').show();
            }
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            /*
             if ($('.bg-video', $('div[slide-index="' + oldIndex + '"]')).length > 0) {
             homeVideSlider[oldIndex].html('');
             }
             if ($('.bg-video', $('div[slide-index="' + newIndex + '"]')).length > 0) {
             var $cslide = $('.bg-video', $('div[slide-index="' + newIndex + '"]'));
             homeVideSlider[newIndex] = $cslide.vide({
             mp4: $cslide.attr('ammp4'),
             webm: $cslide.attr('amwebm')
             }, {
             posterType: 'jpg',
             loop: true,
             muted: true,
             position: '50% 50%',
             autoplay: true
             });
         } */
     }
 });
    jQuery('.partners-slider').bxSlider({
        controls: false,
        pager: false,
        auto: true,
        maxSlides: 5,
        // slideWidth: 176,
        slideWidth: 164,
        moveSlides: 1,
        pause: 2000,
        shrinkItems: true,
        autoHover: true,
        wrapperClass: 'partners-gallery',
    })
     jQuery('.customers-list').bxSlider({
        controls: false,
        pager: false,
        auto: true,
        maxSlides: 6,
        // slideWidth: 176,
        slideWidth: 164,
        moveSlides: 1,
        pause: 2000,
        shrinkItems: true,
        autoHover: true,
        wrapperClass: 'partners-gallery partners-industry',
    }); 
     jQuery('.testimonial-1').bxSlider({
        mode: 'fade',
        controls: false,
        pager: false,
        auto: true,
        pause: 2000,
        shrinkItems: true,
        autoHover: true,
    }); 
     jQuery('.testimonial-2').bxSlider({
        mode: 'fade',
        controls: false,
        pager: false,
        auto: true,
        pause: 2000,
        shrinkItems: true,
        autoHover: true,
    });
     jQuery('.testimonial-3').bxSlider({
        mode: 'fade',
        controls: false,
        pager: false,
        auto: true,
        pause: 2000,
        shrinkItems: true,
        autoHover: true,
    });
     jQuery('.testimonial-4').bxSlider({
        mode: 'fade',
        controls: false,
        pager: false,
        auto: true,
        pause: 2000,
        shrinkItems: true,
        autoHover: true,
    });
    jQuery('.testimonial-5').bxSlider({
        mode: 'fade',
        controls: false,
        pager: false,
        auto: true,
        pause: 2000,
        shrinkItems: true,
        autoHover: true,
    });
    jQuery('.testimonial-6').bxSlider({
        mode: 'fade',
        controls: false,
        pager: false,
        auto: true,
        pause: 2000,
        shrinkItems: true,
        autoHover: true,
    });
    jQuery('.items-slider').bxSlider({
        controls: true,
        pager: false,
        maxSlides: 3,
        slideWidth: 340,
        moveSlides: 1,
        slideMargin: 40,
        shrinkItems: true,
        nextText: '',
        prevText: '',
        wrapperClass: 'items-gallery',
    });
}
;

/**
 * bxSlider v4.2.5
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

 !function (a) {
    var b = {mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function () {
        return!0
    }, onSlideBefore: function () {
        return!0
    }, onSlideAfter: function () {
        return!0
    }, onSlideNext: function () {
        return!0
    }, onSlidePrev: function () {
        return!0
    }, onSliderResize: function () {
        return!0
    }};
    a.fn.bxSlider = function (c) {
        if (0 === this.length)
            return this;
        if (this.length > 1)
            return this.each(function () {
                a(this).bxSlider(c)
            }), this;
        var d = {}, e = this, f = a(window).width(), g = a(window).height();
        if (!a(e).data("bxSlider")) {
            var h = function () {
                a(e).data("bxSlider") || (d.settings = a.extend({}, b, c), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = e.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = {index: d.settings.startSlide}, d.carousel = d.settings.minSlides > 1 || d.settings.maxSlides > 1 ? !0 : !1, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function () {
                    for (var a = document.createElement("div"), b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], c = 0; c < b.length; c++)
                    if (void 0 !== a.style[b[c]])
                        return d.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0;
                    return!1
                }(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), e.data("origStyle", e.attr("style")), e.children(d.settings.slideSelector).each(function () {
                    a(this).data("origStyle", a(this).attr("style"))
                }), j())
            }, j = function () {
                var b = d.children.eq(d.settings.startSlide);
                e.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = e.parent(), d.settings.ariaLive && !d.settings.ticker && d.viewport.attr("aria-live", "polite"), d.loader = a('<div class="bx-loading" />'), d.viewport.prepend(d.loader), e.css({width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto", position: "relative"}), d.usingCSS && d.settings.easing ? e.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing"), d.viewport.css({width: "100%", overflow: "hidden", position: "relative"}), d.viewport.parent().css({maxWidth: n()}), d.settings.pager || d.settings.controls || d.viewport.parent().css({margin: "0 auto 0px"}), d.children.css({"float": "horizontal" === d.settings.mode ? "left" : "none", listStyle: "none", position: "relative"}), d.children.css("width", o()), "horizontal" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({position: "absolute", zIndex: 0, display: "none"}), d.children.eq(d.settings.startSlide).css({zIndex: d.settings.slideZIndex, display: "block"})), d.controls.el = a('<div class="bx-controls" />'), d.settings.captions && y(), d.active.last = d.settings.startSlide === q() - 1, d.settings.video && e.fitVids(), ("all" === d.settings.preloadImages || d.settings.ticker) && (b = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && w(), d.settings.auto && d.settings.autoControls && x(), d.settings.pager && v(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), k(b, l)
            }, k = function (b, c) {
                var d = b.find('img:not([src=""]), iframe').length, e = 0;
                return 0 === d ? void c() : void b.find('img:not([src=""]), iframe').each(function () {
                    a(this).one("load error", function () {
                        ++e === d && c()
                    }).each(function () {
                        this.complete && a(this).load()
                    })
                })
            }, l = function () {
                if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) {
                    var b = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides, c = d.children.slice(0, b).clone(!0).addClass("bx-clone"), f = d.children.slice(-b).clone(!0).addClass("bx-clone");
                    d.settings.ariaHidden && (c.attr("aria-hidden", !0), f.attr("aria-hidden", !0)), e.append(c).prepend(f)
                }
                d.loader.remove(), s(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(m()), e.redrawSlider(), d.settings.onSliderLoad.call(e, d.active.index), d.initialized = !0, d.settings.responsive && a(window).bind("resize", S), d.settings.auto && d.settings.autoStart && (q() > 1 || d.settings.autoSlideForOnePage) && I(), d.settings.ticker && J(), d.settings.pager && E(d.settings.startSlide), d.settings.controls && H(), d.settings.touchEnabled && !d.settings.ticker && N(), d.settings.keyboardEnabled && !d.settings.ticker && a(document).keydown(M)
            }, m = function () {
                var b = 0, c = a();
                if ("vertical" === d.settings.mode || d.settings.adaptiveHeight)
                    if (d.carousel) {
                        var e = 1 === d.settings.moveSlides ? d.active.index : d.active.index * r();
                        for (c = d.children.eq(e), i = 1; i <= d.settings.maxSlides - 1; i++)
                        c = e + i >= d.children.length ? c.add(d.children.eq(i - 1)) : c.add(d.children.eq(e + i))
                    } else
                    c = d.children.eq(d.active.index);
                    else
                        c = d.children;
                    return"vertical" === d.settings.mode ? (c.each(function (c) {
                        b += a(this).outerHeight()
                    }), d.settings.slideMargin > 0 && (b += d.settings.slideMargin * (d.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function () {
                        return a(this).outerHeight(!1)
                    }).get()), "border-box" === d.viewport.css("box-sizing") ? b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), b
                }, n = function () {
                    var a = "100%";
                    return d.settings.slideWidth > 0 && (a = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), a
                }, o = function () {
                    var a = d.settings.slideWidth, b = d.viewport.width();
                    if (0 === d.settings.slideWidth || d.settings.slideWidth > b && !d.carousel || "vertical" === d.settings.mode)
                        a = b;
                    else if (d.settings.maxSlides > 1 && "horizontal" === d.settings.mode) {
                        if (b > d.maxThreshold)
                            return a;
                        b < d.minThreshold ? a = (b - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides : d.settings.shrinkItems && (a = Math.floor((b + d.settings.slideMargin) / Math.ceil((b + d.settings.slideMargin) / (a + d.settings.slideMargin)) - d.settings.slideMargin))
                    }
                    return a
                }, p = function () {
                    var a = 1, b = null;
                    return"horizontal" === d.settings.mode && d.settings.slideWidth > 0 ? d.viewport.width() < d.minThreshold ? a = d.settings.minSlides : d.viewport.width() > d.maxThreshold ? a = d.settings.maxSlides : (b = d.children.first().width() + d.settings.slideMargin, a = Math.floor((d.viewport.width() + d.settings.slideMargin) / b)) : "vertical" === d.settings.mode && (a = d.settings.minSlides), a
                }, q = function () {
                    var a = 0, b = 0, c = 0;
                    if (d.settings.moveSlides > 0)
                        if (d.settings.infiniteLoop)
                            a = Math.ceil(d.children.length / r());
                        else
                            for (; b < d.children.length; )
                        ++a, b = c + p(), c += d.settings.moveSlides <= p() ? d.settings.moveSlides : p();
                        else
                            a = Math.ceil(d.children.length / p());
                        return a
                    }, r = function () {
                        return d.settings.moveSlides > 0 && d.settings.moveSlides <= p() ? d.settings.moveSlides : p()
                    }, s = function () {
                        var a, b, c;
                        d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop ? "horizontal" === d.settings.mode ? (b = d.children.last(), a = b.position(), t(-(a.left - (d.viewport.width() - b.outerWidth())), "reset", 0)) : "vertical" === d.settings.mode && (c = d.children.length - d.settings.minSlides, a = d.children.eq(c).position(), t(-a.top, "reset", 0)) : (a = d.children.eq(d.active.index * r()).position(), d.active.index === q() - 1 && (d.active.last = !0), void 0 !== a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0)))
                    }, t = function (b, c, f, g) {
                        var h, i;
                        d.usingCSS ? (i = "vertical" === d.settings.mode ? "translate3d(0, " + b + "px, 0)" : "translate3d(" + b + "px, 0, 0)", e.css("-" + d.cssPrefix + "-transition-duration", f / 1e3 + "s"), "slide" === c ? (e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) {
                            a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F())
                        }) : F()) : "reset" === c ? e.css(d.animProp, i) : "ticker" === c && (e.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) {
                            a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), t(g.resetValue, "reset", 0), K())
                        }) : (t(g.resetValue, "reset", 0), K()))) : (h = {}, h[d.animProp] = b, "slide" === c ? e.animate(h, f, d.settings.easing, function () {
                            F()
                        }) : "reset" === c ? e.css(d.animProp, b) : "ticker" === c && e.animate(h, f, "linear", function () {
                            t(g.resetValue, "reset", 0), K()
                        }))
                    }, u = function () {
                        for (var b = "", c = "", e = q(), f = 0; e > f; f++)
                        c = "", d.settings.buildPager && a.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (c = d.settings.buildPager(f), d.pagerEl.addClass("bx-custom-pager")) : (c = f + 1, d.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + c + "</a></div>";
                        d.pagerEl.html(b)
                    }, v = function () {
                        d.settings.pagerCustom ? d.pagerEl = a(d.settings.pagerCustom) : (d.pagerEl = a('<div class="bx-pager" />'), d.settings.pagerSelector ? a(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), u()), d.pagerEl.on("click touchend", "a", D)
                    }, w = function () {
                        d.controls.next = a('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = a('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", z), d.controls.prev.bind("click touchend", A), d.settings.nextSelector && a(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && a(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = a('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))
                    }, x = function () {
                        d.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = a('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", B), d.controls.autoEl.on("click", ".bx-stop", C), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? a(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), G(d.settings.autoStart ? "stop" : "start")
                    }, y = function () {
                        d.children.each(function (b) {
                            var c = a(this).find("img:first").attr("title");
                            void 0 !== c && ("" + c).length && a(this).append('<div class="bx-caption"><span>' + c + "</span></div>")
                        })
                    }, z = function (a) {
                        a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToNextSlide())
                    }, A = function (a) {
                        a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToPrevSlide())
                    }, B = function (a) {
                        e.startAuto(), a.preventDefault()
                    }, C = function (a) {
                        e.stopAuto(), a.preventDefault()
                    }, D = function (b) {
                        var c, f;
                        b.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), c = a(b.currentTarget), void 0 !== c.attr("data-slide-index") && (f = parseInt(c.attr("data-slide-index")), f !== d.active.index && e.goToSlide(f)))
                    }, E = function (b) {
                        var c = d.children.length;
                        return"short" === d.settings.pagerType ? (d.settings.maxSlides > 1 && (c = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(b + 1 + d.settings.pagerShortSeparator + c)) : (d.pagerEl.find("a").removeClass("active"), void d.pagerEl.each(function (c, d) {
                            a(d).find("a").eq(b).addClass("active")
                        }))
                    }, F = function () {
                        if (d.settings.infiniteLoop) {
                            var a = "";
                            0 === d.active.index ? a = d.children.eq(0).position() : d.active.index === q() - 1 && d.carousel ? a = d.children.eq((q() - 1) * r()).position() : d.active.index === d.children.length - 1 && (a = d.children.eq(d.children.length - 1).position()), a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0))
                        }
                        d.working = !1, d.settings.onSlideAfter.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index)
                    }, G = function (a) {
                        d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[a]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active"))
                    }, H = function () {
                        1 === q() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === q() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled")))
                    }, I = function () {
                        if (d.settings.autoDelay > 0) {
                            setTimeout(e.startAuto, d.settings.autoDelay)
                        } else
                        e.startAuto(), a(window).focus(function () {
                            e.startAuto()
                        }).blur(function () {
                            e.stopAuto()
                        });
                        d.settings.autoHover && e.hover(function () {
                            d.interval && (e.stopAuto(!0), d.autoPaused = !0)
                        }, function () {
                            d.autoPaused && (e.startAuto(!0), d.autoPaused = null)
                        })
                    }, J = function () {
                        var b, c, f, g, h, i, j, k, l = 0;
                        "next" === d.settings.autoDirection ? e.append(d.children.clone().addClass("bx-clone")) : (e.prepend(d.children.clone().addClass("bx-clone")), b = d.children.first().position(), l = "horizontal" === d.settings.mode ? -b.left : -b.top), t(l, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && (d.usingCSS ? (g = "horizontal" === d.settings.mode ? 4 : 5, d.viewport.hover(function () {
                            c = e.css("-" + d.cssPrefix + "-transform"), f = parseFloat(c.split(",")[g]), t(f, "reset", 0)
                        }, function () {
                            k = 0, d.children.each(function (b) {
                                k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                            }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(f))), K(j)
                        })) : d.viewport.hover(function () {
                            e.stop()
                        }, function () {
                            k = 0, d.children.each(function (b) {
                                k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                            }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(e.css(i)))), K(j)
                        })), K()
                    }, K = function (a) {
                        var b, c, f, g = a ? a : d.settings.speed, h = {left: 0, top: 0}, i = {left: 0, top: 0};
                        "next" === d.settings.autoDirection ? h = e.find(".bx-clone").first().position() : i = d.children.first().position(), b = "horizontal" === d.settings.mode ? -h.left : -h.top, c = "horizontal" === d.settings.mode ? -i.left : -i.top, f = {resetValue: c}, t(b, "ticker", g, f)
                    }, L = function (b) {
                        var c = a(window), d = {top: c.scrollTop(), left: c.scrollLeft()}, e = b.offset();
                        return d.right = d.left + c.width(), d.bottom = d.top + c.height(), e.right = e.left + b.outerWidth(), e.bottom = e.top + b.outerHeight(), !(d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom)
                    }, M = function (a) {
                        var b = document.activeElement.tagName.toLowerCase(), c = "input|textarea", d = new RegExp(b, ["i"]), f = d.exec(c);
                        if (null == f && L(e)) {
                            if (39 === a.keyCode)
                                return z(a), !1;
                            if (37 === a.keyCode)
                                return A(a), !1
                        }
                    }, N = function () {
                        d.touch = {start: {x: 0, y: 0}, end: {x: 0, y: 0}}, d.viewport.bind("touchstart MSPointerDown pointerdown", O), d.viewport.on("click", ".bxslider a", function (a) {
                            d.viewport.hasClass("click-disabled") && (a.preventDefault(), d.viewport.removeClass("click-disabled"))
                        })
                    }, O = function (a) {
                        if (d.controls.el.addClass("disabled"), d.working)
                            a.preventDefault(), d.controls.el.removeClass("disabled");
                        else {
                            d.touch.originalPos = e.position();
                            var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b];
                            d.touch.start.x = c[0].pageX, d.touch.start.y = c[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = b.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", Q), d.viewport.bind("touchend MSPointerUp pointerup", R), d.viewport.bind("MSPointerCancel pointercancel", P)
                        }
                    }, P = function (a) {
                        t(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", P), d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId)
                    }, Q = function (a) {
                        var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], e = Math.abs(c[0].pageX - d.touch.start.x), f = Math.abs(c[0].pageY - d.touch.start.y), g = 0, h = 0;
                        3 * e > f && d.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * f > e && d.settings.preventDefaultSwipeY && a.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch && ("horizontal" === d.settings.mode ? (h = c[0].pageX - d.touch.start.x, g = d.touch.originalPos.left + h) : (h = c[0].pageY - d.touch.start.y, g = d.touch.originalPos.top + h), t(g, "reset", 0))
                    }, R = function (a) {
                        d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.controls.el.removeClass("disabled");
                        var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], f = 0, g = 0;
                        d.touch.end.x = c[0].pageX, d.touch.end.y = c[0].pageY, "fade" === d.settings.mode ? (g = Math.abs(d.touch.start.x - d.touch.end.x), g >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto())) : ("horizontal" === d.settings.mode ? (g = d.touch.end.x - d.touch.start.x, f = d.touch.originalPos.left) : (g = d.touch.end.y - d.touch.start.y, f = d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && g > 0 || d.active.last && 0 > g) ? t(f, "reset", 200) : Math.abs(g) >= d.settings.swipeThreshold ? (0 > g ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto()) : t(f, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId)
                    }, S = function (b) {
                        if (d.initialized)
                            if (d.working)
                                window.setTimeout(S, 10);
                            else {
                                var c = a(window).width(), h = a(window).height();
                                (f !== c || g !== h) && (f = c, g = h, e.redrawSlider(), d.settings.onSliderResize.call(e, d.active.index))
                            }
                        }, T = function (a) {
                            var b = p();
                            d.settings.ariaHidden && !d.settings.ticker && (d.children.attr("aria-hidden", "true"), d.children.slice(a, a + b).attr("aria-hidden", "false"))
                        }, U = function (a) {
                            return 0 > a ? d.settings.infiniteLoop ? q() - 1 : d.active.index : a >= q() ? d.settings.infiniteLoop ? 0 : d.active.index : a
                        };
                        return e.goToSlide = function (b, c) {
                            var f, g, h, i, j = !0, k = 0, l = {left: 0, top: 0}, n = null;
                            if (d.oldIndex = d.active.index, d.active.index = U(b), !d.working && d.active.index !== d.oldIndex) {
                                if (d.working = !0, j = d.settings.onSlideBefore.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index), "undefined" != typeof j && !j)
                                    return d.active.index = d.oldIndex, void(d.working = !1);
                                "next" === c ? d.settings.onSlideNext.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1) : "prev" === c && (d.settings.onSlidePrev.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1)), d.active.last = d.active.index >= q() - 1, (d.settings.pager || d.settings.pagerCustom) && E(d.active.index), d.settings.controls && H(), "fade" === d.settings.mode ? (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({height: m()}, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex: 0}), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function () {
                                    a(this).css("zIndex", d.settings.slideZIndex), F()
                                })) : (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({height: m()}, d.settings.adaptiveHeightSpeed), !d.settings.infiniteLoop && d.carousel && d.active.last ? "horizontal" === d.settings.mode ? (n = d.children.eq(d.children.length - 1), l = n.position(), k = d.viewport.width() - n.outerWidth()) : (f = d.children.length - d.settings.minSlides, l = d.children.eq(f).position()) : d.carousel && d.active.last && "prev" === c ? (g = 1 === d.settings.moveSlides ? d.settings.maxSlides - r() : (q() - 1) * r() - (d.children.length - d.settings.maxSlides), n = e.children(".bx-clone").eq(g), l = n.position()) : "next" === c && 0 === d.active.index ? (l = e.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1) : b >= 0 && (i = b * parseInt(r()), l = d.children.eq(i).position()), "undefined" != typeof l ? (h = "horizontal" === d.settings.mode ? -(l.left - k) : -l.top, t(h, "slide", d.settings.speed)) : d.working = !1), d.settings.ariaHidden && T(d.active.index * r())
                            }
                        }, e.goToNextSlide = function () {
                            if (d.settings.infiniteLoop || !d.active.last) {
                                var a = parseInt(d.active.index) + 1;
                                e.goToSlide(a, "next")
                            }
                        }, e.goToPrevSlide = function () {
                            if (d.settings.infiniteLoop || 0 !== d.active.index) {
                                var a = parseInt(d.active.index) - 1;
                                e.goToSlide(a, "prev")
                            }
                        }, e.startAuto = function (a) {
                            d.interval || (d.interval = setInterval(function () {
                                "next" === d.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide()
                            }, d.settings.pause), d.settings.autoControls && a !== !0 && G("stop"))
                        }, e.stopAuto = function (a) {
                            d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && a !== !0 && G("start"))
                        }, e.getCurrentSlide = function () {
                            return d.active.index
                        }, e.getCurrentSlideElement = function () {
                            return d.children.eq(d.active.index)
                        }, e.getSlideElement = function (a) {
                            return d.children.eq(a)
                        }, e.getSlideCount = function () {
                            return d.children.length
                        }, e.isWorking = function () {
                            return d.working
                        }, e.redrawSlider = function () {
                            d.children.add(e.find(".bx-clone")).outerWidth(o()), d.viewport.css("height", m()), d.settings.ticker || s(), d.active.last && (d.active.index = q() - 1), d.active.index >= q() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (u(), E(d.active.index)), d.settings.ariaHidden && T(d.active.index * r())
                        }, e.destroySlider = function () {
                            d.initialized && (d.initialized = !1, a(".bx-clone", this).remove(), d.children.each(function () {
                                void 0 !== a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
                            }), void 0 !== a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), a(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && a(window).unbind("resize", S), d.settings.keyboardEnabled && a(document).unbind("keydown", M), a(this).removeData("bxSlider"))
                        }, e.reloadSlider = function (b) {
                            void 0 !== b && (c = b), e.destroySlider(), h(), a(e).data("bxSlider", this)
                        }, h(), a(e).data("bxSlider", this), this
                    }
                }
            }(jQuery);

            function initFancyBox() {
                jQuery('.fancybox-media').fancybox({
                    maxWidth: 800,
                    maxHeight: 500,
                    fitToView: false,
                    width: '100%',
                    height: '100%',
                    padding: 10,
                    openEffect: 'fade',
                    autoResize: true,
                    closeEffect: 'fade',
                    scrolling: 'auto',
                    preload: true,
                    helpers: {
                        media: {}
                    }
                });
            }
            ;

/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

 (function (window, document, $, undefined) {
    "use strict";

    var H = $("html"),
    W = $(window),
    D = $(document),
    F = $.fancybox = function () {
        F.open.apply(this, arguments);
    },
    IE = navigator.userAgent.match(/msie/i),
    didUpdate = null,
    isTouch = document.createTouch !== undefined,
    isQuery = function (obj) {
        return obj && obj.hasOwnProperty && obj instanceof $;
    },
    isString = function (str) {
        return str && $.type(str) === "string";
    },
    isPercentage = function (str) {
        return isString(str) && str.indexOf('%') > 0;
    },
    isScrollable = function (el) {
        return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
    },
    getScalar = function (orig, dim) {
        var value = parseInt(orig, 10) || 0;

        if (dim && isPercentage(orig)) {
            value = F.getViewport()[ dim ] / 100 * value;
        }

        return Math.ceil(value);
    },
    getValue = function (value, dim) {
        return getScalar(value, dim) + 'px';
    };

    $.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1, // Set to 2 for retina display support

            autoSize: true,
            autoHeight: false,
            autoWidth: false,
            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: 'auto', // 'auto', 'yes' or 'no'
            wrapCSS: '',
            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,
            ajax: {
                dataType: 'html',
                headers: {'X-fancyBox': true}
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },
            keys: {
                next: {
                    13: 'left', // enter
                    34: 'up', // page down
                    39: 'left', // right arrow
                    40: 'up'    // down arrow
                },
                prev: {
                    8: 'right', // backspace
                    33: 'down', // page up
                    37: 'right', // left arrow
                    38: 'down'    // up arrow
                },
                close: [27], // escape key
                play: [32], // space - start/stop slideshow
                toggle: [70]  // letter "f" - toggle fullscreen
            },
            direction: {
                next: 'left',
                prev: 'right'
            },
            scrollOutside: true,
            // Override some properties
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            // HTML templates
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            // Properties for each animation type
            // Opening fancyBox
            openEffect: 'fade', // 'elastic', 'fade' or 'none'
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',
            // Closing fancyBox
            closeEffect: 'fade', // 'elastic', 'fade' or 'none'
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',
            // Changing next gallery item
            nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',
            // Changing previous gallery item
            prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',
            // Enable default helpers
            helpers: {
                overlay: true,
                title: true
            },
            // Callbacks
            onCancel: $.noop, // If canceling
            beforeLoad: $.noop, // Before loading
            afterLoad: $.noop, // After loading
            beforeShow: $.noop, // Before changing in current item
            afterShow: $.noop, // After opening
            beforeChange: $.noop, // Before changing gallery item
            beforeClose: $.noop, // Before closing
            afterClose: $.noop  // After closing
        },
        //Current state
        group: {}, // Selected group
        opts: {}, // Group options
        previous: null, // Previous element
        coming: null, // Element being loaded
        current: null, // Currently loaded element
        isActive: false, // Is activated
        isOpen: false, // Is currently open
        isOpened: false, // Have been fully opened at least once

        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: false
        },
        // Loaders
        ajaxLoad: null,
        imgPreload: null,
        // Some collections
        transitions: {},
        helpers: {},
        /*
         *	Static methods
         */

         open: function (group, opts) {
            if (!group) {
                return;
            }

            if (!$.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            $.each(group, function (i, element) {
                var obj = {},
                href,
                title,
                content,
                type,
                rez,
                hrefParts,
                selector;

                if ($.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = $(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: element.data('fancybox-title') || element.attr('title'),
                            isDom: true,
                            element: element
                        };

                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';

                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }

                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });

                group[ i ] = obj;
            });

            // Extend the defaults
            F.opts = $.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },
        // Cancel image loading or abort ajax request
        cancel: function () {
            var coming = F.coming;

            if (!coming || false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },
        // Start closing animation if is open; remove immediately if opening/closing
        close: function (event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                $('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[ F.current.closeMethod ]();
            }
        },
        // Manage slideshow:
        //   $.fancybox.play(); - toggle slideshow
        //   $.fancybox.play( true ); - start
        //   $.fancybox.play( false ); - stop
        play: function (action) {
            var clear = function () {
                clearTimeout(F.player.timer);
            },
            set = function () {
                clear();

                if (F.current && F.player.isActive) {
                    F.player.timer = setTimeout(F.next, F.current.playSpeed);
                }
            },
            stop = function () {
                clear();

                D.unbind('.player');

                F.player.isActive = false;

                F.trigger('onPlayEnd');
            },
            start = function () {
                if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                    F.player.isActive = true;

                    D.bind({
                        'onCancel.player beforeClose.player': stop,
                        'onUpdate.player': set,
                        'beforeLoad.player': clear
                    });

                    set();

                    F.trigger('onPlayStart');
                }
            };

            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },
        // Navigate to next gallery item
        next: function (direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },
        // Navigate to previous gallery item
        prev: function (direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },
        // Navigate to gallery item by index
        jumpto: function (index, direction, router) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
            F.router = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }

                index = index % current.group.length;
            }

            if (current.group[ index ] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },
        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function (e, onlyAbsolute) {
            var current = F.current,
            wrap = current ? current.wrap : null,
            pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);

                if (e && e.type === 'scroll') {
                    delete pos.position;

                    wrap.stop(true, true).animate(pos, 200);

                } else {
                    wrap.css(pos);

                    current.pos = $.extend({}, current.dim, pos);
                }
            }
        },
        update: function (e) {
            var type = (e && e.type),
            anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function () {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, (anyway && !isTouch ? 0 : 300));
        },
        // Shrink content to fit inside viewport or restore if resized
        toggle: function (action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },
        hideLoading: function () {
            D.unbind('.loading');

            $('#fancybox-loading').remove();
        },
        showLoading: function () {
            var el, viewport;

            F.hideLoading();

            el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function (e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                });
            }
        },
        getViewport: function () {
            var locked = (F.current && F.current.locked) || false,
            rez = {
                x: W.scrollLeft(),
                y: W.scrollTop()
            };

            if (locked) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },
        // Unbind the keyboard / clicking actions
        unbindEvents: function () {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },
        bindEvents: function () {
            var current = F.current,
            keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function (e) {
                    var code = e.which || e.keyCode,
                    target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function (i, val) {
                            if (current.group.length > 1 && val[ code ] !== undefined) {
                                F[ i ](val[ code ]);

                                e.preventDefault();
                                return false;
                            }

                            if ($.inArray(code, val) > -1) {
                                F[ i ]();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                    parent = $(target),
                    canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },
        trigger: function (event, o) {
            var ret, obj = o || F.coming || F.current;

            if (!obj) {
                return;
            }

            if ($.isFunction(obj[event])) {
                ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
            }

            if (ret === false) {
                return false;
            }

            if (obj.helpers) {
                $.each(obj.helpers, function (helper, opts) {
                    if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                        F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                    }
                });
            }

            D.trigger(event);
        },
        isImage: function (str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },
        isSWF: function (str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function (index) {
            var coming = {},
            obj,
            href,
            type,
            margin,
            padding;

            index = getScalar(index);
            obj = F.group[ index ] || null;

            if (!obj) {
                return false;
            }

            coming = $.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin = coming.margin;
            padding = coming.padding;

            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
             * Add reference to the group, so it`s possible to access from callbacks, example:
             * afterLoad : function() {
             *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
             * }
             */

             coming.group = F.group;
             coming.index = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[ F.router ](F.direction);
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

            $.extend(coming, {
                skin: $('.fancybox-skin', coming.wrap),
                outer: $('.fancybox-outer', coming.wrap),
                inner: $('.fancybox-inner', coming.wrap)
            });

            $.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }

            } else if (!href) {
                return F._error('href');
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },
        _error: function (type) {
            $.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });

            F._afterLoad();
        },
        _loadImage: function () {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function () {
                this.onload = this.onerror = null;

                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            };

            img.onerror = function () {
                this.onload = this.onerror = null;

                F._error('image');
            };

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },
        _loadAjax: function () {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function (jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);

                    } else {
                        F.hideLoading();
                    }
                },
                success: function (data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },
        _loadIframe: function () {
            var coming = F.coming,
            iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
            .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
            .attr('src', coming.href);

            // This helps IE
            $(coming.wrap).bind('onReset', function () {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {
                }
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function () {
                    $(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo(coming.inner);

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },
        _preloadImages: function () {
            var group = F.group,
            current = F.current,
            len = group.length,
            cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
            item,
            i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[ (current.index + i) % len ];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },
        _afterLoad: function () {
            var coming = F.coming,
            previous = F.current,
            placeholder = 'fancybox-placeholder',
            current,
            content,
            type,
            scrolling,
            href,
            embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened')
                .find('.fancybox-item, .fancybox-nav')
                .remove();
            }

            F.unbindEvents();

            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;

            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });

            href = current.href;

            switch (type) {
                case 'inline':
                    case 'ajax':
                        case 'html':
                            if (current.selector) {
                                content = $('<div>').html(content).find(current.selector);

                            } else if (isQuery(content)) {
                                if (!content.data(placeholder)) {
                                    content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                                }

                                content = content.show().detach();

                                current.wrap.bind('onReset', function () {
                                    if ($(this).find(content).length) {
                                        content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                                    }
                                });
                            }
                            break;

                            case 'image':
                                content = current.tpl.image.replace('{href}', href);
                                break;

                                case 'swf':
                                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                                    embed = '';

                                    $.each(current.swf, function (name, val) {
                                        content += '<param name="' + name + '" value="' + val + '"></param>';
                                        embed += ' ' + name + '="' + val + '"';
                                    });

                                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                                    break;
                                }

                                if (!(isQuery(content) && content.parent().is(current.inner))) {
                                    current.inner.append(content);
                                }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[ previous.prevMethod ]();
            }

            F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

            F._preloadImages();
        },
        _setDimension: function () {
            var viewport = F.getViewport(),
            steps = 0,
            canShrink = false,
            canExpand = false,
            wrap = F.wrap,
            skin = F.skin,
            inner = F.inner,
            current = F.current,
            width = current.width,
            height = current.height,
            minWidth = current.minWidth,
            minHeight = current.minHeight,
            maxWidth = current.maxWidth,
            maxHeight = current.maxHeight,
            scrolling = current.scrolling,
            scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
            margin = current.margin,
            wMargin = getScalar(margin[1] + margin[3]),
            hMargin = getScalar(margin[0] + margin[2]),
            wPadding,
            hPadding,
            wSpace,
            hSpace,
            origWidth,
            origHeight,
            origMaxWidth,
            origMaxHeight,
            ratio,
            width_,
            height_,
            maxWidth_,
            maxHeight_,
            iframe,
            body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

            if (current.type === 'iframe') {
                iframe = current.content;

                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) {
                    }
                }

            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }

                if (!current.autoHeight) {
                    inner.height(origHeight);
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass('fancybox-tmp');
            }

            width = getScalar(origWidth);
            height = getScalar(origHeight);

            ratio = origWidth / origHeight;

            // Calculations for the content
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width(width).height(height);

                wrap.width(width + wPadding);

                // Real wrap dimensions
                width_ = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        width_ = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }

            inner.width(width).height(height);

            wrap.width(width + wPadding);

            width_ = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },
        _getPosition: function (onlyAbsolute) {
            var current = F.current,
            viewport = F.getViewport(),
            margin = current.margin,
            width = F.wrap.width() + margin[1] + margin[3],
            height = F.wrap.height() + margin[0] + margin[2],
            rez = {
                position: 'absolute',
                top: margin[0],
                left: margin[3]
            };

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }

            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

            return rez;
        },
        _afterZoomIn: function () {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

            F.update();

            // Assign a click event
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[ current.closeClick ? 'close' : 'next' ]();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {
                F.play(false);

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play();
            }
        },
        _afterZoomOut: function (obj) {
            obj = obj || F.current;

            $('.fancybox-wrap').trigger('onReset').remove();

            $.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
     *	Default transitions
     */

     F.transitions = {
        getOrigPosition: function () {
            var current = F.current,
            element = current.element,
            orig = current.orig,
            pos = {},
            width = 50,
            height = 50,
            hPadding = current.hPadding,
            wPadding = current.wPadding,
            viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };

            return pos;
        },
        step: function (now, fx) {
            var ratio,
            padding,
            value,
            prop = fx.prop,
            current = F.current,
            wrapSpace = current.wrapSpace,
            skinSpace = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;

                F.skin[ prop ](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[ prop ](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
            }
        },
        zoomIn: function () {
            var current = F.current,
            startPos = current.pos,
            effect = current.openEffect,
            elastic = effect === 'elastic',
            endPos = $.extend({opacity: 1}, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },
        zoomOut: function () {
            var current = F.current,
            effect = current.closeEffect,
            elastic = effect === 'elastic',
            endPos = {opacity: 0.1};

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },
        changeIn: function () {
            var current = F.current,
            effect = current.nextEffect,
            startPos = current.pos,
            endPos = {opacity: 1},
            direction = F.direction,
            distance = 200,
            field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
                    endPos[ field ] = '+=' + distance + 'px';

                } else {
                    startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
                    endPos[ field ] = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },
        changeOut: function () {
            var previous = F.previous,
            effect = previous.prevEffect,
            endPos = {opacity: 0.1},
            direction = F.direction,
            distance = 200;

            if (effect === 'elastic') {
                endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function () {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
     *	Overlay helper
     */

     F.helpers.overlay = {
        defaults: {
            closeClick: true, // if true, fancyBox will be closed when user clicks on the overlay
            speedOut: 200, // duration of fadeOut animation
            showEarly: true, // indicates if should be opened immediately or wait until the content is ready
            css: {}, // custom CSS properties
            locked: !isTouch, // if true, the content will be locked into overlay
            fixed: true       // if false, the overlay CSS position property will not be set to "fixed"
        },
        overlay: null, // current handle
        fixed: false, // indicates if the overlay has position "fixed"
        el: $('html'), // element that contains "the lock"

        // Public methods
        create: function (opts) {
            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
            this.fixed = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },
        open: function (opts) {
            var that = this;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy(this.update, this));

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function (e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css(opts.css).show();
        },
        close: function () {
            var scrollV, scrollH;

            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.removeClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            $('.fancybox-overlay').remove().hide();

            $.extend(this, {
                overlay: null,
                fixed: false
            });
        },
        // Private, callbacks

        update: function () {
            var width = '100%', offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },
        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady: function (opts, obj) {
            var overlay = this.overlay;

            $('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                if (!overlay) {
                    this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
                }

                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },
        beforeShow: function (opts, obj) {
            var scrollV, scrollH;

            if (obj.locked) {
                if (this.margin !== false) {
                    $('*').filter(function () {
                        return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap"));
                    }).addClass('fancybox-margin');

                    this.el.addClass('fancybox-margin');
                }

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            this.open(opts);
        },
        onUpdate: function () {
            if (!this.fixed) {
                this.update();
            }
        },
        afterClose: function (opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            //if (this.overlay && !F.isActive) {
                if (this.overlay && !F.coming) {
                    this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
                }
            }
        };

    /*
     *	Title helper
     */

     F.helpers.title = {
        defaults: {
            type: 'float', // 'float', 'inside', 'outside' or 'over',
            position: 'bottom' // 'top' or 'bottom'
        },
        beforeShow: function (opts) {
            var current = F.current,
            text = current.title,
            type = opts.type,
            title,
            target;

            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || $.trim(text) === '') {
                return;
            }

            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;

                    case 'outside':
                        target = F.wrap;
                        break;

                        case 'over':
                            target = F.inner;
                            break;

                default: // 'float'
                target = F.skin;

                title.appendTo('body');

                if (IE) {
                    title.width(title.width());
                }

                title.wrapInner('<span class="child"></span>');

                    //Increase bottom margin so this title will also fit into viewport
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break;
                }

                title[ (opts.position === 'top' ? 'prependTo' : 'appendTo') ](target);
            }
        };

// jQuery plugin initialization
$.fn.fancybox = function (options) {
    var index,
    that = $(this),
    selector = this.selector || '',
    run = function (e) {
        var what = $(this).blur(), idx = index, relType, relVal;

        if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
            relType = options.groupAttr || 'data-fancybox-group';
            relVal = what.attr(relType);

            if (!relVal) {
                relType = 'rel';
                relVal = what.get(0)[ relType ];
            }

            if (relVal && relVal !== '' && relVal !== 'nofollow') {
                what = selector.length ? $(selector) : that;
                what = what.filter('[' + relType + '="' + relVal + '"]');
                idx = what.index(this);
            }

            options.index = idx;

                        // Stop an event from bubbling if everything is fine
                        if (F.open(what, options) !== false) {
                            e.preventDefault();
                        }
                    }
                };

                options = options || {};
                index = options.index || 0;

                if (!selector || options.live === false) {
                    that.unbind('click.fb-start').bind('click.fb-start', run);

                } else {
                    D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
                }

                this.filter('[data-fancybox-start=1]').trigger('click');

                return this;
            };

// Tests that need a body at doc ready
D.ready(function () {
    var w1, w2;

    if ($.scrollbarWidth === undefined) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            $.scrollbarWidth = function () {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                child = parent.children(),
                width = child.innerWidth() - child.height(99).innerWidth();

                parent.remove();

                return width;
            };
        }

        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = (function () {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);

                elem.remove();

                return fixed;
            }());
        }

        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $('body')
        });

        //Get real width of page scroll-bar
        w1 = $(window).width();

        H.addClass('fancybox-lock-test');

        w2 = $(window).width();

        H.removeClass('fancybox-lock-test');

        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });

}(window, document, jQuery));

/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
 (function ($) {
    "use strict";

//Shortcut for fancyBox object
var F = $.fancybox,
format = function (url, rez, params) {
    params = params || '';

    if ($.type(params) === "object") {
        params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
        url = url.replace('$' + key, value || '');
    });

    if (params.length) {
        url += (url.indexOf('?') > 0 ? '&' : '?') + params;
    }

    return url;
};

//Add helper object
F.helpers.media = {
    defaults: {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: 'opaque',
                enablejsapi: 1
            },
            type: 'iframe',
            url: '//www.youtube.com/embed/$3'
        },
        vimeo: {
            matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            type: 'iframe',
            url: '//player.vimeo.com/video/$1'
        },
        metacafe: {
            matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
            params: {
                autoPlay: 'yes'
            },
            type: 'swf',
            url: function (rez, params, obj) {
                obj.swf.flashVars = 'playerVars=' + $.param(params, true);

                return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
            }
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {
                additionalInfos: 0,
                autoStart: 1
            },
            type: 'swf',
            url: '//www.dailymotion.com/swf/video/$1'
        },
        twitvid: {
            matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
            params: {
                autoplay: 0
            },
            type: 'iframe',
            url: '//www.twitvid.com/embed.php?guid=$1'
        },
        twitpic: {
            matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
            type: 'image',
            url: '//twitpic.com/show/full/$1/'
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: 'image',
            url: '//$1/p/$2/media/?size=l'
        },
        google_maps: {
            matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
            type: 'iframe',
            url: function (rez) {
                return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
            }
        }
    },
    beforeLoad: function (opts, obj) {
        var url = obj.href || '',
        type = false,
        what,
        item,
        rez,
        params;

        for (what in opts) {
            if (opts.hasOwnProperty(what)) {
                item = opts[ what ];
                rez = url.match(item.matcher);

                if (rez) {
                    type = item.type;
                    params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

                    url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);

                    break;
                }
            }
        }

        if (type) {
            obj.href = url;
            obj.type = type;

            obj.autoHeight = false;
        }
    }
};

}(jQuery));

/*!
 * SmoothScroll module
 */
 ;
 (function ($, exports) {
    // private variables
    var page,
    win = $(window),
    activeBlock, activeWheelHandler,
    wheelEvents = ('onwheel' in document || document.documentMode >= 9 ? 'wheel' : 'mousewheel DOMMouseScroll');

    // animation handlers
    function scrollTo(offset, options, callback) {
        // initialize variables
        var scrollBlock;
        if (document.body) {
            if (typeof options === 'number') {
                options = {duration: options};
            } else {
                options = options || {};
            }
            page = page || $('html, body');
            scrollBlock = options.container || page;
        } else {
            return;
        }

        // treat single number as scrollTop
        if (typeof offset === 'number') {
            offset = {top: offset};
        }

        // handle mousewheel/trackpad while animation is active
        if (activeBlock && activeWheelHandler) {
            activeBlock.off(wheelEvents, activeWheelHandler);
        }
        if (options.wheelBehavior && options.wheelBehavior !== 'none') {
            activeWheelHandler = function (e) {
                if (options.wheelBehavior === 'stop') {
                    scrollBlock.off(wheelEvents, activeWheelHandler);
                    scrollBlock.stop();
                } else if (options.wheelBehavior === 'ignore') {
                    e.preventDefault();
                }
            };
            activeBlock = scrollBlock.on(wheelEvents, activeWheelHandler);
        }

        // start scrolling animation
        scrollBlock.stop().animate({
            scrollLeft: offset.left,
            scrollTop: offset.top
        }, options.duration, function () {
            if (activeWheelHandler) {
                scrollBlock.off(wheelEvents, activeWheelHandler);
            }
            if ($.isFunction(callback)) {
                callback();
            }
        });
    }

    // smooth scroll contstructor
    function SmoothScroll(options) {
        this.options = $.extend({
            anchorLinks: 'a[href^="#"]', // selector or jQuery object
            container: null, // specify container for scrolling (default - whole page)
            extraOffset: null, // function or fixed number
            activeClasses: null, // null, "link", "parent"
            easing: 'swing', // easing of scrolling
            animMode: 'duration', // or "speed" mode
            animDuration: 800, // total duration for scroll (any distance)
            animSpeed: 1500, // pixels per second
            anchorActiveClass: 'anchor-active',
            sectionActiveClass: 'section-active',
            wheelBehavior: 'stop', // "stop", "ignore" or "none"
            useNativeAnchorScrolling: false // do not handle click in devices with native smooth scrolling
        }, options);
        this.init();
    }
    SmoothScroll.prototype = {
        init: function () {
            this.initStructure();
            this.attachEvents();
        },
        initStructure: function () {
            this.container = this.options.container ? $(this.options.container) : $('html,body');
            this.scrollContainer = this.options.container ? this.container : win;
            this.anchorLinks = $(this.options.anchorLinks);
        },
        getAnchorTarget: function (link) {
            // get target block from link href
            var targetId = $(link).attr('href');
            return $(targetId.length > 1 ? targetId : 'html');
        },
        getTargetOffset: function (block) {
            // get target offset
            var blockOffset = block.offset().top;
            if (this.options.container) {
                blockOffset -= this.container.offset().top - this.container.prop('scrollTop');
            }

            // handle extra offset
            if (typeof this.options.extraOffset === 'number') {
                blockOffset -= this.options.extraOffset;
            } else if (typeof this.options.extraOffset === 'function') {
                blockOffset -= this.options.extraOffset(block);
            }
            return {top: blockOffset};
        },
        attachEvents: function () {
            var self = this;

            // handle active classes
            if (this.options.activeClasses) {
                // cache structure
                this.anchorData = [];
                this.anchorLinks.each(function () {
                    var link = jQuery(this),
                    targetBlock = self.getAnchorTarget(link),
                    anchorDataItem;

                    $.each(self.anchorData, function (index, item) {
                        if (item.block[0] === targetBlock[0]) {
                            anchorDataItem = item;
                        }
                    });

                    if (anchorDataItem) {
                        anchorDataItem.link = anchorDataItem.link.add(link);
                    } else {
                        self.anchorData.push({
                            link: link,
                            block: targetBlock
                        });
                    }
                });

                // add additional event handlers
                this.resizeHandler = function () {
                    self.recalculateOffsets();
                };
                this.scrollHandler = function () {
                    self.refreshActiveClass();
                };

                this.recalculateOffsets();
                this.scrollContainer.on('scroll', this.scrollHandler);
                win.on('resize', this.resizeHandler);
            }

            // handle click event
            this.clickHandler = function (e) {
                self.onClick(e);
            };
            if (!this.options.useNativeAnchorScrolling) {
                this.anchorLinks.on('click', this.clickHandler);
            }
        },
        recalculateOffsets: function () {
            var self = this;
            $.each(this.anchorData, function (index, data) {
                data.offset = self.getTargetOffset(data.block);
                data.height = data.block.outerHeight();
            });
            this.refreshActiveClass();
        },
        refreshActiveClass: function () {
            var self = this,
            foundFlag = false,
            containerHeight = this.container.prop('scrollHeight'),
            viewPortHeight = this.scrollContainer.height(),
            scrollTop = this.options.container ? this.container.prop('scrollTop') : win.scrollTop();

            // user function instead of default handler
            if (this.options.customScrollHandler) {
                this.options.customScrollHandler.call(this, scrollTop, this.anchorData);
                return;
            }

            // sort anchor data by offsets
            this.anchorData.sort(function (a, b) {
                return a.offset.top - b.offset.top;
            });
            function toggleActiveClass(anchor, block, state) {
                anchor.toggleClass(self.options.anchorActiveClass, state);
                block.toggleClass(self.options.sectionActiveClass, state);
            }

            // default active class handler
            $.each(this.anchorData, function (index) {
                var reverseIndex = self.anchorData.length - index - 1,
                data = self.anchorData[reverseIndex],
                anchorElement = (self.options.activeClasses === 'parent' ? data.link.parent() : data.link);

                if (scrollTop >= containerHeight - viewPortHeight) {
                    // handle last section
                    if (reverseIndex === self.anchorData.length - 1) {
                        toggleActiveClass(anchorElement, data.block, true);
                    } else {
                        toggleActiveClass(anchorElement, data.block, false);
                    }
                } else {
                    // handle other sections
                    if (!foundFlag && (scrollTop >= data.offset.top - 1 || reverseIndex === 0)) {
                        foundFlag = true;
                        toggleActiveClass(anchorElement, data.block, true);
                    } else {
                        toggleActiveClass(anchorElement, data.block, false);
                    }
                }
            });
        },
        calculateScrollDuration: function (offset) {
            var distance;
            if (this.options.animMode === 'speed') {
                distance = Math.abs(this.scrollContainer.scrollTop() - offset.top);
                return (distance / this.options.animSpeed) * 1000;
            } else {
                return this.options.animDuration;
            }
        },
        onClick: function (e) {
            var targetBlock = this.getAnchorTarget(e.currentTarget),
            targetOffset = this.getTargetOffset(targetBlock);

            e.preventDefault();
            scrollTo(targetOffset, {
                container: this.container,
                wheelBehavior: this.options.wheelBehavior,
                duration: this.calculateScrollDuration(targetOffset)
            });
        },
        destroy: function () {
            if (this.options.activeClasses) {
                win.off('resize', this.resizeHandler);
                this.scrollContainer.off('scroll', this.scrollHandler);
            }
            this.anchorLinks.off('click', this.clickHandler);
        }
    };

    // public API
    $.extend(SmoothScroll, {
        scrollTo: function (blockOrOffset, durationOrOptions, callback) {
            scrollTo(blockOrOffset, durationOrOptions, callback);
        }
    });

    // export module
    exports.SmoothScroll = SmoothScroll;
}(jQuery, this));

/*
 * Simple Mobile Navigation
 */
 ;
 (function ($) {
    function MobileNav(options) {
        this.options = $.extend({
            container: null,
            hideOnClickOutside: false,
            menuActiveClass: 'nav-active',
            menuOpener: '.nav-opener',
            menuDrop: '.nav-drop',
            toggleEvent: 'click',
            outsideClickEvent: 'click touchstart pointerdown MSPointerDown'
        }, options);
        this.initStructure();
        this.attachEvents();
    }
    MobileNav.prototype = {
        initStructure: function () {
            this.page = $('html');
            this.container = $(this.options.container);
            this.opener = this.container.find(this.options.menuOpener);
            this.drop = this.container.find(this.options.menuDrop);
        },
        attachEvents: function () {
            var self = this;

            if (activateResizeHandler) {
                activateResizeHandler();
                activateResizeHandler = null;
            }

            this.outsideClickHandler = function (e) {
                if (self.isOpened()) {
                    var target = $(e.target);
                    if (!target.closest(self.opener).length && !target.closest(self.drop).length) {
                        self.hide();
                    }
                }
            };

            this.openerClickHandler = function (e) {
                e.preventDefault();
                self.toggle();
            };

            this.opener.on(this.options.toggleEvent, this.openerClickHandler);
        },
        isOpened: function () {
            return this.container.hasClass(this.options.menuActiveClass);
        },
        show: function () {
            this.container.addClass(this.options.menuActiveClass);
            if (this.options.hideOnClickOutside) {
                this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
            }
        },
        hide: function () {
            this.container.removeClass(this.options.menuActiveClass);
            if (this.options.hideOnClickOutside) {
                this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
            }
        },
        toggle: function () {
            if (this.isOpened()) {
                this.hide();
            } else {
                this.show();
            }
        },
        destroy: function () {
            this.container.removeClass(this.options.menuActiveClass);
            this.opener.off(this.options.toggleEvent, this.clickHandler);
            this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
        }
    };

    var activateResizeHandler = function () {
        var win = $(window),
        doc = $('html'),
        resizeClass = 'resize-active',
        flag, timer;
        var removeClassHandler = function () {
            flag = false;
            doc.removeClass(resizeClass);
        };
        var resizeHandler = function () {
            if (!flag) {
                flag = true;
                doc.addClass(resizeClass);
            }
            clearTimeout(timer);
            timer = setTimeout(removeClassHandler, 500);
        };
        win.on('resize orientationchange', resizeHandler);
    };

    $.fn.mobileNav = function (options) {
        return this.each(function () {
            var params = $.extend({}, options, {container: this}),
            instance = new MobileNav(params);
            $.data(this, 'MobileNav', instance);
        });
    };
}(jQuery));

// navigation accesibility module
function TouchNav(opt) {
    this.options = {
        hoverClass: 'hover',
        menuItems: 'li',
        menuOpener: 'a',
        menuDrop: 'ul',
        navBlock: null
    };
    for (var p in opt) {
        if (opt.hasOwnProperty(p)) {
            this.options[p] = opt[p];
        }
    }
    this.init();
}
TouchNav.isActiveOn = function (elem) {
    return elem && elem.touchNavActive;
};
TouchNav.prototype = {
    init: function () {
        if (typeof this.options.navBlock === 'string') {
            this.menu = document.getElementById(this.options.navBlock);
        } else if (typeof this.options.navBlock === 'object') {
            this.menu = this.options.navBlock;
        }
        if (this.menu) {
            this.addEvents();
        }
    },
    addEvents: function () {
        // attach event handlers
        var self = this;
        var touchEvent = (navigator.pointerEnabled && 'pointerdown') || (navigator.msPointerEnabled && 'MSPointerDown') || (this.isTouchDevice && 'touchstart');
        this.menuItems = lib.queryElementsBySelector(this.options.menuItems, this.menu);

        var initMenuItem = function (item) {
            var currentDrop = lib.queryElementsBySelector(self.options.menuDrop, item)[0],
            currentOpener = lib.queryElementsBySelector(self.options.menuOpener, item)[0];

            // only for touch input devices
            if (currentDrop && currentOpener && (self.isTouchDevice || self.isPointerDevice)) {
                lib.event.add(currentOpener, 'click', lib.bind(self.clickHandler, self));
                lib.event.add(currentOpener, 'mousedown', lib.bind(self.mousedownHandler, self));
                lib.event.add(currentOpener, touchEvent, function (e) {
                    if (!self.isTouchPointerEvent(e)) {
                        self.preventCurrentClick = false;
                        return;
                    }
                    self.touchFlag = true;
                    self.currentItem = item;
                    self.currentLink = currentOpener;
                    self.pressHandler.apply(self, arguments);
                });
            }
            // for desktop computers and touch devices
            jQuery(item).bind('mouseenter', function () {
                if (!self.touchFlag) {
                    self.currentItem = item;
                    self.mouseoverHandler();
                }
            });
            jQuery(item).bind('mouseleave', function () {
                if (!self.touchFlag) {
                    self.currentItem = item;
                    self.mouseoutHandler();
                }
            });
            item.touchNavActive = true;
        };

        // addd handlers for all menu items
        for (var i = 0; i < this.menuItems.length; i++) {
            initMenuItem(self.menuItems[i]);
        }

        // hide dropdowns when clicking outside navigation
        if (this.isTouchDevice || this.isPointerDevice) {
            lib.event.add(document.documentElement, 'mousedown', lib.bind(this.clickOutsideHandler, this));
            lib.event.add(document.documentElement, touchEvent, lib.bind(this.clickOutsideHandler, this));
        }
    },
    mousedownHandler: function (e) {
        if (this.touchFlag) {
            e.preventDefault();
            this.touchFlag = false;
            this.preventCurrentClick = false;
        }
    },
    mouseoverHandler: function () {
        lib.addClass(this.currentItem, this.options.hoverClass);
        jQuery(this.currentItem).trigger('itemhover');
    },
    mouseoutHandler: function () {
        lib.removeClass(this.currentItem, this.options.hoverClass);
        jQuery(this.currentItem).trigger('itemleave');
    },
    hideActiveDropdown: function () {
        for (var i = 0; i < this.menuItems.length; i++) {
            if (lib.hasClass(this.menuItems[i], this.options.hoverClass)) {
                lib.removeClass(this.menuItems[i], this.options.hoverClass);
                jQuery(this.menuItems[i]).trigger('itemleave');
            }
        }
        this.activeParent = null;
    },
    pressHandler: function (e) {
        // hide previous drop (if active)
        if (this.currentItem !== this.activeParent) {
            if (this.activeParent && this.currentItem.parentNode === this.activeParent.parentNode) {
                lib.removeClass(this.activeParent, this.options.hoverClass);
            } else if (!this.isParent(this.activeParent, this.currentLink)) {
                this.hideActiveDropdown();
            }
        }
        // handle current drop
        this.activeParent = this.currentItem;
        if (lib.hasClass(this.currentItem, this.options.hoverClass)) {
            this.preventCurrentClick = false;
        } else {
            e.preventDefault();
            this.preventCurrentClick = true;
            lib.addClass(this.currentItem, this.options.hoverClass);
            jQuery(this.currentItem).trigger('itemhover');
        }
    },
    clickHandler: function (e) {
        // prevent first click on link
        if (this.preventCurrentClick) {
            e.preventDefault();
        }
    },
    clickOutsideHandler: function (event) {
        var e = event.changedTouches ? event.changedTouches[0] : event;
        if (this.activeParent && !this.isParent(this.menu, e.target)) {
            this.hideActiveDropdown();
            this.touchFlag = false;
        }
    },
    isParent: function (parent, child) {
        while (child.parentNode) {
            if (child.parentNode == parent) {
                return true;
            }
            child = child.parentNode;
        }
        return false;
    },
    isTouchPointerEvent: function (e) {
        return (e.type.indexOf('touch') > -1) ||
        (navigator.pointerEnabled && e.pointerType === 'touch') ||
        (navigator.msPointerEnabled && e.pointerType == e.MSPOINTER_TYPE_TOUCH);
    },
    isPointerDevice: (function () {
        return !!(navigator.pointerEnabled || navigator.msPointerEnabled);
    }()),
    isTouchDevice: (function () {
        return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
    }())
};

/*
 * Utility module
 */
 lib = {
    hasClass: function (el, cls) {
        return el && el.className ? el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')) : false;
    },
    addClass: function (el, cls) {
        if (el && !this.hasClass(el, cls))
            el.className += " " + cls;
    },
    removeClass: function (el, cls) {
        if (el && this.hasClass(el, cls)) {
            el.className = el.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ');
        }
    },
    extend: function (obj) {
        for (var i = 1; i < arguments.length; i++) {
            for (var p in arguments[i]) {
                if (arguments[i].hasOwnProperty(p)) {
                    obj[p] = arguments[i][p];
                }
            }
        }
        return obj;
    },
    each: function (obj, callback) {
        var property, len;
        if (typeof obj.length === 'number') {
            for (property = 0, len = obj.length; property < len; property++) {
                if (callback.call(obj[property], property, obj[property]) === false) {
                    break;
                }
            }
        } else {
            for (property in obj) {
                if (obj.hasOwnProperty(property)) {
                    if (callback.call(obj[property], property, obj[property]) === false) {
                        break;
                    }
                }
            }
        }
    },
    event: (function () {
        var fixEvent = function (e) {
            e = e || window.event;
            if (e.isFixed)
                return e;
            else
                e.isFixed = true;
            if (!e.target)
                e.target = e.srcElement;
            e.preventDefault = e.preventDefault || function () {
                this.returnValue = false;
            };
            e.stopPropagation = e.stopPropagation || function () {
                this.cancelBubble = true;
            };
            return e;
        };
        return {
            add: function (elem, event, handler) {
                if (!elem.events) {
                    elem.events = {};
                    elem.handle = function (e) {
                        var ret, handlers = elem.events[e.type];
                        e = fixEvent(e);
                        for (var i = 0, len = handlers.length; i < len; i++) {
                            if (handlers[i]) {
                                ret = handlers[i].call(elem, e);
                                if (ret === false) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                            }
                        }
                    };
                }
                if (!elem.events[event]) {
                    elem.events[event] = [];
                    if (elem.addEventListener)
                        elem.addEventListener(event, elem.handle, false);
                    else if (elem.attachEvent)
                        elem.attachEvent('on' + event, elem.handle);
                }
                elem.events[event].push(handler);
            },
            remove: function (elem, event, handler) {
                var handlers = elem.events[event];
                for (var i = handlers.length - 1; i >= 0; i--) {
                    if (handlers[i] === handler) {
                        handlers.splice(i, 1);
                    }
                }
                if (!handlers.length) {
                    delete elem.events[event];
                    if (elem.removeEventListener)
                        elem.removeEventListener(event, elem.handle, false);
                    else if (elem.detachEvent)
                        elem.detachEvent('on' + event, elem.handle);
                }
            }
        };
    }()),
    queryElementsBySelector: function (selector, scope) {
        scope = scope || document;
        if (!selector)
            return [];
        if (selector === '>*')
            return scope.children;
        if (typeof document.querySelectorAll === 'function') {
            return scope.querySelectorAll(selector);
        }
        var selectors = selector.split(',');
        var resultList = [];
        for (var s = 0; s < selectors.length; s++) {
            var currentContext = [scope || document];
            var tokens = selectors[s].replace(/^\s+/, '').replace(/\s+$/, '').split(' ');
            for (var i = 0; i < tokens.length; i++) {
                token = tokens[i].replace(/^\s+/, '').replace(/\s+$/, '');
                if (token.indexOf('#') > -1) {
                    var bits = token.split('#'), tagName = bits[0], id = bits[1];
                    var element = document.getElementById(id);
                    if (element && tagName && element.nodeName.toLowerCase() != tagName) {
                        return [];
                    }
                    currentContext = element ? [element] : [];
                    continue;
                }
                if (token.indexOf('.') > -1) {
                    var bits = token.split('.'), tagName = bits[0] || '*', className = bits[1], found = [], foundCount = 0;
                    for (var h = 0; h < currentContext.length; h++) {
                        var elements;
                        if (tagName == '*') {
                            elements = currentContext[h].getElementsByTagName('*');
                        } else {
                            elements = currentContext[h].getElementsByTagName(tagName);
                        }
                        for (var j = 0; j < elements.length; j++) {
                            found[foundCount++] = elements[j];
                        }
                    }
                    currentContext = [];
                    var currentContextIndex = 0;
                    for (var k = 0; k < found.length; k++) {
                        if (found[k].className && found[k].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
                            currentContext[currentContextIndex++] = found[k];
                        }
                    }
                    continue;
                }
                if (token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
                    var tagName = RegExp.$1 || '*', attrName = RegExp.$2, attrOperator = RegExp.$3, attrValue = RegExp.$4;
                    if (attrName.toLowerCase() == 'for' && this.browser.msie && this.browser.version < 8) {
                        attrName = 'htmlFor';
                    }
                    var found = [], foundCount = 0;
                    for (var h = 0; h < currentContext.length; h++) {
                        var elements;
                        if (tagName == '*') {
                            elements = currentContext[h].getElementsByTagName('*');
                        } else {
                            elements = currentContext[h].getElementsByTagName(tagName);
                        }
                        for (var j = 0; elements[j]; j++) {
                            found[foundCount++] = elements[j];
                        }
                    }
                    currentContext = [];
                    var currentContextIndex = 0, checkFunction;
                    switch (attrOperator) {
                        case '=':
                            checkFunction = function (e) {
                                return (e.getAttribute(attrName) == attrValue)
                            };
                            break;
                            case '~':
                                checkFunction = function (e) {
                                    return (e.getAttribute(attrName).match(new RegExp('(\\s|^)' + attrValue + '(\\s|$)')))
                                };
                                break;
                                case '|':
                                    checkFunction = function (e) {
                                        return (e.getAttribute(attrName).match(new RegExp('^' + attrValue + '-?')))
                                    };
                                    break;
                                    case '^':
                                        checkFunction = function (e) {
                                            return (e.getAttribute(attrName).indexOf(attrValue) == 0)
                                        };
                                        break;
                                        case '$':
                                            checkFunction = function (e) {
                                                return (e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length)
                                            };
                                            break;
                                            case '*':
                                                checkFunction = function (e) {
                                                    return (e.getAttribute(attrName).indexOf(attrValue) > -1)
                                                };
                                                break;
                                                default :
                                                checkFunction = function (e) {
                                                    return e.getAttribute(attrName)
                                                };
                                            }
                                            currentContext = [];
                                            var currentContextIndex = 0;
                                            for (var k = 0; k < found.length; k++) {
                                                if (checkFunction(found[k])) {
                                                    currentContext[currentContextIndex++] = found[k];
                                                }
                                            }
                                            continue;
                                        }
                                        tagName = token;
                                        var found = [], foundCount = 0;
                                        for (var h = 0; h < currentContext.length; h++) {
                                            var elements = currentContext[h].getElementsByTagName(tagName);
                                            for (var j = 0; j < elements.length; j++) {
                                                found[foundCount++] = elements[j];
                                            }
                                        }
                                        currentContext = found;
                                    }
                                    resultList = [].concat(resultList, currentContext);
                                }
                                return resultList;
                            },
                            trim: function (str) {
                                return str.replace(/^\s+/, '').replace(/\s+$/, '');
                            },
                            bind: function (f, scope, forceArgs) {
                                return function () {
                                    return f.apply(scope, typeof forceArgs !== 'undefined' ? [forceArgs] : arguments);
                                };
                            }
                        };

                        jQuery(document).ready(function ($) {
                            $('.memberContainer a.btn-img').click(function (e) {
                                e.preventDefault();
                                $('.memberDesc', $(this).parent()).toggle();
                                window.location.hash = this.hash;
                                $(window).trigger('hashchange');
//            var target = this.href.split("#")[1];
//            $('html,body').animate({
//            scrollTop: $('#' + target).offset().top
//        }, 1000);
});
                            $('.memberDesc a.btn-close').click(function (e) {
                                e.preventDefault();
                                $(this).parents('.memberDesc').hide();
                            });
                        });