const video = ($, { videoAttribs = {}, stripvideo = false }) => {
  $('video').each((i, element) => {
    const $video = $(element)
    
    if (stripvideo) {
      $video.remove()
      return
    }


    const $amp = $('<amp-video layout="responsive" />')

    Object.assign(element.attribs, videoAttribs)
    
    if (!element.attribs.src) {
      $video.find('source').each((i, source) => $amp.append(source))
    }
    
    $video.parent().css({width: '100%'})

    $amp.attr(element.attribs)

    $video.replaceWith($amp)
  })
  if ($('amp-video').length) {
    $('script[custom-element="amp-video"]').remove()
    $('head').prepend('<script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>')
  }
  return $
}

module.exports = video

//https://cdn.ampproject.org/v0/amp-video-0.1.js