(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  data: function data() {
    return {
      loading: true,
      posts: [],
      errors: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.$store.state.token !== "") {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/checkToken", {
        token: this.$store.state.token
      }).then(function (response) {
        if (!response.data.success) {
          _this.$store.commit("setToken", response.data.token);
        }

        _this.loading = false;
      })["catch"](function (e) {
        _this.loading = false;

        _this.$router.push("/login");
      });
    } else {
      this.loading = false;
      this.$router.push("/login");
    }
  },
  methods: {
    logout: function logout() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/logout", {
        token: this.$store.state.token
      }).then(function (response) {
        _this2.$store.commit("clearToken");

        _this2.$router.push("/");
      });
    },
    indexCruds: function indexCruds() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("api/cruds").then(function (response) {
        var data = response.data.data;
        _this3.posts = data;
      });
    },
    deleteCruds: function deleteCruds(id, index) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/crudsDelete/" + id).then(function (response) {
        console.log(response);

        _this4.posts.splice(index, 1);
      })["catch"](function (e) {
        _this4.errors.push(e);
      });
    }
  },
  created: function created() {
    this.indexCruds();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Dashboard.vue?vue&type=template&id=124c0b78&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Dashboard.vue?vue&type=template&id=124c0b78& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.loading
      ? _c("div", { staticClass: "d-flex justify-content-center mt-5" }, [
          _vm._m(0)
        ])
      : _c(
          "div",
          { staticClass: "jumbotron jumbotron-fluid m-5 text-center" },
          [
            _c("div", { staticClass: "container" }, [
              _c("h1", { staticClass: "display-4" }, [_vm._v("login Success")]),
              _vm._v(" "),
              _c("p", { staticClass: "lead" }, [_vm._v("You are logged in")]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-success", on: { click: _vm.logout } },
                [_vm._v("logout")]
              )
            ])
          ]
        ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("button", { staticClass: "btn btn-primary mb-3" }, [_vm._v("Create")]),
      _vm._v(" "),
      _c("table", { staticClass: "table" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.posts, function(article, index) {
            return _c("tr", { key: article.id }, [
              _c("td", [_vm._v(_vm._s(index + 1))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(article.name))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(article.umur))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(article.alamat))]),
              _vm._v(" "),
              _c("td", [
                _c("button", { staticClass: "btn btn-success" }, [
                  _vm._v("Edit")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: {
                      click: function($event) {
                        return _vm.deleteCruds(article.id, index)
                      }
                    }
                  },
                  [_vm._v("Delete")]
                )
              ])
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "spinner-border", attrs: { role: "status" } },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nama")]),
        _vm._v(" "),
        _c("th", [_vm._v("Umur")]),
        _vm._v(" "),
        _c("th", [_vm._v("Alamat")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/app/Dashboard.vue":
/*!****************************************!*\
  !*** ./resources/js/app/Dashboard.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_124c0b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=124c0b78& */ "./resources/js/app/Dashboard.vue?vue&type=template&id=124c0b78&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/app/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_124c0b78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_124c0b78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/app/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/app/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app/Dashboard.vue?vue&type=template&id=124c0b78&":
/*!***********************************************************************!*\
  !*** ./resources/js/app/Dashboard.vue?vue&type=template&id=124c0b78& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_124c0b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=124c0b78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Dashboard.vue?vue&type=template&id=124c0b78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_124c0b78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_124c0b78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);