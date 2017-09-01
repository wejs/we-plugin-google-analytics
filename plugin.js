/**
 * We.js google analytics plugin main file
 */

module.exports = function loadPlugin(projectPath, Plugin) {
  const plugin = new Plugin(__dirname);

  // set plugin configs
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
    if (!data.we.config.GA.env[data.we.env]|| !data.we.config.GA.id) return;

    data.html.text += '<script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){'+
      '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),'+
      'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)'+
      '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');'+
      'ga(\'create\', \''+data.we.config.GA.id+'\', \'auto\');ga(\'send\', \'pageview\');</script>';
  }

  plugin.events.on('we-html-body-end', plugin.addGoogleAnalytcsTag);

  return plugin;
};