// START Personalize by adding first name
// when the page fully loads, run the following function
$(document).ready(function() {
    var welcomeMessage = ", ";

    if(typeof skilljarUser !== 'undefined' && skilljarUser.firstName.length <= 15 && skilljarUser.firstName.length > 1) {
        $('.first-name').html(skilljarUser.firstName + welcomeMessage);
        $('.first-name').css('display', 'inline-block');
        $('.first-name').css('color', 'inherit');
        $('.first-name').css('margin-right', '5px');
    }

    else {
      $('.first-name').css('display', 'none');
    }
});
// END Personalize by adding first name

// START Catalog Tile Stylings
let catalogTileStyle = document.createElement('style');
catalogTileStyle.textContent = `
/* General Tile Stylings */
#skilljar-content .coursebox-container {
    border: 1px solid var(--gray-300);
    /* tile border is off by default */
    border-radius: 2px;
    /* rounded tile edges */
    box-shadow: 0 4px 6px 1px rgba(0, 0, 0, .1);
    /* shadow behind tiles */
    transition: transform 0.5s, box-shadow 0.2s;
    /* do not modify - for hover effect */
}

/* Hover effects for Tiles */
#skilljar-content .coursebox-container:hover {
    border-bottom: 4px solid var(--purple-500);
    /* color of bottom border - appears on hover */
    transform: translateY(-5px);
    /* do not modify */
    transition: 0.2s;
    /* do not modify */
}

/* Tile Title stylings */
#skilljar-content .coursebox-container .coursebox-text {
    /* removed */
}

/* Tile short description stylings */
#skilljar-content .coursebox-container .coursebox-text-description {
/* removed */
}

/* Line break above Catalog Tile Callout */
#skilljar-content .sj-courseboxes-v2:not(.search).coursebox-container .coursebox-callout {
    border-top: 1px solid #BBBBBB;
    /* color of line break above tile CTA */
}

/* Hide line break on course tiles only */
a.coursebox-container[data-course] .coursebox-callout {
    display: none !important;
}

/* remove legacy path tile stylings */
a.coursebox-container.sj-course-series:before,
a.coursebox-container.sj-path:before,
a.coursebox-container.sj-course-series:after,
a.coursebox-container.sj-path:after {
    
}

/* Center align tiles */
#catalog-courses {
    justify-content: center;
    /* change 'center' to 'left' for left aligned tiles */
}`;
document.head.append(catalogTileStyle);
// END Catalog Tile Stylings

// START Course/Path Detail Page Stylings
let courseDetailStyle = document.createElement('style');
courseDetailStyle.textContent = ` 
/* Add padding to the top of the details page */
.sj-page-detail #skilljar-content .top-row-white-v2 {
    padding: 40px 3%;
}

/* Course Registration area stylings */
.sj-page-detail .dp-summary-wrapper {
    border: none;
    padding: 40px;
}

/* course title stylings */
.sj-page-detail .dp-summary-wrapper>h1 {
    font-size: 36px !important;
    font-weight: 600 !important;
}

/* hide social media links */
.sj-page-detail .social-media-wrapper {
    display: none;
}

/* add more padding to lower section */
.sj-page-detail #dp-details {
    padding: 40px;
}

/* style the "about this course" section */
.sj-page-detail #dp-details .large-7.columns>h3 {
    font-size: 32px !important;
    font-weight: 600 !important;
    margin-bottom: 20px !important;
}

/* style curriculum box */
.sj-page-detail #dp-details .hide-for-small .sj-curriculum-wrapper {
    border-radius: 4px;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, .15);
    padding: 24px;
}

/* style curriculum title */
.sj-page-detail #dp-details .sj-curriculum-wrapper>h3 {
    border-bottom: 1px solid #bbb;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 0;
    padding-bottom: 16px;
    text-align: center;
}

/* add margin to top of curriculum links */
.sj-page-detail .dp-curriculum {
    margin-top: 20px;
}

/* style curriculum link headers */
.sj-page-detail .dp-curriculum li.section {
    font-size: 18px !important;
    font-weight: bold;
}

/* style curriculum links */
.sj-page-detail .dp-curriculum>li {
    font-size: 16px;
}`;
document.head.append(courseDetailStyle);

