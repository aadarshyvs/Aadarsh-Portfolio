"use strict";
(self["webpackChunkAadarsh_Portfolio"] = self["webpackChunkAadarsh_Portfolio"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 2825);
/* harmony import */ var _my_resume_my_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-resume/my-resume.component */ 1057);
/* harmony import */ var _my_highlights_my_highlights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-highlights/my-highlights.component */ 732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class AppComponent {
  constructor() {
    this.title = 'Aadarsh-Portfolio';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-profile-page")(1, "app-my-highlights")(2, "app-my-resume");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__.ProfilePageComponent, _my_resume_my_resume_component__WEBPACK_IMPORTED_MODULE_1__.MyResumeComponent, _my_highlights_my_highlights_component__WEBPACK_IMPORTED_MODULE_2__.MyHighlightsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7110:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2016);


const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes)]
};

/***/ }),

/***/ 2016:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [];

/***/ }),

/***/ 8169:
/*!**********************************************************!*\
  !*** ./src/app/awards-resume/awards-resume.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AwardsResumeComponent: () => (/* binding */ AwardsResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



function AwardsResumeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const educationDetail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", educationDetail_r2.summary, " ");
  }
}
function AwardsResumeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const educationDetail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r3.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r3.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", educationDetail_r3.summary, " ");
  }
}
class AwardsResumeComponent {
  constructor() {
    this.achivementDetails = {
      title: 'Professional Awards',
      detailsList: [{
        title: 'Innovation Award',
        duration: 'Feb 2024',
        grade: 'Capgemini',
        summary: `
        Awarded the Innovation Prize for innovating code from UI and introducing new functionalities that significantly enhance user experience.
        Recognized for groundbreaking contributions to code innovation from the UI level, leading to the integration of cutting-edge features that elevate user satisfaction.
        Received the Innovation Award for pioneering advancements in code development, resulting in enhanced user experience and improved functionality.
        `
      }, {
        title: 'Customer Delight Award',
        duration: 'Sep 2023',
        grade: 'Capgemini',
        summary: `Received recognition for consistently earning high praise and satisfaction from clients, showcasing dedication to customer service excellence.
      Acknowledged within the company for consistently exceeding client expectations and fostering positive relationships, resulting in appreciation.
      Recognized for outstanding commitment to customer satisfaction, earning accolades for consistently delivering exceptional service and support.
      `
      }]
    };
    this.otherDetails = {
      title: 'Other Awards',
      detailsList: [{
        title: `World's Largest Human Wheelchair Image Record Holder`,
        duration: 'Dec 2018',
        grade: 'GWR',
        summary: `
        Achieved Guinness World Record and Asia Book of Records recognition for orchestrating the world's largest human image of a wheelchair.
        Proud recipient of Guinness World Record and Asia Book of Records titles for leading the creation of the largest human representation of a wheelchair.
        Recognized internationally with Guinness World Record and Asia Book of Records honors for organizing the largest human image of a wheelchair, showcasing dedication to inclusivity and awareness.
        `
      }, {
        title: 'Title: "Commendation for Gandhi Quiz Competition Engagement"',
        duration: 'Jul 2020',
        grade: 'NSS',
        summary: `Recognized for active participation in an online quiz competition focusing on the life of Gandhi, organized by NSS units of TKM College of Engineering.
      Engaged in pay tribute to Mahatma Gandhi's 150th Birth Anniversary by participating in an online quiz competition facilitated by the NSS cell of APJ Abdul Kalam Technological University.
      Contributed to celebrating Mahatma Gandhi's legacy by receiving recognition for participation in an online quiz competition organized by NSS units, highlighting his life and teachings.
      `
      }]
    };
  }
  static #_ = this.ɵfac = function AwardsResumeComponent_Factory(t) {
    return new (t || AwardsResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AwardsResumeComponent,
    selectors: [["app-awards-resume"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 4,
    consts: [[1, "resumeDetailsWrapper"], [1, "resumedetailsrow"], [1, "cardStack"], ["class", "detailsCard", 4, "ngFor", "ngForOf"], [1, "detailsCard"], [1, "detailsHeading"], [1, "detailsGrade"], [1, "detailsSummery"]],
    template: function AwardsResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AwardsResumeComponent_div_5_Template, 13, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1)(7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AwardsResumeComponent_div_10_Template, 13, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.achivementDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.achivementDetails.detailsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.otherDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.otherDetails.detailsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.cardStack[_ngcontent-%COMP%] {\n  --design-width: 5px;\n  --design-top: 20%;\n  --design-space: var(--space-s-2xl);\n  margin-block-start: var(--space-s-m);\n  padding-inline-start: calc(var(--design-space) / 2);\n  margin-inline-start: calc(var(--design-space) / 2);\n  border-inline-start: var(--design-width) solid var(--clr-dark-gray);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%] {\n  position: relative;\n  margin-inline-start: calc(var(--design-space) / 2);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: var(--design-width);\n  width: var(--design-space);\n  background: var(--clr-dark-gray);\n  left: calc(var(--design-space) * -1);\n  top: var(--design-top);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: calc(var(--design-width) * 2);\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background: var(--clr-background);\n  box-shadow: 0px 0px 0px var(--design-width) var(--clr-dark-gray);\n  transform: translate(-25%, -25%);\n  left: calc((var(--design-space) + var(--design-width)) * -1);\n  top: var(--design-top);\n}\n\n.cardStack[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(.detailsCard:hover) {\n  --design-top: 50%;\n}\n\n.resumedetailsrow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-block: var(--space-s-m);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n\n.cardStack[_ngcontent-%COMP%] {\n  --animation-height:30dvh;\n}\n\n.detailsCard[_ngcontent-%COMP%] {\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  margin-inline-end: var(--space-xs-s);\n  margin-block-end: var(--space-xs-s);\n  border-radius: 5px;\n  padding: var(--space-s-l);\n  flex-shrink: 1;\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%] {\n  margin-block: var(--space-xs-s);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--clr-black);\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  font-size: var(--step--1);\n  letter-spacing: -1px;\n  font-weight: 500;\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  padding: var(--space-3xs) var(--space-xs);\n  display: inline-block;\n  border-radius: 5px;\n  font-weight: 500;\n  color: var(--clr-primary);\n  background-color: var(--clr-white);\n}\n.detailsCard[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: var(--clr-dark-gray);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--step-0);\n  color: var(--clr-black);\n  line-height: var(--space-s-m);\n  text-align: left;\n}\n\n.resumeDetailsWrapper[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover {\n  background: var(--clr-gradient-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--clr-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: left;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover::after {\n  background: var(--clr-primary) !important;\n}\n\n@media screen and (width >= 992px) {\n  .resumeDetailsWrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXdhcmRzLXJlc3VtZS9hd2FyZHMtcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvcmVzdW1lLXRlbXBsYXRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDRTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtFQ1pBO0VEY0E7SUFDQSx5QkFBQTtJQUNFLFVBQUE7RUNaRjtBQUNGO0FEY0U7RUFDRTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtFQ1pGO0VEY0U7SUFDQSwyQkFBQTtJQUNFLFVBQUE7RUNaSjtBQUNGO0FDbEJBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtREFBQTtFQUVBLGtEQUFBO0VBQ0EsbUVBQUE7QURtQkY7QUNsQkU7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0FEb0JKO0FDaEJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRGtCSjtBQ2ZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdFQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0FEaUJKOztBQ2JBO0VBQ0UsaUJBQUE7QURnQkY7O0FDZEE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VGNUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0FDOERGOztBQ2xCQTtFQUNFLHdCQUFBO0FEcUJGOztBQ25CQTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUZ6REEsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7QUNnRkY7QUN0QkU7RUFDRSwrQkFBQTtBRHdCSjtBQ3RCSTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7QUR3Qk47QUNwQkk7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FEc0JOO0FDbEJJO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FEb0JOO0FDaEJFO0VBQ0UsMkJBQUE7QURrQko7QUNkSTtFQUNFLHdCQUFBO0VBRUEsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FEZU47O0FDVkE7RUFDRSxhQUFBO0FEYUY7O0FDVEE7RUFDRSx1Q0FBQTtBRFlGO0FDUkk7O0VBRUUsWUFBQTtBRFVOO0FDUEk7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7QURTTjtBQ0pJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FETU47O0FDREE7RUFDRSx5Q0FBQTtBRElGOztBQ0RBO0VBQ0U7SUFDRSw4QkFBQTtFRElGO0FBQ0Y7QUNGQTtFQUNFO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VESUE7RUNGQTtJQUNBLHlCQUFBO0lBQ0UsVUFBQTtFRElGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gcmV2ZWwoKXtcbiAgYW5pbWF0aW9uOiByZXZlbCBsaW5lYXIgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xufVxuQG1peGluIGxlZnRUb1JpZ2h0KCl7XG4gIGFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuQGtleWZyYW1lcyByZXZlbCB7XG4gIDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gICAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MGR2dyk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMGR2dyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB9XG5cbiIsIkBrZXlmcmFtZXMgcmV2ZWwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBkdncpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBkdncpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jYXJkU3RhY2sge1xuICAtLWRlc2lnbi13aWR0aDogNXB4O1xuICAtLWRlc2lnbi10b3A6IDIwJTtcbiAgLS1kZXNpZ24tc3BhY2U6IHZhcigtLXNwYWNlLXMtMnhsKTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1zcGFjZS1zLW0pO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpIC8gMik7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKSAvIDIpO1xuICBib3JkZXItaW5saW5lLXN0YXJ0OiB2YXIoLS1kZXNpZ24td2lkdGgpIHNvbGlkIHZhcigtLWNsci1kYXJrLWdyYXkpO1xufVxuLmNhcmRTdGFjayAuZGV0YWlsc0NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKSAvIDIpO1xufVxuLmNhcmRTdGFjayAuZGV0YWlsc0NhcmQ6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiB2YXIoLS1kZXNpZ24td2lkdGgpO1xuICB3aWR0aDogdmFyKC0tZGVzaWduLXNwYWNlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gIGxlZnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKSAqIC0xKTtcbiAgdG9wOiB2YXIoLS1kZXNpZ24tdG9wKTtcbn1cbi5jYXJkU3RhY2sgLmRldGFpbHNDYXJkOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IGNhbGModmFyKC0tZGVzaWduLXdpZHRoKSAqIDIpO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0tZGVzaWduLXdpZHRoKSB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTI1JSk7XG4gIGxlZnQ6IGNhbGMoKHZhcigtLWRlc2lnbi1zcGFjZSkgKyB2YXIoLS1kZXNpZ24td2lkdGgpKSAqIC0xKTtcbiAgdG9wOiB2YXIoLS1kZXNpZ24tdG9wKTtcbn1cblxuLmNhcmRTdGFjayA6aXMoLmRldGFpbHNDYXJkOmhvdmVyKSB7XG4gIC0tZGVzaWduLXRvcDogNTAlO1xufVxuXG4ucmVzdW1lZGV0YWlsc3JvdyBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc3BhY2Utcy1tKTtcbiAgYW5pbWF0aW9uOiByZXZlbCBsaW5lYXIgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xufVxuXG4uY2FyZFN0YWNrIHtcbiAgLS1hbmltYXRpb24taGVpZ2h0OjMwZHZoO1xufVxuXG4uZGV0YWlsc0NhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ib3gpO1xuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc3BhY2UteHMtcyk7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLXhzLXMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXMtbCk7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBhbmltYXRpb246IHJldmVsIGxpbmVhciBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLXRpbWVsaW5lOiB2aWV3KCk7XG4gIGFuaW1hdGlvbi1yYW5nZS1zdGFydDogY292ZXIgMGR2aDtcbiAgYW5pbWF0aW9uLXJhbmdlLWVuZDogY292ZXIgdmFyKC0tYW5pbWF0aW9uLWhlaWdodCk7XG59XG4uZGV0YWlsc0NhcmQgLmRldGFpbHNIZWFkaW5nIHtcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS14cy1zKTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc0hlYWRpbmcgaDUge1xuICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UtMnhzLXhzKTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc0hlYWRpbmcgaDYge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLTJ4cy14cyk7XG59XG4uZGV0YWlsc0NhcmQgLmRldGFpbHNIZWFkaW5nIC5kZXRhaWxzR3JhZGUge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0zeHMpIHZhcigtLXNwYWNlLXhzKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG59XG4uZGV0YWlsc0NhcmQgaHIge1xuICBjb2xvcjogdmFyKC0tY2xyLWRhcmstZ3JheSk7XG59XG4uZGV0YWlsc0NhcmQgLmRldGFpbHNTdW1tZXJ5IHAge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xuICBsaW5lLWhlaWdodDogdmFyKC0tc3BhY2Utcy1tKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlc3VtZURldGFpbHNXcmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmRldGFpbHNDYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWdyYWRpZW50LXByaW1hcnkpO1xufVxuLmRldGFpbHNDYXJkOmhvdmVyIC5kZXRhaWxzSGVhZGluZyBoNixcbi5kZXRhaWxzQ2FyZDpob3ZlciAuZGV0YWlsc0hlYWRpbmcgaDUge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGV0YWlsc0NhcmQ6aG92ZXIgLmRldGFpbHNIZWFkaW5nIC5kZXRhaWxzR3JhZGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbn1cbi5kZXRhaWxzQ2FyZDpob3ZlciAuZGV0YWlsc1N1bW1lcnkgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRldGFpbHNDYXJkOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggPj0gOTkycHgpIHtcbiAgLnJlc3VtZURldGFpbHNXcmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmV2ZWwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiQGltcG9ydCAnLi4vY3NzL2FuaW1hdGlvbnMuc2Nzcyc7XG4uY2FyZFN0YWNrIHtcbiAgLS1kZXNpZ24td2lkdGg6IDVweDtcbiAgLS1kZXNpZ24tdG9wOiAyMCU7XG4gIC0tZGVzaWduLXNwYWNlOiB2YXIoLS1zcGFjZS1zLTJ4bCk7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2Utcy1tKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKS8yKTtcbiAgLy8gcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkvMik7XG4gIGJvcmRlci1pbmxpbmUtc3RhcnQ6IHZhcigtLWRlc2lnbi13aWR0aCkgc29saWQgdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gIC5kZXRhaWxzQ2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKS8yKTtcblxuICB9XG5cbiAgLmRldGFpbHNDYXJkOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogdmFyKC0tZGVzaWduLXdpZHRoKTtcbiAgICB3aWR0aDogdmFyKC0tZGVzaWduLXNwYWNlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgICBsZWZ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkqLTEpO1xuICAgIHRvcDogdmFyKC0tZGVzaWduLXRvcCk7XG4gIH1cblxuICAuZGV0YWlsc0NhcmQ6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1kZXNpZ24td2lkdGgpICoyKTtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0tZGVzaWduLXdpZHRoKSB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtMjUlKTtcbiAgICBsZWZ0OiBjYWxjKCh2YXIoLS1kZXNpZ24tc3BhY2UpICsgdmFyKC0tZGVzaWduLXdpZHRoKSkgKiAtMSk7XG4gICAgdG9wOiB2YXIoLS1kZXNpZ24tdG9wKTtcbiAgfVxufVxuXG4uY2FyZFN0YWNrIDppcyguZGV0YWlsc0NhcmQ6aG92ZXIpIHtcbiAgLS1kZXNpZ24tdG9wOiA1MCU7XG59XG4ucmVzdW1lZGV0YWlsc3JvdyBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc3BhY2Utcy1tKTtcbiAgQGluY2x1ZGUgcmV2ZWw7XG59XG4uY2FyZFN0YWNre1xuICAtLWFuaW1hdGlvbi1oZWlnaHQ6MzBkdmg7XG59XG4uZGV0YWlsc0NhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ib3gpO1xuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc3BhY2UteHMtcyk7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLXhzLXMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXMtbCk7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBAaW5jbHVkZSByZXZlbDtcblxuXG4gIC5kZXRhaWxzSGVhZGluZyB7XG4gICAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS14cy1zKTtcblxuICAgIGg1IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UtMnhzLXhzKTtcblxuICAgIH1cblxuICAgIGg2IHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vc3BhY2UpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLTJ4cy14cyk7XG5cbiAgICB9XG5cbiAgICAuZGV0YWlsc0dyYWRlIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLTN4cykgdmFyKC0tc3BhY2UteHMpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuICAgIH1cbiAgfVxuXG4gIGhyIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gIH1cblxuICAuZGV0YWlsc1N1bW1lcnkge1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICAgICAgLy8gZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XG4gICAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1zcGFjZS1zLW0pO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cblxuLnJlc3VtZURldGFpbHNXcmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuXG4uZGV0YWlsc0NhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ3JhZGllbnQtcHJpbWFyeSk7XG5cbiAgLmRldGFpbHNIZWFkaW5nIHtcblxuICAgIGg2LFxuICAgIGg1IHtcbiAgICAgIGNvbG9yOiAjZmZmZjtcbiAgICB9XG5cbiAgICAuZGV0YWlsc0dyYWRlIHtcbiAgICAgIGNvbG9yOiAjZmZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsc1N1bW1lcnkge1xuICAgIHAge1xuICAgICAgY29sb3I6ICNmZmZmO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cblxuLmRldGFpbHNDYXJkOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGg+PTk5MnB4KSB7XG4gIC5yZXN1bWVEZXRhaWxzV3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJldmVsIHtcbiAgMCV7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5219:
/*!****************************************************************!*\
  !*** ./src/app/education-resume/education-resume.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationResumeComponent: () => (/* binding */ EducationResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



function EducationResumeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const educationDetail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", educationDetail_r2.summary, " ");
  }
}
function EducationResumeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const achivementDetail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](achivementDetail_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](achivementDetail_r3.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](achivementDetail_r3.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", achivementDetail_r3.summary, " ");
  }
}
class EducationResumeComponent {
  constructor() {
    this.educationDetails = {
      title: "Education Quality",
      detailsList: [{
        title: 'Vel Tech Institute of Science and Technology',
        duration: 'Btech (2018 - 2022)',
        grade: '8.2/10',
        summary: 'I have successfully completed my under graduation at Vel-Tech University, acquiring valuable technical skills along the way.'
      }, {
        title: 'Sri Chaitanya Junior College',
        duration: 'Board of Intermediate Education (2016 - 2018)',
        grade: '7.5/10',
        summary: `Completed Intermediate with specialization in Mathematics, Physics and Chemistry at Sri Chaitanya Junior College, focusing on in-depth study and understanding of these subjects.`
      }, {
        title: 'Dr. K. k. R Gowtham School',
        duration: 'Board of Secondary Education (2016)',
        grade: '8.0/10',
        summary: 'Completed Secondary Education at Dr. K. K. R Gowtham School, studying a variety of subjects essential for overall academic development.'
      }]
    };
    this.achivementDetails = {
      title: 'Projects and Certifications',
      detailsList: [{
        title: 'Generative AI for Software Engineers',
        duration: 'AWS Partner Course (Aug 2023)',
        grade: 'Online Certification',
        summary: `Completed a certification on Generative AI, which talks about the types of content that Generative AI generates. It also covers Foundation Models and Amazon applications that use these, such as Bedrock, EC2, Code Whisper, and SageMaker Jump Start.
      `
      }, {
        title: 'Online Clinic Management System',
        duration: 'Minor Project (Jun 2022)',
        grade: 'Online Certification',
        summary: `Completed case study on Online Clinic Management System where the users can be able to register and book appointment in the website,
      Doctor can view and delete appointments also view the stock of medicines present in his Clinic,if there is less stock the request to send medicines
      is sent to the respective suppler and the suppler will send the stock to the clinic which is automatically added to the clinic stock.
      used the 3 Tier Architecture for building the project.
       Used ADO.NET System for the database connectivity.
       Got a internship certificate from Capgemini for this project`
      }]
    };
  }
  static #_ = this.ɵfac = function EducationResumeComponent_Factory(t) {
    return new (t || EducationResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EducationResumeComponent,
    selectors: [["app-education-resume"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 4,
    consts: [[1, "resumeDetailsWrapper"], [1, "resumedetailsrow"], [1, "cardStack"], ["class", "detailsCard", 4, "ngFor", "ngForOf"], [1, "detailsCard"], [1, "detailsHeading"], [1, "detailsGrade"], [1, "detailsSummery"]],
    template: function EducationResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EducationResumeComponent_div_5_Template, 13, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1)(7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EducationResumeComponent_div_10_Template, 13, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.educationDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educationDetails.detailsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.achivementDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.achivementDetails.detailsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.cardStack[_ngcontent-%COMP%] {\n  --design-width: 5px;\n  --design-top: 20%;\n  --design-space: var(--space-s-2xl);\n  margin-block-start: var(--space-s-m);\n  padding-inline-start: calc(var(--design-space) / 2);\n  margin-inline-start: calc(var(--design-space) / 2);\n  border-inline-start: var(--design-width) solid var(--clr-dark-gray);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%] {\n  position: relative;\n  margin-inline-start: calc(var(--design-space) / 2);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: var(--design-width);\n  width: var(--design-space);\n  background: var(--clr-dark-gray);\n  left: calc(var(--design-space) * -1);\n  top: var(--design-top);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: calc(var(--design-width) * 2);\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background: var(--clr-background);\n  box-shadow: 0px 0px 0px var(--design-width) var(--clr-dark-gray);\n  transform: translate(-25%, -25%);\n  left: calc((var(--design-space) + var(--design-width)) * -1);\n  top: var(--design-top);\n}\n\n.cardStack[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(.detailsCard:hover) {\n  --design-top: 50%;\n}\n\n.resumedetailsrow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-block: var(--space-s-m);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n\n.cardStack[_ngcontent-%COMP%] {\n  --animation-height:30dvh;\n}\n\n.detailsCard[_ngcontent-%COMP%] {\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  margin-inline-end: var(--space-xs-s);\n  margin-block-end: var(--space-xs-s);\n  border-radius: 5px;\n  padding: var(--space-s-l);\n  flex-shrink: 1;\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%] {\n  margin-block: var(--space-xs-s);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--clr-black);\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  font-size: var(--step--1);\n  letter-spacing: -1px;\n  font-weight: 500;\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  padding: var(--space-3xs) var(--space-xs);\n  display: inline-block;\n  border-radius: 5px;\n  font-weight: 500;\n  color: var(--clr-primary);\n  background-color: var(--clr-white);\n}\n.detailsCard[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: var(--clr-dark-gray);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--step-0);\n  color: var(--clr-black);\n  line-height: var(--space-s-m);\n  text-align: left;\n}\n\n.resumeDetailsWrapper[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover {\n  background: var(--clr-gradient-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--clr-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: left;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover::after {\n  background: var(--clr-primary) !important;\n}\n\n@media screen and (width >= 992px) {\n  .resumeDetailsWrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWR1Y2F0aW9uLXJlc3VtZS9lZHVjYXRpb24tcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvcmVzdW1lLXRlbXBsYXRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDRTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtFQ1pBO0VEY0E7SUFDQSx5QkFBQTtJQUNFLFVBQUE7RUNaRjtBQUNGO0FEY0U7RUFDRTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtFQ1pGO0VEY0U7SUFDQSwyQkFBQTtJQUNFLFVBQUE7RUNaSjtBQUNGO0FDbEJBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtREFBQTtFQUVBLGtEQUFBO0VBQ0EsbUVBQUE7QURtQkY7QUNsQkU7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0FEb0JKO0FDaEJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRGtCSjtBQ2ZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdFQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0FEaUJKOztBQ2JBO0VBQ0UsaUJBQUE7QURnQkY7O0FDZEE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VGNUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0FDOERGOztBQ2xCQTtFQUNFLHdCQUFBO0FEcUJGOztBQ25CQTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUZ6REEsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7QUNnRkY7QUN0QkU7RUFDRSwrQkFBQTtBRHdCSjtBQ3RCSTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7QUR3Qk47QUNwQkk7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FEc0JOO0FDbEJJO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FEb0JOO0FDaEJFO0VBQ0UsMkJBQUE7QURrQko7QUNkSTtFQUNFLHdCQUFBO0VBRUEsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FEZU47O0FDVkE7RUFDRSxhQUFBO0FEYUY7O0FDVEE7RUFDRSx1Q0FBQTtBRFlGO0FDUkk7O0VBRUUsWUFBQTtBRFVOO0FDUEk7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7QURTTjtBQ0pJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FETU47O0FDREE7RUFDRSx5Q0FBQTtBRElGOztBQ0RBO0VBQ0U7SUFDRSw4QkFBQTtFRElGO0FBQ0Y7QUNGQTtFQUNFO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VESUE7RUNGQTtJQUNBLHlCQUFBO0lBQ0UsVUFBQTtFRElGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gcmV2ZWwoKXtcbiAgYW5pbWF0aW9uOiByZXZlbCBsaW5lYXIgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xufVxuQG1peGluIGxlZnRUb1JpZ2h0KCl7XG4gIGFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuQGtleWZyYW1lcyByZXZlbCB7XG4gIDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gICAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MGR2dyk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMGR2dyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB9XG5cbiIsIkBrZXlmcmFtZXMgcmV2ZWwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBkdncpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBkdncpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jYXJkU3RhY2sge1xuICAtLWRlc2lnbi13aWR0aDogNXB4O1xuICAtLWRlc2lnbi10b3A6IDIwJTtcbiAgLS1kZXNpZ24tc3BhY2U6IHZhcigtLXNwYWNlLXMtMnhsKTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1zcGFjZS1zLW0pO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpIC8gMik7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKSAvIDIpO1xuICBib3JkZXItaW5saW5lLXN0YXJ0OiB2YXIoLS1kZXNpZ24td2lkdGgpIHNvbGlkIHZhcigtLWNsci1kYXJrLWdyYXkpO1xufVxuLmNhcmRTdGFjayAuZGV0YWlsc0NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKSAvIDIpO1xufVxuLmNhcmRTdGFjayAuZGV0YWlsc0NhcmQ6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiB2YXIoLS1kZXNpZ24td2lkdGgpO1xuICB3aWR0aDogdmFyKC0tZGVzaWduLXNwYWNlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gIGxlZnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKSAqIC0xKTtcbiAgdG9wOiB2YXIoLS1kZXNpZ24tdG9wKTtcbn1cbi5jYXJkU3RhY2sgLmRldGFpbHNDYXJkOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IGNhbGModmFyKC0tZGVzaWduLXdpZHRoKSAqIDIpO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0tZGVzaWduLXdpZHRoKSB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTI1JSk7XG4gIGxlZnQ6IGNhbGMoKHZhcigtLWRlc2lnbi1zcGFjZSkgKyB2YXIoLS1kZXNpZ24td2lkdGgpKSAqIC0xKTtcbiAgdG9wOiB2YXIoLS1kZXNpZ24tdG9wKTtcbn1cblxuLmNhcmRTdGFjayA6aXMoLmRldGFpbHNDYXJkOmhvdmVyKSB7XG4gIC0tZGVzaWduLXRvcDogNTAlO1xufVxuXG4ucmVzdW1lZGV0YWlsc3JvdyBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc3BhY2Utcy1tKTtcbiAgYW5pbWF0aW9uOiByZXZlbCBsaW5lYXIgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xufVxuXG4uY2FyZFN0YWNrIHtcbiAgLS1hbmltYXRpb24taGVpZ2h0OjMwZHZoO1xufVxuXG4uZGV0YWlsc0NhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ib3gpO1xuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc3BhY2UteHMtcyk7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLXhzLXMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXMtbCk7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBhbmltYXRpb246IHJldmVsIGxpbmVhciBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLXRpbWVsaW5lOiB2aWV3KCk7XG4gIGFuaW1hdGlvbi1yYW5nZS1zdGFydDogY292ZXIgMGR2aDtcbiAgYW5pbWF0aW9uLXJhbmdlLWVuZDogY292ZXIgdmFyKC0tYW5pbWF0aW9uLWhlaWdodCk7XG59XG4uZGV0YWlsc0NhcmQgLmRldGFpbHNIZWFkaW5nIHtcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS14cy1zKTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc0hlYWRpbmcgaDUge1xuICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UtMnhzLXhzKTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc0hlYWRpbmcgaDYge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLTJ4cy14cyk7XG59XG4uZGV0YWlsc0NhcmQgLmRldGFpbHNIZWFkaW5nIC5kZXRhaWxzR3JhZGUge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0zeHMpIHZhcigtLXNwYWNlLXhzKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG59XG4uZGV0YWlsc0NhcmQgaHIge1xuICBjb2xvcjogdmFyKC0tY2xyLWRhcmstZ3JheSk7XG59XG4uZGV0YWlsc0NhcmQgLmRldGFpbHNTdW1tZXJ5IHAge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xuICBsaW5lLWhlaWdodDogdmFyKC0tc3BhY2Utcy1tKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlc3VtZURldGFpbHNXcmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmRldGFpbHNDYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWdyYWRpZW50LXByaW1hcnkpO1xufVxuLmRldGFpbHNDYXJkOmhvdmVyIC5kZXRhaWxzSGVhZGluZyBoNixcbi5kZXRhaWxzQ2FyZDpob3ZlciAuZGV0YWlsc0hlYWRpbmcgaDUge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGV0YWlsc0NhcmQ6aG92ZXIgLmRldGFpbHNIZWFkaW5nIC5kZXRhaWxzR3JhZGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbn1cbi5kZXRhaWxzQ2FyZDpob3ZlciAuZGV0YWlsc1N1bW1lcnkgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRldGFpbHNDYXJkOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggPj0gOTkycHgpIHtcbiAgLnJlc3VtZURldGFpbHNXcmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmV2ZWwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiQGltcG9ydCAnLi4vY3NzL2FuaW1hdGlvbnMuc2Nzcyc7XG4uY2FyZFN0YWNrIHtcbiAgLS1kZXNpZ24td2lkdGg6IDVweDtcbiAgLS1kZXNpZ24tdG9wOiAyMCU7XG4gIC0tZGVzaWduLXNwYWNlOiB2YXIoLS1zcGFjZS1zLTJ4bCk7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2Utcy1tKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKS8yKTtcbiAgLy8gcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkvMik7XG4gIGJvcmRlci1pbmxpbmUtc3RhcnQ6IHZhcigtLWRlc2lnbi13aWR0aCkgc29saWQgdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gIC5kZXRhaWxzQ2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKS8yKTtcblxuICB9XG5cbiAgLmRldGFpbHNDYXJkOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogdmFyKC0tZGVzaWduLXdpZHRoKTtcbiAgICB3aWR0aDogdmFyKC0tZGVzaWduLXNwYWNlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgICBsZWZ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkqLTEpO1xuICAgIHRvcDogdmFyKC0tZGVzaWduLXRvcCk7XG4gIH1cblxuICAuZGV0YWlsc0NhcmQ6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1kZXNpZ24td2lkdGgpICoyKTtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0tZGVzaWduLXdpZHRoKSB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtMjUlKTtcbiAgICBsZWZ0OiBjYWxjKCh2YXIoLS1kZXNpZ24tc3BhY2UpICsgdmFyKC0tZGVzaWduLXdpZHRoKSkgKiAtMSk7XG4gICAgdG9wOiB2YXIoLS1kZXNpZ24tdG9wKTtcbiAgfVxufVxuXG4uY2FyZFN0YWNrIDppcyguZGV0YWlsc0NhcmQ6aG92ZXIpIHtcbiAgLS1kZXNpZ24tdG9wOiA1MCU7XG59XG4ucmVzdW1lZGV0YWlsc3JvdyBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc3BhY2Utcy1tKTtcbiAgQGluY2x1ZGUgcmV2ZWw7XG59XG4uY2FyZFN0YWNre1xuICAtLWFuaW1hdGlvbi1oZWlnaHQ6MzBkdmg7XG59XG4uZGV0YWlsc0NhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ib3gpO1xuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc3BhY2UteHMtcyk7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLXhzLXMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXMtbCk7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBAaW5jbHVkZSByZXZlbDtcblxuXG4gIC5kZXRhaWxzSGVhZGluZyB7XG4gICAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS14cy1zKTtcblxuICAgIGg1IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UtMnhzLXhzKTtcblxuICAgIH1cblxuICAgIGg2IHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vc3BhY2UpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLTJ4cy14cyk7XG5cbiAgICB9XG5cbiAgICAuZGV0YWlsc0dyYWRlIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLTN4cykgdmFyKC0tc3BhY2UteHMpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuICAgIH1cbiAgfVxuXG4gIGhyIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gIH1cblxuICAuZGV0YWlsc1N1bW1lcnkge1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICAgICAgLy8gZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XG4gICAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1zcGFjZS1zLW0pO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cblxuLnJlc3VtZURldGFpbHNXcmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuXG4uZGV0YWlsc0NhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ3JhZGllbnQtcHJpbWFyeSk7XG5cbiAgLmRldGFpbHNIZWFkaW5nIHtcblxuICAgIGg2LFxuICAgIGg1IHtcbiAgICAgIGNvbG9yOiAjZmZmZjtcbiAgICB9XG5cbiAgICAuZGV0YWlsc0dyYWRlIHtcbiAgICAgIGNvbG9yOiAjZmZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsc1N1bW1lcnkge1xuICAgIHAge1xuICAgICAgY29sb3I6ICNmZmZmO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cblxuLmRldGFpbHNDYXJkOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGg+PTk5MnB4KSB7XG4gIC5yZXN1bWVEZXRhaWxzV3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJldmVsIHtcbiAgMCV7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5065:
/*!******************************************************************!*\
  !*** ./src/app/experience-resume/experience-resume.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceResumeComponent: () => (/* binding */ ExperienceResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



function ExperienceResumeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const educationDetail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", educationDetail_r2.summary, " ");
  }
}
function ExperienceResumeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const educationDetail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r3.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r3.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", educationDetail_r3.summary, " ");
  }
}
class ExperienceResumeComponent {
  constructor() {
    this.projectDetails = {
      title: 'Projects Detail',
      detailsList: [{
        title: 'Video Metadata & Content Processing, Validation and Publishing Platform',
        duration: '1 yr',
        grade: 'Bangalore',
        summary: `Worked as a UI Angular developer for this project and implemented MSAL Security using Keycloak, server-side data grids using Ag-Grid, workflow demonstration in UI and comparison of two XMLs, showing differences.
          `
      }, {
        title: 'Online Railway Reservation System',
        duration: '4 mos',
        grade: 'Virtual',
        summary: `I have successfully designed and implemented an Online Railway Reservation System, facilitating user registration, ticket reservation, cancellation and PDF ticket generation. Additionally, I incorporated admin functionalities for managing trains, seats and booking history, ensuring a comprehensive platform for both users and administrators. Utilizing a code-first approach, I created the database and deployed the application on Azure, demonstrating proficiency in Ms SQL Server, Visual Studio, .NET Framework, and API concepts for seamless system development and deployment.`
      }]
    };
    this.companyDetails = {
      title: 'Company Details',
      detailsList: [{
        title: 'Capgemini Full Time',
        duration: '1+ yrs',
        grade: 'Bangalore',
        summary: 'Demonstrated proficiency in coding, debugging and collaborating within a team environment during 18 months of employment as a software developer in Capgemini'
      }, {
        title: 'Capgemini Internship',
        duration: '4 mos',
        grade: 'Virtual',
        summary: `Served as an intern at a reputable company, actively learning and contributing to software development projects.
        Gained valuable practical insights in database management, web development and API integration throughout the internship duration.
      `
      }]
    };
  }
  static #_ = this.ɵfac = function ExperienceResumeComponent_Factory(t) {
    return new (t || ExperienceResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperienceResumeComponent,
    selectors: [["app-experience-resume"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 4,
    consts: [[1, "resumeDetailsWrapper"], [1, "resumedetailsrow"], [1, "cardStack"], ["class", "detailsCard", 4, "ngFor", "ngForOf"], [1, "detailsCard"], [1, "detailsHeading"], [1, "detailsGrade"], [1, "detailsSummery"]],
    template: function ExperienceResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExperienceResumeComponent_div_5_Template, 13, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1)(7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceResumeComponent_div_10_Template, 13, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyDetails.detailsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectDetails.detailsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.cardStack[_ngcontent-%COMP%] {\n  --design-width: 5px;\n  --design-top: 20%;\n  --design-space: var(--space-s-2xl);\n  margin-block-start: var(--space-s-m);\n  padding-inline-start: calc(var(--design-space) / 2);\n  margin-inline-start: calc(var(--design-space) / 2);\n  border-inline-start: var(--design-width) solid var(--clr-dark-gray);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%] {\n  position: relative;\n  margin-inline-start: calc(var(--design-space) / 2);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: var(--design-width);\n  width: var(--design-space);\n  background: var(--clr-dark-gray);\n  left: calc(var(--design-space) * -1);\n  top: var(--design-top);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: calc(var(--design-width) * 2);\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background: var(--clr-background);\n  box-shadow: 0px 0px 0px var(--design-width) var(--clr-dark-gray);\n  transform: translate(-25%, -25%);\n  left: calc((var(--design-space) + var(--design-width)) * -1);\n  top: var(--design-top);\n}\n\n.cardStack[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(.detailsCard:hover) {\n  --design-top: 50%;\n}\n\n.resumedetailsrow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-block: var(--space-s-m);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n\n.cardStack[_ngcontent-%COMP%] {\n  --animation-height:30dvh;\n}\n\n.detailsCard[_ngcontent-%COMP%] {\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  margin-inline-end: var(--space-xs-s);\n  margin-block-end: var(--space-xs-s);\n  border-radius: 5px;\n  padding: var(--space-s-l);\n  flex-shrink: 1;\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%] {\n  margin-block: var(--space-xs-s);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--clr-black);\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  font-size: var(--step--1);\n  letter-spacing: -1px;\n  font-weight: 500;\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  padding: var(--space-3xs) var(--space-xs);\n  display: inline-block;\n  border-radius: 5px;\n  font-weight: 500;\n  color: var(--clr-primary);\n  background-color: var(--clr-white);\n}\n.detailsCard[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: var(--clr-dark-gray);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--step-0);\n  color: var(--clr-black);\n  line-height: var(--space-s-m);\n  text-align: left;\n}\n\n.resumeDetailsWrapper[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover {\n  background: var(--clr-gradient-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--clr-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: left;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover::after {\n  background: var(--clr-primary) !important;\n}\n\n@media screen and (width >= 992px) {\n  .resumeDetailsWrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS1yZXN1bWUvZXhwZXJpZW5jZS1yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9yZXN1bWUtdGVtcGxhdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNFO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VDWkE7RURjQTtJQUNBLHlCQUFBO0lBQ0UsVUFBQTtFQ1pGO0FBQ0Y7QURjRTtFQUNFO0lBQ0EsNkJBQUE7SUFDQSxVQUFBO0VDWkY7RURjRTtJQUNBLDJCQUFBO0lBQ0UsVUFBQTtFQ1pKO0FBQ0Y7QUNsQkE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1EQUFBO0VBRUEsa0RBQUE7RUFDQSxtRUFBQTtBRG1CRjtBQ2xCRTtFQUNFLGtCQUFBO0VBQ0Esa0RBQUE7QURvQko7QUNoQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEa0JKO0FDZkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0VBQUE7RUFDQSxnQ0FBQTtFQUNBLDREQUFBO0VBQ0Esc0JBQUE7QURpQko7O0FDYkE7RUFDRSxpQkFBQTtBRGdCRjs7QUNkQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUY1Q0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7QUM4REY7O0FDbEJBO0VBQ0Usd0JBQUE7QURxQkY7O0FDbkJBO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFRnpEQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrREFBQTtBQ2dGRjtBQ3RCRTtFQUNFLCtCQUFBO0FEd0JKO0FDdEJJO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtBRHdCTjtBQ3BCSTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QURzQk47QUNsQkk7RUFDRSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QURvQk47QUNoQkU7RUFDRSwyQkFBQTtBRGtCSjtBQ2RJO0VBQ0Usd0JBQUE7RUFFQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QURlTjs7QUNWQTtFQUNFLGFBQUE7QURhRjs7QUNUQTtFQUNFLHVDQUFBO0FEWUY7QUNSSTs7RUFFRSxZQUFBO0FEVU47QUNQSTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtBRFNOO0FDSkk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QURNTjs7QUNEQTtFQUNFLHlDQUFBO0FESUY7O0FDREE7RUFDRTtJQUNFLDhCQUFBO0VESUY7QUFDRjtBQ0ZBO0VBQ0U7SUFDQSwyQkFBQTtJQUNBLFVBQUE7RURJQTtFQ0ZBO0lBQ0EseUJBQUE7SUFDRSxVQUFBO0VESUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiByZXZlbCgpe1xuICBhbmltYXRpb246IHJldmVsIGxpbmVhciBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLXRpbWVsaW5lOiB2aWV3KCk7XG4gIGFuaW1hdGlvbi1yYW5nZS1zdGFydDogY292ZXIgMGR2aDtcbiAgYW5pbWF0aW9uLXJhbmdlLWVuZDogY292ZXIgdmFyKC0tYW5pbWF0aW9uLWhlaWdodCk7XG59XG5AbWl4aW4gbGVmdFRvUmlnaHQoKXtcbiAgYW5pbWF0aW9uOiBsZWZ0VG9SaWdodCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLXRpbWVsaW5lOiB2aWV3KCk7XG4gIGFuaW1hdGlvbi1yYW5nZS1zdGFydDogY292ZXIgMGR2aDtcbiAgYW5pbWF0aW9uLXJhbmdlLWVuZDogY292ZXIgdmFyKC0tYW5pbWF0aW9uLWhlaWdodCk7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG59XG5Aa2V5ZnJhbWVzIHJldmVsIHtcbiAgMCV7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwZHZ3KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwZHZ3KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIH1cblxuIiwiQGtleWZyYW1lcyByZXZlbCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGVmdFRvUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MGR2dyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMGR2dyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNhcmRTdGFjayB7XG4gIC0tZGVzaWduLXdpZHRoOiA1cHg7XG4gIC0tZGVzaWduLXRvcDogMjAlO1xuICAtLWRlc2lnbi1zcGFjZTogdmFyKC0tc3BhY2Utcy0yeGwpO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IHZhcigtLXNwYWNlLXMtbSk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkgLyAyKTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpIC8gMik7XG4gIGJvcmRlci1pbmxpbmUtc3RhcnQ6IHZhcigtLWRlc2lnbi13aWR0aCkgc29saWQgdmFyKC0tY2xyLWRhcmstZ3JheSk7XG59XG4uY2FyZFN0YWNrIC5kZXRhaWxzQ2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpIC8gMik7XG59XG4uY2FyZFN0YWNrIC5kZXRhaWxzQ2FyZDo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IHZhcigtLWRlc2lnbi13aWR0aCk7XG4gIHdpZHRoOiB2YXIoLS1kZXNpZ24tc3BhY2UpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgbGVmdDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpICogLTEpO1xuICB0b3A6IHZhcigtLWRlc2lnbi10b3ApO1xufVxuLmNhcmRTdGFjayAuZGV0YWlsc0NhcmQ6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogY2FsYyh2YXIoLS1kZXNpZ24td2lkdGgpICogMik7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCB2YXIoLS1kZXNpZ24td2lkdGgpIHZhcigtLWNsci1kYXJrLWdyYXkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtMjUlKTtcbiAgbGVmdDogY2FsYygodmFyKC0tZGVzaWduLXNwYWNlKSArIHZhcigtLWRlc2lnbi13aWR0aCkpICogLTEpO1xuICB0b3A6IHZhcigtLWRlc2lnbi10b3ApO1xufVxuXG4uY2FyZFN0YWNrIDppcyguZGV0YWlsc0NhcmQ6aG92ZXIpIHtcbiAgLS1kZXNpZ24tdG9wOiA1MCU7XG59XG5cbi5yZXN1bWVkZXRhaWxzcm93IGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zcGFjZS1zLW0pO1xuICBhbmltYXRpb246IHJldmVsIGxpbmVhciBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLXRpbWVsaW5lOiB2aWV3KCk7XG4gIGFuaW1hdGlvbi1yYW5nZS1zdGFydDogY292ZXIgMGR2aDtcbiAgYW5pbWF0aW9uLXJhbmdlLWVuZDogY292ZXIgdmFyKC0tYW5pbWF0aW9uLWhlaWdodCk7XG59XG5cbi5jYXJkU3RhY2sge1xuICAtLWFuaW1hdGlvbi1oZWlnaHQ6MzBkdmg7XG59XG5cbi5kZXRhaWxzQ2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWJveCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLW91dGVyLXNoYWRvdyk7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1zcGFjZS14cy1zKTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UteHMtcyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utcy1sKTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGFuaW1hdGlvbjogcmV2ZWwgbGluZWFyIGZvcndhcmRzO1xuICBhbmltYXRpb24tdGltZWxpbmU6IHZpZXcoKTtcbiAgYW5pbWF0aW9uLXJhbmdlLXN0YXJ0OiBjb3ZlciAwZHZoO1xuICBhbmltYXRpb24tcmFuZ2UtZW5kOiBjb3ZlciB2YXIoLS1hbmltYXRpb24taGVpZ2h0KTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc0hlYWRpbmcge1xuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNwYWNlLXhzLXMpO1xufVxuLmRldGFpbHNDYXJkIC5kZXRhaWxzSGVhZGluZyBoNSB7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xuICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS0yeHMteHMpO1xufVxuLmRldGFpbHNDYXJkIC5kZXRhaWxzSGVhZGluZyBoNiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vc3BhY2UpO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UtMnhzLXhzKTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc0hlYWRpbmcgLmRldGFpbHNHcmFkZSB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTN4cykgdmFyKC0tc3BhY2UteHMpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcbn1cbi5kZXRhaWxzQ2FyZCBociB7XG4gIGNvbG9yOiB2YXIoLS1jbHItZGFyay1ncmF5KTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc1N1bW1lcnkgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbiAgY29sb3I6IHZhcigtLWNsci1ibGFjayk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1zcGFjZS1zLW0pO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmVzdW1lRGV0YWlsc1dyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZGV0YWlsc0NhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ3JhZGllbnQtcHJpbWFyeSk7XG59XG4uZGV0YWlsc0NhcmQ6aG92ZXIgLmRldGFpbHNIZWFkaW5nIGg2LFxuLmRldGFpbHNDYXJkOmhvdmVyIC5kZXRhaWxzSGVhZGluZyBoNSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kZXRhaWxzQ2FyZDpob3ZlciAuZGV0YWlsc0hlYWRpbmcgLmRldGFpbHNHcmFkZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuLmRldGFpbHNDYXJkOmhvdmVyIC5kZXRhaWxzU3VtbWVyeSBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZGV0YWlsc0NhcmQ6aG92ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA+PSA5OTJweCkge1xuICAucmVzdW1lRGV0YWlsc1dyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuQGtleWZyYW1lcyByZXZlbCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi9jc3MvYW5pbWF0aW9ucy5zY3NzJztcbi5jYXJkU3RhY2sge1xuICAtLWRlc2lnbi13aWR0aDogNXB4O1xuICAtLWRlc2lnbi10b3A6IDIwJTtcbiAgLS1kZXNpZ24tc3BhY2U6IHZhcigtLXNwYWNlLXMtMnhsKTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1zcGFjZS1zLW0pO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpLzIpO1xuICAvLyBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKS8yKTtcbiAgYm9yZGVyLWlubGluZS1zdGFydDogdmFyKC0tZGVzaWduLXdpZHRoKSBzb2xpZCB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgLmRldGFpbHNDYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpLzIpO1xuXG4gIH1cblxuICAuZGV0YWlsc0NhcmQ6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiB2YXIoLS1kZXNpZ24td2lkdGgpO1xuICAgIHdpZHRoOiB2YXIoLS1kZXNpZ24tc3BhY2UpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1kYXJrLWdyYXkpO1xuICAgIGxlZnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKSotMSk7XG4gICAgdG9wOiB2YXIoLS1kZXNpZ24tdG9wKTtcbiAgfVxuXG4gIC5kZXRhaWxzQ2FyZDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiBjYWxjKHZhcigtLWRlc2lnbi13aWR0aCkgKjIpO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCB2YXIoLS1kZXNpZ24td2lkdGgpIHZhcigtLWNsci1kYXJrLWdyYXkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNSUsIC0yNSUpO1xuICAgIGxlZnQ6IGNhbGMoKHZhcigtLWRlc2lnbi1zcGFjZSkgKyB2YXIoLS1kZXNpZ24td2lkdGgpKSAqIC0xKTtcbiAgICB0b3A6IHZhcigtLWRlc2lnbi10b3ApO1xuICB9XG59XG5cbi5jYXJkU3RhY2sgOmlzKC5kZXRhaWxzQ2FyZDpob3Zlcikge1xuICAtLWRlc2lnbi10b3A6IDUwJTtcbn1cbi5yZXN1bWVkZXRhaWxzcm93IGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zcGFjZS1zLW0pO1xuICBAaW5jbHVkZSByZXZlbDtcbn1cbi5jYXJkU3RhY2t7XG4gIC0tYW5pbWF0aW9uLWhlaWdodDozMGR2aDtcbn1cbi5kZXRhaWxzQ2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWJveCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLW91dGVyLXNoYWRvdyk7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1zcGFjZS14cy1zKTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UteHMtcyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utcy1sKTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIEBpbmNsdWRlIHJldmVsO1xuXG5cbiAgLmRldGFpbHNIZWFkaW5nIHtcbiAgICBtYXJnaW4tYmxvY2s6IHZhcigtLXNwYWNlLXhzLXMpO1xuXG4gICAgaDUge1xuICAgICAgY29sb3I6IHZhcigtLWNsci1ibGFjayk7XG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS0yeHMteHMpO1xuXG4gICAgfVxuXG4gICAgaDYge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XG4gICAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UtMnhzLXhzKTtcblxuICAgIH1cblxuICAgIC5kZXRhaWxzR3JhZGUge1xuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UtM3hzKSB2YXIoLS1zcGFjZS14cyk7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG4gICAgfVxuICB9XG5cbiAgaHIge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgfVxuXG4gIC5kZXRhaWxzU3VtbWVyeSB7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XG4gICAgICAvLyBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xuICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXNwYWNlLXMtbSk7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxufVxuXG4ucmVzdW1lRGV0YWlsc1dyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG5cbi5kZXRhaWxzQ2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmFkaWVudC1wcmltYXJ5KTtcblxuICAuZGV0YWlsc0hlYWRpbmcge1xuXG4gICAgaDYsXG4gICAgaDUge1xuICAgICAgY29sb3I6ICNmZmZmO1xuICAgIH1cblxuICAgIC5kZXRhaWxzR3JhZGUge1xuICAgICAgY29sb3I6ICNmZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWxzU3VtbWVyeSB7XG4gICAgcCB7XG4gICAgICBjb2xvcjogI2ZmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxufVxuXG4uZGV0YWlsc0NhcmQ6aG92ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aD49OTkycHgpIHtcbiAgLnJlc3VtZURldGFpbHNXcmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmV2ZWwge1xuICAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCV7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 732:
/*!**********************************************************!*\
  !*** ./src/app/my-highlights/my-highlights.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyHighlightsComponent: () => (/* binding */ MyHighlightsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);




const _c0 = a0 => ({
  "--max-children": a0
});
function MyHighlightsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const highlight_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.highlightsList.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.sanitizer.bypassSecurityTrustHtml(highlight_r1.icon), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](highlight_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](highlight_r1.content);
  }
}
class MyHighlightsComponent {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.highlightsList = [{
      icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
      `,
      //<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1{fill:#141f38;}</style></defs><title>trophy-outline</title><path class="cls-1" d="M310.06,127.79l-20.26-3.06a1.18,1.18,0,0,1-.77-.7L280,104.93a26.4,26.4,0,0,0-47.93,0L223,124a1.18,1.18,0,0,1-.76.71l-20.26,3.06a26.66,26.66,0,0,0-21.31,18.13,27.41,27.41,0,0,0,6.45,28l14.66,14.86a2,2,0,0,1,.46,1.66l-3.46,21a27.19,27.19,0,0,0,11.07,26.84,26.07,26.07,0,0,0,27.77,1.64L256.29,230l18.13,9.91a26,26,0,0,0,27.77-1.64,27.19,27.19,0,0,0,11.07-26.84l-3.46-21a2,2,0,0,1,.46-1.66L324.92,174a27.4,27.4,0,0,0,6.45-28A26.66,26.66,0,0,0,310.06,127.79ZM306.7,156,292,170.85a27.57,27.57,0,0,0-7.49,23.8l3.46,21a1.69,1.69,0,0,1-.62,1.79c-.34.25-.43.19-.67.06l-18.13-9.91a26.12,26.12,0,0,0-25.14,0l-18.12,9.91c-.25.14-.34.19-.68-.06a1.69,1.69,0,0,1-.62-1.79l3.46-21A27.57,27.57,0,0,0,220,170.85L205.31,156a1.85,1.85,0,0,1-.38-2c.27-.82.68-.88.84-.91L226,150a26.66,26.66,0,0,0,20.06-15l9.06-19.09c.63-1.3,1.06-1.3,1.68,0L265.9,135A26.66,26.66,0,0,0,286,150l20.27,3.06c.16,0,.57.09.84.91A1.85,1.85,0,0,1,306.7,156Zm192-76.67A44.75,44.75,0,0,0,465,64H422.15q.24-9.54.25-19.2v-.46C422.38,19.77,402.14,0,377.56,0H134.44C109.86,0,89.62,19.77,89.6,44.34v.46q0,9.66.25,19.2H47A44.9,44.9,0,0,0,2.58,115.06C15.52,210.33,76.17,289.51,158.3,329.77c17.19,26.41,36.85,46,58.12,57a99.25,99.25,0,0,1-2,10,102.4,102.4,0,0,1-57.22,67.78s-.09.09-.14.09l-.06,0a24.72,24.72,0,0,0,2,45.89,23.6,23.6,0,0,0,8.26,1.47H344.64a24.85,24.85,0,0,0,11.84-46.66c-.77-.38-1.54-.7-2.3-1.09A102.34,102.34,0,0,1,297.6,396.8a99.25,99.25,0,0,1-2-10c21.27-11,40.94-30.6,58.12-57,82.14-40.26,142.78-119.44,155.73-214.72A45.11,45.11,0,0,0,498.72,79.32ZM27.95,111.61a19.49,19.49,0,0,1,4.62-15.45A18.91,18.91,0,0,1,47,89.6H90.94c4.55,75.72,20.47,143.93,44,196.73C78.17,246.52,37.81,184.22,27.95,111.61ZM272.81,403.18a127.2,127.2,0,0,0,68.3,83.22H171.56l.58-.58a127.16,127.16,0,0,0,67-82.63c.66-2.58,1.22-5.19,1.72-7.82a80.32,80.32,0,0,0,30.18,0C271.59,398,272.14,400.61,272.81,403.18ZM256,371.2c-33.5,0-67.95-32.23-94.52-88.44-29.85-63.13-46.28-147.64-46.28-238v-.44A19,19,0,0,1,134.44,25.6H377.56A19,19,0,0,1,396.8,44.34v.46c0,90.32-16.44,174.83-46.28,238C323.95,339,289.5,371.2,256,371.2ZM484.05,111.61c-9.86,72.61-50.22,134.91-107,174.72,23.55-52.8,39.47-121,44-196.73H465a18.91,18.91,0,0,1,14.42,6.56A19.49,19.49,0,0,1,484.05,111.61Z"/></svg>
      title: 'Dual Honoree',
      content: `Achieved dual recognition for innovation and customer delight, winning two prestigious awards within the company. Demonstrated ability to innovate and prioritize customer satisfaction, contributing significantly to the organization's success and reputation.`
    }, {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>`,
      title: 'Tech Specialist',
      content: `Experienced HTML, CSS and Angular developer proficient with advanced tools like ag-Grid, Bootstrap and Material Components library. Specialized in crafting user-friendly web applications for seamless user experience.
      `
    }, {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>',
      title: 'Record Contributor',
      content: `
      Contributed to achieving Guinness World Record and Asia Book of Records as part of the college team for organizing the largest human image of a wheelchair, showcasing dedication to inclusivity.
      `
    }];
  }
  static #_ = this.ɵfac = function MyHighlightsComponent_Factory(t) {
    return new (t || MyHighlightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MyHighlightsComponent,
    selectors: [["app-my-highlights"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 1,
    consts: [[1, "highlightsWrapper"], [1, "row"], ["class", "highlightsStack col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "highlightsStack", "col-lg-6", "col-xl-4", "col-md-6", "col-sm-12", "col-12", 3, "ngStyle"], [1, "highlight"], [1, "icon", 3, "innerHTML"], [1, "title"], [1, "content"]],
    template: function MyHighlightsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Highlights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Key Contributions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyHighlightsComponent_div_6_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highlightsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
    styles: ["@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.highlightsWrapper[_ngcontent-%COMP%] {\n  margin-block-start: 100px;\n  margin: var(--space-s-2xl);\n  --animation-height:30dvh;\n}\n.highlightsWrapper[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  color: var(--clr-primary);\n  letter-spacing: 2px;\n  line-height: 14px;\n  font-weight: 500;\n  text-align: center;\n}\n.highlightsWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  height: 90%;\n  margin-block-start: var(--space-m-l);\n  padding: var(--space-s-2xl);\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  border-radius: 5px;\n  flex-shrink: 1;\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.highlight[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding-block-end: var(--space-s-m);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.highlight[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-block-end: var(--space-3xs-2xs);\n  font-size: var(--step-2);\n  font-weight: 500;\n  color: var(--clr-black);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.highlight[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-block-end: var(--space-s-l);\n  color: var(--clr-black);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n\n.highlight[_ngcontent-%COMP%]:hover {\n  --clr-icon:rgb(255, 255, 255) !important;\n  background: var(--clr-gradient-primary);\n}\n.highlight[_ngcontent-%COMP%]:hover   .highlight[_ngcontent-%COMP%] {\n  scale: 1.1;\n}\n.highlight[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], .highlight[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktaGlnaGxpZ2h0cy9teS1oaWdobGlnaHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0U7SUFDQSwyQkFBQTtJQUNBLFVBQUE7RUNaQTtFRGNBO0lBQ0EseUJBQUE7SUFDRSxVQUFBO0VDWkY7QUFDRjtBRGNFO0VBQ0U7SUFDQSw2QkFBQTtJQUNBLFVBQUE7RUNaRjtFRGNFO0lBQ0EsMkJBQUE7SUFDRSxVQUFBO0VDWko7QUFDRjtBQWxCQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQW9CSjtBQW5CSTtFQUNDLDZCQUFBO0VBQ0cseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXFCUjtBQWxCSTtFQUNFLGtCQUFBO0FBb0JOOztBQWhCQTtFQUNFLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFRDFCQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrREFBQTtBQzZDRjtBQXBCRTtFQUNFLG1DQUFBO0VEN0JGLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0FDb0RGO0FBdkJFO0VBQ0Usc0NBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RURwQ0YsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7QUM4REY7QUExQkU7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0VEekNGLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0FDc0VGOztBQTNCQTtFQUNFLHdDQUFBO0VBQ0EsdUNBQUE7QUE4QkY7QUE3QkU7RUFDRSxVQUFBO0FBK0JKO0FBN0JFO0VBQ0UseUJBQUE7QUErQkoiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gcmV2ZWwoKXtcbiAgYW5pbWF0aW9uOiByZXZlbCBsaW5lYXIgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xufVxuQG1peGluIGxlZnRUb1JpZ2h0KCl7XG4gIGFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuQGtleWZyYW1lcyByZXZlbCB7XG4gIDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gICAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MGR2dyk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMGR2dyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB9XG5cbiIsIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9jc3MvYW5pbWF0aW9ucy5zY3NzJztcbi5oaWdobGlnaHRzV3JhcHBlcntcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEwMHB4O1xuICAgIG1hcmdpbjogdmFyKC0tc3BhY2Utcy0yeGwpO1xuICAgIC0tYW5pbWF0aW9uLWhlaWdodDozMGR2aDtcbiAgICBoNntcbiAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIEBpbmNsdWRlIGxlZnRUb1JpZ2h0O1xuICAgIH1cbiAgICBoMntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC8vIEBpbmNsdWRlIGxlZnRUb1JpZ2h0O1xuICAgIH1cbn1cbi5oaWdobGlnaHR7XG4gIGhlaWdodDogOTAlO1xuICAvLyBtYXJnaW4taW5saW5lOnZhcigtLXNwYWNlLXMtbSk7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2UtbS1sKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utcy0yeGwpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ib3gpO1xuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBAaW5jbHVkZSByZXZlbDtcbiAgLmljb257XG4gICAgcGFkZGluZy1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLXMtbSk7XG4gIEBpbmNsdWRlIHJldmVsO1xuICB9XG4gIC50aXRsZXtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS0zeHMtMnhzKTtcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgQGluY2x1ZGUgcmV2ZWw7XG4gIH1cbiAgLmNvbnRlbnR7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2Utcy1sKTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgQGluY2x1ZGUgcmV2ZWw7XG5cbiAgfVxufVxuLmhpZ2hsaWdodDpob3ZlciB7XG4gIC0tY2xyLWljb246cmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmFkaWVudC1wcmltYXJ5KTtcbiAgLmhpZ2hsaWdodHtcbiAgICBzY2FsZTogMS4xO1xuICB9XG4gIC50aXRsZSwuY29udGVudHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1057:
/*!**************************************************!*\
  !*** ./src/app/my-resume/my-resume.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyResumeComponent: () => (/* binding */ MyResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _education_resume_education_resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../education-resume/education-resume.component */ 5219);
/* harmony import */ var _experience_resume_experience_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../experience-resume/experience-resume.component */ 5065);
/* harmony import */ var _awards_resume_awards_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../awards-resume/awards-resume.component */ 8169);
/* harmony import */ var _skills_resume_skills_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skills-resume/skills-resume.component */ 9584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);








function MyResumeComponent_app_education_resume_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-education-resume");
  }
}
function MyResumeComponent_app_skills_resume_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skills-resume");
  }
}
function MyResumeComponent_app_experience_resume_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-experience-resume");
  }
}
function MyResumeComponent_app_awards_resume_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-awards-resume");
  }
}
const _c0 = a0 => ({
  "active": a0
});
class MyResumeComponent {
  constructor() {
    this.showingTab = 'Education';
  }
  static #_ = this.ɵfac = function MyResumeComponent_Factory(t) {
    return new (t || MyResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MyResumeComponent,
    selectors: [["app-my-resume"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 24,
    vars: 16,
    consts: [[1, "resumeWrapper"], [1, "resumeTitle"], [1, "text-theme"], [1, "resumeSections"], [1, "nav"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", 3, "ngClass", "click"], [1, "nav-link", 3, "ngClass", "click"], [4, "ngIf"]],
    template: function MyResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " 1+ Years of Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "My Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "ul", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyResumeComponent_Template_a_click_9_listener() {
          return ctx.showingTab = "Education";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 5)(12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyResumeComponent_Template_a_click_12_listener() {
          return ctx.showingTab = "Skills";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Professional Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 5)(15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyResumeComponent_Template_a_click_15_listener() {
          return ctx.showingTab = "Experience";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 5)(18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyResumeComponent_Template_a_click_18_listener() {
          return ctx.showingTab = "Awards";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, MyResumeComponent_app_education_resume_20_Template, 1, 0, "app-education-resume", 8)(21, MyResumeComponent_app_skills_resume_21_Template, 1, 0, "app-skills-resume", 8)(22, MyResumeComponent_app_experience_resume_22_Template, 1, 0, "app-experience-resume", 8)(23, MyResumeComponent_app_awards_resume_23_Template, 1, 0, "app-awards-resume", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, ctx.showingTab == "Education"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, ctx.showingTab == "Skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, ctx.showingTab == "Experience"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, ctx.showingTab == "Awards"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showingTab == "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showingTab == "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showingTab == "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showingTab == "Awards");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _education_resume_education_resume_component__WEBPACK_IMPORTED_MODULE_0__.EducationResumeComponent, _experience_resume_experience_resume_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceResumeComponent, _awards_resume_awards_resume_component__WEBPACK_IMPORTED_MODULE_2__.AwardsResumeComponent, _skills_resume_skills_resume_component__WEBPACK_IMPORTED_MODULE_3__.SkillsResumeComponent],
    styles: ["@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.resumeWrapper[_ngcontent-%COMP%] {\n  margin-block-start: 100px;\n  margin: var(--space-s-2xl);\n  --animation-height:30dvh;\n}\n\n.text-theme[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  color: var(--clr-primary);\n  letter-spacing: 2px;\n  line-height: 14px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.resumeTitle[_ngcontent-%COMP%] {\n  text-align: center;\n  animation: _ngcontent-%COMP%_leftToRight 1s ease-in-out forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n  will-change: transform, opacity;\n}\n\n.resumeSections[_ngcontent-%COMP%] {\n  margin-block-start: var(--space-s-2xl);\n}\n\n.resumeSections[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  --border-radius-nav: 10px;\n  border-radius: var(--border-radius-nav);\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  justify-content: space-between;\n  --animation-height:30dvh;\n  animation: _ngcontent-%COMP%_leftToRight 1s ease-in-out forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n  will-change: transform, opacity;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  --resumeSectionCount: 4;\n  flex-basis: calc(100 / var(--resumeSectionCount) * 1%);\n  text-align: center;\n  padding: 25px 7px;\n}\n\n.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-family: var(--fs-heading-font);\n  color: var(--clr-text);\n  font-weight: bold;\n}\n\n.nav-item[_ngcontent-%COMP%]:has(.active) {\n  border-radius: var(--border-radius-nav);\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n}\n.nav-item[_ngcontent-%COMP%]:has(.active)   a[_ngcontent-%COMP%] {\n  color: var(--clr-primary);\n}\n\n@media screen and (width < 620px) {\n  .resumeSections[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktcmVzdW1lL215LXJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNFO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VDWkE7RURjQTtJQUNBLHlCQUFBO0lBQ0UsVUFBQTtFQ1pGO0FBQ0Y7QURjRTtFQUNFO0lBQ0EsNkJBQUE7SUFDQSxVQUFBO0VDWkY7RURjRTtJQUNBLDJCQUFBO0lBQ0UsVUFBQTtFQ1pKO0FBQ0Y7QUFsQkE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFvQkY7O0FBakJBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBb0JGOztBQWpCQTtFQUNFLGtCQUFBO0VEVkEsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7RUFDQSwrQkFBQTtBQytCRjs7QUFyQkE7RUFDRSxzQ0FBQTtBQXdCRjs7QUFyQkE7RUFDRSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUR4QkEsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7RUFDQSwrQkFBQTtBQ2lERjs7QUF6QkE7RUFDRSx1QkFBQTtFQUVBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTJCRjs7QUF4QkE7RUFDRSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUEyQkY7O0FBeEJBO0VBS0UsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0FBdUJGO0FBN0JFO0VBQ0UseUJBQUE7QUErQko7O0FBeEJBO0VBQ0U7SUFDRSxzQkFBQTtFQTJCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHJldmVsKCl7XG4gIGFuaW1hdGlvbjogcmV2ZWwgbGluZWFyIGZvcndhcmRzO1xuICBhbmltYXRpb24tdGltZWxpbmU6IHZpZXcoKTtcbiAgYW5pbWF0aW9uLXJhbmdlLXN0YXJ0OiBjb3ZlciAwZHZoO1xuICBhbmltYXRpb24tcmFuZ2UtZW5kOiBjb3ZlciB2YXIoLS1hbmltYXRpb24taGVpZ2h0KTtcbn1cbkBtaXhpbiBsZWZ0VG9SaWdodCgpe1xuICBhbmltYXRpb246IGxlZnRUb1JpZ2h0IDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICBhbmltYXRpb24tdGltZWxpbmU6IHZpZXcoKTtcbiAgYW5pbWF0aW9uLXJhbmdlLXN0YXJ0OiBjb3ZlciAwZHZoO1xuICBhbmltYXRpb24tcmFuZ2UtZW5kOiBjb3ZlciB2YXIoLS1hbmltYXRpb24taGVpZ2h0KTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbn1cbkBrZXlmcmFtZXMgcmV2ZWwge1xuICAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCV7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbGVmdFRvUmlnaHQge1xuICAgIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBkdncpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBkdncpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgfVxuXG4iLCJAaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2Nzcyc7XG4ucmVzdW1lV3JhcHBlciB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMTAwcHg7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utcy0yeGwpO1xuICAtLWFuaW1hdGlvbi1oZWlnaHQ6MzBkdmg7XG59XG5cbi50ZXh0LXRoZW1lIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXN1bWVUaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQGluY2x1ZGUgbGVmdFRvUmlnaHQ7XG59XG5cbi5yZXN1bWVTZWN0aW9ucyB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2Utcy0yeGwpO1xufVxuXG4ucmVzdW1lU2VjdGlvbnMgLm5hdiB7XG4gIC0tYm9yZGVyLXJhZGl1cy1uYXY6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbmF2KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tb3V0ZXItc2hhZG93KTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtLWFuaW1hdGlvbi1oZWlnaHQ6MzBkdmg7XG4gIEBpbmNsdWRlIGxlZnRUb1JpZ2h0O1xufVxuXG4ubmF2LWl0ZW0ge1xuICAtLXJlc3VtZVNlY3Rpb25Db3VudDogNDtcbiAgLy8gbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS1zKTtcbiAgZmxleC1iYXNpczogY2FsYygxMDAgLyB2YXIoLS1yZXN1bWVTZWN0aW9uQ291bnQpICogMSUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHggN3B4O1xufVxuXG4ubmF2LWl0ZW0gPiBhIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZzLWhlYWRpbmctZm9udCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2LWl0ZW06aGFzKC5hY3RpdmUpIHtcbiAgYSB7XG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgfVxuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbmF2KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tb3V0ZXItc2hhZG93KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA8IDYyMHB4KSB7XG4gIC5yZXN1bWVTZWN0aW9ucyAubmF2e1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2825:
/*!********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageComponent: () => (/* binding */ ProfilePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ProfilePageComponent {
  static #_ = this.ɵfac = function ProfilePageComponent_Factory(t) {
    return new (t || ProfilePageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfilePageComponent,
    selectors: [["app-profile-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 31,
    vars: 0,
    consts: [[1, "profileWrapper"], [1, "animationBalls"], [1, "ball"], [1, "profileDetailsWrapper"], [1, "profileImgWrapper"], [1, "imgBackground"], [1, "imgBorder"], ["src", "https://raw.githubusercontent.com/aadarshyvs/Aadarsh-Portfolio/refs/heads/master/src/assets/images/IMG_20241112_164517.jpg", "alt", "profile"], [1, "profession"], [1, "aniamteProfession"], [2, "text-align", "left"], [1, "marker"]],
    template: function ProfilePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2)(3, "div", 2)(4, "div", 2)(5, "div", 2)(6, "div", 2)(7, "div", 2)(8, "div", 2)(9, "div", 2)(10, "div", 2)(11, "div", 2)(12, "div", 2)(13, "div", 2)(14, "div", 2)(15, "div", 2)(16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3)(18, "div", 4)(19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 6)(21, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Aadarsh Yedire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 8)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "I am a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9)(28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Developer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: [".animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  position: absolute;\n  width: 2px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.1863827111;\n  top: 88%;\n  left: 73%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.8520056609s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  width: 6px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.4223558441;\n  top: 96%;\n  left: 9%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.6406134672s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  position: absolute;\n  width: 1px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.1513464467;\n  top: 92%;\n  left: 13%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.8673547617s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  position: absolute;\n  width: 4px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.2944898832;\n  top: 95%;\n  left: 72%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.9725323613s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  position: absolute;\n  width: 5px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.7785842719;\n  top: 61%;\n  left: 85%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.3269486574s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n  position: absolute;\n  width: 6px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.9876095452;\n  top: 60%;\n  left: 75%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.8480759788s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(7) {\n  position: absolute;\n  width: 4px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.8210694294;\n  top: 13%;\n  left: 33%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.4037182428s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(8) {\n  position: absolute;\n  width: 10px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.3304658137;\n  top: 49%;\n  left: 22%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.8997073983s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(9) {\n  position: absolute;\n  width: 7px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.601715414;\n  top: 77%;\n  left: 1%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.6709900418s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(10) {\n  position: absolute;\n  width: 2px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.8298510068;\n  top: 55%;\n  left: 5%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.2824159635s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(11) {\n  position: absolute;\n  width: 6px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.1710545882;\n  top: 86%;\n  left: 5%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.6514742916s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(12) {\n  position: absolute;\n  width: 1px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.2392702574;\n  top: 47%;\n  left: 84%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.784655025s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(13) {\n  position: absolute;\n  width: 5px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.076097789;\n  top: 74%;\n  left: 93%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.115825926s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(14) {\n  position: absolute;\n  width: 7px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.7592184862;\n  top: 14%;\n  left: 45%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.7814553507s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(15) {\n  position: absolute;\n  width: 10px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.2571462381;\n  top: 89%;\n  left: 5%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.4712309319s;\n}\n\n@keyframes _ngcontent-%COMP%_ballMove {\n  0% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(14dvh, 44dvh);\n  }\n  100% {\n    transform: translate(14dvh, 29dvh);\n  }\n}\n.profileWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90dvh;\n  max-height: 900px;\n  border-bottom: 1px solid var(--clr-text);\n  overflow: hidden;\n  position: relative;\n}\n\n.profileDetailsWrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n  height: 100%;\n}\n\n.imgBackground[_ngcontent-%COMP%] {\n  --imgWidth: 300px;\n  display: grid;\n  place-items: center;\n  position: relative;\n}\n\n.imgBorder[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: calc(var(--imgWidth) + 20px);\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  animation: _ngcontent-%COMP%_rot 1s linear infinite;\n}\n\n.imgBackground[_ngcontent-%COMP%]:hover   .imgBorder[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n\n.imgBackground[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: var(--imgWidth);\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  animation: none;\n  aspect-ratio: 1;\n}\n\n.profileImgWrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.profileImgWrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(h1, h3)[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profession[_ngcontent-%COMP%] {\n  font-weight: 100;\n  display: flex;\n  justify-content: center;\n}\n\n.aniamteProfession[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_type 2s ease-out 1s infinite alternate;\n  width: 0%;\n  overflow: hidden;\n  margin-inline-start: 5px;\n  color: var(--clr-primary);\n}\n\n.marker[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: var(--clr-primary);\n}\n\n@keyframes _ngcontent-%COMP%_type {\n  0% {\n    width: 0%;\n  }\n  90% {\n    width: 45%;\n  }\n  100% {\n    width: 45%;\n  }\n}\n@keyframes _ngcontent-%COMP%_rot {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFWRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUFhSjs7QUF6QkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FBNEJKOztBQXhDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUEyQ0o7O0FBdkRFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQTBESjs7QUF0RUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FBeUVKOztBQXJGRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUF3Rko7O0FBcEdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQXVHSjs7QUFuSEU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FBc0hKOztBQWxJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUFxSUo7O0FBakpFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQW9KSjs7QUFoS0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDZCQUFBO0FBbUtKOztBQS9LRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsNkJBQUE7QUFrTEo7O0FBOUxFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQWlNSjs7QUE3TUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FBZ05KOztBQTdNQTtFQUNFO0lBQ0UsMEJBQUE7RUFnTkY7RUE3TUE7SUFDRSxrQ0FBQTtFQStNRjtFQTVNQTtJQUNFLGtDQUFBO0VBOE1GO0FBQ0Y7QUE1TUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBOE1GOztBQTVNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUErTUY7O0FBN01BO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWdORjs7QUE3TUE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7RUFDQSxpQ0FBQTtBQWdORjs7QUE5TUE7RUFDRSw0QkFBQTtBQWlORjs7QUEvTUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBa05GOztBQWhOQTtFQUNFLGlCQUFBO0FBbU5GOztBQWpOQTtFQUNFLGtCQUFBO0FBb05GOztBQWxOQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBcU5GOztBQW5OQTtFQUNFLGlEQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQXNORjs7QUFwTkE7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7QUF1TkY7O0FBck5BO0VBQ0U7SUFDRSxTQUFBO0VBd05GO0VBdE5BO0lBQ0UsVUFBQTtFQXdORjtFQXROQTtJQUNFLFVBQUE7RUF3TkY7QUFDRjtBQXROQTtFQUNFO0lBQ0UsdUJBQUE7RUF3TkY7RUF0TkE7SUFDRSx3QkFBQTtFQXdORjtFQXROQTtJQUNFLHlCQUFBO0VBd05GO0VBdE5BO0lBQ0UseUJBQUE7RUF3TkY7RUF0TkE7SUFDRSx5QkFBQTtFQXdORjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGVCYWxsQ291bnQ6IDE1O1xuJGFuaW1hdGVCYWxsRGlzdGFuY2U6IDE1ZHZoO1xuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkYW5pbWF0ZUJhbGxDb3VudCB7XG4gIC5hbmltYXRpb25CYWxscyA6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiByYW5kb20oMTApICsgcHg7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICAgIG9wYWNpdHk6IHJhbmRvbSgpO1xuICAgIHRvcDogcmFuZG9tKDEwMCkgKiAxJTtcbiAgICBsZWZ0OiByYW5kb20oMTAwKSAqIDElO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogLTE7XG4gICAgYW5pbWF0aW9uOiBiYWxsTW92ZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogcmFuZG9tKCkgKiAxcztcbiAgfVxufVxuQGtleWZyYW1lcyBiYWxsTW92ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcblxuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJGFuaW1hdGVCYWxsRGlzdGFuY2UgKiBmbG9vcihyYW5kb20oMykpIC0gMSwgJGFuaW1hdGVCYWxsRGlzdGFuY2UgKiBmbG9vcihyYW5kb20oMykpIC0gMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkYW5pbWF0ZUJhbGxEaXN0YW5jZSAqIGZsb29yKHJhbmRvbSgzKSkgLSAxLCAkYW5pbWF0ZUJhbGxEaXN0YW5jZSAqIGZsb29yKHJhbmRvbSgzKSkgLSAxKTtcbiAgfVxufVxuLnByb2ZpbGVXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBkdmg7XG4gIG1heC1oZWlnaHQ6IDkwMHB4OyAvL3Rlc3RcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNsci10ZXh0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGVEZXRhaWxzV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbWdCYWNrZ3JvdW5kIHtcbiAgLS1pbWdXaWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuLmltZ0JvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IGNhbGModmFyKC0taW1nV2lkdGgpICsgMjBweCk7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYik7XG4gIGFuaW1hdGlvbjogcm90IDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5pbWdCYWNrZ3JvdW5kOmhvdmVyIC5pbWdCb3JkZXIge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuLmltZ0JhY2tncm91bmQgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogdmFyKC0taW1nV2lkdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBhc3BlY3QtcmF0aW86IDE7XG59XG4ucHJvZmlsZUltZ1dyYXBwZXIgaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9maWxlSW1nV3JhcHBlciA6aXMoaDEsIGgzKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9mZXNzaW9uIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYW5pYW10ZVByb2Zlc3Npb24ge1xuICBhbmltYXRpb246IHR5cGUgMnMgZWFzZS1vdXQgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICB3aWR0aDogMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbn1cbi5tYXJrZXIge1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG59XG5Aa2V5ZnJhbWVzIHR5cGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDkwJSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpXG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9584:
/*!**********************************************************!*\
  !*** ./src/app/skills-resume/skills-resume.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsResumeComponent: () => (/* binding */ SkillsResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const _c0 = a0 => ({
  "--precentageValue": a0
});
function SkillsResumeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const educationDetail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, educationDetail_r2.Value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", educationDetail_r2.Value, "%");
  }
}
function SkillsResumeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const educationDetail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, educationDetail_r3.Value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", educationDetail_r3.Value, "%");
  }
}
class SkillsResumeComponent {
  constructor() {
    this.designSkillDetails = {
      title: 'Plugin Skill',
      skillsList: [{
        title: 'Figma',
        Value: 70
      }, {
        title: 'Photoshop',
        Value: 90
      }, {
        title: 'Bootstrap',
        Value: 100
      }, {
        title: 'Ag-Grid',
        Value: 85
      }, {
        title: 'Keycloak',
        Value: 85
      }]
    };
    this.developmentSkillDetails = {
      title: 'Development Skill',
      skillsList: [{
        title: 'Html',
        Value: 95
      }, {
        title: 'CSS',
        Value: 90
      }, {
        title: 'Angular',
        Value: 85
      }, {
        title: 'Typescript',
        Value: 85
      }, {
        title: 'Javascript',
        Value: 85
      }]
    };
  }
  static #_ = this.ɵfac = function SkillsResumeComponent_Factory(t) {
    return new (t || SkillsResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SkillsResumeComponent,
    selectors: [["app-skills-resume"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 4,
    consts: [[1, "resumeDetailsWrapperPercentages"], [1, "resumedetailsrow"], ["class", "skillList", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "skillList", 3, "ngStyle"], [1, "prcentageDiaplay"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"]],
    template: function SkillsResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsResumeComponent_div_4_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SkillsResumeComponent_div_8_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.designSkillDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.designSkillDetails.skillsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.developmentSkillDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.developmentSkillDetails.skillsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.cardStack[_ngcontent-%COMP%] {\n  --design-width: 5px;\n  --design-top: 20%;\n  --design-space: var(--space-s-2xl);\n  margin-block-start: var(--space-s-m);\n  padding-inline-start: calc(var(--design-space) / 2);\n  margin-inline-start: calc(var(--design-space) / 2);\n  border-inline-start: var(--design-width) solid var(--clr-dark-gray);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%] {\n  position: relative;\n  margin-inline-start: calc(var(--design-space) / 2);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: var(--design-width);\n  width: var(--design-space);\n  background: var(--clr-dark-gray);\n  left: calc(var(--design-space) * -1);\n  top: var(--design-top);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: calc(var(--design-width) * 2);\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background: var(--clr-background);\n  box-shadow: 0px 0px 0px var(--design-width) var(--clr-dark-gray);\n  transform: translate(-25%, -25%);\n  left: calc((var(--design-space) + var(--design-width)) * -1);\n  top: var(--design-top);\n}\n\n.cardStack[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(.detailsCard:hover) {\n  --design-top: 50%;\n}\n\n.resumedetailsrow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-block: var(--space-s-m);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n\n.cardStack[_ngcontent-%COMP%] {\n  --animation-height:30dvh;\n}\n\n.detailsCard[_ngcontent-%COMP%] {\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  margin-inline-end: var(--space-xs-s);\n  margin-block-end: var(--space-xs-s);\n  border-radius: 5px;\n  padding: var(--space-s-l);\n  flex-shrink: 1;\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%] {\n  margin-block: var(--space-xs-s);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--clr-black);\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  font-size: var(--step--1);\n  letter-spacing: -1px;\n  font-weight: 500;\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  padding: var(--space-3xs) var(--space-xs);\n  display: inline-block;\n  border-radius: 5px;\n  font-weight: 500;\n  color: var(--clr-primary);\n  background-color: var(--clr-white);\n}\n.detailsCard[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: var(--clr-dark-gray);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--step-0);\n  color: var(--clr-black);\n  line-height: var(--space-s-m);\n  text-align: left;\n}\n\n.resumeDetailsWrapper[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover {\n  background: var(--clr-gradient-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--clr-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: left;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover::after {\n  background: var(--clr-primary) !important;\n}\n\n@media screen and (width >= 992px) {\n  .resumeDetailsWrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.skillList[_ngcontent-%COMP%] {\n  margin: var(--space-m-l);\n  position: relative;\n}\n.skillList[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .skillList[_ngcontent-%COMP%]   .prcentageDiaplay[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.skillList[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding-block-end: var(--space-s-m);\n}\n.skillList[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 100dvw;\n  align-items: center;\n  background: var(--clr-dark-gray);\n}\n.skillList[_ngcontent-%COMP%]   .prcentageDiaplay[_ngcontent-%COMP%] {\n  color: var(--clr-text);\n  position: absolute;\n  left: 0;\n  transform: translate(-50%, -100%);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_percentAnimate 0.5s ease-in-out 0.3s 1 normal forwards;\n}\n.skillList[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 7px;\n  width: 0;\n  border-radius: 100dvw;\n  background: linear-gradient(45deg, var(--clr-white), var(--clr-primary));\n  animation-duration: 0.5s;\n  animation-delay: 0.3s;\n  animation-name: _ngcontent-%COMP%_leftToRight;\n  animation: _ngcontent-%COMP%_leftToRight 0.5s ease-in-out 0.3s 1 normal forwards;\n}\n\n@keyframes _ngcontent-%COMP%_percentAnimate {\n  0% {\n    left: 0%;\n    opacity: 0;\n  }\n  100% {\n    left: calc(var(--precentageValue, 0) * 1%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: calc(var(--precentageValue, 0) * 1%);\n  }\n}\n.resumeDetailsWrapperPercentages[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n@media screen and (width >= 768px) {\n  .resumeDetailsWrapperPercentages[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGxzLXJlc3VtZS9za2lsbHMtcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvcmVzdW1lLXRlbXBsYXRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDRTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtFQ1pBO0VEY0E7SUFDQSx5QkFBQTtJQUNFLFVBQUE7RUNaRjtBQUNGO0FEY0U7RUFDRTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtFQ1pGO0VEY0U7SUFDQSwyQkFBQTtJQUNFLFVBQUE7RUNaSjtBQUNGO0FDbEJBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtREFBQTtFQUVBLGtEQUFBO0VBQ0EsbUVBQUE7QURtQkY7QUNsQkU7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0FEb0JKO0FDaEJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRGtCSjtBQ2ZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdFQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0FEaUJKOztBQ2JBO0VBQ0UsaUJBQUE7QURnQkY7O0FDZEE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VGNUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0FDOERGOztBQ2xCQTtFQUNFLHdCQUFBO0FEcUJGOztBQ25CQTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUZ6REEsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7QUNnRkY7QUN0QkU7RUFDRSwrQkFBQTtBRHdCSjtBQ3RCSTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7QUR3Qk47QUNwQkk7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FEc0JOO0FDbEJJO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FEb0JOO0FDaEJFO0VBQ0UsMkJBQUE7QURrQko7QUNkSTtFQUNFLHdCQUFBO0VBRUEsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FEZU47O0FDVkE7RUFDRSxhQUFBO0FEYUY7O0FDVEE7RUFDRSx1Q0FBQTtBRFlGO0FDUkk7O0VBRUUsWUFBQTtBRFVOO0FDUEk7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7QURTTjtBQ0pJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FETU47O0FDREE7RUFDRSx5Q0FBQTtBRElGOztBQ0RBO0VBQ0U7SUFDRSw4QkFBQTtFRElGO0FBQ0Y7QUNGQTtFQUNFO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VESUE7RUNGQTtJQUNBLHlCQUFBO0lBQ0UsVUFBQTtFRElGO0FBQ0Y7QUQ5SUE7RUFDRTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtFQ2dKQTtFRDlJQTtJQUNBLHlCQUFBO0lBQ0UsVUFBQTtFQ2dKRjtBQUNGO0FEOUlFO0VBQ0U7SUFDQSw2QkFBQTtJQUNBLFVBQUE7RUNnSkY7RUQ5SUU7SUFDQSwyQkFBQTtJQUNFLFVBQUE7RUNnSko7QUFDRjtBQTdLQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUErS0Y7QUE5S0U7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0YsbUJBQUE7QUFnTEY7QUE5S0E7RUFDRSxtQ0FBQTtBQWdMRjtBQTlLRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFnTEo7QUE5S0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLGlFQUFBO0FBZ0xKO0FBN0tFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHdFQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOERBQUE7QUErS0o7O0FBNUtBO0VBQ0U7SUFDRSxRQUFBO0lBQ0EsVUFBQTtFQStLRjtFQTdLQTtJQUNFLDBDQUFBO0lBQ0EsVUFBQTtFQStLRjtBQUNGO0FBN0tBO0VBQ0U7SUFDRSxTQUFBO0VBK0tGO0VBN0tBO0lBQ0UsMkNBQUE7RUErS0Y7QUFDRjtBQTVLQTtFQUNBLGFBQUE7QUE4S0E7O0FBNUtBO0VBQ0U7SUFDRSw4QkFBQTtFQStLRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHJldmVsKCl7XG4gIGFuaW1hdGlvbjogcmV2ZWwgbGluZWFyIGZvcndhcmRzO1xuICBhbmltYXRpb24tdGltZWxpbmU6IHZpZXcoKTtcbiAgYW5pbWF0aW9uLXJhbmdlLXN0YXJ0OiBjb3ZlciAwZHZoO1xuICBhbmltYXRpb24tcmFuZ2UtZW5kOiBjb3ZlciB2YXIoLS1hbmltYXRpb24taGVpZ2h0KTtcbn1cbkBtaXhpbiBsZWZ0VG9SaWdodCgpe1xuICBhbmltYXRpb246IGxlZnRUb1JpZ2h0IDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICBhbmltYXRpb24tdGltZWxpbmU6IHZpZXcoKTtcbiAgYW5pbWF0aW9uLXJhbmdlLXN0YXJ0OiBjb3ZlciAwZHZoO1xuICBhbmltYXRpb24tcmFuZ2UtZW5kOiBjb3ZlciB2YXIoLS1hbmltYXRpb24taGVpZ2h0KTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbn1cbkBrZXlmcmFtZXMgcmV2ZWwge1xuICAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCV7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbGVmdFRvUmlnaHQge1xuICAgIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBkdncpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBkdncpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgfVxuXG4iLCJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2Nzcy9yZXN1bWUtdGVtcGxhdGUuc2Nzc1wiO1xuQGltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9hbmltYXRpb25zLnNjc3MnO1xuLnNraWxsTGlzdHtcbiAgbWFyZ2luOnZhcigtLXNwYWNlLW0tbCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaDYsLnByY2VudGFnZURpYXBsYXl7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuaDZ7XG4gIHBhZGRpbmctYmxvY2stZW5kOiB2YXIoLS1zcGFjZS1zLW0pO1xufVxuICAucHJvZ3Jlc3N7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMGR2dztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1kYXJrLWdyYXkpO1xuICB9XG4gIC5wcmNlbnRhZ2VEaWFwbGF5e1xuICAgIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBwZXJjZW50QW5pbWF0ZSAwLjVzIGVhc2UtaW4tb3V0IDAuM3MgMSBub3JtYWwgZm9yd2FyZHM7XG5cbiAgfVxuICAucHJvZ3Jlc3MtYmFye1xuICAgIGhlaWdodDogN3B4O1xuICAgIHdpZHRoOjA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwZHZ3O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZyx2YXIoLS1jbHItd2hpdGUpLCB2YXIoLS1jbHItcHJpbWFyeSkpO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGxlZnRUb1JpZ2h0O1xuICAgIGFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMC41cyBlYXNlLWluLW91dCAwLjNzIDEgbm9ybWFsIGZvcndhcmRzO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBlcmNlbnRBbmltYXRlIHtcbiAgMCV7XG4gICAgbGVmdDogMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAle1xuICAgIGxlZnQ6IGNhbGModmFyKC0tcHJlY2VudGFnZVZhbHVlLCAwKSAqIDElKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgMCV7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCV7XG4gICAgd2lkdGg6Y2FsYyggdmFyKC0tcHJlY2VudGFnZVZhbHVlLDApICogMSUpO1xuICB9XG59XG5cbi5yZXN1bWVEZXRhaWxzV3JhcHBlclBlcmNlbnRhZ2Vze1xuZGlzcGxheTogZ3JpZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aD49NzY4cHgpIHtcbiAgLnJlc3VtZURldGFpbHNXcmFwcGVyUGVyY2VudGFnZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vY3NzL2FuaW1hdGlvbnMuc2Nzcyc7XG4uY2FyZFN0YWNrIHtcbiAgLS1kZXNpZ24td2lkdGg6IDVweDtcbiAgLS1kZXNpZ24tdG9wOiAyMCU7XG4gIC0tZGVzaWduLXNwYWNlOiB2YXIoLS1zcGFjZS1zLTJ4bCk7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2Utcy1tKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKS8yKTtcbiAgLy8gcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkvMik7XG4gIGJvcmRlci1pbmxpbmUtc3RhcnQ6IHZhcigtLWRlc2lnbi13aWR0aCkgc29saWQgdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gIC5kZXRhaWxzQ2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKS8yKTtcblxuICB9XG5cbiAgLmRldGFpbHNDYXJkOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogdmFyKC0tZGVzaWduLXdpZHRoKTtcbiAgICB3aWR0aDogdmFyKC0tZGVzaWduLXNwYWNlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgICBsZWZ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkqLTEpO1xuICAgIHRvcDogdmFyKC0tZGVzaWduLXRvcCk7XG4gIH1cblxuICAuZGV0YWlsc0NhcmQ6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1kZXNpZ24td2lkdGgpICoyKTtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0tZGVzaWduLXdpZHRoKSB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtMjUlKTtcbiAgICBsZWZ0OiBjYWxjKCh2YXIoLS1kZXNpZ24tc3BhY2UpICsgdmFyKC0tZGVzaWduLXdpZHRoKSkgKiAtMSk7XG4gICAgdG9wOiB2YXIoLS1kZXNpZ24tdG9wKTtcbiAgfVxufVxuXG4uY2FyZFN0YWNrIDppcyguZGV0YWlsc0NhcmQ6aG92ZXIpIHtcbiAgLS1kZXNpZ24tdG9wOiA1MCU7XG59XG4ucmVzdW1lZGV0YWlsc3JvdyBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc3BhY2Utcy1tKTtcbiAgQGluY2x1ZGUgcmV2ZWw7XG59XG4uY2FyZFN0YWNre1xuICAtLWFuaW1hdGlvbi1oZWlnaHQ6MzBkdmg7XG59XG4uZGV0YWlsc0NhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ib3gpO1xuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc3BhY2UteHMtcyk7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLXhzLXMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXMtbCk7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBAaW5jbHVkZSByZXZlbDtcblxuXG4gIC5kZXRhaWxzSGVhZGluZyB7XG4gICAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS14cy1zKTtcblxuICAgIGg1IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UtMnhzLXhzKTtcblxuICAgIH1cblxuICAgIGg2IHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vc3BhY2UpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLTJ4cy14cyk7XG5cbiAgICB9XG5cbiAgICAuZGV0YWlsc0dyYWRlIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLTN4cykgdmFyKC0tc3BhY2UteHMpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuICAgIH1cbiAgfVxuXG4gIGhyIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gIH1cblxuICAuZGV0YWlsc1N1bW1lcnkge1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICAgICAgLy8gZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XG4gICAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1zcGFjZS1zLW0pO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cblxuLnJlc3VtZURldGFpbHNXcmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuXG4uZGV0YWlsc0NhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ3JhZGllbnQtcHJpbWFyeSk7XG5cbiAgLmRldGFpbHNIZWFkaW5nIHtcblxuICAgIGg2LFxuICAgIGg1IHtcbiAgICAgIGNvbG9yOiAjZmZmZjtcbiAgICB9XG5cbiAgICAuZGV0YWlsc0dyYWRlIHtcbiAgICAgIGNvbG9yOiAjZmZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsc1N1bW1lcnkge1xuICAgIHAge1xuICAgICAgY29sb3I6ICNmZmZmO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cblxuLmRldGFpbHNDYXJkOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGg+PTk5MnB4KSB7XG4gIC5yZXN1bWVEZXRhaWxzV3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJldmVsIHtcbiAgMCV7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 7110);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 6401);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map