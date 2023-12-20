!(function(n, i, e, a) {
    ;(n.navigation = function(t, s) {
      var o = {
          responsive: !0,
          mobileBreakpoint: 991,
          showDuration: 200,
          hideDuration: 200,
          showDelayDuration: 0,
          hideDelayDuration: 0,
          submenuTrigger: "hover",
          effect: "fadeIn",
          submenuIndicator: !0,
          submenuIndicatorTrigger: !1,
          hideSubWhenGoOut: !0,
          visibleSubmenusOnMobile: !1,
          fixed: !1,
          overlay: !0,
          overlayColor: "rgba(0, 0, 0, 0.5)",
          hidden: !1,
          hiddenOnMobile: !1,
          offCanvasSide: "left",
          offCanvasCloseButton: !0,
          animationOnShow: "",
          animationOnHide: "",
          onInit: function() {},
          onLandscape: function() {},
          onPortrait: function() {},
          onShowOffCanvas: function() {},
          onHideOffCanvas: function() {}
        },
        r = this,
        u = Number.MAX_VALUE,
        d = 1,
        l = "click.nav touchstart.nav",
        f = "mouseenter focusin",
        c = "mouseleave focusout"
      r.settings = {}
      var t = (n(t), t)
      n(t).find(".nav-search").length > 0 &&
        n(t)
          .find(".nav-search")
          .find("form")
          .prepend(
            "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
          ),
        (r.init = function() {
          ;(r.settings = n.extend({}, o, s)),
            r.settings.offCanvasCloseButton &&
              n(t)
                .find(".nav-menus-wrapper")
                .prepend(
                  "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
                ),
            "right" == r.settings.offCanvasSide &&
              n(t)
                .find(".nav-menus-wrapper")
                .addClass("nav-menus-wrapper-right"),
            r.settings.hidden &&
              (n(t).addClass("navigation-hidden"),
              (r.settings.mobileBreakpoint = 99999)),
            v(),
            r.settings.fixed && n(t).addClass("navigation-fixed"),
            n(t)
              .find(".nav-toggle")
              .on("click touchstart", function(n) {
                n.stopPropagation(),
                  n.preventDefault(),
                  r.showOffcanvas(),
                  s !== a && r.callback("onShowOffCanvas")
              }),
            n(t)
              .find(".nav-menus-wrapper-close-button")
              .on("click touchstart", function() {
                r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")
              }),
            n(t)
              .find(".nav-search-button, .nav-search-close-button")
              .on("click touchstart keydown", function(i) {
                i.stopPropagation(), i.preventDefault()
                var e = i.keyCode || i.which
                "click" === i.type ||
                "touchstart" === i.type ||
                ("keydown" === i.type && 13 == e)
                  ? r.toggleSearch()
                  : 9 == e && n(i.target).blur()
              }),
            n(t).find(".megamenu-tabs").length > 0 && y(),
            n(i).resize(function() {
              r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m()
            }),
            r.initNavigationMode(C()),
            r.settings.hiddenOnMobile && m(),
            s !== a && r.callback("onInit")
        })
      var h = function() {
          n(t)
            .find(".nav-submenu")
            .hide(0),
            n(t)
              .find("li")
              .removeClass("focus")
        },
        v = function() {
          n(t)
            .find("li")
            .each(function() {
              n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
                (n(this)
                  .children(".nav-dropdown,.megamenu-panel")
                  .addClass("nav-submenu"),
                r.settings.submenuIndicator &&
                  n(this)
                    .children("a")
                    .append(
                      "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                    ))
            })
        },
        m = function() {
          n(t).hasClass("navigation-portrait")
            ? n(t).addClass("navigation-hidden")
            : n(t).removeClass("navigation-hidden")
        }
      ;(r.showSubmenu = function(i, e) {
        C() > r.settings.mobileBreakpoint &&
          n(t)
            .find(".nav-search")
            .find("form")
            .fadeOut(),
          "fade" == e
            ? n(i)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.showDelayDuration)
                .fadeIn(r.settings.showDuration)
                .removeClass(r.settings.animationOnHide)
                .addClass(r.settings.animationOnShow)
            : n(i)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.showDelayDuration)
                .slideDown(r.settings.showDuration)
                .removeClass(r.settings.animationOnHide)
                .addClass(r.settings.animationOnShow),
          n(i).addClass("focus")
      }),
        (r.hideSubmenu = function(i, e) {
          "fade" == e
            ? n(i)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.hideDelayDuration)
                .fadeOut(r.settings.hideDuration)
                .removeClass(r.settings.animationOnShow)
                .addClass(r.settings.animationOnHide)
            : n(i)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.hideDelayDuration)
                .slideUp(r.settings.hideDuration)
                .removeClass(r.settings.animationOnShow)
                .addClass(r.settings.animationOnHide),
            n(i)
              .removeClass("focus")
              .find(".focus")
              .removeClass("focus")
        })
      var p = function() {
          n("body").addClass("no-scroll"),
            r.settings.overlay &&
              (n(t).append("<div class='nav-overlay-panel'></div>"),
              n(t)
                .find(".nav-overlay-panel")
                .css("background-color", r.settings.overlayColor)
                .fadeIn(300)
                .on("click touchstart", function(n) {
                  r.hideOffcanvas()
                }))
        },
        g = function() {
          n("body").removeClass("no-scroll"),
            r.settings.overlay &&
              n(t)
                .find(".nav-overlay-panel")
                .fadeOut(400, function() {
                  n(this).remove()
                })
        }
      ;(r.showOffcanvas = function() {
        p(),
          "left" == r.settings.offCanvasSide
            ? n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "left")
                .addClass("nav-menus-wrapper-open")
            : n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "right")
                .addClass("nav-menus-wrapper-open")
      }),
        (r.hideOffcanvas = function() {
          n(t)
            .find(".nav-menus-wrapper")
            .removeClass("nav-menus-wrapper-open")
            .on(
              "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
              function() {
                n(t)
                  .find(".nav-menus-wrapper")
                  .css("transition-property", "none")
                  .off()
              }
            ),
            g()
        }),
        (r.toggleOffcanvas = function() {
          C() <= r.settings.mobileBreakpoint &&
            (n(t)
              .find(".nav-menus-wrapper")
              .hasClass("nav-menus-wrapper-open")
              ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
              : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")))
        }),
        (r.toggleSearch = function() {
          "none" ==
          n(t)
            .find(".nav-search")
            .find("form")
            .css("display")
            ? (n(t)
                .find(".nav-search")
                .find("form")
                .fadeIn(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .focus())
            : (n(t)
                .find(".nav-search")
                .find("form")
                .fadeOut(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .blur())
        }),
        (r.initNavigationMode = function(i) {
          r.settings.responsive
            ? (i <= r.settings.mobileBreakpoint &&
                u > r.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-portrait")
                  .removeClass("navigation-landscape"),
                S(),
                s !== a && r.callback("onPortrait")),
              i > r.settings.mobileBreakpoint &&
                d <= r.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-landscape")
                  .removeClass("navigation-portrait"),
                k(),
                g(),
                r.hideOffcanvas(),
                s !== a && r.callback("onLandscape")),
              (u = i),
              (d = i))
            : (n(t).addClass("navigation-landscape"),
              k(),
              s !== a && r.callback("onLandscape"))
        })
      var b = function() {
          n("html").on("click.body touchstart.body", function(i) {
            0 === n(i.target).closest(".navigation").length &&
              (n(t)
                .find(".nav-submenu")
                .fadeOut(),
              n(t)
                .find(".focus")
                .removeClass("focus"),
              n(t)
                .find(".nav-search")
                .find("form")
                .fadeOut())
          })
        },
        C = function() {
          return (
            i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
          )
        },
        w = function() {
          n(t)
            .find(".nav-menu")
            .find("li, a")
            .off(l)
            .off(f)
            .off(c)
        },
        O = function() {
          if (C() > r.settings.mobileBreakpoint) {
            var i = n(t).outerWidth(!0)
            n(t)
              .find(".nav-menu")
              .children("li")
              .children(".nav-submenu")
              .each(function() {
                n(this)
                  .parent()
                  .position().left +
                  n(this).outerWidth() >
                i
                  ? n(this).css("right", 0)
                  : n(this).css("right", "auto")
              })
          }
        },
        y = function() {
          function i(i) {
            var e = n(i)
                .children(".megamenu-tabs-nav")
                .children("li"),
              a = n(i).children(".megamenu-tabs-pane")
            n(e).on("click.tabs touchstart.tabs", function(i) {
              i.stopPropagation(),
                i.preventDefault(),
                n(e).removeClass("active"),
                n(this).addClass("active"),
                n(a)
                  .hide(0)
                  .removeClass("active"),
                n(a[n(this).index()])
                  .show(0)
                  .addClass("active")
            })
          }
          if (n(t).find(".megamenu-tabs").length > 0)
            for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
              i(e[a])
        },
        k = function() {
          w(),
            h(),
            navigator.userAgent.match(/Mobi/i) ||
            navigator.maxTouchPoints > 0 ||
            "click" == r.settings.submenuTrigger
              ? n(t)
                  .find(".nav-menu, .nav-dropdown")
                  .children("li")
                  .children("a")
                  .on(l, function(e) {
                    if (
                      (r.hideSubmenu(
                        n(this)
                          .parent("li")
                          .siblings("li"),
                        r.settings.effect
                      ),
                      n(this)
                        .closest(".nav-menu")
                        .siblings(".nav-menu")
                        .find(".nav-submenu")
                        .fadeOut(r.settings.hideDuration),
                      n(this).siblings(".nav-submenu").length > 0)
                    ) {
                      if (
                        (e.stopPropagation(),
                        e.preventDefault(),
                        "none" ==
                          n(this)
                            .siblings(".nav-submenu")
                            .css("display"))
                      )
                        return (
                          r.showSubmenu(
                            n(this).parent("li"),
                            r.settings.effect
                          ),
                          O(),
                          !1
                        )
                      if (
                        (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                        "_blank" === n(this).attr("target") ||
                          "blank" === n(this).attr("target"))
                      )
                        i.open(n(this).attr("href"))
                      else {
                        if (
                          "#" === n(this).attr("href") ||
                          "" === n(this).attr("href") ||
                          "javascript:void(0)" === n(this).attr("href")
                        )
                          return !1
                        i.location.href = n(this).attr("href")
                      }
                    }
                  })
              : n(t)
                  .find(".nav-menu")
                  .find("li")
                  .on(f, function() {
                    r.showSubmenu(this, r.settings.effect), O()
                  })
                  .on(c, function() {
                    r.hideSubmenu(this, r.settings.effect)
                  }),
            r.settings.hideSubWhenGoOut && b()
        },
        S = function() {
          w(),
            h(),
            r.settings.visibleSubmenusOnMobile
              ? n(t)
                  .find(".nav-submenu")
                  .show(0)
              : (n(t)
                  .find(".submenu-indicator")
                  .removeClass("submenu-indicator-up"),
                r.settings.submenuIndicator &&
                r.settings.submenuIndicatorTrigger
                  ? n(t)
                      .find(".submenu-indicator")
                      .on(l, function(i) {
                        return (
                          i.stopPropagation(),
                          i.preventDefault(),
                          r.hideSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li")
                              .siblings("li"),
                            "slide"
                          ),
                          r.hideSubmenu(
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .children("li"),
                            "slide"
                          ),
                          "none" ==
                          n(this)
                            .parent("a")
                            .siblings(".nav-submenu")
                            .css("display")
                            ? (n(this).addClass("submenu-indicator-up"),
                              n(this)
                                .parent("a")
                                .parent("li")
                                .siblings("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              n(this)
                                .closest(".nav-menu")
                                .siblings(".nav-menu")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              r.showSubmenu(
                                n(this)
                                  .parent("a")
                                  .parent("li"),
                                "slide"
                              ),
                              !1)
                            : (n(this)
                                .parent("a")
                                .parent("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              void r.hideSubmenu(
                                n(this)
                                  .parent("a")
                                  .parent("li"),
                                "slide"
                              ))
                        )
                      })
                  : n(t)
                      .find(".nav-menu, .nav-dropdown")
                      .children("li")
                      .children("a")
                      .on(l, function(e) {
                        if (
                          (e.stopPropagation(),
                          e.preventDefault(),
                          r.hideSubmenu(
                            n(this)
                              .parent("li")
                              .siblings("li"),
                            r.settings.effect
                          ),
                          r.hideSubmenu(
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .children("li"),
                            "slide"
                          ),
                          "none" ==
                            n(this)
                              .siblings(".nav-submenu")
                              .css("display"))
                        )
                          return (
                            n(this)
                              .children(".submenu-indicator")
                              .addClass("submenu-indicator-up"),
                            n(this)
                              .parent("li")
                              .siblings("li")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            r.showSubmenu(n(this).parent("li"), "slide"),
                            !1
                          )
                        if (
                          (n(this)
                            .parent("li")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          r.hideSubmenu(n(this).parent("li"), "slide"),
                          "_blank" === n(this).attr("target") ||
                            "blank" === n(this).attr("target"))
                        )
                          i.open(n(this).attr("href"))
                        else {
                          if (
                            "#" === n(this).attr("href") ||
                            "" === n(this).attr("href") ||
                            "javascript:void(0)" === n(this).attr("href")
                          )
                            return !1
                          i.location.href = n(this).attr("href")
                        }
                      }))
        }
      ;(r.callback = function(n) {
        s[n] !== a && s[n].call(t)
      }),
        r.init()
    }),
      (n.fn.navigation = function(i) {
        return this.each(function() {
          if (a === n(this).data("navigation")) {
            var e = new n.navigation(this, i)
            n(this).data("navigation", e)
          }
        })
      })
  })(jQuery, window, document)

  ;(function($) {
    "use strict"

    var $window = $(window)

    if ($.fn.navigation) {
      $("#navigation1").navigation()
      $("#always-hidden-nav").navigation({
        hidden: true
      })
    }

    $window.on("load", function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove()
      })
    })
  })(jQuery)










  const swiper = new Swiper(".swiper-slider", {
    // Optional parameters
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
      enabled: true
    },
  
    // Enabled autoplay mode
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true
    },
  
    // If we need navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  $('.buy').click(function(){
    $('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $('.bottom').removeClass("clicked");
  });