// This code converts the curriculum list into clickable lesson deep links
document.addEventListener('DOMContentLoaded', function() {
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
// END Course/Path Detail Page Styling

// START Floating Filter Bar Styling
let floatingFilterBarStyle = document.createElement('style');
floatingFilterBarStyle.textContent = ` 
  /* remove border and background color of left nav */
  .catalog-filters #catalog-left-nav {
    background-color: transparent;
    border: unset;
  }

  /* floating filter bar stylings */
  .catalog-filters #catalog-left-nav .catalog-left-nav-wrapper {
    border-radius: 4px;
    box-shadow: 0 2px 12px 4px rgba(0, 0, 0, .15);
    padding: 24px;
    overflow-y: scroll;
    width: 100%;
    scrollbar-width: none;
    background-color: #FFFFFF;
  }

  /* add right margin to filter name */
  .filter-option .filter-counter {
    margin-left: 5px;
  }

  /* hide expand/collapse all button - isn't useful */
  a#catalog-filter-expand-collapse {
    display: none;
  }

  /* lower margin below search box */
  .catalog-search-input-group {
    margin-bottom: 10px;
  }

  /* left align courses in search results */
  .search .catalog-center-width {
    max-width: unset !important;
  }`;
document.head.append(floatingFilterBarStyle);
// END Floating Filter Bar Styling

// START Login / Signup Page Stylings
let loginSignupStyle = document.createElement('style');
loginSignupStyle.textContent = `
/* CODE BELOW HERE DOES NOT NEED TO BE EDITED */
/* background image or color */
.sj-page-login #skilljar-content,
.sj-page-signup #skilljar-content {
    background: var(--login-page-background);
    background-size: cover !important;
    background-repeat: no-repeat !important;
}

/* login form stylings */
.sj-page-login #login-content,
.sj-page-signup #login-content {
    background-color: var(--login-form-background-color);
    border-radius: 4px;
    box-shadow: 0 2px 12px 4px rgba(0, 0, 0, .15);
    float: unset;
    left: unset;
    margin: 50px auto;
    max-width: 680px;
    padding: 35px 50px;
    right: unset;
    width: unset;
    margin-top: 50px;
}

/* set width of login box to 100% */
.sj-page-login #login-content .large-6.columns.push-3,
.sj-page-signup #login-content .large-6.columns.push-3 {
    left: 0;
    width: 100%;
}

/* hide default login / sign up banner */
.sj-page-login #login-tab-container,
.sj-page-signup #login-tab-container {
    display: none;
}

/* login page title stylings */
.sj-page-login .sj-text-login-note {
    font-size: var(--login-form-title-font-size);
    line-height: var(--line-height-medium);
    font-weight: var(--font-weight-semibold);
    text-align: center;
    color: var(--login-form-title-color);
    margin-bottom: 10px;
}

/* login page custom signup text stylings */
p.lp-sign-up-text {
    font-size: var(--font-size-med);
    text-align: center;
}

/* email / password field stylings */
.sj-page-login input,
.sj-page-signup input {
    font-size: var(--font-size-med);
}

/* field label stylings */
.sj-page-login label,
.sj-page-signup label {
    font-size: var(--font-size-sm-2);
    margin-bottom: 5px;
    align-self: baseline;
    color: var(--login-form-text-color);
}

/* Sign in / forgot password wrapper stylings */
.sj-page-login #login_form .large-12.columns,
.sj-page-signup #login_form .large-12.columns {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* sign in button stylings */
.sj-page-login button#button-sign-in,
.sj-page-signup button#button-sign-up {
    font-size: 17px;
    margin-right: 0 !important;
    background-color: var(--login-button-bg-color);
    color: var(--login-button-text-color);
    border-radius: var(--border-radius-buttons);
}

/* sign in button hover color */
.sj-page-login button#button-sign-in:hover,
.sj-page-signup button#button-sign-up:hover {
    background-color: var(--login-button-hover-bg-color);
}

/* sign in button hover color */
.sj-page-login button#button-sign-in:active,
.sj-page-signup button#button-sign-up:active {
    background-color: var(--login-button-active-bg-color);
}

/* sign in button focus color */
.sj-page-login button#button-sign-in:focus,
.sj-page-signup button#button-sign-up:focus {
    box-shadow: var(--footer-boxshadow);
}

/* Sign Up Custom Title stylings */
.sj-page-signup h1.signup-custom-header {
    font-size: var(--login-form-title-font-size);
    line-height: var(--line-height-medium);
    margin-bottom: 15px;
    text-align: center;
    color: var(--login-form-title-color);
}

/* Sign Up Custom Paragraph stylings */
.sj-page-signup p.signup-custom-link {
    font-size: 17px;
    margin-bottom: 25px;
    text-align: center;
    color: var(--login-form-text-color);
}

.sj-page-signup p.signup-custom-link a {
    color: var(--login-form-link-color);
}

.sj-page-signup p.signup-custom-link a:hover {
    color: var(--login-form-link-hover-color);
    text-decoration: underline;
}

.sj-page-signup p.signup-custom-link a:active {
    color: var(--login-form-link-active-color);
    text-decoration: underline;
}

.sj-page-signup p.signup-custom-link a:focus {
    box-shadow: var(--focus-boxshadow);
    border-radius: var(--border-radius);
}

/* Hide social media logins */
.socialaccount_providers {
    display: none !important;
}`;
document.head.append(loginSignupStyle);

document.addEventListener('DOMContentLoaded', function() {
    /* login page - add custom link to get to the signup page */
    var loginPage = document.querySelector('.sj-page-login');
    if (loginPage) {
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
    var signUpPage = document.querySelector('.sj-page-signup');

    if (signUpPage) {
        var loginContent = document.getElementById('login-content');
        var signInHref = document.querySelector('.sj-text-sign-in').getAttribute('href');
        var signupPageHeader = document.createElement('h1');
        signupPageHeader.classList.add('signup-custom-header');
        signupPageHeader.textContent = 'Sign up for Administrate Learning Campus';
        var signupPageCustomLink = document.createElement('p');
        signupPageCustomLink.classList.add('signup-custom-link');
        signupPageCustomLink.innerHTML = 'Already have an account? <a href="' + signInHref + '">Sign in.</a>';
        loginContent.insertBefore(signupPageCustomLink, loginContent.firstChild);
        loginContent.insertBefore(signupPageHeader, signupPageCustomLink);
        /* remove social media providers and adjust CSS if they exist */
        document.querySelector('.signup').parentElement.style.width = '100%';
        document.querySelector('.socialaccount_providers').parentElement.style.display = 'none';
    }
});
// END Login / Signup Page Stylings

// START Create Course Separators on Pages
var textAlignment = 'center' /* change value to 'left' for left aligned sections */
/* This section removes the text '[separator]' from the course title */
/* Used so admins can easily identify separator courses in the admin backend */
document.addEventListener('DOMContentLoaded', function() {
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
});

let courseBoxStyle = document.createElement('style');
courseBoxStyle.textContent = ` 
  /* Set font size for separator titles */
  a.coursebox-container[data-tags*="separator"] .coursebox-text {
    font-size: 30px !important;
  }

  /* Set font size for separator sub-titles */
  a.coursebox-container[data-tags*="separator"] .coursebox-text-description {
    font-size: 18px !important;
    margin: 10px 0 0 !important;
  }

  /* remove conflicting standard tile styles */
  a.coursebox-container[data-tags*="separator"]:after {
    display: none !important;
  }

  /* remove all standard course tile styling, add 100% page width */
  a.coursebox-container[data-tags*="separator"] {
    padding: 20px !important;
    width: 87% !important;
    min-height: unset !important;
    background-color: transparent !important;
    box-shadow: none !important;
    pointer-events: none !important;
    border: none !important;
  }

  /* Hide course price/CTA text, tile image. Hide separator courses from search */
  a.coursebox-container[data-tags*="separator"] .storefront-price,
  .search a.coursebox-container[data-tags*="separator"],
  a.coursebox-container[data-tags*="separator"] .coursebox-image,
  a.coursebox-container[data-tags*="separator"] .coursebox-callout {
    display: none !important;
  }`;
document.head.append(courseBoxStyle);
// END Create Course Separators on Pages

// START Nested Header Drop Down links - Add to Global Code Snippet
var HEADER_LINKS = {
    /* start nested header link */
    "Learn": {
      "nestedLinks": {
        "Home": {
          "href": "/",
          "target": "_self",
          /* open in same tab */
        },
        "All Courses": {
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
        },
        "Documentation": {
          "href": "https://support.getadministrate.com/hc/en-us",
          "target": "_blank",
        },
      }
    },
    /* end nested header link */
    /* start static header link */
    "My courses": {
      "href": "/accounts/profile/",
      "target": "_self",
    },
/* end static header link */
}

/* DO NOT MODIFY ANYTHING BELOW THIS LINE */
let headerStyle = document.createElement('style');
headerStyle.textContent =
    ` 
  #header {
    background-color: #ffffff;
    border-bottom: 1px solid var(--gray-300);
    box-shadow: 3px 0 10px rgb(0 0 0 / 20%);
  }

  #header .header-center-img.header-logo-svg {
    height: 25px !important;
  }

  #header .header-nested-wrapper {
    padding: 0;
  }

  #header .header-nested-wrapper .header-nested-links {
    background-color: var(--header-background-color);
    border: var(--header-border);
    box-shadow: var(--header-boxshadow);
    left: 16px;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 100%;
    transform: translateY(-8px);
    transition: .25s ease;
    z-index: 99;
    border-radius: 2px;
  }

  #header .header-link-container {
    height: 100%;
  }

  #header .header-nested-wrapper .header-nested-links .header-link {
    width: 100%;
  }

  #header .header-nested-wrapper .header-nested-links .header-link.active {
    border-left: 2px solid var(--purple-500);
  }

  #header .header-nested-wrapper .header-nested-links .header-link {
    margin: 2px 0!important;
  }

  .header-link {
    color: var(--gray-800);
    white-space: nowrap;
    border-radius: 2px;
    margin: 0 4px!important;
    padding: 8px 12px!important;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .header-link:hover {
    color: var(--purple-500);
    background: var(--purple-100);
  }

  .header-link:focus {
    box-shadow: var(--focus-boxshadow);
  }

  .header-mobile-dropdown {
    background-color: var(--header-background-color);
    top: 45px;
    position: absolute;
  }

  #header .header-link-parent-icon,
  .header-mobile-dropdown .header-link-parent-icon,
  .header-link .header-external-link-icon {
    margin-left: 5px;
  }

  .header-mobile-dropdown .header-link {
    color: var(--header-link-color);
  }

  #header #header-right .login-link {
    background: linear-gradient(90deg, rgba(105, 60, 226, 1) 0%, rgba(98, 73, 228, 1) 32%, rgba(82, 93, 231, 1) 55%, rgba(70, 106, 233, 1) 71%, rgba(70, 106, 233, 1) 100%);
    border-radius: 0px;
    color: var(--header-login-text-color);
    margin-right: 0;
    padding: 12px 24px;
  }

  #header #header-right .login-link:hover {
    background: #6A3CE3 !important;
  }

  .header-mobile-menu-bars {
    color: var(--gray-800);
  }

  .header-link:focus {
    box-shadow: var(--focus-boxshadow);
  }

  @media(max-width: 962px) {
    #header-right .header-mobile-menu {
      display: block;
    }
}`;
document.head.append(headerStyle);

// Do not edit
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
            var o, d = i(t, 2),
              l = d[0],
              s = d[1];
            o = "nestedLinks" in s ? function(e, n) {
              var t = $('<div class="header-nested-wrapper"/>'),
                a = $('<div class="header-nested-links"/>');
              Object.entries(n.nestedLinks).forEach((function(e, n) {
                var t = i(e, 2),
                  o = t[0],
                  d = t[1];
                a.append(r(o, d))
              }));
              var o = n.link ? $('<a class="header-link">'.concat(e, "</a>")).attr(n.link) : '<span class="header-link">'.concat(e, "</span>");
              return t.append(o, a), t
            }(l, s) : r(l, s), e.append(o.clone()), n.append(o.clone())
          })), $(".header-link.login-link").length ? n.append($('<div class="mobile-login-link"/>').html($(".header-link.login-link").clone())) : n.append($("#header-drop .sj-text-my-profile").clone().addClass("header-link"), $('<div class="mobile-login-link"/>').html($("#header-drop .signout-link").clone().addClass("header-link"))), $("#header-right").prepend(e).append('<a class="header-mobile-menu"><i class="header-mobile-menu-bars fa-light fa-bars" title="Mobile menu"></i><i class="header-mobile-menu-close fa-light fa-times" title="Close mobile menu"></i></a>'), $("header").after(n), $(".header-mobile-menu").on("click", (function() {
            $("body").toggleClass("mobile-menu-open")
          })), $(document).on("click", (function(e) {
            $(e.target).closest("header").length || $(e.target).closest(".header-mobile-dropdown").length || $("body").removeClass("mobile-menu-open")
          }))
        }()
      }))
    })()
  })();
