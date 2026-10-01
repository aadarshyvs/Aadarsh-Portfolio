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
      "title": "Projects",
      "detailsList": [{
        "title": "CHAMP \u2014 Enterprise Licensing Platform Migration",
        "duration": "Sep 2022 \u2013 Present",
        "grade": "Angular Frontend Architecture",
        "summary": "Sole architect and UI owner for a greenfield migration replacing ECMS and reducing licensing costs by 80%. Designed module structure, state management, REST API integration and Keycloak/MSAL authentication. Built server-side Ag-Grid Community pagination, sorting and filtering, CSV processing, XML-based ADI search, BPMN visualization and Drools rule configuration. Lazy loading and code splitting reduced initial load time by 30%."
      }, {
        "title": "Security Report Aggregation Tool",
        "duration": "2024 \u2013 Present",
        "grade": "Internal Utility \u00b7 Angular Full Stack",
        "summary": "Built a centralized dashboard for security reports from Veracode, SonarQube and Prisma across the Cox account. Automated SonarQube reporting for 15 services, reducing manual effort from 2 hours to 5 minutes and helping teams track vulnerabilities and application health."
      }, {
        "title": "NoSQL / Elasticsearch Data Management Dashboard",
        "duration": "2024 \u2013 Present",
        "grade": "Internal Utility \u00b7 Angular Full Stack",
        "summary": "Created an Ag-Grid index dashboard with health, document counts, store sizes and CSV export. Built a mapping-driven document explorer with field selection, advanced filters, raw JSON queries and Scroll API integration. Added document viewing, editing, saving and deletion, a typed HTTP service and configurable environments."
      }]
    };
    this.companyDetails = {
      "title": "Work Experience",
      "detailsList": [{
        "title": "Capgemini \u2014 Angular Tech Lead",
        "duration": "Sep 2022 \u2013 Present",
        "grade": "Senior Analyst grade",
        "summary": "Own frontend delivery from architecture and client requirements through UX decisions, code reviews and production deployments. Build enterprise interfaces with Angular, TypeScript, RxJS, Ag-Grid and advanced CSS. Mentor junior developers and maintain critical UI tests with Jasmine and Karma. Support Java/Spring REST endpoints, data contracts and auth token handling when needed. Use Claude, GPT, Windsurf and Codeium across the SDLC, achieving about 25% productivity gains. Received Innovation and Customer Delight awards."
      }, {
        "title": "Capgemini \u2014 Analyst (Intern)",
        "duration": "Jan 2022 \u2013 Aug 2022",
        "grade": "Internship",
        "summary": "Contributed to database management, web development and API integration using ASP.NET MVC, SQL, HTML, Bootstrap and Git. Collaborated with senior developers and strengthened teamwork, time management and presentation skills through knowledge sharing and demos."
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
    styles: ["@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.cardStack[_ngcontent-%COMP%] {\n  --design-width: 5px;\n  --design-top: 20%;\n  --design-space: var(--space-s-2xl);\n  margin-block-start: var(--space-s-m);\n  padding-inline-start: calc(var(--design-space) / 2);\n  margin-inline-start: calc(var(--design-space) / 2);\n  border-inline-start: var(--design-width) solid var(--clr-dark-gray);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%] {\n  position: relative;\n  margin-inline-start: calc(var(--design-space) / 2);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: var(--design-width);\n  width: var(--design-space);\n  background: var(--clr-dark-gray);\n  left: calc(var(--design-space) * -1);\n  top: var(--design-top);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: calc(var(--design-width) * 2);\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background: var(--clr-background);\n  box-shadow: 0px 0px 0px var(--design-width) var(--clr-dark-gray);\n  transform: translate(-25%, -25%);\n  left: calc((var(--design-space) + var(--design-width)) * -1);\n  top: var(--design-top);\n}\n\n.cardStack[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(.detailsCard:hover) {\n  --design-top: 50%;\n}\n\n.resumedetailsrow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-block: var(--space-s-m);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n\n.cardStack[_ngcontent-%COMP%] {\n  --animation-height:30dvh;\n}\n\n.detailsCard[_ngcontent-%COMP%] {\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  margin-inline-end: var(--space-xs-s);\n  margin-block-end: var(--space-xs-s);\n  border-radius: 5px;\n  padding: var(--space-s-l);\n  flex-shrink: 1;\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%] {\n  margin-block: var(--space-xs-s);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--clr-black);\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  font-size: var(--step--1);\n  letter-spacing: -1px;\n  font-weight: 500;\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  padding: var(--space-3xs) var(--space-xs);\n  display: inline-block;\n  border-radius: 5px;\n  font-weight: 500;\n  color: var(--clr-primary);\n  background-color: var(--clr-white);\n}\n.detailsCard[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: var(--clr-dark-gray);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--step-0);\n  color: var(--clr-black);\n  line-height: var(--space-s-m);\n  text-align: left;\n}\n\n.resumeDetailsWrapper[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover {\n  background: var(--clr-gradient-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--clr-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: left;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover::after {\n  background: var(--clr-primary) !important;\n}\n\n@media screen and (width >= 992px) {\n  .resumeDetailsWrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n.resumeDetailsWrapper[_ngcontent-%COMP%] {\n  gap: 24px;\n  padding-block: 24px;\n}\n\n.resumedetailsrow[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.resumedetailsrow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: clamp(1.4rem, 2vw, 1.9rem);\n  line-height: 1.4;\n}\n\n.cardStack[_ngcontent-%COMP%] {\n  --design-space: 24px;\n  --design-width: 3px;\n}\n\n.detailsCard[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  padding: clamp(20px, 2.5vw, 32px);\n  margin-bottom: 24px;\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: clamp(1.2rem, 1.8vw, 1.5rem);\n  line-height: 1.4;\n  overflow-wrap: anywhere;\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  letter-spacing: 0;\n  line-height: 1.5;\n  margin-block: 10px;\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.5;\n  padding: 6px 10px;\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.8;\n  margin-bottom: 0;\n}\n\n@media (max-width: 480px) {\n  .cardStack[_ngcontent-%COMP%] {\n    --design-space: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS1yZXN1bWUvZXhwZXJpZW5jZS1yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9yZXN1bWUtdGVtcGxhdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNFO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VDWkE7RURjQTtJQUNBLHlCQUFBO0lBQ0UsVUFBQTtFQ1pGO0FBQ0Y7QURjRTtFQUNFO0lBQ0EsNkJBQUE7SUFDQSxVQUFBO0VDWkY7RURjRTtJQUNBLDJCQUFBO0lBQ0UsVUFBQTtFQ1pKO0FBQ0Y7QUNsQkE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1EQUFBO0VBRUEsa0RBQUE7RUFDQSxtRUFBQTtBRG1CRjtBQ2xCRTtFQUNFLGtCQUFBO0VBQ0Esa0RBQUE7QURvQko7QUNoQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEa0JKO0FDZkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0VBQUE7RUFDQSxnQ0FBQTtFQUNBLDREQUFBO0VBQ0Esc0JBQUE7QURpQko7O0FDYkE7RUFDRSxpQkFBQTtBRGdCRjs7QUNkQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUY1Q0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7QUM4REY7O0FDbEJBO0VBQ0Usd0JBQUE7QURxQkY7O0FDbkJBO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFRnpEQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrREFBQTtBQ2dGRjtBQ3RCRTtFQUNFLCtCQUFBO0FEd0JKO0FDdEJJO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtBRHdCTjtBQ3BCSTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QURzQk47QUNsQkk7RUFDRSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QURvQk47QUNoQkU7RUFDRSwyQkFBQTtBRGtCSjtBQ2RJO0VBQ0Usd0JBQUE7RUFFQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QURlTjs7QUNWQTtFQUNFLGFBQUE7QURhRjs7QUNUQTtFQUNFLHVDQUFBO0FEWUY7QUNSSTs7RUFFRSxZQUFBO0FEVU47QUNQSTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtBRFNOO0FDSkk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QURNTjs7QUNEQTtFQUNFLHlDQUFBO0FESUY7O0FDREE7RUFDRTtJQUNFLDhCQUFBO0VESUY7QUFDRjtBQ0ZBO0VBQ0U7SUFDQSwyQkFBQTtJQUNBLFVBQUE7RURJQTtFQ0ZBO0lBQ0EseUJBQUE7SUFDRSxVQUFBO0VESUY7QUFDRjtBQTFKQTtFQUF3QixTQUFBO0VBQVcsbUJBQUE7QUE4Sm5DOztBQTdKQTtFQUFvQixZQUFBO0FBaUtwQjs7QUFoS0E7RUFBdUIscUNBQUE7RUFBdUMsZ0JBQUE7QUFxSzlEOztBQXBLQTtFQUFhLG9CQUFBO0VBQXNCLG1CQUFBO0FBeUtuQzs7QUF4S0E7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUEyS0Y7QUExS0U7RUFBcUIsdUNBQUE7RUFBeUMsZ0JBQUE7RUFBa0IsdUJBQUE7QUErS2xGO0FBOUtFO0VBQXFCLGtCQUFBO0VBQW1CLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGtCQUFBO0FBb0wvRTtBQW5MRTtFQUFnQyxrQkFBQTtFQUFtQixnQkFBQTtFQUFrQixpQkFBQTtBQXdMdkU7QUF2TEU7RUFBb0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixnQkFBQTtBQTRMekQ7O0FBMUxBO0VBQTRCO0lBQWEsb0JBQUE7RUErTHZDO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gcmV2ZWwoKXtcbiAgYW5pbWF0aW9uOiByZXZlbCBsaW5lYXIgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xufVxuQG1peGluIGxlZnRUb1JpZ2h0KCl7XG4gIGFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuQGtleWZyYW1lcyByZXZlbCB7XG4gIDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gICAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MGR2dyk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMGR2dyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB9XG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvY3NzL3Jlc3VtZS10ZW1wbGF0ZS5zY3NzXCI7XG4ucmVzdW1lRGV0YWlsc1dyYXBwZXIgeyBnYXA6IDI0cHg7IHBhZGRpbmctYmxvY2s6IDI0cHg7IH1cbi5yZXN1bWVkZXRhaWxzcm93IHsgbWluLXdpZHRoOiAwOyB9XG4ucmVzdW1lZGV0YWlsc3JvdyBoMyB7IGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAydncsIDEuOXJlbSk7IGxpbmUtaGVpZ2h0OiAxLjQ7IH1cbi5jYXJkU3RhY2sgeyAtLWRlc2lnbi1zcGFjZTogMjRweDsgLS1kZXNpZ24td2lkdGg6IDNweDsgfVxuLmRldGFpbHNDYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogY2xhbXAoMjBweCwgMi41dncsIDMycHgpO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAuZGV0YWlsc0hlYWRpbmcgaDUgeyBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMS44dncsIDEuNXJlbSk7IGxpbmUtaGVpZ2h0OiAxLjQ7IG92ZXJmbG93LXdyYXA6IGFueXdoZXJlOyB9XG4gIC5kZXRhaWxzSGVhZGluZyBoNiB7IGZvbnQtc2l6ZTogLjk1cmVtOyBsZXR0ZXItc3BhY2luZzogMDsgbGluZS1oZWlnaHQ6IDEuNTsgbWFyZ2luLWJsb2NrOiAxMHB4OyB9XG4gIC5kZXRhaWxzSGVhZGluZyAuZGV0YWlsc0dyYWRlIHsgZm9udC1zaXplOiAuODVyZW07IGxpbmUtaGVpZ2h0OiAxLjU7IHBhZGRpbmc6IDZweCAxMHB4OyB9XG4gIC5kZXRhaWxzU3VtbWVyeSBwIHsgZm9udC1zaXplOiAxcmVtOyBsaW5lLWhlaWdodDogMS44OyBtYXJnaW4tYm90dG9tOiAwOyB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHsgLmNhcmRTdGFjayB7IC0tZGVzaWduLXNwYWNlOiAxNnB4OyB9IH1cbiIsIkBpbXBvcnQgJy4uL2Nzcy9hbmltYXRpb25zLnNjc3MnO1xuLmNhcmRTdGFjayB7XG4gIC0tZGVzaWduLXdpZHRoOiA1cHg7XG4gIC0tZGVzaWduLXRvcDogMjAlO1xuICAtLWRlc2lnbi1zcGFjZTogdmFyKC0tc3BhY2Utcy0yeGwpO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IHZhcigtLXNwYWNlLXMtbSk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkvMik7XG4gIC8vIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpLzIpO1xuICBib3JkZXItaW5saW5lLXN0YXJ0OiB2YXIoLS1kZXNpZ24td2lkdGgpIHNvbGlkIHZhcigtLWNsci1kYXJrLWdyYXkpO1xuICAuZGV0YWlsc0NhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkvMik7XG5cbiAgfVxuXG4gIC5kZXRhaWxzQ2FyZDo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IHZhcigtLWRlc2lnbi13aWR0aCk7XG4gICAgd2lkdGg6IHZhcigtLWRlc2lnbi1zcGFjZSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gICAgbGVmdDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpKi0xKTtcbiAgICB0b3A6IHZhcigtLWRlc2lnbi10b3ApO1xuICB9XG5cbiAgLmRldGFpbHNDYXJkOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IGNhbGModmFyKC0tZGVzaWduLXdpZHRoKSAqMik7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHZhcigtLWRlc2lnbi13aWR0aCkgdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTI1JSk7XG4gICAgbGVmdDogY2FsYygodmFyKC0tZGVzaWduLXNwYWNlKSArIHZhcigtLWRlc2lnbi13aWR0aCkpICogLTEpO1xuICAgIHRvcDogdmFyKC0tZGVzaWduLXRvcCk7XG4gIH1cbn1cblxuLmNhcmRTdGFjayA6aXMoLmRldGFpbHNDYXJkOmhvdmVyKSB7XG4gIC0tZGVzaWduLXRvcDogNTAlO1xufVxuLnJlc3VtZWRldGFpbHNyb3cgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNwYWNlLXMtbSk7XG4gIEBpbmNsdWRlIHJldmVsO1xufVxuLmNhcmRTdGFja3tcbiAgLS1hbmltYXRpb24taGVpZ2h0OjMwZHZoO1xufVxuLmRldGFpbHNDYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tb3V0ZXItc2hhZG93KTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXNwYWNlLXhzLXMpO1xuICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS14cy1zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zLWwpO1xuICBmbGV4LXNocmluazogMTtcbiAgQGluY2x1ZGUgcmV2ZWw7XG5cblxuICAuZGV0YWlsc0hlYWRpbmcge1xuICAgIG1hcmdpbi1ibG9jazogdmFyKC0tc3BhY2UteHMtcyk7XG5cbiAgICBoNSB7XG4gICAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLTJ4cy14cyk7XG5cbiAgICB9XG5cbiAgICBoNiB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS0yeHMteHMpO1xuXG4gICAgfVxuXG4gICAgLmRldGFpbHNHcmFkZSB7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0zeHMpIHZhcigtLXNwYWNlLXhzKTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcbiAgICB9XG4gIH1cblxuICBociB7XG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrLWdyYXkpO1xuICB9XG5cbiAgLmRldGFpbHNTdW1tZXJ5IHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbiAgICAgIC8vIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vc3BhY2UpO1xuICAgICAgY29sb3I6IHZhcigtLWNsci1ibGFjayk7XG4gICAgICBsaW5lLWhlaWdodDogdmFyKC0tc3BhY2Utcy1tKTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG59XG5cbi5yZXN1bWVEZXRhaWxzV3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cblxuLmRldGFpbHNDYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWdyYWRpZW50LXByaW1hcnkpO1xuXG4gIC5kZXRhaWxzSGVhZGluZyB7XG5cbiAgICBoNixcbiAgICBoNSB7XG4gICAgICBjb2xvcjogI2ZmZmY7XG4gICAgfVxuXG4gICAgLmRldGFpbHNHcmFkZSB7XG4gICAgICBjb2xvcjogI2ZmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbHNTdW1tZXJ5IHtcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjZmZmZjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG59XG5cbi5kZXRhaWxzQ2FyZDpob3Zlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoPj05OTJweCkge1xuICAucmVzdW1lRGV0YWlsc1dyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuQGtleWZyYW1lcyByZXZlbCB7XG4gIDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      title: "Frontend Architecture",
      content: "Sole architect and UI owner for CHAMP at Capgemini. Built the Angular frontend from scratch for a migration that reduced licensing costs by 80%."
    }, {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>`,
      title: "Performance & AI-Assisted Delivery",
      content: "Angular, TypeScript, RxJS and Ag-Grid at enterprise scale. Reduced initial load time by 30% with lazy loading and code splitting; achieved about 25% productivity gains using Claude, GPT, Windsurf and Codeium."
    }, {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>',
      title: "Award-Winning Innovation",
      content: "Capgemini Innovation Award (February 2024) and Customer Delight Award (September 2023), recognizing UI innovation and consistently exceeding client expectations."
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
    styles: ["@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.highlightsWrapper[_ngcontent-%COMP%] {\n  margin-block-start: 100px;\n  margin: var(--space-s-2xl);\n  --animation-height:30dvh;\n}\n.highlightsWrapper[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  color: var(--clr-primary);\n  letter-spacing: 2px;\n  line-height: 14px;\n  font-weight: 500;\n  text-align: center;\n}\n.highlightsWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  height: 90%;\n  margin-block-start: var(--space-m-l);\n  padding: var(--space-s-2xl);\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  border-radius: 5px;\n  flex-shrink: 1;\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.highlight[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding-block-end: var(--space-s-m);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.highlight[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-block-end: var(--space-3xs-2xs);\n  font-size: var(--step-2);\n  font-weight: 500;\n  color: var(--clr-black);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n.highlight[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-block-end: var(--space-s-l);\n  color: var(--clr-black);\n  animation: _ngcontent-%COMP%_revel linear forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n}\n\n.highlight[_ngcontent-%COMP%]:hover {\n  --clr-icon:rgb(255, 255, 255) !important;\n  background: var(--clr-gradient-primary);\n}\n.highlight[_ngcontent-%COMP%]:hover   .highlight[_ngcontent-%COMP%] {\n  scale: 1.1;\n}\n.highlight[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], .highlight[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n}\n\n.highlight[_ngcontent-%COMP%] {\n  height: calc(100% - var(--space-m-l));\n  border-radius: 16px;\n  padding: clamp(24px, 3vw, 36px);\n}\n.highlight[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: clamp(1.3rem, 2vw, 1.75rem);\n  line-height: 1.35;\n  margin-bottom: 16px;\n}\n.highlight[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.8;\n  text-align: left;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktaGlnaGxpZ2h0cy9teS1oaWdobGlnaHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0U7SUFDQSwyQkFBQTtJQUNBLFVBQUE7RUNaQTtFRGNBO0lBQ0EseUJBQUE7SUFDRSxVQUFBO0VDWkY7QUFDRjtBRGNFO0VBQ0U7SUFDQSw2QkFBQTtJQUNBLFVBQUE7RUNaRjtFRGNFO0lBQ0EsMkJBQUE7SUFDRSxVQUFBO0VDWko7QUFDRjtBQWxCQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQW9CSjtBQW5CSTtFQUNDLDZCQUFBO0VBQ0cseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXFCUjtBQWxCSTtFQUNFLGtCQUFBO0FBb0JOOztBQWhCQTtFQUNFLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFRDFCQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrREFBQTtBQzZDRjtBQXBCRTtFQUNFLG1DQUFBO0VEN0JGLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0FDb0RGO0FBdkJFO0VBQ0Usc0NBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RURwQ0YsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7QUM4REY7QUExQkU7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0VEekNGLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0FDc0VGOztBQTNCQTtFQUNFLHdDQUFBO0VBQ0EsdUNBQUE7QUE4QkY7QUE3QkU7RUFDRSxVQUFBO0FBK0JKO0FBN0JFO0VBQ0UseUJBQUE7QUErQko7O0FBM0JBO0VBQ0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBOEJGO0FBN0JFO0VBQVMsc0NBQUE7RUFBd0MsaUJBQUE7RUFBbUIsbUJBQUE7QUFrQ3RFO0FBakNFO0VBQVcsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixnQkFBQTtBQXVDbEUiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gcmV2ZWwoKXtcbiAgYW5pbWF0aW9uOiByZXZlbCBsaW5lYXIgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xufVxuQG1peGluIGxlZnRUb1JpZ2h0KCl7XG4gIGFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2Utc3RhcnQ6IGNvdmVyIDBkdmg7XG4gIGFuaW1hdGlvbi1yYW5nZS1lbmQ6IGNvdmVyIHZhcigtLWFuaW1hdGlvbi1oZWlnaHQpO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuQGtleWZyYW1lcyByZXZlbCB7XG4gIDAle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gICAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MGR2dyk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMGR2dyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB9XG5cbiIsIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9jc3MvYW5pbWF0aW9ucy5zY3NzJztcbi5oaWdobGlnaHRzV3JhcHBlcntcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEwMHB4O1xuICAgIG1hcmdpbjogdmFyKC0tc3BhY2Utcy0yeGwpO1xuICAgIC0tYW5pbWF0aW9uLWhlaWdodDozMGR2aDtcbiAgICBoNntcbiAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIEBpbmNsdWRlIGxlZnRUb1JpZ2h0O1xuICAgIH1cbiAgICBoMntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC8vIEBpbmNsdWRlIGxlZnRUb1JpZ2h0O1xuICAgIH1cbn1cbi5oaWdobGlnaHR7XG4gIGhlaWdodDogOTAlO1xuICAvLyBtYXJnaW4taW5saW5lOnZhcigtLXNwYWNlLXMtbSk7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2UtbS1sKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utcy0yeGwpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ib3gpO1xuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBAaW5jbHVkZSByZXZlbDtcbiAgLmljb257XG4gICAgcGFkZGluZy1ibG9jay1lbmQ6IHZhcigtLXNwYWNlLXMtbSk7XG4gIEBpbmNsdWRlIHJldmVsO1xuICB9XG4gIC50aXRsZXtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS0zeHMtMnhzKTtcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgQGluY2x1ZGUgcmV2ZWw7XG4gIH1cbiAgLmNvbnRlbnR7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2Utcy1sKTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcbiAgQGluY2x1ZGUgcmV2ZWw7XG5cbiAgfVxufVxuLmhpZ2hsaWdodDpob3ZlciB7XG4gIC0tY2xyLWljb246cmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmFkaWVudC1wcmltYXJ5KTtcbiAgLmhpZ2hsaWdodHtcbiAgICBzY2FsZTogMS4xO1xuICB9XG4gIC50aXRsZSwuY29udGVudHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG59XG5cbi5oaWdobGlnaHQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXNwYWNlLW0tbCkpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiBjbGFtcCgyNHB4LCAzdncsIDM2cHgpO1xuICAudGl0bGUgeyBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgMnZ3LCAxLjc1cmVtKTsgbGluZS1oZWlnaHQ6IDEuMzU7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbiAgLmNvbnRlbnQgeyBmb250LXNpemU6IDFyZW07IGxpbmUtaGVpZ2h0OiAxLjg7IHRleHQtYWxpZ246IGxlZnQ7IG1hcmdpbi1ib3R0b206IDA7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Professional Experience Since January 2022");
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
    styles: ["@keyframes _ngcontent-%COMP%_revel {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_leftToRight {\n  0% {\n    transform: translateX(-50dvw);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0dvw);\n    opacity: 1;\n  }\n}\n.resumeWrapper[_ngcontent-%COMP%] {\n  margin-block-start: 100px;\n  margin: var(--space-s-2xl);\n  --animation-height:30dvh;\n}\n\n.text-theme[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  color: var(--clr-primary);\n  letter-spacing: 2px;\n  line-height: 14px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.resumeTitle[_ngcontent-%COMP%] {\n  text-align: center;\n  animation: _ngcontent-%COMP%_leftToRight 1s ease-in-out forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n  will-change: transform, opacity;\n}\n\n.resumeSections[_ngcontent-%COMP%] {\n  margin-block-start: var(--space-s-2xl);\n}\n\n.resumeSections[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  --border-radius-nav: 10px;\n  border-radius: var(--border-radius-nav);\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  justify-content: space-between;\n  --animation-height:30dvh;\n  animation: _ngcontent-%COMP%_leftToRight 1s ease-in-out forwards;\n  animation-timeline: view();\n  animation-range-start: cover 0dvh;\n  animation-range-end: cover var(--animation-height);\n  will-change: transform, opacity;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  --resumeSectionCount: 4;\n  flex-basis: calc(100 / var(--resumeSectionCount) * 1%);\n  text-align: center;\n  padding: 25px 7px;\n}\n\n.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-family: var(--fs-heading-font);\n  color: var(--clr-text);\n  font-weight: bold;\n}\n\n.nav-item[_ngcontent-%COMP%]:has(.active) {\n  border-radius: var(--border-radius-nav);\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n}\n.nav-item[_ngcontent-%COMP%]:has(.active)   a[_ngcontent-%COMP%] {\n  color: var(--clr-primary);\n}\n\n@media screen and (width < 620px) {\n  .resumeSections[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.text-theme[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  font-size: 0.9rem;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktcmVzdW1lL215LXJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNFO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VDWkE7RURjQTtJQUNBLHlCQUFBO0lBQ0UsVUFBQTtFQ1pGO0FBQ0Y7QURjRTtFQUNFO0lBQ0EsNkJBQUE7SUFDQSxVQUFBO0VDWkY7RURjRTtJQUNBLDJCQUFBO0lBQ0UsVUFBQTtFQ1pKO0FBQ0Y7QUFsQkE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFvQkY7O0FBakJBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBb0JGOztBQWpCQTtFQUNFLGtCQUFBO0VEVkEsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7RUFDQSwrQkFBQTtBQytCRjs7QUFyQkE7RUFDRSxzQ0FBQTtBQXdCRjs7QUFyQkE7RUFDRSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUR4QkEsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7RUFDQSwrQkFBQTtBQ2lERjs7QUF6QkE7RUFDRSx1QkFBQTtFQUVBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTJCRjs7QUF4QkE7RUFDRSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUEyQkY7O0FBeEJBO0VBS0UsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0FBdUJGO0FBN0JFO0VBQ0UseUJBQUE7QUErQko7O0FBeEJBO0VBQ0U7SUFDRSxzQkFBQTtFQTJCRjtBQUNGO0FBeEJBO0VBQWMsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBa0IsbUJBQUE7QUE2QmxEIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHJldmVsKCl7XG4gIGFuaW1hdGlvbjogcmV2ZWwgbGluZWFyIGZvcndhcmRzO1xuICBhbmltYXRpb24tdGltZWxpbmU6IHZpZXcoKTtcbiAgYW5pbWF0aW9uLXJhbmdlLXN0YXJ0OiBjb3ZlciAwZHZoO1xuICBhbmltYXRpb24tcmFuZ2UtZW5kOiBjb3ZlciB2YXIoLS1hbmltYXRpb24taGVpZ2h0KTtcbn1cbkBtaXhpbiBsZWZ0VG9SaWdodCgpe1xuICBhbmltYXRpb246IGxlZnRUb1JpZ2h0IDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICBhbmltYXRpb24tdGltZWxpbmU6IHZpZXcoKTtcbiAgYW5pbWF0aW9uLXJhbmdlLXN0YXJ0OiBjb3ZlciAwZHZoO1xuICBhbmltYXRpb24tcmFuZ2UtZW5kOiBjb3ZlciB2YXIoLS1hbmltYXRpb24taGVpZ2h0KTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbn1cbkBrZXlmcmFtZXMgcmV2ZWwge1xuICAwJXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCV7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbGVmdFRvUmlnaHQge1xuICAgIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBkdncpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBkdncpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgfVxuXG4iLCJAaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL2FuaW1hdGlvbnMuc2Nzcyc7XG4ucmVzdW1lV3JhcHBlciB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMTAwcHg7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utcy0yeGwpO1xuICAtLWFuaW1hdGlvbi1oZWlnaHQ6MzBkdmg7XG59XG5cbi50ZXh0LXRoZW1lIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXN1bWVUaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQGluY2x1ZGUgbGVmdFRvUmlnaHQ7XG59XG5cbi5yZXN1bWVTZWN0aW9ucyB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2Utcy0yeGwpO1xufVxuXG4ucmVzdW1lU2VjdGlvbnMgLm5hdiB7XG4gIC0tYm9yZGVyLXJhZGl1cy1uYXY6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbmF2KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tb3V0ZXItc2hhZG93KTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtLWFuaW1hdGlvbi1oZWlnaHQ6MzBkdmg7XG4gIEBpbmNsdWRlIGxlZnRUb1JpZ2h0O1xufVxuXG4ubmF2LWl0ZW0ge1xuICAtLXJlc3VtZVNlY3Rpb25Db3VudDogNDtcbiAgLy8gbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS1zKTtcbiAgZmxleC1iYXNpczogY2FsYygxMDAgLyB2YXIoLS1yZXN1bWVTZWN0aW9uQ291bnQpICogMSUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHggN3B4O1xufVxuXG4ubmF2LWl0ZW0gPiBhIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZzLWhlYWRpbmctZm9udCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2LWl0ZW06aGFzKC5hY3RpdmUpIHtcbiAgYSB7XG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgfVxuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbmF2KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tb3V0ZXItc2hhZG93KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA8IDYyMHB4KSB7XG4gIC5yZXN1bWVTZWN0aW9ucyAubmF2e1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLnRleHQtdGhlbWUgeyBsaW5lLWhlaWdodDogMS42OyBmb250LXNpemU6IC45cmVtOyBsZXR0ZXItc3BhY2luZzogMXB4OyB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    decls: 35,
    vars: 0,
    consts: [[1, "profileWrapper"], [1, "animationBalls"], [1, "ball"], [1, "profileDetailsWrapper"], [1, "profileImgWrapper"], [1, "imgBackground"], [1, "imgBorder"], ["src", "https://raw.githubusercontent.com/aadarshyvs/Aadarsh-Portfolio/refs/heads/master/src/assets/images/IMG_20241112_164517.jpg", "alt", "profile"], [1, "profession"], [1, "profileSummary"], ["aria-label", "Profile links", 1, "profileLinks"], ["href", "mailto:yvsa07@gmail.com"], ["href", "https://www.linkedin.com/in/aadarsh-yedire-23ab3920a/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://github.com/aadarshyvs", "target", "_blank", "rel", "noopener noreferrer"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Angular Tech Lead \u00B7 Frontend Architect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Building enterprise frontends with Angular, TypeScript, RxJS and Ag-Grid. Sole UI owner for CHAMP at Capgemini, with a focus on performance and AI-assisted development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav", 10)(29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: [".animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  position: absolute;\n  width: 1px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.5478945407;\n  top: 87%;\n  left: 42%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.7341693708s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  width: 8px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.8179629959;\n  top: 89%;\n  left: 3%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.7867628549s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  position: absolute;\n  width: 3px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.8010040846;\n  top: 77%;\n  left: 42%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.7100315208s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  position: absolute;\n  width: 6px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.7146943205;\n  top: 83%;\n  left: 38%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.713891295s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  position: absolute;\n  width: 9px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.2809518437;\n  top: 9%;\n  left: 31%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.4800490302s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n  position: absolute;\n  width: 8px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.012013976;\n  top: 1%;\n  left: 64%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.1918552605s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(7) {\n  position: absolute;\n  width: 8px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.9429998457;\n  top: 11%;\n  left: 38%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.1102134436s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(8) {\n  position: absolute;\n  width: 2px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.7148814775;\n  top: 63%;\n  left: 74%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.4373802481s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(9) {\n  position: absolute;\n  width: 6px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.8509315786;\n  top: 24%;\n  left: 87%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.0151961913s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(10) {\n  position: absolute;\n  width: 5px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.9353136847;\n  top: 40%;\n  left: 18%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.0683999477s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(11) {\n  position: absolute;\n  width: 6px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.8101643933;\n  top: 70%;\n  left: 63%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.0934335267s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(12) {\n  position: absolute;\n  width: 10px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.9698421856;\n  top: 44%;\n  left: 1%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.6236612718s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(13) {\n  position: absolute;\n  width: 10px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.9610318671;\n  top: 24%;\n  left: 64%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.0123375191s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(14) {\n  position: absolute;\n  width: 6px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.0493940568;\n  top: 97%;\n  left: 36%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.289085138s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(15) {\n  position: absolute;\n  width: 10px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.3989713723;\n  top: 35%;\n  left: 10%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.8646887036s;\n}\n\n@keyframes _ngcontent-%COMP%_ballMove {\n  0% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(14dvh, 14dvh);\n  }\n  100% {\n    transform: translate(29dvh, 14dvh);\n  }\n}\n.profileWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90dvh;\n  max-height: 900px;\n  border-bottom: 1px solid var(--clr-text);\n  overflow: hidden;\n  position: relative;\n}\n\n.profileDetailsWrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n  height: 100%;\n}\n\n.imgBackground[_ngcontent-%COMP%] {\n  --imgWidth: 300px;\n  display: grid;\n  place-items: center;\n  position: relative;\n}\n\n.imgBorder[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: calc(var(--imgWidth) + 20px);\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  animation: _ngcontent-%COMP%_rot 1s linear infinite;\n}\n\n.imgBackground[_ngcontent-%COMP%]:hover   .imgBorder[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n\n.imgBackground[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: var(--imgWidth);\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  animation: none;\n  aspect-ratio: 1;\n}\n\n.profileImgWrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.profileImgWrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(h1, h3)[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profession[_ngcontent-%COMP%] {\n  font-weight: 100;\n  display: flex;\n  justify-content: center;\n}\n\n.aniamteProfession[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_type 2s ease-out 1s infinite alternate;\n  width: 0%;\n  overflow: hidden;\n  margin-inline-start: 5px;\n  color: var(--clr-primary);\n}\n\n.marker[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: var(--clr-primary);\n}\n\n@keyframes _ngcontent-%COMP%_type {\n  0% {\n    width: 0%;\n  }\n  90% {\n    width: 45%;\n  }\n  100% {\n    width: 45%;\n  }\n}\n@keyframes _ngcontent-%COMP%_rot {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.profileImgWrapper[_ngcontent-%COMP%] {\n  width: min(100%, 760px);\n  padding: clamp(24px, 5vw, 56px) 20px;\n  margin-inline: auto;\n}\n\n.imgBackground[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.profileImgWrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  line-height: 1.1;\n}\n\n.profession[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--clr-primary);\n  font-size: clamp(1.1rem, 2.5vw, 1.65rem);\n  font-weight: 600;\n  line-height: 1.45;\n  margin-bottom: 16px;\n}\n\n.profileSummary[_ngcontent-%COMP%] {\n  max-width: 60ch;\n  margin: 0 auto 24px;\n  text-align: center;\n  font-size: clamp(1rem, 1.4vw, 1.15rem);\n  line-height: 1.7;\n  color: var(--clr-text);\n}\n\n.profileLinks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n}\n.profileLinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 10px 18px;\n  border: 1px solid var(--clr-dark-gray);\n  border-radius: 12px;\n  background: var(--gradient-box);\n  color: var(--clr-text);\n  font-size: 1rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: transform 150ms ease, box-shadow 150ms ease;\n}\n.profileLinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--outer-shadow);\n}\n.profileLinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--clr-primary);\n  outline-offset: 4px;\n}\n\n.profileWrapper[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 90dvh;\n  max-height: none;\n}\n\n@media (max-width: 480px) {\n  .imgBackground[_ngcontent-%COMP%] {\n    --imgWidth: 220px;\n  }\n  .profileLinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 40%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .imgBorder[_ngcontent-%COMP%], .animationBalls[_ngcontent-%COMP%]   .ball[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .profileLinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFWRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUFhSjs7QUF6QkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FBNEJKOztBQXhDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsNkJBQUE7QUEyQ0o7O0FBdkRFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQTBESjs7QUF0RUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FBeUVKOztBQXJGRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUF3Rko7O0FBcEdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQXVHSjs7QUFuSEU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FBc0hKOztBQWxJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUFxSUo7O0FBakpFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQW9KSjs7QUFoS0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FBbUtKOztBQS9LRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUFrTEo7O0FBOUxFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtBQWlNSjs7QUE3TUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FBZ05KOztBQTdNQTtFQUNFO0lBQ0UsMEJBQUE7RUFnTkY7RUE3TUE7SUFDRSxrQ0FBQTtFQStNRjtFQTVNQTtJQUNFLGtDQUFBO0VBOE1GO0FBQ0Y7QUE1TUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBOE1GOztBQTVNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUErTUY7O0FBN01BO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWdORjs7QUE3TUE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7RUFDQSxpQ0FBQTtBQWdORjs7QUE5TUE7RUFDRSw0QkFBQTtBQWlORjs7QUEvTUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBa05GOztBQWhOQTtFQUNFLGlCQUFBO0FBbU5GOztBQWpOQTtFQUNFLGtCQUFBO0FBb05GOztBQWxOQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBcU5GOztBQW5OQTtFQUNFLGlEQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQXNORjs7QUFwTkE7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7QUF1TkY7O0FBck5BO0VBQ0U7SUFDRSxTQUFBO0VBd05GO0VBdE5BO0lBQ0UsVUFBQTtFQXdORjtFQXROQTtJQUNFLFVBQUE7RUF3TkY7QUFDRjtBQXROQTtFQUNFO0lBQ0UsdUJBQUE7RUF3TkY7RUF0TkE7SUFDRSx3QkFBQTtFQXdORjtFQXROQTtJQUNFLHlCQUFBO0VBd05GO0VBdE5BO0lBQ0UseUJBQUE7RUF3TkY7RUF0TkE7SUFDRSx5QkFBQTtFQXdORjtBQUNGO0FBck5BO0VBQ0UsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBdU5GOztBQXJOQTtFQUFpQixtQkFBQTtBQXlOakI7O0FBeE5BO0VBQXdCLG1CQUFBO0VBQXFCLGdCQUFBO0FBNk43Qzs7QUE1TkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQStORjs7QUE3TkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQWdPRjs7QUE5TkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQWlPRjtBQWhPRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdURBQUE7QUFrT0o7QUFqT0k7RUFBVSwyQkFBQTtFQUE2QiwrQkFBQTtBQXFPM0M7QUFwT0k7RUFBa0IscUNBQUE7RUFBdUMsbUJBQUE7QUF3TzdEOztBQXJPQTtFQUFrQixZQUFBO0VBQWMsaUJBQUE7RUFBbUIsZ0JBQUE7QUEyT25EOztBQTFPQTtFQUNFO0lBQWlCLGlCQUFBO0VBOE9qQjtFQTdPQTtJQUFrQixhQUFBO0VBZ1BsQjtBQUNGO0FBL09BO0VBQ0U7SUFBb0MsZUFBQTtFQWtQcEM7RUFqUEE7SUFBa0IsZ0JBQUE7RUFvUGxCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIkYW5pbWF0ZUJhbGxDb3VudDogMTU7XG4kYW5pbWF0ZUJhbGxEaXN0YW5jZTogMTVkdmg7XG5AZm9yICRpIGZyb20gMSB0aHJvdWdoICRhbmltYXRlQmFsbENvdW50IHtcbiAgLmFuaW1hdGlvbkJhbGxzIDpudGgtY2hpbGQoI3skaX0pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IHJhbmRvbSgxMCkgKyBweDtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgb3BhY2l0eTogcmFuZG9tKCk7XG4gICAgdG9wOiByYW5kb20oMTAwKSAqIDElO1xuICAgIGxlZnQ6IHJhbmRvbSgxMDApICogMSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBhbmltYXRpb246IGJhbGxNb3ZlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiByYW5kb20oKSAqIDFzO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhbGxNb3ZlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuXG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkYW5pbWF0ZUJhbGxEaXN0YW5jZSAqIGZsb29yKHJhbmRvbSgzKSkgLSAxLCAkYW5pbWF0ZUJhbGxEaXN0YW5jZSAqIGZsb29yKHJhbmRvbSgzKSkgLSAxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRhbmltYXRlQmFsbERpc3RhbmNlICogZmxvb3IocmFuZG9tKDMpKSAtIDEsICRhbmltYXRlQmFsbERpc3RhbmNlICogZmxvb3IocmFuZG9tKDMpKSAtIDEpO1xuICB9XG59XG4ucHJvZmlsZVdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MGR2aDtcbiAgbWF4LWhlaWdodDogOTAwcHg7IC8vdGVzdFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2xyLXRleHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZmlsZURldGFpbHNXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmltZ0JhY2tncm91bmQge1xuICAtLWltZ1dpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG4uaW1nQm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogY2FsYyh2YXIoLS1pbWdXaWR0aCkgKyAyMHB4KTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWU3NzUyLCAjZTczYzdlLCAjMjNhNmQ1LCAjMjNkNWFiKTtcbiAgYW5pbWF0aW9uOiByb3QgMXMgbGluZWFyIGluZmluaXRlO1xufVxuLmltZ0JhY2tncm91bmQ6aG92ZXIgLmltZ0JvcmRlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG4uaW1nQmFja2dyb3VuZCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiB2YXIoLS1pbWdXaWR0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IG5vbmU7XG4gIGFzcGVjdC1yYXRpbzogMTtcbn1cbi5wcm9maWxlSW1nV3JhcHBlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2ZpbGVJbWdXcmFwcGVyIDppcyhoMSwgaDMpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2Zlc3Npb24ge1xuICBmb250LXdlaWdodDogMTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hbmlhbXRlUHJvZmVzc2lvbiB7XG4gIGFuaW1hdGlvbjogdHlwZSAycyBlYXNlLW91dCAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIHdpZHRoOiAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNXB4O1xuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuLm1hcmtlciB7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbn1cbkBrZXlmcmFtZXMgdHlwZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgOTAlIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZylcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXG4gIH1cbn1cblxuLnByb2ZpbGVJbWdXcmFwcGVyIHtcbiAgd2lkdGg6IG1pbigxMDAlLCA3NjBweCk7XG4gIHBhZGRpbmc6IGNsYW1wKDI0cHgsIDV2dywgNTZweCkgMjBweDtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cbi5pbWdCYWNrZ3JvdW5kIHsgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxuLnByb2ZpbGVJbWdXcmFwcGVyIGgxIHsgbWFyZ2luLWJvdHRvbTogMTJweDsgbGluZS1oZWlnaHQ6IDEuMTsgfVxuLnByb2Zlc3Npb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDIuNXZ3LCAxLjY1cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ucHJvZmlsZVN1bW1hcnkge1xuICBtYXgtd2lkdGg6IDYwY2g7XG4gIG1hcmdpbjogMCBhdXRvIDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjR2dywgMS4xNXJlbSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG59XG4ucHJvZmlsZUxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1kYXJrLWdyYXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZSwgYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICAgICY6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IHZhcigtLW91dGVyLXNoYWRvdyk7IH1cbiAgICAmOmZvY3VzLXZpc2libGUgeyBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpOyBvdXRsaW5lLW9mZnNldDogNHB4OyB9XG4gIH1cbn1cbi5wcm9maWxlV3JhcHBlciB7IGhlaWdodDogYXV0bzsgbWluLWhlaWdodDogOTBkdmg7IG1heC1oZWlnaHQ6IG5vbmU7IH1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaW1nQmFja2dyb3VuZCB7IC0taW1nV2lkdGg6IDIyMHB4OyB9XG4gIC5wcm9maWxlTGlua3MgYSB7IGZsZXg6IDEgMSA0MCU7IH1cbn1cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5pbWdCb3JkZXIsIC5hbmltYXRpb25CYWxscyAuYmFsbCB7IGFuaW1hdGlvbjogbm9uZTsgfVxuICAucHJvZmlsZUxpbmtzIGEgeyB0cmFuc2l0aW9uOiBub25lOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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



function SkillsResumeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const educationDetail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r2.title);
  }
}
function SkillsResumeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const educationDetail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educationDetail_r3.title);
  }
}
class SkillsResumeComponent {
  constructor() {
    this.designSkillDetails = {
      "title": "Tools, Testing & Delivery",
      "skillsList": [{
        "title": "Ag-Grid Community, Bootstrap"
      }, {
        "title": "Keycloak, MSAL, REST APIs"
      }, {
        "title": "Jasmine, Karma"
      }, {
        "title": "Git, Jenkins, Jira, SQL"
      }, {
        "title": "Webpack / build optimization"
      }, {
        "title": "Figma, Photoshop"
      }, {
        "title": "Claude, GPT, Windsurf, Codeium"
      }]
    };
    this.developmentSkillDetails = {
      "title": "Frontend & Supporting Technologies",
      "skillsList": [{
        "title": "Angular, Standalone Components, Signals"
      }, {
        "title": "TypeScript, JavaScript, RxJS"
      }, {
        "title": "HTML, CSS (Flexbox, Grid)"
      }, {
        "title": "Elasticsearch APIs, JSON, HTTP Client"
      }, {
        "title": "Java / Spring (supporting backend tasks)"
      }, {
        "title": "BPMN workflows, Drools rule configuration"
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
    consts: [[1, "resumeDetailsWrapperPercentages"], [1, "resumedetailsrow"], ["class", "skillList", 4, "ngFor", "ngForOf"], [1, "skillList"]],
    template: function SkillsResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsResumeComponent_div_4_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SkillsResumeComponent_div_8_Template, 3, 1, "div", 2);
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".resumeDetailsWrapperPercentages[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 24px;\n  padding-block: 24px;\n}\n\n.resumedetailsrow[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: clamp(20px, 3vw, 32px);\n  border: 1px solid var(--clr-dark-gray);\n  border-radius: 16px;\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n}\n.resumedetailsrow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: clamp(1.3rem, 2vw, 1.75rem);\n  line-height: 1.35;\n  margin-bottom: 20px;\n}\n\n.skillList[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  margin-bottom: 10px;\n  border-left: 3px solid var(--clr-primary);\n  border-radius: 0 8px 8px 0;\n  background: var(--clr-background);\n}\n.skillList[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n.skillList[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n@media (min-width: 768px) {\n  .resumeDetailsWrapperPercentages[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGxzLXJlc3VtZS9za2lsbHMtcmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7QUFDRjtBQUFFO0VBQUssc0NBQUE7RUFBd0MsaUJBQUE7RUFBbUIsbUJBQUE7QUFLbEU7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0FBTUY7QUFMRTtFQUFLLFNBQUE7RUFBVyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLHVCQUFBO0FBWXZFO0FBWEU7RUFBZSxnQkFBQTtBQWNqQjs7QUFaQTtFQUNFO0lBQW1DLGdEQUFBO0VBZ0JuQztBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucmVzdW1lRGV0YWlsc1dyYXBwZXJQZXJjZW50YWdlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjRweDtcbiAgcGFkZGluZy1ibG9jazogMjRweDtcbn1cbi5yZXN1bWVkZXRhaWxzcm93IHtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiBjbGFtcCgyMHB4LCAzdncsIDMycHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZGFyay1ncmF5KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tb3V0ZXItc2hhZG93KTtcbiAgaDMgeyBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgMnZ3LCAxLjc1cmVtKTsgbGluZS1oZWlnaHQ6IDEuMzU7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbn1cbi5za2lsbExpc3Qge1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBoNiB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogNTAwOyBsaW5lLWhlaWdodDogMS42OyBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTsgfVxuICAmOmxhc3QtY2hpbGQgeyBtYXJnaW4tYm90dG9tOiAwOyB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnJlc3VtZURldGFpbHNXcmFwcGVyUGVyY2VudGFnZXMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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