/**
 *  Render google analytics tags
 *
 * {{{google-analytics}}}
 */

module.exports = function(we) {
  return function renderJavascriptTags() {
    var html;

    if (!we.config.GA.id) {
      we.log.warn('required we.config.GA.id config not found. configure we.config.GA.id in your project with you google analytics ID');
      return '';
    }

    if (!we.config.GA.env[we.env]) return '';

    html += '<script type="text/javascript">' +

      '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){'+
      '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),'+
      'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)'+
      '})(window,document,"script","//www.google-analytics.com/analytics.js","ga");'+
      'ga("create", "'+ we.config.GA.id +'", "auto"); ga("send", "pageview");';

    // we.js ember.js config
    if (we.config.GA.enableEmberjs) {
      html += '$(function() {'+
        'App.Router.reopen({' +
          'notifyGoogleAnalytics: function() {'+
            'if (!window.ga) return;'+
            'return window.ga("send", "pageview", { "page": this.get("url"), "title": this.get("url")});'+
          '}.on("didTransition"),'+
        '});'+
      '});';
    }

    html += '</script>';

    return html;
  }
}