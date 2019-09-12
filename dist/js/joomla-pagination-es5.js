(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

(function () {
  var joomlaPagination =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(joomlaPagination, _HTMLElement);

    function joomlaPagination() {
      _classCallCheck(this, joomlaPagination);

      return _possibleConstructorReturn(this, _getPrototypeOf(joomlaPagination).apply(this, arguments));
    }

    _createClass(joomlaPagination, [{
      key: "connectedCallback",

      /* Lifecycle, element appended to the DOM */
      value: function connectedCallback() {
        var self = this;
        var nav = document.createElement('nav');
        var paginationList = document.createElement('ul');
        var singleLi = document.createElement('li');
        var minimizeWrapper = document.createElement('div');
        var minimizeItemsWrapper = document.createElement('div');
        var toggleButton = document.createElement('span');
        var minimizeList = document.createElement('ul');
        toggleButton.classList.add('items-toggler');
        toggleButton.innerHTML = '...';
        singleLi.classList.add('minimize-list');
        minimizeItemsWrapper.classList.add('minimize-items-wrapper');
        minimizeWrapper.appendChild(toggleButton);
        minimizeWrapper.appendChild(minimizeItemsWrapper);
        minimizeWrapper.classList.add('minimize-items');
        toggleButton.addEventListener('click', function () {
          minimizeItemsWrapper.classList.toggle('active');
        });
        /* item manipulate */

        var items = _toConsumableArray(this.querySelectorAll('.pagination-link'));
        /* has arrow */


        var pageNavs = _toConsumableArray(this.querySelectorAll('.has-arrow'));

        var totalArrowWidth = 0;

        var arrowFun = function arrowFun() {
          if (pageNavs.length > 0) {
            pageNavs.forEach(function (item) {
              if (item.classList.contains('first-page')) {
                nav.prepend(item);
                totalArrowWidth += item.offsetWidth;
              }

              if (item.classList.contains('next-page')) {
                paginationList.before(item);
                totalArrowWidth += item.offsetWidth;
              }

              if (item.classList.contains('prev-page')) {
                paginationList.after(item);
                totalArrowWidth += item.offsetWidth;
              }

              if (item.classList.contains('last-page')) {
                nav.append(item);
                totalArrowWidth += item.offsetWidth;
              }
            });
          }
        };
        /* make full pagination */


        items.forEach(function (item) {
          var createItem = document.createElement('li');
          var createLink = document.createElement('a');
          createItem.classList.add('pagination-item');

          if (item.getAttribute('class')) {
            createLink.className = item.getAttribute('class');
          }

          if (item.getAttribute('activeClass')) {
            createLink.className += " ".concat(item.getAttribute('activeClass'));
          }

          createLink.setAttribute('href', item.getAttribute('href'));
          createLink.setAttribute('value', item.getAttribute('value'));
          createLink.innerHTML = item.getAttribute('text');
          createItem.appendChild(createLink);
          paginationList.append(createItem);
          item.parentNode.removeChild(item);
        });
        nav.append(paginationList);
        self.append(nav);
        /* store items */

        var paginationItems = paginationList;
        var allItems = Array.from(paginationItems.children);
        /* minimize items */

        var minimizeItemsFun = function minimizeItemsFun() {
          if (allItems.length > 0) {
            paginationList.innerHTML = '';
            var filterItems = allItems.filter(function (item, key) {
              return key < allItems.length - 1;
            });
            singleLi.prepend(minimizeWrapper);

            for (var i = 0; i < filterItems.length; i++) {
              if (paginationList.offsetWidth + totalArrowWidth + 100 < nav.offsetWidth) {
                paginationList.append(filterItems[i]);
              } else {
                minimizeList.append(filterItems[i]);
              }
            }

            minimizeItemsWrapper.append(minimizeList);
            paginationList.append(singleLi);
            paginationList.append(allItems[allItems.length - 1]);
            /* when responsive works */

            self.setAttribute('responsive', true);
          }
        };
        /* init arrow function */


        arrowFun();
        /* init minimizeItems function */

        var paginationWidth = paginationList.offsetWidth + totalArrowWidth + 100;
        var parentWidth = paginationList.parentElement.offsetWidth;

        if (paginationWidth > parentWidth) {
          minimizeItemsFun();
        }
        /* check on reisze */


        window.addEventListener('resize', function () {
          setTimeout(function () {
            if (paginationList.offsetWidth + totalArrowWidth + 100 > nav.offsetWidth) {
              minimizeItemsFun();
            } else if (paginationList.offsetWidth + totalArrowWidth + 100 < nav.offsetWidth) {
              if (self.getAttribute('responsive')) {
                if (allItems.length > 0) {
                  var upated = Array.from(minimizeList.children);

                  if (upated.length !== 0) {
                    if (paginationList.offsetWidth + totalArrowWidth + 100 < nav.offsetWidth) {
                      for (var i = 0; i < upated.length; i++) {
                        if (paginationList.offsetWidth + totalArrowWidth + 100 < nav.offsetWidth) {
                          paginationList.append(upated[i]);
                        }
                      }

                      paginationList.append(self.querySelector('.minimize-list'));
                      paginationList.append(allItems[allItems.length - 1]);
                    }
                  }
                }
              }
            }

            setTimeout(function () {
              if (minimizeList.children.length === 0) {
                singleLi.remove();
                self.setAttribute('responsive', false);
              }
            }, 200);
          }, 300);
        });
      }
    }]);

    return joomlaPagination;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('joomla-pagination', joomlaPagination);
})();

},{}]},{},[1]);
