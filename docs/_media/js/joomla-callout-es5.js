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
  var JoomlaCalloutElement =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(JoomlaCalloutElement, _HTMLElement);

    function JoomlaCalloutElement() {
      _classCallCheck(this, JoomlaCalloutElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(JoomlaCalloutElement).apply(this, arguments));
    }

    _createClass(JoomlaCalloutElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this = this;

        if (!this.position || this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1) {
          this.position = 'right';
        }

        this.setAttribute('aria-labelledby', this["for"].substring(1));
        var button = document.querySelector(this["for"]);
        var innerLinks = this.querySelectorAll('a');

        if (!button.id) {
          return;
        }

        if (this.hasAttribute('dismiss')) {
          this.appendCloseButton();
        }

        button.setAttribute('aria-haspopup', true);
        button.setAttribute('aria-expanded', false);
        window.addEventListener('scroll', function (e) {
          e.preventDefault();

          if (_this.hasAttribute('expanded')) {
            var buttonRect = button.getBoundingClientRect();
            var space1 = 5;

            var calloutRect = _this.getBoundingClientRect();

            var copyPosition = _this.checkPosition(_this.position, buttonRect, calloutRect);

            _this.calloutPosition(copyPosition, buttonRect, calloutRect, space1);
          }
        });
        button.addEventListener('click', function (event) {
          if (_this.hasAttribute('expanded')) {
            _this.removeAttribute('expanded');

            event.target.setAttribute('aria-expanded', false);
          } else {
            _this.setAttribute('expanded', '');

            event.target.setAttribute('aria-expanded', true);
            var buttonRect = button.getBoundingClientRect();
            var space = 5;

            var calloutRect = _this.getBoundingClientRect();

            var copyPosition = _this.checkPosition(_this.position, buttonRect, calloutRect);

            _this.calloutPosition(copyPosition, buttonRect, calloutRect, space);
          }

          document.addEventListener('click', function (evt) {
            if (evt.target !== button && evt.target !== _this) {
              if (!_this.findAncestor(evt.target, 'joomla-callout')) {
                _this.close();
              }
            }
          });
          innerLinks.forEach(function (innerLink) {
            innerLink.addEventListener('click', function () {
              _this.close();
            });
          });
        });
      }
    }, {
      key: "checkPosition",
      value: function checkPosition(currentPosition, buttonRect, calloutRect) {
        if (currentPosition === 'bottom' && buttonRect.top + calloutRect.height > window.innerHeight) {
          return 'top';
        }

        if (currentPosition === 'top' && buttonRect.top < buttonRect.height + calloutRect.height) {
          return 'bottom';
        }

        if (currentPosition === 'right' && buttonRect.right + calloutRect.width > window.innerWidth) {
          return 'left';
        }

        if (currentPosition === 'left' && buttonRect.width + calloutRect.width > buttonRect.right) {
          return 'right';
        }

        return currentPosition;
      }
    }, {
      key: "calloutPosition",
      value: function calloutPosition(copyPosition, buttonRect, calloutRect, space) {
        switch (copyPosition) {
          case 'top':
            this.style.top = "".concat(Math.round(buttonRect.top + window.scrollY - (calloutRect.height + space)), "px");
            this.style.left = "".concat(Math.round(buttonRect.left + window.scrollX - buttonRect.width), "px");
            break;

          case 'bottom':
            this.style.top = "".concat(Math.round(buttonRect.bottom + window.scrollY) + space, "px");
            this.style.left = "".concat(Math.round(buttonRect.left + window.scrollX - buttonRect.width), "px");
            break;

          case 'left':
            this.style.left = "".concat(Math.round(buttonRect.left + window.scrollX - (calloutRect.width + space)), "px");
            this.style.top = "".concat(Math.round(buttonRect.top + window.scrollY - calloutRect.height / 2), "px");
            break;

          default:
            this.style.left = "".concat(Math.round(buttonRect.left + window.scrollX + (buttonRect.width + space)), "px");
            this.style.top = "".concat(Math.round(buttonRect.top + window.scrollY - calloutRect.height / 2), "px");
            break;
        }
      }
      /*eslint-disable */

      /* Method to dispatch events */

    }, {
      key: "dispatchCustomEvent",
      value: function dispatchCustomEvent(eventName) {
        var OriginalCustomEvent = new CustomEvent(eventName);
        OriginalCustomEvent.relatedTarget = this;
        this.dispatchEvent(OriginalCustomEvent);
        this.removeEventListener(eventName, this);
      }
      /* eslint-enable */

    }, {
      key: "close",
      value: function close() {
        var button = document.querySelector("#".concat(this.getAttribute('aria-labelledby')));
        this.removeAttribute('expanded');
        button.setAttribute('aria-expanded', false);
      }
    }, {
      key: "appendCloseButton",
      value: function appendCloseButton() {
        var self = this;
        var closeButton = document.createElement('button');

        if (this.hasAttribute('dismiss')) {
          closeButton.classList.add('joomla-callout--close');
          closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';
          closeButton.setAttribute('aria-label', this.getText('JCLOSE', 'Close'));
        }

        if (this.firstChild) {
          this.insertBefore(closeButton, this.firstChild);
        } else {
          this.appendChild(closeButton);
        }
        /* Add the required listener */


        if (closeButton) {
          closeButton.addEventListener('click', function () {
            self.dispatchCustomEvent('joomla.alert.buttonClicked');
            self.close();
          });
        }
      }
      /* eslint-disable */

    }, {
      key: "findAncestor",
      value: function findAncestor(el, tagName) {
        while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName) {
          ;
        }

        return el;
      }
      /* Method to get the translated text */

    }, {
      key: "getText",
      value: function getText(str, fallback) {
        // TODO: Remove coupling to Joomla CMS Core JS here

        /* eslint-disable-next-line no-undef */
        return window.Joomla && Joomla.JText && Joomla.JText._ && typeof Joomla.JText._ === 'function' && Joomla.JText._(str) ? Joomla.JText._(str) : fallback;
      }
    }, {
      key: "for",
      get: function get() {
        return this.getAttribute('for');
      },
      set: function set(value) {
        return this.setAttribute('for', value);
      }
    }, {
      key: "dismiss",
      get: function get() {
        return this.getAttribute('dismiss');
      }
    }, {
      key: "position",
      get: function get() {
        return this.getAttribute('position');
      },
      set: function set(value) {
        return this.setAttribute('position', value);
      }
    }], [{
      key: "observedAttributes",

      /* Attributes to monitor */
      get: function get() {
        return ['for', 'dismiss', 'position'];
      }
    }]);

    return JoomlaCalloutElement;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('joomla-callout', JoomlaCalloutElement);
})();

},{}]},{},[1]);
