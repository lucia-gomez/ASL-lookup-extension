import _regeneratorRuntime from 'babel-runtime/regenerator';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/first */
/* global chrome */
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { search } from '../search.js';

var History = function (_React$Component) {
  _inherits(History, _React$Component);

  function History(props) {
    _classCallCheck(this, History);

    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, props));

    _this.key = 'search_history';
    _this.maxLength = 100;
    _this.numDisplay = 5;
    _this.state = { open: false, searches: [] };
    _this.click = _this.click.bind(_this);
    _this.search = search;
    _this.init();
    return _this;
  }

  _createClass(History, [{
    key: 'init',
    value: function init() {
      chrome.storage.local.get(this.key, function (hist) {
        if (!hist.search_history) chrome.storage.local.set({ search_history: [] });
      });
    }
  }, {
    key: 'get',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', new Promise(function (resolve, _) {
                  chrome.storage.local.get('search_history', function (hist) {
                    resolve(hist.search_history);
                  });
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get() {
        return _ref.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: 'add',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(query) {
        var hist;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(query.length === 0)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _context2.next = 4;
                return this.get();

              case 4:
                hist = _context2.sent;

                if (hist.length === this.maxLength) hist.shift();
                hist.push(query);
                chrome.storage.local.set(_defineProperty({}, this.key, hist));

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function add(_x) {
        return _ref2.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: 'getSearchesToView',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var hist;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.get();

              case 2:
                hist = _context3.sent;
                return _context3.abrupt('return', hist.slice(Math.max(hist.length - this.numDisplay, 0)).reverse());

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getSearchesToView() {
        return _ref3.apply(this, arguments);
      }

      return getSearchesToView;
    }()
  }, {
    key: 'click',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var _this2 = this;

        var newSearches;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.state.open) {
                  _context4.next = 4;
                  break;
                }

                _context4.t0 = this.state.searches;
                _context4.next = 7;
                break;

              case 4:
                _context4.next = 6;
                return this.getSearchesToView();

              case 6:
                _context4.t0 = _context4.sent;

              case 7:
                newSearches = _context4.t0;

                this.setState(function (prevState) {
                  return {
                    open: !prevState.open,
                    searches: newSearches
                  };
                }, function () {
                  return _this2.growDiv();
                });

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function click() {
        return _ref4.apply(this, arguments);
      }

      return click;
    }()
  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      this.setState({ open: false }, function () {
        return _this3.growDiv();
      });
    }
  }, {
    key: 'growDiv',
    value: function growDiv() {
      var growDiv = document.getElementById('grow');
      if (!this.state.open) {
        growDiv.style.height = 0;
      } else {
        var wrapper = document.getElementById('measuringWrapper');
        growDiv.style.height = wrapper.clientHeight + "px";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { id: 'grow' },
          React.createElement(
            ListGroup,
            { id: 'measuringWrapper' },
            this.state.searches.map(function (search, key) {
              return React.createElement(
                ListGroup.Item,
                { key: key, onClick: function onClick() {
                    document.querySelector('input').value = search;
                    _this4.search(_this4);
                  } },
                search
              );
            })
          )
        ),
        React.createElement('div', { className: 'history-border' })
      );
    }
  }]);

  return History;
}(React.Component);

export default History;