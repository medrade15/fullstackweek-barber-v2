"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Ffernando-santos%2FSecret%C3%A1ria%2Fclone-barber-v2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Ffernando-santos%2FSecret%C3%A1ria%2Fclone-barber-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Ffernando-santos%2FSecret%C3%A1ria%2Fclone-barber-v2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Ffernando-santos%2FSecret%C3%A1ria%2Fclone-barber-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_fernando_santos_Secret_ria_clone_barber_v2_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/fernando-santos/Secretária/clone-barber-v2/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_fernando_santos_Secret_ria_clone_barber_v2_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGZmVybmFuZG8tc2FudG9zJTJGU2VjcmV0JUMzJUExcmlhJTJGY2xvbmUtYmFyYmVyLXYyJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGZmVybmFuZG8tc2FudG9zJTJGU2VjcmV0JUMzJUExcmlhJTJGY2xvbmUtYmFyYmVyLXYyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvQztBQUNqSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zzdy1iYXJiZXIvPzg5MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvZmVybmFuZG8tc2FudG9zL1NlY3JldMOhcmlhL2Nsb25lLWJhcmJlci12Mi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9mZXJuYW5kby1zYW50b3MvU2VjcmV0w6FyaWEvY2xvbmUtYmFyYmVyLXYyL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Ffernando-santos%2FSecret%C3%A1ria%2Fclone-barber-v2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Ffernando-santos%2FSecret%C3%A1ria%2Fclone-barber-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/_lib/auth.ts":
/*!**************************!*\
  !*** ./app/_lib/auth.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./app/_lib/prisma.ts\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\n\n\n\nconst providers = [];\n// add Google provider if env vars present (single auth method)\nif (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {\n    providers.push((0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        clientId: process.env.GOOGLE_CLIENT_ID,\n        clientSecret: process.env.GOOGLE_CLIENT_SECRET\n    }));\n}\n// Admin credentials provider (email + password)\nproviders.push((0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    name: \"Admin Credentials\",\n    credentials: {\n        email: {\n            label: \"Email\",\n            type: \"text\"\n        },\n        password: {\n            label: \"Password\",\n            type: \"password\"\n        }\n    },\n    async authorize (credentials) {\n        if (!credentials?.email || !credentials?.password) return null;\n        const user = await _prisma__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n            where: {\n                email: credentials.email\n            }\n        });\n        if (!user || !user.hashedPassword) return null;\n        const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].compare(credentials.password, user.hashedPassword);\n        if (!isValid) return null;\n        // ensure admin role\n        return user;\n    }\n}));\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_1__.db),\n    providers,\n    // Use JWT strategy so middleware (withAuth) can read token and role without extra fetches\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            // include id and role in token at sign-in\n            if (user) {\n                try {\n                    // prefer explicit fields, but fall back to DB lookup for role\n                    if (user.id) {\n                        token.id = user.id;\n                    }\n                    // try to read simple role safely; if it fails, fetch from DB\n                    try {\n                        const maybeRole = user.role;\n                        if (maybeRole !== undefined) {\n                            token.role = typeof maybeRole === \"string\" ? maybeRole : String(maybeRole);\n                        } else if (user.email) {\n                            const dbUser = await _prisma__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n                                where: {\n                                    email: user.email\n                                }\n                            });\n                            if (dbUser) token.role = dbUser.role;\n                        }\n                    } catch (inner) {\n                        // fallback to DB lookup by id\n                        if (user.id) {\n                            const dbUser = await _prisma__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n                                where: {\n                                    id: user.id\n                                }\n                            });\n                            if (dbUser) token.role = dbUser.role;\n                        }\n                    }\n                } catch (e) {\n                    console.error(\"jwt callback: error resolving user/role\", e, user);\n                }\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // populate session from token (works on subsequent requests)\n            try {\n                session.user = {\n                    ...session.user,\n                    ...token?.id ? {\n                        id: token.id\n                    } : {},\n                    ...token?.role ? {\n                        role: token.role\n                    } : {}\n                };\n            } catch (e) {\n                console.error(\"session callback error\", e, token);\n            }\n            return session;\n        }\n    },\n    events: {\n        async signIn ({ user, account, profile, isNewUser }) {\n            // log sign-in payload to help debug OAuth callback issues in dev\n            try {\n                console.log(\"NEXTAUTH event signIn:\", {\n                    user,\n                    account: account?.provider,\n                    isNewUser\n                });\n            } catch (e) {\n                console.error(\"signIn event log failed\", e);\n            }\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ0ZKLFFBQVFSLElBQUksR0FBRztvQkFDYixHQUFHUSxRQUFRUixJQUFJO29CQUNmLEdBQUlZLE9BQU9DLEtBQUs7d0JBQUVBLElBQUksTUFBZUEsRUFBRTtvQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDOUMsR0FBSUQsT0FBT0csT0FBTzt3QkFBRUEsTUFBTSxNQUFlQSxJQUFJO29CQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0RDtZQUNGLEVBQUUsT0FBT0ssR0FBRztnQkFDVkMsUUFBUUMsS0FBSyxDQUFDLDBCQUEwQkYsR0FBR1I7WUFDN0M7WUFDQSxPQUFPSjtRQUNUO0lBQ0Y7SUFDQWUsUUFBUTtRQUNOLE1BQU1DLFFBQU8sRUFBRXhCLElBQUksRUFBRXlCLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUU7WUFDaEQsaUVBQWlFO1lBQ2pFLElBQUk7Z0JBQ0ZOLFFBQVFPLEdBQUcsQ0FBQywwQkFBMEI7b0JBQUU1QjtvQkFBTXlCLFNBQVNBLFNBQVNJO29CQUFVRjtnQkFBVTtZQUN0RixFQUFFLE9BQU9QLEdBQUc7Z0JBQ1ZDLFFBQVFDLEtBQUssQ0FBQywyQkFBMkJGO1lBQzNDO1FBQ0Y7SUFDRjtJQUNBVSxRQUFRNUMsUUFBUUMsR0FBRyxDQUFDNEMsZUFBZTtBQUNyQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnN3LWJhcmJlci8uL2FwcC9fbGliL2F1dGgudHM/Mzc5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuL3ByaXNtYVwiXG5pbXBvcnQgeyBBZGFwdGVyIH0gZnJvbSBcIm5leHQtYXV0aC9hZGFwdGVyc1wiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCJcblxuY29uc3QgcHJvdmlkZXJzID0gW11cblxuLy8gYWRkIEdvb2dsZSBwcm92aWRlciBpZiBlbnYgdmFycyBwcmVzZW50IChzaW5nbGUgYXV0aCBtZXRob2QpXG5pZiAocHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCAmJiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCkge1xuICBwcm92aWRlcnMucHVzaChcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCBhcyBzdHJpbmcsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIGFzIHN0cmluZyxcbiAgICB9KSxcbiAgKVxufVxuXG4vLyBBZG1pbiBjcmVkZW50aWFscyBwcm92aWRlciAoZW1haWwgKyBwYXNzd29yZClcbnByb3ZpZGVycy5wdXNoKFxuICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICBuYW1lOiBcIkFkbWluIENyZWRlbnRpYWxzXCIsXG4gICAgY3JlZGVudGlhbHM6IHtcbiAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICB9LFxuICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkgcmV0dXJuIG51bGxcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSB9KVxuICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmhhc2hlZFBhc3N3b3JkKSByZXR1cm4gbnVsbFxuICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLmhhc2hlZFBhc3N3b3JkKVxuICAgICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gbnVsbFxuICAgICAgLy8gZW5zdXJlIGFkbWluIHJvbGVcbiAgICAgIHJldHVybiB1c2VyXG4gICAgfSxcbiAgfSksXG4pXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoZGIpIGFzIEFkYXB0ZXIsXG4gIHByb3ZpZGVycyxcbiAgLy8gVXNlIEpXVCBzdHJhdGVneSBzbyBtaWRkbGV3YXJlICh3aXRoQXV0aCkgY2FuIHJlYWQgdG9rZW4gYW5kIHJvbGUgd2l0aG91dCBleHRyYSBmZXRjaGVzXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgLy8gaW5jbHVkZSBpZCBhbmQgcm9sZSBpbiB0b2tlbiBhdCBzaWduLWluXG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHByZWZlciBleHBsaWNpdCBmaWVsZHMsIGJ1dCBmYWxsIGJhY2sgdG8gREIgbG9va3VwIGZvciByb2xlXG4gICAgICAgICAgaWYgKCh1c2VyIGFzIGFueSkuaWQpIHtcbiAgICAgICAgICAgICh0b2tlbiBhcyBhbnkpLmlkID0gKHVzZXIgYXMgYW55KS5pZFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB0cnkgdG8gcmVhZCBzaW1wbGUgcm9sZSBzYWZlbHk7IGlmIGl0IGZhaWxzLCBmZXRjaCBmcm9tIERCXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1heWJlUm9sZSA9ICh1c2VyIGFzIGFueSkucm9sZVxuICAgICAgICAgICAgaWYgKG1heWJlUm9sZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICh0b2tlbiBhcyBhbnkpLnJvbGUgPSB0eXBlb2YgbWF5YmVSb2xlID09PSBcInN0cmluZ1wiID8gbWF5YmVSb2xlIDogU3RyaW5nKG1heWJlUm9sZSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHVzZXIgYXMgYW55KS5lbWFpbCkge1xuICAgICAgICAgICAgICBjb25zdCBkYlVzZXIgPSBhd2FpdCAoZGIgYXMgYW55KS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogKHVzZXIgYXMgYW55KS5lbWFpbCB9IH0pXG4gICAgICAgICAgICAgIGlmIChkYlVzZXIpICh0b2tlbiBhcyBhbnkpLnJvbGUgPSAoZGJVc2VyIGFzIGFueSkucm9sZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGlubmVyKSB7XG4gICAgICAgICAgICAvLyBmYWxsYmFjayB0byBEQiBsb29rdXAgYnkgaWRcbiAgICAgICAgICAgIGlmICgodXNlciBhcyBhbnkpLmlkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRiVXNlciA9IGF3YWl0IChkYiBhcyBhbnkpLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiAodXNlciBhcyBhbnkpLmlkIH0gfSlcbiAgICAgICAgICAgICAgaWYgKGRiVXNlcikgKHRva2VuIGFzIGFueSkucm9sZSA9IChkYlVzZXIgYXMgYW55KS5yb2xlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcImp3dCBjYWxsYmFjazogZXJyb3IgcmVzb2x2aW5nIHVzZXIvcm9sZVwiLCBlLCB1c2VyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICAvLyBwb3B1bGF0ZSBzZXNzaW9uIGZyb20gdG9rZW4gKHdvcmtzIG9uIHN1YnNlcXVlbnQgcmVxdWVzdHMpXG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uLnVzZXIgPSB7XG4gICAgICAgICAgLi4uc2Vzc2lvbi51c2VyLFxuICAgICAgICAgIC4uLih0b2tlbj8uaWQgPyB7IGlkOiAodG9rZW4gYXMgYW55KS5pZCB9IDoge30pLFxuICAgICAgICAgIC4uLih0b2tlbj8ucm9sZSA/IHsgcm9sZTogKHRva2VuIGFzIGFueSkucm9sZSB9IDoge30pLFxuICAgICAgICB9IGFzIGFueVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwic2Vzc2lvbiBjYWxsYmFjayBlcnJvclwiLCBlLCB0b2tlbilcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgfSxcbiAgZXZlbnRzOiB7XG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyIH0pIHtcbiAgICAgIC8vIGxvZyBzaWduLWluIHBheWxvYWQgdG8gaGVscCBkZWJ1ZyBPQXV0aCBjYWxsYmFjayBpc3N1ZXMgaW4gZGV2XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5FWFRBVVRIIGV2ZW50IHNpZ25JbjpcIiwgeyB1c2VyLCBhY2NvdW50OiBhY2NvdW50Py5wcm92aWRlciwgaXNOZXdVc2VyIH0pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaWduSW4gZXZlbnQgbG9nIGZhaWxlZFwiLCBlKVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJkYiIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsInByb3ZpZGVycyIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJwdXNoIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImhhc2hlZFBhc3N3b3JkIiwiaXNWYWxpZCIsImNvbXBhcmUiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImlkIiwibWF5YmVSb2xlIiwicm9sZSIsInVuZGVmaW5lZCIsIlN0cmluZyIsImRiVXNlciIsImlubmVyIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV2ZW50cyIsInNpZ25JbiIsImFjY291bnQiLCJwcm9maWxlIiwiaXNOZXdVc2VyIiwibG9nIiwicHJvdmlkZXIiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/_lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./app/_lib/prisma.ts":
/*!****************************!*\
  !*** ./app/_lib/prisma.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvX2xpYi9wcmlzbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBTzdDLElBQUlDO0FBQ0osSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLEVBQUU7UUFDeEJELE9BQU9DLFlBQVksR0FBRyxJQUFJSix3REFBWUE7SUFDeEM7SUFDQUMsU0FBU0UsT0FBT0MsWUFBWTtBQUM5QjtBQUVPLE1BQU1DLEtBQUtKLE9BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3ctYmFyYmVyLy4vYXBwL19saWIvcHJpc21hLnRzPzdlZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIGNhY2hlZFByaXNtYTogUHJpc21hQ2xpZW50XG59XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLmNhY2hlZFByaXNtYSkge1xuICAgIGdsb2JhbC5jYWNoZWRQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwuY2FjaGVkUHJpc21hXG59XG5cbmV4cG9ydCBjb25zdCBkYiA9IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiLCJjYWNoZWRQcmlzbWEiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/_lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/_lib/auth */ \"(rsc)/./app/_lib/auth.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(_app_lib_auth__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUNiO0FBRWhDLE1BQU1FLFVBQVVELGdEQUFRQSxDQUFDRCxzREFBV0E7QUFFTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zzdy1iYXJiZXIvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvYXBwL19saWIvYXV0aFwiXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucylcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9XG4iXSwibmFtZXMiOlsiYXV0aE9wdGlvbnMiLCJOZXh0QXV0aCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Ffernando-santos%2FSecret%C3%A1ria%2Fclone-barber-v2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Ffernando-santos%2FSecret%C3%A1ria%2Fclone-barber-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();