const iframe = ($, { iframeAttribs = {}, stripIframe = false }) => {
  $('iframe').each((i, element) => {
    const $iframe = $(element)
    
    if (stripIframe) {
      $iframe.remove()
      return
    }

    const $amp = $('<amp-iframe layout="responsive" />')

    Object.assign(element.attribs, iframeAttribs)
    
    $amp.attr(element.attribs)

    $iframe.replaceWith($amp)
  })
  if ($('amp-iframe').length) {
    $('script[custom-element="amp-iframe"]').remove()
    $('head').prepend('<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>')
  }
  return $
}

module.exports = iframe