/* <!------------- Featured product-Section -------------> */




  let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
 product.onclick = () =>{
 preveiwContainer.style.display = 'flex';
 let name = product.getAttribute('data-name');
 previewBox.forEach(preview =>{
let target = preview.getAttribute('data-target');
 if(name == target){
 preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
  close.classList.remove('active');
  preveiwContainer.style.display = 'none';
  };
});
  




/* <!------------- Reviews-Section -------------> */




var x = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



/* <!------------- Add to cart Section -------------> */



jQuery(document).ready(function($){
	var cartWrapper = $('.cd-cart-container');
	//product id - you don't need a counter in your real project but you can use your real product id
	var productId = 0;

	if( cartWrapper.length > 0 ) {
		//store jQuery objects
		var cartBody = cartWrapper.find('.body')
		var cartList = cartBody.find('ul').eq(0);
		var cartTotal = cartWrapper.find('.checkout').find('span');
		var cartTrigger = cartWrapper.children('.cd-cart-trigger');
		var cartCount = cartTrigger.children('.count')
		var addToCartBtn = $('.cd-add-to-cart');
		var undo = cartWrapper.find('.undo');
		var undoTimeoutId;

		//add product to cart
		addToCartBtn.on('click', function(event){
			event.preventDefault();
			addToCart($(this));
		});

		//open/close cart
		cartTrigger.on('click', function(event){
			event.preventDefault();
			toggleCart();
		});

		//close cart when clicking on the .cd-cart-container::before (bg layer)
		cartWrapper.on('click', function(event){
			if( $(event.target).is($(this)) ) toggleCart(true);
		});

		//delete an item from the cart
		cartList.on('click', '.delete-item', function(event){
			event.preventDefault();
			removeProduct($(event.target).parents('.product'));
		});

		//update item quantity
		cartList.on('change', 'select', function(event){
			quickUpdateCart();
		});

		//reinsert item deleted from the cart
		undo.on('click', 'a', function(event){
			clearInterval(undoTimeoutId);
			event.preventDefault();
			cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				$(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
				quickUpdateCart();
			});
			undo.removeClass('visible');
		});
	}

	function toggleCart(bool) {
		var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;
		
		if( cartIsOpen ) {
			cartWrapper.removeClass('cart-open');
			//reset undo
			clearInterval(undoTimeoutId);
			undo.removeClass('visible');
			cartList.find('.deleted').remove();

			setTimeout(function(){
				cartBody.scrollTop(0);
				//check if cart empty to hide it
				if( Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
			}, 500);
		} else {
			cartWrapper.addClass('cart-open');
		}
	}

	function addToCart(trigger) {
		var cartIsEmpty = cartWrapper.hasClass('empty');
		//update cart product list
		addProduct();
		//update number of items 
		updateCartCount(cartIsEmpty);
		//update total price
		updateCartTotal(trigger.data('price'), true);
		//show cart
		cartWrapper.removeClass('empty');
	}

	function addProduct() {
		//this is just a product placeholder
		//you should insert an item with the selected product info
		//replace productId, productName, price and url with your real product info
		productId = productId + 1;
		var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="img/product-preview.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Product Name</a></h3><span class="price">$25.99</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="select"><select id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
		cartList.prepend(productAdded);
	}

	function removeProduct(product) {
		clearInterval(undoTimeoutId);
		cartList.find('.deleted').remove();
		
		var topPosition = product.offset().top - cartBody.children('ul').offset().top ,
			productQuantity = Number(product.find('.quantity').find('select').val()),
			productTotPrice = Number(product.find('.price').text().replace('$', '')) * productQuantity;
		
		product.css('top', topPosition+'px').addClass('deleted');

		//update items count + total price
		updateCartTotal(productTotPrice, false);
		updateCartCount(true, -productQuantity);
		undo.addClass('visible');

		//wait 8sec before completely remove the item
		undoTimeoutId = setTimeout(function(){
			undo.removeClass('visible');
			cartList.find('.deleted').remove();
		}, 8000);
	}

	function quickUpdateCart() {
		var quantity = 0;
		var price = 0;
		
		cartList.children('li:not(.deleted)').each(function(){
			var singleQuantity = Number($(this).find('select').val());
			quantity = quantity + singleQuantity;
			price = price + singleQuantity*Number($(this).find('.price').text().replace('$', ''));
		});

		cartTotal.text(price.toFixed(2));
		cartCount.find('li').eq(0).text(quantity);
		cartCount.find('li').eq(1).text(quantity+1);
	}

	function updateCartCount(emptyCart, quantity) {
		if( typeof quantity === 'undefined' ) {
			var actual = Number(cartCount.find('li').eq(0).text()) + 1;
			var next = actual + 1;
			
			if( emptyCart ) {
				cartCount.find('li').eq(0).text(actual);
				cartCount.find('li').eq(1).text(next);
			} else {
				cartCount.addClass('update-count');

				setTimeout(function() {
					cartCount.find('li').eq(0).text(actual);
				}, 150);

				setTimeout(function() {
					cartCount.removeClass('update-count');
				}, 200);

				setTimeout(function() {
					cartCount.find('li').eq(1).text(next);
				}, 230);
			}
		} else {
			var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
			var next = actual + 1;
			
			cartCount.find('li').eq(0).text(actual);
			cartCount.find('li').eq(1).text(next);
		}
	}

	function updateCartTotal(price, bool) {
		bool ? cartTotal.text( (Number(cartTotal.text()) + Number(price)).toFixed(2) )  : cartTotal.text( (Number(cartTotal.text()) - Number(price)).toFixed(2) );
	}
});



        function addToCart() {
            // Add your logic here to add the product to the cart
            alert('Product added to cart.');
        }

  