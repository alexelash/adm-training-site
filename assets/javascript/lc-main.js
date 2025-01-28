var welcomeMessage = ", ",
    sjPageLogin = document.querySelector('.sj-page-login'),
    sjPageSignup = document.querySelector('.sj-page-signup'),
    sjCatalogRoot = document.querySelector('.sj-page-catalog-root'),
    sjPageCatalog = document.querySelector('.sj-page-catalog'),
    sjPageProfile = document.querySelector('.sj-page-profile'),
    sjPageLesson = document.querySelectorAll('.sj-page-lesson'),
    sjPageDetail = document.querySelector('.sj-page-detail'),
    sjPageDetailPath = document.querySelector('.sj-page-detail-path'),
    sjPagePath = document.querySelector('.sj-page-path'),
    sjCurriculumPage =  document.querySelector('.sj-page-curriculum'),
    sjContent = document.getElementById('skilljar-content'),
    epFooter = document.getElementById('ep-footer'),
    epFooterCopyright = document.querySelectorAll('#ep-footer #footer-left ul li'),
    siteName = "Administrate Learning Campus",
    textAlignment = 'left'; /* change value to 'left' for left aligned sections */

const globalCustomFooterElement = document.createElement('div'),
        admSiteUrl = "https://www.getadministrate.com/",
        admLogoSrc = "https://www.getadministrate.com/wp-content/themes/administrate/assets/images/logo-rgb-inverted.svg",
        admFooterDesc = "Whether you’re running 100s (or 1000s) of trainings across the globe, Administrate is your one-stop shop to plan, schedule, coordinate, and communicate every detail—in person or on Zoom.",
        admLinkedinHref = "https://www.linkedin.com/company/administrate/",
        admXHref = "https://x.com/GetAdministrate",
        admFacebookHref = "https://www.facebook.com/GetAdministrate",
        admYoutubeHref = "https://www.youtube.com/user/GetAdministrate";

const catalogLowerBannerElement = document.createElement('div'),
       bannerHeading = "Stuck? We’re here to help",
       bannerText = "Having an issue with a course, webinar, or other content in " + siteName + "? Reach out to the Administrate team.",
       bannerLinkHref = "mailto:training@getadministrate.com",
       bannerLinkText = "Email us";
     
const HEADER_LINKS = {
    /* start nested header link */
    "Learn": {
      "nestedLinks": {
        "All courses": {
          "href": "/page/course-catalog",
          "target": "_self",
          /* open in same tab */
        },
        "Live training": {
          "href": "/calendar",
          "target": "_self",
          /* open in same tab */
        },
      }
    },
    /* end nested header link */
    /* start nested header link */
    "Resources": {
      "nestedLinks": {
        "Release notes": {
          "href": "https://support.getadministrate.com/hc/en-us/categories/115001277127-Release-Notes",
          "target": "_self",
          "data-external": true
        },
        "Support portal": {
          "href": "https://support.getadministrate.com/hc/en-us",
          "target": "_self",
          "data-external": true
        }
      }
    },
    /* end nested header link */
    /* start static header link */
    "My courses": {
      "href": "/accounts/profile#profile-path-table",
      "target": "_self"
    },
/* end static header link */
};

