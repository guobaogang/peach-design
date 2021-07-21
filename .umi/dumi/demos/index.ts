// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'button-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("D:/test/peach-design3/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _react = _interopRequireDefault(await import("react"));

    var _peachDesign = await import("peach-design");

    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello dumi!", /*#__PURE__*/_react["default"].createElement(_peachDesign.Button, null));
    };

    return _default;
  }
}),
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { Button } from 'peach-design';\n\nexport default () => <h1>Hello dumi!<Button></Button></h1>;"}},"dependencies":{"react":{"version":"17.0.2"},"peach-design":{"version":"0.0.29"}},"identifier":"button-demo"},
  },
  'checkbox-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("D:/test/peach-design3/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _react = _interopRequireDefault(await import("react"));

    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello dumi2!");
    };

    return _default;
  }
}),
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nexport default () => <h1>Hello dumi2!</h1>;"}},"dependencies":{"react":{"version":"17.0.2"}},"identifier":"checkbox-demo"},
  },
  'input-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("D:/test/peach-design3/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _react = _interopRequireDefault(await import("react"));

    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement("h1", {
        style: {
          position: 'fixed',
          top: 0,
          left: 0
        }
      }, "\u6211\u4E0D\u4F1A\u98DE\u51FA\u53BB");
    };

    return _default;
  }
}),
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nexport default () => <h1 style={{ position: 'fixed', top: 0, left: 0 }}>我不会飞出去</h1>;"}},"dependencies":{"react":{"version":"17.0.2"}},"transform":true,"identifier":"input-demo"},
  },
};
