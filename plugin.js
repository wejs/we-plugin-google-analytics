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

    data.html.text +=  `<script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}');
      </script>`;
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

  plugin.events.on('we-html-head-start', plugin.addGoogleAnalytcsTag);

  return plugin;
};