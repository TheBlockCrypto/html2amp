const utils = require('../utils')

const googleanalytics = ($, options) => {
  let config

  if (options.gaConfigPath) {
    config = utils.getRelativeFile(options.gaConfigPath, options.cwd)    
  }

  if (options.gaConfig) {
    config = JSON.stringify(options.gaConfig)
  }

  if (!config) {
    return $
  }

  const $script = $('<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />')
  const $config = $(`<amp-analytics type="googleanalytics" id="tracker-1"><script type="application/json">${config}</script></amp-analytics>`)

  $('body').prepend($config)
  $('head').prepend($script)

  return $
}

module.exports = googleanalytics