// Skilljar code for header - DO NOT EDIT
(() => {
    "use strict";
    var e = {
        717: (e, n, r) => {
          r.d(n, {
            Z: () => i
          });
          var t = r(645),
            a = r.n(t)()((function(e) {
              return e[1]
            }));
          a.push([e.id, "#header .header-wrapper{display:flex;height:100%;justify-content:space-between;margin:auto;padding:0 24px;position:relative;width:100%}#header .header-link:not(.back-to-catalog){font-size:14px;position:relative}@media(min-width: 1213px){#header .header-link:not(.back-to-catalog){font-size:16px}}#header #header-left{padding-left:0;position:unset}#header #header-left #left-nav-button{padding-left:0}#header #header-left .header-logo-link{padding:0}#header #header-right{align-items:center;display:flex;position:unset}@media only screen and (max-width: 767px){#header #header-right{flex-grow:1;padding-left:24px}}#header #header-right .header-link-container{align-items:center;display:none;flex-shrink:0;margin-right:16px;position:relative}@media(min-width: 962px){#header #header-right .header-link-container{display:flex}}#header #header-right .header-link-container .header-link{margin:0 16px;padding:8px 0}#header #header-right>.headerheight{flex-shrink:0;height:unset}#header #header-right .login-link{display:none;margin-right:0}@media(min-width: 962px){#header #header-right .login-link{display:inline-block}}#header #header-right .header-dropdown-button{display:none;padding:0}@media(min-width: 962px){#header #header-right .header-dropdown-button{display:block}}#header #header-right .header-dropdown-button::before{content:none}#header #header-right .header-dropdown-button img{border-radius:100%}#header #header-right .header-mobile-menu{font-size:26px;margin-left:auto}@media(min-width: 962px){#header #header-right .header-mobile-menu{display:none}}#header #header-right .header-mobile-menu .fa-times{display:none}#header .header-nested-wrapper{align-items:center;padding:8px 0}#header .header-nested-wrapper:hover .header-nested-links,#header .header-nested-wrapper:focus-within .header-nested-links{opacity:100;pointer-events:unset;transform:translateY(-4px)}#header .header-nested-wrapper .header-nested-links{background-color:#fff;border:1px solid rgba(0,0,0,.08);border-radius:0 4px 4px 4px;box-shadow:0 4px 12px 0 rgba(0,0,0,.15);left:16px;opacity:0;padding:12px 0;pointer-events:none;position:absolute;top:100%;transform:translateY(-8px);transition:.4s ease}#header .header-nested-wrapper .header-nested-links .header-link{margin:2px 20px !important}.header-nested-wrapper{display:flex;height:100%;position:relative}.header-nested-wrapper .header-nested-links{align-items:flex-start;display:flex;flex-direction:column;text-align:left}.header-nested-wrapper .header-nested-links .header-link{white-space:nowrap}.header-nested-wrapper .header-nested-links:focus-within{opacity:100;pointer-events:unset;transform:translateY(-4px)}.header-mobile-dropdown{background-color:#fff;box-shadow:0 0 0 9999px rgba(0,0,0,.5);display:none;flex-direction:column;padding-top:12px;position:fixed;top:45px;width:100%;z-index:4}.header-mobile-dropdown .header-link{font-size:18px;padding:20px 32px}.header-mobile-dropdown .header-nested-wrapper{flex-direction:column}.header-mobile-dropdown .header-nested-wrapper .header-nested-links .header-link{margin-left:24px}.header-mobile-dropdown .mobile-login-link{margin-top:12px;padding:20px 32px}.header-mobile-dropdown .mobile-login-link .header-link.login-link,.header-mobile-dropdown .mobile-login-link .signout-link{display:block;text-align:center;width:100%}.mobile-menu-open .header-mobile-menu .fa-bars{display:none}.mobile-menu-open .header-mobile-menu .fa-times{display:block !important}.mobile-menu-open .header-mobile-dropdown{display:flex}", ""]);
          const i = a
        },
        26: (e, n, r) => {
          r.d(n, {
            Z: () => i
          });
          var t = r(645),
            a = r.n(t)()((function(e) {
              return e[1]
            }));
          a.push([e.id, "", ""]);
          const i = a
        },
        645: e => {
          e.exports = function(e) {
            var n = [];
            return n.toString = function() {
              return this.map((function(n) {
                var r = e(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(r, "}") : r
              })).join("")
            }, n.i = function(e, r, t) {
              "string" == typeof e && (e = [
                [null, e, ""]
              ]);
              var a = {};
              if (t)
                for (var i = 0; i < this.length; i++) {
                  var o = this[i][0];
                  null != o && (a[o] = !0)
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                t && a[l[0]] || (r && (l[2] ? l[2] = "".concat(r, " and ").concat(l[2]) : l[2] = r), n.push(l))
              }
            }, n
          }
        },
        379: (e, n, r) => {
          var t, a = function() {
              var e = {};
              return function(n) {
                if (void 0 === e[n]) {
                  var r = document.querySelector(n);
                  if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                    r = r.contentDocument.head
                  } catch (e) {
                    r = null
                  }
                  e[n] = r
                }
                return e[n]
              }
            }(),
            i = [];

          function o(e) {
            for (var n = -1, r = 0; r < i.length; r++)
              if (i[r].identifier === e) {
                n = r;
                break
              } return n
          }

          function d(e, n) {
            for (var r = {}, t = [], a = 0; a < e.length; a++) {
              var d = e[a],
                l = n.base ? d[0] + n.base : d[0],
                s = r[l] || 0,
                h = "".concat(l, " ").concat(s);
              r[l] = s + 1;
              var p = o(h),
                c = {
                  css: d[1],
                  media: d[2],
                  sourceMap: d[3]
                }; - 1 !== p ? (i[p].references++, i[p].updater(c)) : i.push({
                identifier: h,
                updater: m(c, n),
                references: 1
              }), t.push(h)
            }
            return t
          }

          function l(e) {
            var n = document.createElement("style"),
              t = e.attributes || {};
            if (void 0 === t.nonce) {
              var i = r.nc;
              i && (t.nonce = i)
            }
            if (Object.keys(t).forEach((function(e) {
                n.setAttribute(e, t[e])
              })), "function" == typeof e.insert) e.insert(n);
            else {
              var o = a(e.insert || "head");
              if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              o.appendChild(n)
            }
            return n
          }
          var s, h = (s = [], function(e, n) {
            return s[e] = n, s.filter(Boolean).join("\n")
          });

          function p(e, n, r, t) {
            var a = r ? "" : t.media ? "@media ".concat(t.media, " {").concat(t.css, "}") : t.css;
            if (e.styleSheet) e.styleSheet.cssText = h(n, a);
            else {
              var i = document.createTextNode(a),
                o = e.childNodes;
              o[n] && e.removeChild(o[n]), o.length ? e.insertBefore(i, o[n]) : e.appendChild(i)
            }
          }

          function c(e, n, r) {
            var t = r.css,
              a = r.media,
              i = r.sourceMap;
            if (a ? e.setAttribute("media", a) : e.removeAttribute("media"), i && "undefined" != typeof btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = t;
            else {
              for (; e.firstChild;) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(t))
            }
          }
          var f = null,
            u = 0;

          function m(e, n) {
            var r, t, a;
            if (n.singleton) {
              var i = u++;
              r = f || (f = l(n)), t = p.bind(null, r, i, !1), a = p.bind(null, r, i, !0)
            } else r = l(n), t = c.bind(null, r, n), a = function() {
              ! function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
              }(r)
            };
            return t(e),
              function(n) {
                if (n) {
                  if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                  t(e = n)
                } else a()
              }
          }
          e.exports = function(e, n) {
            (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = (void 0 === t && (t = Boolean(window && document && document.all && !window.atob)), t));
            var r = d(e = e || [], n);
            return function(e) {
              if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var t = 0; t < r.length; t++) {
                  var a = o(r[t]);
                  i[a].references--
                }
                for (var l = d(e, n), s = 0; s < r.length; s++) {
                  var h = o(r[s]);
                  0 === i[h].references && (i[h].updater(), i.splice(h, 1))
                }
                r = l
              }
            }
          }
        }
      },
      n = {};

    function r(t) {
      var a = n[t];
      if (void 0 !== a) return a.exports;
      var i = n[t] = {
        id: t,
        exports: {}
      };
      return e[t](i, i.exports, r), i.exports
    }
    r.n = e => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return r.d(n, {
        a: n
      }), n
    }, r.d = (e, n) => {
      for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
        enumerable: !0,
        get: n[t]
      })
    }, r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => {
      var e = r(379),
        n = r.n(e),
        t = r(26);
      n()(t.Z, {
        insert: "head",
        singleton: !1
      }), t.Z.locals;
      var a = r(717);

      function i(e, n) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, n) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var r = [],
              t = !0,
              a = !1,
              i = void 0;
            try {
              for (var o, d = e[Symbol.iterator](); !(t = (o = d.next()).done) && (r.push(o.value), !n || r.length !== n); t = !0);
            } catch (e) {
              a = !0, i = e
            } finally {
              try {
                t || null == d.return || d.return()
              } finally {
                if (a) throw i
              }
            }
            return r
          }
        }(e, n) || function(e, n) {
          if (e) {
            if ("string" == typeof e) return o(e, n);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, n) : void 0
          }
        }(e, n) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function o(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
        return t
      }
      n()(a.Z, {
        insert: "head",
        singleton: !1
      }), a.Z.locals, $((function() {
        ! function() {
          $("header").children().wrapAll('<div class="header-wrapper"/>');
          var e = $('<div class="header-link-container"/>'),
            n = $('<div class="header-mobile-dropdown"/>');

          function r(e, n) {
            var r = window.location.pathname == n.href || window.location.href == n.href ? "active" : "";
            return $(".sj-page-profile").length && /^\//.test(n.href) && (n.href = $(".header-logo-link").attr("href") + n.href.substr(1)), $('<a class="header-link '.concat(r, '">').concat(e, "</a>")).attr(n)
          }
          $("header .search-container").length, Object.entries(HEADER_LINKS).forEach((function(t, a) {
            var o, 
                d = i(t, 2),
                l = d[0],
                s = d[1],
                v = d[2];
              
            o = "nestedLinks" in s ? function(e, n) {
              var t = $('<div class="header-nested-wrapper"/>'),
                  a = $('<div class="header-nested-links"/>');
                
              Object.entries(n.nestedLinks).forEach((function(e, n) {
                  var t = i(e, 2),
                      o = t[0],
                      d = t[1]
                  a.append(r(o, d))
              }));
              var o = n.link ? $('<a class="header-link">'.concat(e, "</a>")).attr(n.link) : '<span class="header-link">'.concat(e, "</span>");
              return t.append(o, a), t
            }
            (l, s) : r(l, s), e.append(o.clone()), n.append(o.clone())
          })), $(".header-link.login-link").length ? n.append($('<div class="mobile-login-link"/>').html($(".header-link.login-link").clone())) : n.append($("#header-drop .sj-text-my-profile").clone().addClass("header-link"), $('<div class="mobile-login-link"/>').html($("#header-drop .signout-link").clone().addClass("header-link"))), $("#header-right").prepend(e).append('<a class="header-mobile-menu"><i class="header-mobile-menu-bars fa-light fa-bars" title="Mobile menu"></i><i class="header-mobile-menu-close fa-light fa-times" title="Close mobile menu"></i></a>'), $("header").after(n), $(".header-mobile-menu").on("click", (function() {
            $("body").toggleClass("mobile-menu-open")
          })), $(document).on("click", (function(e) {
            $(e.target).closest("header").length || $(e.target).closest(".header-mobile-dropdown").length || $("body").removeClass("mobile-menu-open")
          }))
        }()
      }))
    })()
  })();

