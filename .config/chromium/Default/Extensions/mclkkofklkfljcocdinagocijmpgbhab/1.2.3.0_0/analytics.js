// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview Google analytics code.
 *
 * Defines google analytics dependencies.
 *
 * @author zhangchi@google.com (Chi Zhang)
 */

/**
 * gaq is a global request queue for Google analytics requests.
 */
var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-27169693-1']);

// Always track page views.
_gaq.push(['_trackPageview']);

/**
 * Injects google analytics script into every page that includes analytics.js.
 */
(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  (document.getElementsByTagName('head')[0] ||
   document.getElementsByTagName('body')[0]).appendChild(ga);
})();
