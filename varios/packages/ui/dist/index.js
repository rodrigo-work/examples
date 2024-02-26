'use client'
"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  CounterButton: () => CounterButton,
  Link: () => Link
});
module.exports = __toCommonJS(src_exports);

// src/Link/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Link(_a) {
  var _b = _a, {
    children,
    href,
    newTab
  } = _b, other = __objRest(_b, [
    "children",
    "href",
    "newTab"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "a",
    __spreadProps(__spreadValues({
      href,
      rel: newTab ? "noreferrer" : void 0,
      target: newTab ? "_blank" : void 0
    }, other), {
      children
    })
  );
}

// src/CounterButton/index.tsx
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function CounterButton() {
  const [count, setCount] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      style: {
        background: `rgba(0,0,0,0.05)`,
        borderRadius: `8px`,
        padding: "1.5rem",
        fontWeight: 500
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { style: { margin: "0 0 1.5rem 0" }, children: [
          "This component is from",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "code",
            {
              style: {
                padding: "0.2rem 0.3rem",
                background: `rgba(0,0,0,0.1)`,
                borderRadius: "0.25rem"
              },
              children: "ui"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            onClick: () => {
              setCount((c) => c + 1);
            },
            style: {
              background: "black",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              display: "inline-block",
              cursor: "pointer"
            },
            type: "button",
            children: [
              "Count: ",
              count
            ]
          }
        ) })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CounterButton,
  Link
});
