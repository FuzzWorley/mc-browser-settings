const gon = (function createGon () {
  const gonObject = {}
  const dataSet = Object.entries(document.getElementsByTagName('head')[0].dataset)
  dataSet.forEach(([key, val]) => {
    try {
      gonObject[key] = JSON.parse(val)
    } catch (e) {
      gonObject[key] = val
    }
  })

  return gonObject
}())

const setBrowserInfo = (function setBrowserInfo () {
  const IS_IE9_CLASS = 'ie9'
  const IS_NOT_IE9_CLASS = 'no-ie9'
  const IS_MOBILE_CLASS = 'mobile-device'
  const IS_NOT_MOBILE_CLASS = 'no-mobile-device'
  const IS_TABLET = 'tablet'
  const IS_NOT_TABLET = 'no-tablet'
  const IS_IE = 'ie'
  const IS_NOT_IE = 'no-ie'

  const addClassToDocument = function addClassNameToDocument (className) {
    document.documentElement.className += ` ${className}`
  }

  const setHtmlClass = function setHtmlClass (bool, truVal, falVal) {
    let className
    if (bool === true) {
      className = truVal
    } else {
      className = falVal
    }
    addClassToDocument(className)
  }

  setHtmlClass(false, IS_IE9_CLASS, IS_NOT_IE9_CLASS)
  setHtmlClass(gon.browserMobile, IS_MOBILE_CLASS, IS_NOT_MOBILE_CLASS)
  setHtmlClass(gon.browserTablet, IS_TABLET, IS_NOT_TABLET)
  setHtmlClass(gon.browserIe, IS_IE, IS_NOT_IE)
  setHtmlClass(gon.browserIe11, 'ie11', 'no-ie11')
}())

export default gon
