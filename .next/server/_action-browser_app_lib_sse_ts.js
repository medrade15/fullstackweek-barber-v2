"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_action-browser_app_lib_sse_ts";
exports.ids = ["_action-browser_app_lib_sse_ts"];
exports.modules = {

/***/ "(action-browser)/./app/lib/sse.ts":
/*!************************!*\
  !*** ./app/lib/sse.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   publish: () => (/* binding */ publish),\n/* harmony export */   subscribe: () => (/* binding */ subscribe),\n/* harmony export */   unsubscribe: () => (/* binding */ unsubscribe)\n/* harmony export */ });\nconst clients = new Map();\nfunction subscribe(id, cb) {\n    clients.set(id, cb);\n}\nfunction unsubscribe(id) {\n    clients.delete(id);\n}\nfunction publish(event, payload) {\n    const message = {\n        event,\n        payload,\n        ts: Date.now()\n    };\n    const callbacks = Array.from(clients.values());\n    for (const cb of callbacks){\n        try {\n            cb(message);\n        } catch (e) {\n        // ignore\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL2FwcC9saWIvc3NlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE1BQU1BLFVBQVUsSUFBSUM7QUFFYixTQUFTQyxVQUFVQyxFQUFVLEVBQUVDLEVBQWtCO0lBQ3RESixRQUFRSyxHQUFHLENBQUNGLElBQUlDO0FBQ2xCO0FBRU8sU0FBU0UsWUFBWUgsRUFBVTtJQUNwQ0gsUUFBUU8sTUFBTSxDQUFDSjtBQUNqQjtBQUVPLFNBQVNLLFFBQVFDLEtBQWEsRUFBRUMsT0FBWTtJQUNqRCxNQUFNQyxVQUFVO1FBQUVGO1FBQU9DO1FBQVNFLElBQUlDLEtBQUtDLEdBQUc7SUFBRztJQUNqRCxNQUFNQyxZQUFZQyxNQUFNQyxJQUFJLENBQUNqQixRQUFRa0IsTUFBTTtJQUMzQyxLQUFLLE1BQU1kLE1BQU1XLFVBQVc7UUFDMUIsSUFBSTtZQUNGWCxHQUFHTztRQUNMLEVBQUUsT0FBT1EsR0FBRztRQUNWLFNBQVM7UUFDWDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3ctYmFyYmVyLy4vYXBwL2xpYi9zc2UudHM/NTg3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIENsaWVudENhbGxiYWNrID0gKGRhdGE6IGFueSkgPT4gdm9pZFxuXG5jb25zdCBjbGllbnRzID0gbmV3IE1hcDxudW1iZXIsIENsaWVudENhbGxiYWNrPigpXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUoaWQ6IG51bWJlciwgY2I6IENsaWVudENhbGxiYWNrKSB7XG4gIGNsaWVudHMuc2V0KGlkLCBjYilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpIHtcbiAgY2xpZW50cy5kZWxldGUoaWQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50OiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICBjb25zdCBtZXNzYWdlID0geyBldmVudCwgcGF5bG9hZCwgdHM6IERhdGUubm93KCkgfVxuICBjb25zdCBjYWxsYmFja3MgPSBBcnJheS5mcm9tKGNsaWVudHMudmFsdWVzKCkpXG4gIGZvciAoY29uc3QgY2Igb2YgY2FsbGJhY2tzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNiKG1lc3NhZ2UpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gaWdub3JlXG4gICAgfVxuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJjbGllbnRzIiwiTWFwIiwic3Vic2NyaWJlIiwiaWQiLCJjYiIsInNldCIsInVuc3Vic2NyaWJlIiwiZGVsZXRlIiwicHVibGlzaCIsImV2ZW50IiwicGF5bG9hZCIsIm1lc3NhZ2UiLCJ0cyIsIkRhdGUiLCJub3ciLCJjYWxsYmFja3MiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./app/lib/sse.ts\n");

/***/ })

};
;