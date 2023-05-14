(global => {
  function isArray(obj) {
    return Object.prototype.toString.call(obj) == '[object Array]';
  }
  const id = function (text) {
    return document.getElementById((isArray(text)) ? text[0]: text)
  }
  const log = function (text) {
    console.log((isArray(text)) ? text[0]: text)
  }
  const firsttext = function (text) {
    return (((isArray(text)) ? text[0]: text).slice(0, 1))
  }
  const lasttext = function (text) {
    return (((isArray(text)) ? text[0]: text).slice(0, -1))
  }
  const html = function (target, changevalue) {
    return new html.prototype.init(target, changevalue)
  }
  const tag = function (name) {
    return document.getElementsByTagName(isArray(name) ? name[0]: name)
  }
  const name = function (name) {
    return document.getElementsByName(isArray(name) ? name[0]: name)
  }
  const text = function (target, changevalue) {
    if (changevalue) {
      (isArray(target) ? target[0]: target).textContent = changevalue
      return
    }
    return (isArray(target) ? target[0]: target).textContent
  }
  const load = function (func) {
    global.addEventListener('load', func)
  }
  const DOMload = function(func) {
    global.addEventListener('DOMcontentloaded', func)
  }
  const max = function (num1) {
    return function (num2) {
      return Math.max((+(isArray(num1) ? num1[0]: num1)), (+(isArray(num2) ? num2[0]: num2)))
    }
  }
  const min = function (num1) {
    return function (num2) {
      return Math.min((+(isArray(num1) ? num1[0]: num1)), (+(isArray(num2) ? num2[0]: num2)))
    }
  }
  const factorial = function (num) {
    return (1 >= (+(num))) ? (num == 0) ? 1: +(num): +(num)*factorial((+(num)) - 1)
  }
  const floor = function (num) {
    return ~~(+num)
  }
  const round = function (num) {
    return (+num) + .5|0
  }
  const exponentiation = function (num) {
    return function(num2) {
      return (+num) ** (+num2)
    }
  }
  const cell = function (num) {
    return ((~~(+num))+(((Number.isInteger(+num))?(0): ((+num) >= 0)?(1): (-1))))
  }
  const ismultiple = function (num1) {
    return function (num2) {
      return !((+num1)%(+num2))
    }
  }
  const isodd = function (num) {
    return !!((+num)%2)
  }
  const iseven = function (num) {
    return ismultiple(+num)`2`
  }
  isnull = function (target) {
    const test = target ?? true
    return test == target?false: test
  }
  const divisor = function (num0) {
    const num = (+num0)
    var results = [];
    for (var i = 0; i++ < num;)(num%i) || results.push(i)
    return results
  }
  const each = function (array, func, final) {
    for (var i = 0; i < array.length; i++) func(i, array[i])
    isnull(final) || final(array.length)
  }
  const isprime = function (num) {
    return divisor(num).length == 2
  }
  const repeat = function (func, num) {
    for (let i = 0; i++ < num;)func(i)
  }
  const prompt = function (str) {
    return function (defaultstr) {
      prompt(isArray(str)?str[0]: str, isArray(defaultstr)?defaultstr[0]: defaultstr)
    }
  }
  const Talert = function (str) {
    alert(isArray(str)?str[0]: str)
  }
  const Tconfirm = function (str) {
    confirm(isArray(str)?str[0]: str)
  }
  const setcss = function (target, obj) {
    Object.keys(obj).forEach(function (val) {
      target.style[val] = obj[val]
    })
  }
  const version = 'v1.0.0'
  const newElement = function (tagname, Attr, html, addto, place) {
    let Element = document.createElement(tagname)
    html(Element, html)
    Object.keys(Attr).forEach(function(val) {
      Element[val] = Attr[val]
    })
    (place == "after" || place == "before") && addto[place](Element)
  }
  const or = function(...bools) {
    for (i of bools) {
      if (i) {
        var result = !0
        break
      }
    }
    return (result ??= !1)
  }
  const and = function(...bools) {
    for (i of bools) {
      if (!i) {
        var result = !1
        break
      }
    }
    return (result ??= !0)
  }
  const reversestring = function(str) {
    str = isArray(str)?str[0]: str
    return str.split``.reverse().join``
  }
  const $ = function(selector) {
    this.elmtarget = document.querySelectorAll(selector)
    var obj = {
      onEvent: function(...option) {
        if (typeof option[0] == "Object") {
          Object.keys(option[0]).forEach(function(val) {
            if (val.includes` `) {
              each(val.split` `, function(_, item) {
                this.elmtarget.addEventListener(item, option[0][val])
              })
            } else {
              this.elmtarget.addEventListener(val, option[0][val])
            }
          })
        } else {
          if (option[0].includes` `) {
            each(option[0].split` `, function(_, item) {
              this.elmtarget.addEventListener(item, option[1])
            })
          } else {
            this.elmtarget.addEventListener(option[0], option[1])
          }
        }
      },
      offEvent: function(eventname, funcname) {
        if (eventname.includes` `) {
          each(eventname.split` `, function(_, item) {
            this.elmtarget.removeEventListener(item, funcname)
          })
        } else {
          this.elmtarget.removeEventListener(eventname, funcname)
        }
      },
      addclass: function(classname) {
        if (classname.includes` `) {
          each(classname.split` `, function(_, item) {
            this.elmtarget.classList.add(item)
          })
        } else {
          this.elmtarget.classList.add(classname)
        }
      },
      removeclass: function(classname) {
        if (classname.includes` `) {
          each(classname.split` `, function(_, item) {
            this.elmtarget.classList.remove(item)
          })
        } else {
          this.elmtarget.classList.remove(classname)
        }
      },
      toggleclass: function(classname) {
        if (classname.includes` `) {
          each(classname.split` `, function(_, item) {
            this.elmtarget.classList.toggle(item)
          })
        } else {
          this.elmtarget.classList.toggle(classname)
        }
      }
    }
    return obj
  }
  html.prototype = {
    init: function (target, changevalue) {
      this._elmtarget = (isArray(target) ? target[0]: target)
      if (changevalue) {
        (isArray(target) ? target[0]: target).innerHTML = changevalue
        return
      }
    },
    val: function (changevalue) {
      if (isnull(changevalue)) {
        return this._elmtarget.getAttribute('value') ?? undefined
      } else {
        this._elmtarget.setAttribute('value', changevalue)
        return this
      }
    },
    id: function (changevalue) {
      if (isnull(changevalue)) {
        return this._elmtarget.getAttribute('id') ?? undefined
      } else {
        this._elmtarget.setAttribute('id', changevalue)
        return this
      }
    },
    class: function (changevalue) {
      if (isnull(changevalue)) {
        return this._elmtarget.getAttribute('class') ?? undefined
      } else {
        this._elmtarget.setAttribute('class', changevalue)
        return this
      }
    },
    Attr: function (attr, changevalue) {
      if (isnull(changevalue)) {
        return this._elmtarget.getAttribute(attr) ?? undefined
      } else {
        this._elmtarget.setAttribute(attr, changevalue)
        return this
      }
    }
  }
  html.prototype.init.prototype = html.prototype;
  export {
    id,
    log,
    firsttext,
    lasttext,
    html,
    tag,
    name,
    text,
    load,
    DOMload,
    max,
    min,
    factorial,
    floor,
    round,
    exponentiation,
    cell,
    ismultiple,
    isodd,
    iseven,
    isnull,
    divisor,
    each,
    isprime,
    repeat,
    prompt,
    Talert,
    Tconfirm,
    setcss,
    version,
    newElement,
    or,
    and,
    reversestring,
    $
  }
})(window)