/* custom html for global custom footer element*/
globalCustomFooterElement.innerHTML = `
<div class="footer-background-wrapper">
  <h2 class="sr-only sr-only-focusable">Footer Navigation</h2>
  <div class="footer-top-section">
    <div class="footer-company-info-wrapper">
      <a class="footer-logo-link" href="` + admSiteUrl + `" aria-label="Administrate main website."><img class="footer-company-logo" alt="Administrate Logo." src="` + admLogoSrc + `"></a>
      <p class="footer-company-text">` + admFooterDesc + `</p>
    </div>
    <div class="footer-social-wrapper">
      <p class="sr-only sr-only-focusable text">Follow us:</p>
      <ul class="footer-social-list">
        <li class="footer-social-list-item">
          <a class="footer-social-link" href="` + admLinkedinHref + `" target="_blank" aria-label="Administrate’s LinkedIn.">
            <i class="footer-social-icon fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li class="footer-social-list-item">
          <a class="footer-social-link" href="` + admXHref + `" target="_blank" aria-label="Administrate’s Twitter.">
            <i class="footer-social-icon fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li class="footer-social-list-item">
          <a class="footer-social-link" href="` + admFacebookHref + `" target="_blank" aria-label="Administrate’s Facebook.">
            <i class="footer-social-icon fa-brands fa-facebook"></i>
          </a>
        </li>
        <li class="footer-social-list-item">
          <a class="footer-social-link" href="` + admYoutubeHref + `" target="_blank" aria-label="Administrate’s YouTube.">
            <i class="footer-social-icon fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer-link-tree-wrapper">
    <div class="footer-link-column-wrapper">
      <h3 class="footer-header">Product</h3>
      <ul class="footer-list">
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/why-administrate/">Why Administrate</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/features/">Features</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://trust.getadministrate.com/">Trust and security</a></li>
      </ul>
    </div>
    <div class="footer-link-column-wrapper">
      <h3 class="footer-header">Support</h3>
      <ul class="footer-list">
        <li class="footer-list-item"><a class="footer-link" href="https://support.getadministrate.com/">Support portal</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://administrate.statuspage.io/">System status</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://developer.getadministrate.com/">Administrate DX</a></li>
      </ul>
    </div>
    <div class="footer-link-column-wrapper">
      <h3 class="footer-header">Resources</h3>
      <ul class="footer-list">
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/resources/events/">Events and webinars</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/resources/case-studies/">Case studies</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/resources/guides/">Guides</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/blog/">Blog</a></li>
      </ul>
    </div>
    <div class="footer-link-column-wrapper">
      <h3 class="footer-header">Company</h3>
      <ul class="footer-list">
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/about/">About</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/our-team/">Team</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/blog/category/news/">News</a></li>
        <li class="footer-list-item"><a class="footer-link" href="https://www.getadministrate.com/contact-us/">Contact us</a></li>
      </ul>
    </div>
  </div>
</div>`;

