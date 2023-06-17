(_=>{
  var global = (0,eval)('this')
  global.$ = global.$||{}
  $.DOM = {}
  $.DOM.newElement = function(tagname,attribute,html) {
    var Element = document.createElement(tagname)
    for(const attr in attribute) {
      Element.setAttribute(attr,attribute[attr])
    }
    Element.innerHTML = html
    return Element
  }
  $.DOM.add = function(Element,addto,addtype){
    switch(addtype){
      case 'prev': {
        addto.parentNode.insertBefore(Element,addto)
      }
      case 'firstchild': {
        addto.insertBefore(Element,addto.firstChild)
      }
      case 'appendchild': {
        addto.appendChild(Element)
      }
      case 'next': {
        addto.parentNode.insertBefore(Element,addto.nextSibl8ng)
      }
    }
  }
  $.DOM.selector = function(target) {
    return document.querySelectorAll(target)
  }
})()