$(document).ready(function() {
    /* add down arrow to nested header links for UX clarity */
    $('.header-nested-wrapper > .header-link').each(function() {
        $(this).html($(this).html() + '<i class="header-link-parent-icon fa-regular fa-chevron-down"></i>');
    });
})
// END Nested Header Drop Down links - Add to Global Code Snippet

// START HTML, CSS, and Javascript for Global Custom Footer 
const globalCustomFooterElement = document.createElement('div');
globalCustomFooterElement.innerHTML = `
<div class="footer-background-wrapper">
  <h2 class="sr-only sr-only-focusable">Footer Navigation</h2>
  <div class="footer-top-section">
    <div class="footer-company-info-wrapper">
      <a class="footer-logo-link" href="https://www.getadministrate.com/" aria-label="Administrate main website."><img class="footer-company-logo" alt="Administrate Logo." src="https://www.getadministrate.com/wp-content/themes/administrate/assets/images/logo-rgb-inverted.svg"></a>
      <p class="footer-company-text">Whether you’re running 100s (or 1000s) of trainings across the globe, Administrate is your one-stop shop to plan, schedule, coordinate, and communicate every detail—in person or on Zoom.</p>
    </div>
    <div class="footer-social-wrapper">
      <p class="sr-only sr-only-focusable text">Follow us:</p>
      <ul class="footer-social-list">
        <li class="footer-social-list-item">
          <a class="footer-social-link" href="https://www.linkedin.com/company/administrate/" target="_blank" aria-label="Administrate’s LinkedIn.">
            <i class="footer-social-icon fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li class="footer-social-list-item">
          <a class="footer-social-link" href="https://x.com/GetAdministrate" target="_blank" aria-label="Administrate’s Twitter.">
            <i class="footer-social-icon fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li class="footer-social-list-item">
          <a class="footer-social-link" href="https://www.facebook.com/GetAdministrate" target="_blank" aria-label="Administrate’s Facebook.">
            <i class="footer-social-icon fa-brands fa-facebook"></i>
          </a>
        </li>
        <li class="footer-social-list-item">
          <a class="footer-social-link" href="https://www.youtube.com/user/GetAdministrate" target="_blank" aria-label="Administrate’s YouTube.">
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
document.body.appendChild(globalCustomFooterElement);

let footerStyle = document.createElement('style');
footerStyle.textContent = `
.footer-background-wrapper {
    display: none;
    width: 100%;
    background-color: var(--blue-900);
    justify-content: center;
    padding: 40px 40px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.footer-top-section {
    display: flex;
    flex-direction: column;
    padding: 30px 40px;
}

.footer-company-info-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0;
}