/* custom html for global catalog lower banner help/cta element */
catalogLowerBannerElement.innerHTML = `
<div class="catalog-lower-wrapper">
    <div class="catalog-lower-content-wrapper">
        <div class="catalog-lower-text-wrapper">
            <h2 class="catalog-lower-title">` + bannerHeading + `</h2>
            <p class="catalog-lower-text">` + bannerText + `</p>
            <a href="` + bannerLinkHref + `" class="catalog-lower-cta-button" target="_blank" rel="noopener">` + bannerLinkText+ `</a>
        </div>
    </div>
</div>`;


$(document).ready(function() {
     /* personalize by adding first name when it exists */
    if(typeof skilljarUser !== 'undefined' && skilljarUser.firstName.length <= 15 && skilljarUser.firstName.length > 1) {
        $('.first-name').html(skilljarUser.firstName + welcomeMessage);
        $('.first-name').css('display', 'inline-block');
        $('.first-name').css('color', 'inherit');
        $('.first-name').css('margin-right', '5px');
    } else {
      $('.first-name').css('display', 'none');
    }

    /* add down arrow to nested header links for UX clarity */
    $('.header-nested-wrapper > .header-link').each(function() {
        $(this).append('<i class="header-link-parent-icon fa-regular fa-chevron-down"></i>');
    });

    /* start Back to catalog */
    if (sjPageLesson && $(".next-lesson-button").length == 0) {
        var backButton = '<div id="back-to-catalog"><a href="/" class="small button next-lesson-link"><span>Back to catalog</span></a></div>';
        $(".full-footer-height-wrapper.align-vertical").prepend(backButton);
    }

    /* adjust dynamic date and ep footer text to include Administrate */
    if (epFooterCopyright) {
        var currentTime = new Date();
        var epFooterYear = currentTime.getFullYear();

        $(epFooterCopyright).text('©' + epFooterYear + ' Administrate Limited. All rights reserved.');
    }
    
    /* remove header link for my courses when user is not logged in */
    if (sjPageLogin || sjPageSignup) {
        $('.header-link:contains(My courses)').remove();
    }

    /* add lower banner element, global custom footer and epFooter on certain pages */
    if (sjPageCatalog || sjPageProfile || sjPageDetail || sjPageDetailPath || sjCurriculumPage ) {
        sjContent.append(catalogLowerBannerElement, globalCustomFooterElement, epFooter);
    }

    /* replace ilt tiles with links*/
    $('[data-catalog-page="ilt-webinars"]').attr("href", "/calendar");

    /* hide "more" pane for Learning Campus */
    $('.sj-more-container').remove();
    
    /* hide "Summary" pane for Learning Campus */
    $('.sj-text-details-pane-summary').remove();

    /* switch order of Lesson Title and Back button */
     $("#returnToOverview").detach().insertBefore(".course-title");

    /* this code converts the curriculum list into clickable lesson deep links */
    var curriculumItems = document.querySelectorAll('.dp-curriculum > li:not(.section)');
    curriculumItems.forEach(function(item) {
        var url = item.getAttribute('data-url') + '?reg=1';
        var wrapper = document.createElement('a');
        wrapper.setAttribute('href', url);
        while (item.firstChild) {
            wrapper.appendChild(item.firstChild);
        }
        item.appendChild(wrapper);
    });

    /* login page - add custom link to get to the signup page */
    if (sjPageLogin) {
        var loginNote = document.querySelector('.sj-text-login-note');
        var signUpText = document.createElement('p');
        signUpText.classList.add('lp-sign-up-text');
        signUpText.innerHTML = 'Need an account? <a href="' + document.querySelector('.sj-text-sign-up').getAttribute('href') + '">Sign up.</a>';
        loginNote.parentNode.insertBefore(signUpText, loginNote.nextSibling);
        /* remove social media providers and adjust CSS if they exist */
        document.querySelector('.sj-text-login-note').parentElement.style.width = '100%';
        document.querySelector('.socialaccount_providers').parentElement.style.display = 'none';
    }

    /* signup page - add custom link to get to the login page */
    if (sjPageSignup) {
        var loginContent = document.getElementById('login-content');
        var signInHref = document.querySelector('.sj-text-sign-in').getAttribute('href');
        var signupPageHeader = document.createElement('h1');
        signupPageHeader.classList.add('signup-custom-header');
        signupPageHeader.textContent = 'Sign up for ' + siteName;
        
        var signupPageCustomLink = document.createElement('p');
        signupPageCustomLink.classList.add('signup-custom-link');
        signupPageCustomLink.innerHTML = 'Already have an account? <a href="' + signInHref + '">Sign in</a>';
        loginContent.insertBefore(signupPageCustomLink, loginContent.firstChild);
        loginContent.insertBefore(signupPageHeader, signupPageCustomLink);

        /* remove social media providers and adjust CSS if they exist */
        document.querySelector('.signup').parentElement.style.width = '100%';
        document.querySelector('.socialaccount_providers').parentElement.style.display = 'none';
    }
    
    /* change course separators - remove [separator] and change text alignment */
    var courseboxContainers = document.querySelectorAll('.coursebox-container');
    courseboxContainers.forEach(function(container) {
        var courseboxText = container.querySelector('.coursebox-text');
        var lowercaseText = courseboxText.textContent.toLowerCase();
        if (lowercaseText.indexOf('[separator]') !== -1) {
            /* check for both upper case and lower case versions in case of admin mistake */
            courseboxText.textContent = courseboxText.textContent.replace('[separator]', '');
            courseboxText.textContent = courseboxText.textContent.replace('[Separator]', '');
            container.style.textAlign = textAlignment;
        }
    });

    /* add a visible link to each collection container */
    var catalogCourseboxContainers = document.querySelectorAll('.coursebox-container.sj-catalog-page');
    catalogCourseboxContainers.forEach(function(container) {
        var courseboxText = container.querySelector('.coursebox-text');
        var visibleLink = '<div class="visible-link">See' + courseboxText.textContent + 'courses</div>';
        
        $(container).append($(visibleLink));
    });

    /* catalog home/root page only */
    if (sjCatalogRoot) {
        /* create sections */
        var separatorCourseboxContainers = document.querySelectorAll('a.coursebox-container[data-tags*="separator"]');
        separatorCourseboxContainers.forEach(function(container) {
            $("<section class='course-listing-section'>").insertAfter($(container).parent()).append($(container).nextAll().addBack());
        });
    }

    /* set add time to complete to about tab*/
    if (sjCurriculumPage) {
        var aboutCourseHeader = $('.sj-page-curriculum .tabs .course-long-description-header');
        aboutCourseHeader.append( $('.sj-course-time').detach() );
    }

    /* move resume button and progress bar on page paths */
    var resumeButton = $('.path-curriculum-button-wrapper');
    if (sjPagePath && resumeButton) {
        $('.tt1-text-section').append( resumeButton.detach() );
    }

    /* Add pointer event back in to "Show Overview" button IF expanded details path
       view setting is turned ON. Allows the lesson list to be viewed for a course
       remove clickable course tiles on Path Detail Page */
    if (sjPageDetailPath) {
        //check for expanded details path view and add pointer event back in
        var courseOverviewToggle = document.querySelectorAll('.course-overview__toggle');
        if (courseOverviewToggle.length > 0) {
            for (var i = 0; i < courseOverviewToggle.length; i++) {
                courseOverviewToggle[i].style.pointerEvents = "initial";
            }
            var courseOverviewContentLesson = document.querySelectorAll('a.course-overview__content__lesson');
            for (var j = 0; j < courseOverviewContentLesson.length; j++) {
                courseOverviewContentLesson[j].style.pointerEvents = "none";
            }
        }
    }
});
