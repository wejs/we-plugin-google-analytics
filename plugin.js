/**
 * We.js google analytics plugin main file
 */

module.exports = function loadPlugin(projectPath, Plugin) {
  const plugin = new Plugin(__dirname);

  // plugin configs
  plugin.setConfigs({
    GA: {
      id: null,
      env: {
        prod: true,
        dev: false,
        test: false
      }
    }
  });

  plugin.addGoogleAnalytcsTag = function addGoogleAnalytcsTag(data) {
    let id = plugin.getGoogleAnalyticsID();

    if (!id) return;

    data.html.text += '<script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){'+
      '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),'+
      'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)'+
      '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');'+
      'ga(\'create\', \''+id+'\', \'auto\');ga(\'send\', \'pageview\');</script>';
  }

  /**
   * Get google analytics id from DB systemSettings or from plugin.we.config.GA.id
   *
   * @return {Number|Null}
   */
  plugin.getGoogleAnalyticsID = function getGoogleAnalyticsID() {
    if (
      plugin.we.systemSettings &&
      plugin.we.systemSettings.googleAnalyticsID
    ) {
      return plugin.we.systemSettings.googleAnalyticsID;
    }

    if (plugin.we.config.GA.env[plugin.we.env] && plugin.we.config.GA.id) {
      return plugin.we.config.GA.id;
    }

    return null;
  }

  plugin.events.on('we-html-body-end', plugin.addGoogleAnalytcsTag);

  return plugin;
};