img.footer-company-logo {
    width: auto;
    height: 30px;
    margin-bottom: 16px;
}

.footer-company-text {
    font-size: var(--font-size-sm);
    max-width: 340px;
    color: #ffffff;
    /* text color of footer logo text */
}

.footer-social-list {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.footer-social-list-item {
    display: inline-block;
}

.footer-social-link {
    cursor: pointer;
    display: block;
    width: 32px;
    height: 32px;
    padding: 5px;
    border-radius: 100%;
    overflow: hidden;
    text-decoration: none;
}

.footer-social-icon {
    color: var(--footer-link-color);
    width: 100%;
    height: auto;
    padding: 0;
}

.footer-link-tree-wrapper {
    display: flex;
    gap: 40px 75px;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 30px 40px;
}

.footer-link-column-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-header {
    color: var(--footer-header-color) !important;
    font-size: var(--font-size-sm-2);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.footer-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.footer-list-item {
    padding: 8px 0;
}

.footer-link-column-wrapper .footer-link {
    color: var(--footer-link-color);
}

.footer-link-column-wrapper .footer-link:hover {
    text-decoration: underline;
    color: var(--footer-link-hover-color);
}

.footer-link-tree-wrapper a:focus,
.footer-company-logo:focus {
    box-shadow: var(--focus-boxshadow);
    border-radius: var(--border-radius);
}

#ep-footer {
    color: var(--ep-footer-text-color);
    margin-top: 0px;
    background: var(--ep-footer-background-color);
    border-top: 1px solid var(--ep-footer-border-color);
}

/* mobile view styling */
@media only screen and (max-width: 880px) {
    .footer-background-wrapper,
    .footer-link-tree-wrapper {
        justify-content: flex-start;
        flex-direction: column;
    }

    .footer-link-column-wrapper .footer-header {
        font-size: 15px;
    }

    .footer-link-column-wrapper .footer-link {
        font-size: 14px;
    }
}

@media only screen and (min-width: 875px) {
    .catalog-filters .footer-background-wrapper {
        padding-left: 350px
    }
}`;
document.head.append(footerStyle);

/* when the page loads, use Javascript to append the custom footer to the bottom of the page */
document.addEventListener('DOMContentLoaded', function() {
    /* only add the footer on Skilljar pages, but not in courses/lessons */
    var sjPageCatalog = document.querySelector('.sj-page-catalog');
    /* add footer on login page */
    var sjPageLogin = document.querySelector('.sj-page-login');
    /* add footer on signup page */
    var sjPageSignup = document.querySelector('.sj-page-signup');
    /* get skilljar footer */
    var epFooter = document.getElementById('ep-footer');
    /* get today's date */
    var currentTime = new Date();
    /* return the year (four digits) */
    var epFooterYear = currentTime.getFullYear();
    /* Get EP Footer Copyright <li> */
    var epFooterCopyright = document.querySelector('#ep-footer #footer-left ul li');

    console.log(epFooter, epFooterCopyright);

    if (sjPageCatalog || sjPageLogin || sjPageSignup) {
        var footerBackgroundWrapper = document.querySelector('.footer-background-wrapper');
        if (footerBackgroundWrapper) {
            epFooter.parentNode.insertBefore(footerBackgroundWrapper, epFooter);
            $(epFooterCopyright).text('©' + epFooterYear + ' Administrate Ltd.');
            footerBackgroundWrapper.style.display = 'flex';
        }
    }
});
// END HTML, CSS, and Javascript for Global Custom Footer

// START Remove clickable course tiles on Path Detail Page. Global Code Snippet
let courseTilesStyle = document.createElement('style');
courseTilesStyle.textContent = `
/* path details page - remove pointer events for course tiles */
.sj-page-detail-path .coursebox-container {
    pointer-events: none;
}`;
document.head.append(courseTilesStyle);

// Add pointer event back in to "Show Overview" button IF expanded details path
// view setting is turned ON. Allows the lesson list to be viewed for a course
document.addEventListener("DOMContentLoaded", function() {
    var sjPageDetailPath = document.querySelectorAll('.sj-page-detail-path');
    if (sjPageDetailPath.length > 0) {
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
// END Remove clickable course tiles on Path Detail Page. Global Code Snippet

// START Catalog Lower Banner With Image Home Page Snippet
const catalogLowerBannerElement = document.createElement('div');
catalogLowerBannerElement.innerHTML = `
<div class="catalog-lower-wrapper">
    <div class="catalog-lower-content-wrapper">
        <div class="catalog-lower-text-wrapper">
           <h2 class="catalog-lower-title">Stuck? We’re here to help</h2>
           <p class="catalog-lower-text">Having an issue with a course, webinar, or other content in Administrate Learning Campus? Reach out to the Administrate team.</p>
           <a href="https://www.getadministrate.com/contact-us/" class="catalog-lower-cta-button" target="_blank" rel="noopener">Get in touch</a>
        </div>
    </div>
</div>`;
document.body.appendChild(catalogLowerBannerElement);

let catalogLowerBannerStyle = document.createElement('style');
catalogLowerBannerStyle.textContent = `
/* No need to edit anything below this line */
.catalog-lower-wrapper {
    max-width: 100%;
    color: #ffffff;
    background: linear-gradient(180deg, var(--purple-500) 0%, var(--blue-700) 59%, var(--blue-900) 100%);
    margin-top: 50px;
    display: none;
    justify-content: center;
}

.catalog-lower-content-wrapper {
    gap: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    max-width: 1000px;
    background-color: none;
    box-shadow: none;
    padding: 36px 48px 48px;
}

.catalog-lower-image {
    max-height: 350px;
}

a.catalog-lower-cta-button {
    background-color: var(--input-btn-background-color);
    border-radius: var(--border-radius-buttons);
    color: var(--lower-button-text-color);
    font-size: var(--font-size-med);
    font-weight: var(--font-weight-semibold);
    padding: var(--input-btn-padding);
}

p.catalog-lower-text {
    padding-bottom: 20px;
}

a.catalog-lower-cta-button:hover {
    background-color: #4E1DCD;
}

a.catalog-lower-cta-button:focus {
    box-shadow: var(--focus-boxshadow);
}

h2.catalog-lower-title {
    color: white !important;
}

p.catalog-lower-text {
    color: white !important;
}

@media only screen and (max-width: 1033px) {
    .catalog-lower-image {
        max-height: 200px;
    }

    .catalog-lower-content-wrapper {
        gap: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}`;
document.head.append(catalogLowerBannerStyle);

/* This Javascript checks if we are on the homepage and if so, adds the banner below courses */
document.addEventListener('DOMContentLoaded', function() {
    var catalogRoot = document.querySelector('.sj-page-catalog-root');
    if (catalogRoot) {
        var skilljarContent = document.getElementById('skilljar-content');
        var catalogLowerWrapper = document.querySelector('.catalog-lower-wrapper');
        skilljarContent.parentNode.insertBefore(catalogLowerWrapper, skilljarContent.nextSibling);
        catalogLowerWrapper.style.display = 'flex';
    }
});
// END Catalog Lower Banner With Image Home Page Snippet

// Start Replace Tiles with Links
$('document').ready(function() {
    $('[data-catalog-page="ilt-webinars"]').attr("href", "/calendar");
});
// End Replace Tiles with Links

// Start Back to Catalog
$(document).ready(function() {
    if ($(".sj-page-lesson").length != 0 && $(".next-lesson-button").length == 0) {
        var backButton = '<div id="back-to-catalog"><a href="/" class="small button next-lesson-link"><span>Back to Catalog</span></a></div>';
        $(".full-footer-height-wrapper.align-vertical").prepend(backButton);
    }
});
// End back to catalog