/**
 * We.js messenger plugin config
 */

module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);

  // set plugin configs
  plugin.setConfigs({
    GA: {
      id: null,
      enableEmberjs: true,
      env: {
        prod: true,
        dev: false,
        test: false
      }
    },

    template: {
      helpers: {
        'google-analytics': __dirname + '/server/template-helpers/google-analytics.js'
      }
    }
  });
  // plugin routes
  // plugin.setRoutes();

  return plugin;
};