var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/first */
import React from 'react';

var ResultList = function (_React$Component) {
  _inherits(ResultList, _React$Component);

  function ResultList(props) {
    _classCallCheck(this, ResultList);

    var _this = _possibleConstructorReturn(this, (ResultList.__proto__ || Object.getPrototypeOf(ResultList)).call(this, props));

    _this.state = { children: [], done: false };
    return _this;
  }

  _createClass(ResultList, [{
    key: 'addChild',
    value: function addChild(child) {
      this.setState(function (prevState) {
        return {
          children: [].concat(_toConsumableArray(prevState.children), [child])
        };
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState({ children: [], done: false });
    }
  }, {
    key: 'finishedLoading',
    value: function finishedLoading() {
      this.setState({ done: true });
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.state.children.length === 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var spinner = React.createElement(
        'p',
        null,
        'Loading...'
      );
      var text = React.createElement(
        'p',
        { id: 'no-results' },
        'No results'
      );
      return React.createElement(
        'div',
        { id: 'results' },
        !this.state.done && this.isEmpty() ? spinner : null,
        !this.isEmpty() ? React.createElement(
          'div',
          null,
          this.state.children
        ) : null,
        this.state.done && this.isEmpty() ? text : null
      );
    }
  }]);

  return ResultList;
}(React.Component);

export default ResultList;