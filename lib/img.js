const utils = require('./utils')

const img = async ($, options = {}) => {
  const imageElements = $('img')
  const promises = imageElements.map(async (i, node) => {
    const element = $(node)

    if (!node.attribs.src && !node.attribs.srcset) {
      element.remove()
      return
    }

    const ampImage = await utils.srcNode(options.cwd, node.attribs)

    if (!ampImage) {
      element.remove()
      return
    }
    
    element.replaceWith(ampImage)
  }).get()
  await Promise.all(promises)
  return $
}

module.exports = img
