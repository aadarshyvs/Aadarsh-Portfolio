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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page/profile-page.component */ 2825);
/* harmony import */ var _my_resume_my_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-resume/my-resume.component */ 1057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class AppComponent {
  constructor() {
    this.title = 'Aadarsh-Portfolio';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-profile-page")(1, "app-my-resume");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__.ProfilePageComponent, _my_resume_my_resume_component__WEBPACK_IMPORTED_MODULE_1__.MyResumeComponent],
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



function EducationResumeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "p");
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
function EducationResumeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "p");
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
    this.educationDetails = [{
      title: 'Vel Tech Institute of Science and Technology',
      duration: 'Btech (June 2018 - June 2022)',
      grade: '8.0/10',
      summary: 'I have completed my edication in Vel-Tech Univercity In which I have Learnt many of the technical skills'
    }, {
      title: 'Sri Chaitanya Junior College',
      duration: 'Board of Intermediate Education (Apr 2016 - Apr 2018)',
      grade: '8.0/10',
      summary: 'I have completed my Intermediate in Sri Chaitanya Junior College In which I have Specialised in Maths, Physics and Chemistry'
    }, {
      title: 'Dr. K. k. R Gowtham School',
      duration: 'Board of Secondory Education (Apr 2016 - Apr 2018)',
      grade: '8.0/10',
      summary: 'I have completed my Secondory Education in Dr. K. k. R Gowtham School In which I have learnt many of the standard subjects '
    }];
    this.achivementDetails = [{
      title: 'Generative AI for Software Engineers',
      duration: 'AWS Partner Course (Aug 2023)',
      grade: 'Team Project',
      summary: ``
    }, {
      title: 'Online Railway Reservation System',
      duration: 'Major Project (2018)',
      grade: 'Team Project',
      summary: `Completed case study on Online Railway Reservation System where the users can be able to register and reserve , cancel and get the tickets sent
      to mail and be downloaded in pdf format where as admins can be able to add the trains, add the seats , update, delete and can view booking
      history of the users and the users can able to report or view the train status.
      created database using code first approach.
      Deployed the application in Azure.`
    }];
  }
  static #_ = this.ɵfac = function EducationResumeComponent_Factory(t) {
    return new (t || EducationResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EducationResumeComponent,
    selectors: [["app-education-resume"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 2,
    consts: [[1, "resumeDetailsWrapper"], [1, "cardStack"], ["class", "detailsCard", 4, "ngFor", "ngForOf"], [1, "detailsCard"], [1, "detailsHeading"], [1, "detailsGrade"], [1, "detailsSummery"]],
    template: function EducationResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EducationResumeComponent_div_2_Template, 13, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EducationResumeComponent_div_4_Template, 13, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educationDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.achivementDetails);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".detailsCard[_ngcontent-%COMP%] {\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  margin-inline-end: var(--space-xs-s);\n  margin-block-end: var(--space-xs-s);\n  border-radius: 5px;\n  padding: var(--space-s-l);\n  flex-shrink: 1;\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%] {\n  margin-block: var(--space-xs-s);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--clr-black);\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  font-size: var(--step--1);\n  letter-spacing: -1px;\n  font-weight: 500;\n  margin-block-end: var(--space-2xs-xs);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  padding: var(--space-3xs) var(--space-xs);\n  display: inline-block;\n  border-radius: 5px;\n  font-weight: 500;\n  color: var(--clr-primary);\n  background-color: var(--clr-white);\n}\n.detailsCard[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: var(--clr-dark-gray);\n}\n.detailsCard[_ngcontent-%COMP%]   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--step-0);\n  color: var(--clr-black);\n  line-height: var(--space-s-m);\n}\n\n.resumeDetailsWrapper[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.cardStack[_ngcontent-%COMP%] {\n  --design-width: 5px;\n  --design-top: 20%;\n  --design-space: var(--space-s-2xl);\n  margin-block-start: var(--space-s-m);\n  padding-inline-start: calc(var(--design-space) / 2);\n  margin-inline-start: calc(var(--design-space) / 2);\n  border-inline-start: var(--design-width) solid var(--clr-dark-gray);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%] {\n  position: relative;\n  margin-inline-start: calc(var(--design-space) / 2);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: var(--design-width);\n  width: var(--design-space);\n  background: var(--clr-dark-gray);\n  left: calc(var(--design-space) * -1);\n  top: var(--design-top);\n}\n.cardStack[_ngcontent-%COMP%]   .detailsCard[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: calc(var(--design-width) * 2);\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background: var(--clr-background);\n  box-shadow: 0px 0px 0px var(--design-width) var(--clr-dark-gray);\n  transform: translate(-25%, -25%);\n  left: calc((var(--design-space) + var(--design-width)) * -1);\n  top: var(--design-top);\n}\n\n.cardStack[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(.detailsCard:hover) {\n  --design-top: 50%;\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover {\n  background: var(--clr-gradient-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--clr-white);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsHeading[_ngcontent-%COMP%]   .detailsGrade[_ngcontent-%COMP%] {\n  color: var(--clr-white);\n  background-color: var(--clr-primary);\n}\n.detailsCard[_ngcontent-%COMP%]:hover   .detailsSummery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--clr-white);\n}\n\n.detailsCard[_ngcontent-%COMP%]:hover::after {\n  background: var(--clr-primary) !important;\n}\n\n@media screen and (width > 992px) {\n  .resumeDetailsWrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWR1Y2F0aW9uLXJlc3VtZS9lZHVjYXRpb24tcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUG9ydGZvbGlsbyUyMFdlYnNpdGUvQWFkYXJzaC1Qb3J0Zm9saW8vc3JjL2FwcC9lZHVjYXRpb24tcmVzdW1lL2VkdWNhdGlvbi1yZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLCtCQUFBO0FDRUo7QURBSTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7QUNFTjtBREVJO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ0FOO0FESUk7RUFDRSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUNGTjtBRE1FO0VBQ0UsMkJBQUE7QUNKSjtBRFFJO0VBQ0Usd0JBQUE7RUFFQSx1QkFBQTtFQUNBLDZCQUFBO0FDUE47O0FEWUE7RUFDRSxhQUFBO0FDVEY7O0FEWUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1EQUFBO0VBRUEsa0RBQUE7RUFDQSxtRUFBQTtBQ1ZGO0FEWUU7RUFDRSxrQkFBQTtFQUNGLGtEQUFBO0FDVkY7QURjRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUNaSjtBRGVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdFQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0FDYko7O0FEZ0JBO0VBQ0UsaUJBQUE7QUNiRjs7QURlQTtFQUNFLHVDQUFBO0FDWkY7QURjSTtFQUNFLHVCQUFBO0FDWk47QURjSTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7QUNaTjtBRGdCSTtFQUNFLHVCQUFBO0FDZE47O0FEa0JBO0VBQ0UseUNBQUE7QUNmRjs7QURrQkE7RUFDRTtJQUNFLDhCQUFBO0VDZkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzQ2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1zcGFjZS14cy1zKTtcclxuICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS14cy1zKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utcy1sKTtcclxuICBmbGV4LXNocmluazogMTtcclxuICAuZGV0YWlsc0hlYWRpbmcge1xyXG4gICAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS14cy1zKTtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xyXG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS0yeHMteHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vc3BhY2UpO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UtMnhzLXhzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHNHcmFkZSB7XHJcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLTN4cykgdmFyKC0tc3BhY2UteHMpO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1ncmF5KTtcclxuICB9XHJcblxyXG4gIC5kZXRhaWxzU3VtbWVyeSB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xyXG4gICAgICAvLyBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlKTtcclxuICAgICAgY29sb3I6IHZhcigtLWNsci1ibGFjayk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1zcGFjZS1zLW0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJlc3VtZURldGFpbHNXcmFwcGVyICB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmNhcmRTdGFjayB7XHJcbiAgLS1kZXNpZ24td2lkdGg6IDVweDtcclxuICAtLWRlc2lnbi10b3A6IDIwJTtcclxuICAtLWRlc2lnbi1zcGFjZTogdmFyKC0tc3BhY2Utcy0yeGwpO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2Utcy1tKTtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1kZXNpZ24tc3BhY2UpLzIpO1xyXG4gIC8vIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkvMik7XHJcbiAgYm9yZGVyLWlubGluZS1zdGFydDogdmFyKC0tZGVzaWduLXdpZHRoKSBzb2xpZCB2YXIoLS1jbHItZGFyay1ncmF5KTtcclxuXHJcbiAgLmRldGFpbHNDYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkvMik7XHJcblxyXG4gIH1cclxuXHJcbiAgLmRldGFpbHNDYXJkOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogdmFyKC0tZGVzaWduLXdpZHRoKTtcclxuICAgIHdpZHRoOiB2YXIoLS1kZXNpZ24tc3BhY2UpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWRhcmstZ3JheSk7XHJcbiAgICBsZWZ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkqLTEpO1xyXG4gICAgdG9wOiB2YXIoLS1kZXNpZ24tdG9wKTtcclxuICB9XHJcblxyXG4gIC5kZXRhaWxzQ2FyZDo6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWRlc2lnbi13aWR0aCkgKjIpO1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHZhcigtLWRlc2lnbi13aWR0aCkgdmFyKC0tY2xyLWRhcmstZ3JheSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtMjUlKTtcclxuICAgIGxlZnQ6IGNhbGMoKHZhcigtLWRlc2lnbi1zcGFjZSkgKyB2YXIoLS1kZXNpZ24td2lkdGgpKSAqIC0xKTtcclxuICAgIHRvcDogdmFyKC0tZGVzaWduLXRvcCk7XHJcbiAgfVxyXG59XHJcbi5jYXJkU3RhY2sgOmlzKC5kZXRhaWxzQ2FyZDpob3Zlcil7XHJcbiAgLS1kZXNpZ24tdG9wOiA1MCU7XHJcbn1cclxuLmRldGFpbHNDYXJkOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmFkaWVudC1wcmltYXJ5KTtcclxuICAuZGV0YWlsc0hlYWRpbmcge1xyXG4gICAgaDYsaDV7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHNHcmFkZXtcclxuICAgICAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgLmRldGFpbHNTdW1tZXJ5IHtcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRldGFpbHNDYXJkOmhvdmVyOjphZnRlcntcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhICBzY3JlZW4gYW5kICh3aWR0aD45OTJweCkge1xyXG4gIC5yZXN1bWVEZXRhaWxzV3JhcHBlciAge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDFmcjtcclxuICB9XHJcbn1cclxuIiwiLmRldGFpbHNDYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tb3V0ZXItc2hhZG93KTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXNwYWNlLXhzLXMpO1xuICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS14cy1zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zLWwpO1xuICBmbGV4LXNocmluazogMTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc0hlYWRpbmcge1xuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNwYWNlLXhzLXMpO1xufVxuLmRldGFpbHNDYXJkIC5kZXRhaWxzSGVhZGluZyBoNSB7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xuICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1zcGFjZS0yeHMteHMpO1xufVxuLmRldGFpbHNDYXJkIC5kZXRhaWxzSGVhZGluZyBoNiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vc3BhY2UpO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tc3BhY2UtMnhzLXhzKTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc0hlYWRpbmcgLmRldGFpbHNHcmFkZSB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTN4cykgdmFyKC0tc3BhY2UteHMpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcbn1cbi5kZXRhaWxzQ2FyZCBociB7XG4gIGNvbG9yOiB2YXIoLS1jbHItZGFyay1ncmF5KTtcbn1cbi5kZXRhaWxzQ2FyZCAuZGV0YWlsc1N1bW1lcnkgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbiAgY29sb3I6IHZhcigtLWNsci1ibGFjayk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1zcGFjZS1zLW0pO1xufVxuXG4ucmVzdW1lRGV0YWlsc1dyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uY2FyZFN0YWNrIHtcbiAgLS1kZXNpZ24td2lkdGg6IDVweDtcbiAgLS1kZXNpZ24tdG9wOiAyMCU7XG4gIC0tZGVzaWduLXNwYWNlOiB2YXIoLS1zcGFjZS1zLTJ4bCk7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2Utcy1tKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tZGVzaWduLXNwYWNlKSAvIDIpO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkgLyAyKTtcbiAgYm9yZGVyLWlubGluZS1zdGFydDogdmFyKC0tZGVzaWduLXdpZHRoKSBzb2xpZCB2YXIoLS1jbHItZGFyay1ncmF5KTtcbn1cbi5jYXJkU3RhY2sgLmRldGFpbHNDYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkgLyAyKTtcbn1cbi5jYXJkU3RhY2sgLmRldGFpbHNDYXJkOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogdmFyKC0tZGVzaWduLXdpZHRoKTtcbiAgd2lkdGg6IHZhcigtLWRlc2lnbi1zcGFjZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1kYXJrLWdyYXkpO1xuICBsZWZ0OiBjYWxjKHZhcigtLWRlc2lnbi1zcGFjZSkgKiAtMSk7XG4gIHRvcDogdmFyKC0tZGVzaWduLXRvcCk7XG59XG4uY2FyZFN0YWNrIC5kZXRhaWxzQ2FyZDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWRlc2lnbi13aWR0aCkgKiAyKTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHZhcigtLWRlc2lnbi13aWR0aCkgdmFyKC0tY2xyLWRhcmstZ3JheSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNSUsIC0yNSUpO1xuICBsZWZ0OiBjYWxjKCh2YXIoLS1kZXNpZ24tc3BhY2UpICsgdmFyKC0tZGVzaWduLXdpZHRoKSkgKiAtMSk7XG4gIHRvcDogdmFyKC0tZGVzaWduLXRvcCk7XG59XG5cbi5jYXJkU3RhY2sgOmlzKC5kZXRhaWxzQ2FyZDpob3Zlcikge1xuICAtLWRlc2lnbi10b3A6IDUwJTtcbn1cblxuLmRldGFpbHNDYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWdyYWRpZW50LXByaW1hcnkpO1xufVxuLmRldGFpbHNDYXJkOmhvdmVyIC5kZXRhaWxzSGVhZGluZyBoNiwgLmRldGFpbHNDYXJkOmhvdmVyIC5kZXRhaWxzSGVhZGluZyBoNSB7XG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xufVxuLmRldGFpbHNDYXJkOmhvdmVyIC5kZXRhaWxzSGVhZGluZyAuZGV0YWlsc0dyYWRlIHtcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbn1cbi5kZXRhaWxzQ2FyZDpob3ZlciAuZGV0YWlsc1N1bW1lcnkgcCB7XG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xufVxuXG4uZGV0YWlsc0NhcmQ6aG92ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA+IDk5MnB4KSB7XG4gIC5yZXN1bWVEZXRhaWxzV3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _education_resume_education_resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../education-resume/education-resume.component */ 5219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);





function MyResumeComponent_app_education_resume_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-education-resume");
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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyResumeComponent,
    selectors: [["app-my-resume"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 13,
    consts: [[1, "resumeWrapper"], [1, "resumeTitle"], [1, "text-theme"], [1, "resumeSections"], [1, "nav"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", 3, "ngClass", "click"], [1, "nav-link", 3, "ngClass", "click"], [4, "ngIf"]],
    template: function MyResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " 1+ Years of Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "My Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ul", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyResumeComponent_Template_a_click_9_listener() {
          return ctx.showingTab = "Education";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 5)(12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyResumeComponent_Template_a_click_12_listener() {
          return ctx.showingTab = "Skills";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Professional Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 5)(15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyResumeComponent_Template_a_click_15_listener() {
          return ctx.showingTab = "Experience";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 5)(18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyResumeComponent_Template_a_click_18_listener() {
          return ctx.showingTab = "Awards";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MyResumeComponent_app_education_resume_20_Template, 1, 0, "app-education-resume", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.showingTab == "Education"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.showingTab == "Skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.showingTab == "Experience"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.showingTab == "Awards"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showingTab == "Education");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _education_resume_education_resume_component__WEBPACK_IMPORTED_MODULE_0__.EducationResumeComponent],
    styles: [".resumeWrapper[_ngcontent-%COMP%] {\n  margin-block-start: 100px;\n  margin: var(--space-s-2xl);\n}\n\n.text-theme[_ngcontent-%COMP%] {\n  font-family: var(--monospace);\n  color: var(--clr-primary);\n  letter-spacing: 2px;\n  line-height: 14px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.resumeTitle[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.resumeSections[_ngcontent-%COMP%] {\n  margin-block-start: var(--space-s-2xl);\n}\n\n.resumeSections[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  --border-radius-nav: 10px;\n  border-radius: var(--border-radius-nav);\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n  justify-content: space-between;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  --resumeSectionCount: 4;\n  flex-basis: calc(100 / var(--resumeSectionCount) * 1%);\n  text-align: center;\n  padding: 25px 7px;\n}\n\n.nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-family: var(--fs-heading-font);\n  color: var(--clr-text);\n  font-weight: bold;\n}\n\n.nav-item[_ngcontent-%COMP%]:has(.active) {\n  border-radius: var(--border-radius-nav);\n  background: var(--gradient-box);\n  box-shadow: var(--outer-shadow);\n}\n.nav-item[_ngcontent-%COMP%]:has(.active)   a[_ngcontent-%COMP%] {\n  color: var(--clr-primary);\n}\n\n@media screen and (width < 620px) {\n  .resumeSections[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktcmVzdW1lL215LXJlc3VtZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1BvcnRmb2xpbG8lMjBXZWJzaXRlL0FhZGFyc2gtUG9ydGZvbGlvL3NyYy9hcHAvbXktcmVzdW1lL215LXJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUVBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFLRSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7QUNKRjtBREZFO0VBQ0UseUJBQUE7QUNJSjs7QURHQTtFQUNFO0lBQ0Usc0JBQUE7RUNBRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VtZVdyYXBwZXIge1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMTAwcHg7XHJcbiAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zLTJ4bCk7XHJcbn1cclxuXHJcbi50ZXh0LXRoZW1lIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlKTtcclxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXN1bWVUaXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzdW1lU2VjdGlvbnMge1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3BhY2Utcy0yeGwpO1xyXG59XHJcblxyXG4ucmVzdW1lU2VjdGlvbnMgLm5hdiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzLW5hdjogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLW5hdik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYm94KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAtLXJlc3VtZVNlY3Rpb25Db3VudDogNDtcclxuICAvLyBtYXJnaW4tYmxvY2s6IHZhcigtLXNwYWNlLXMpO1xyXG4gIGZsZXgtYmFzaXM6IGNhbGMoMTAwIC8gdmFyKC0tcmVzdW1lU2VjdGlvbkNvdW50KSAqIDElKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjVweCA3cHg7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSA+IGEge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mcy1oZWFkaW5nLWZvbnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5uYXYtaXRlbTpoYXMoLmFjdGl2ZSkge1xyXG4gIGEge1xyXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbmF2KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ib3gpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLW91dGVyLXNoYWRvdyk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoIDwgNjIwcHgpIHtcclxuICAucmVzdW1lU2VjdGlvbnMgLm5hdntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcbiIsIi5yZXN1bWVXcmFwcGVyIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxMDBweDtcbiAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zLTJ4bCk7XG59XG5cbi50ZXh0LXRoZW1lIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXN1bWVUaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlc3VtZVNlY3Rpb25zIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1zcGFjZS1zLTJ4bCk7XG59XG5cbi5yZXN1bWVTZWN0aW9ucyAubmF2IHtcbiAgLS1ib3JkZXItcmFkaXVzLW5hdjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1uYXYpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ib3gpO1xuICBib3gtc2hhZG93OiB2YXIoLS1vdXRlci1zaGFkb3cpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXYtaXRlbSB7XG4gIC0tcmVzdW1lU2VjdGlvbkNvdW50OiA0O1xuICBmbGV4LWJhc2lzOiBjYWxjKDEwMCAvIHZhcigtLXJlc3VtZVNlY3Rpb25Db3VudCkgKiAxJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweCA3cHg7XG59XG5cbi5uYXYtaXRlbSA+IGEge1xuICBmb250LWZhbWlseTogdmFyKC0tZnMtaGVhZGluZy1mb250KTtcbiAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXYtaXRlbTpoYXMoLmFjdGl2ZSkge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLW5hdik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWJveCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLW91dGVyLXNoYWRvdyk7XG59XG4ubmF2LWl0ZW06aGFzKC5hY3RpdmUpIGEge1xuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggPCA2MjBweCkge1xuICAucmVzdW1lU2VjdGlvbnMgLm5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    decls: 26,
    vars: 0,
    consts: [[1, "profileWrapper"], [1, "animationBalls"], [1, "ball"], [1, "profileDetailsWrapper"], [1, "profileImgWrapper"], [1, "imgBackground"], [1, "imgBorder"], ["src", "https://raw.githubusercontent.com/aadarshyvs/Aadarsh-Portfolio/master/docs/assets/images/profile.jpg", "alt", "profile"], [1, "profession"], [1, "aniamteProfession"], [2, "text-align", "left"], [1, "marker"]],
    template: function ProfilePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2)(3, "div", 2)(4, "div", 2)(5, "div", 2)(6, "div", 2)(7, "div", 2)(8, "div", 2)(9, "div", 2)(10, "div", 2)(11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "div", 4)(14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 6)(16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Aadarsh Yedire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 8)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "I am a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9)(23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Developer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: [".animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  position: absolute;\n  width: 1px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.2559101138;\n  top: 3%;\n  left: 91%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.2879160215s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  width: 3px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.0891280591;\n  top: 89%;\n  left: 28%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.2888950017s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  position: absolute;\n  width: 8px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.8165832014;\n  top: 36%;\n  left: 29%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.7953947593s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  position: absolute;\n  width: 9px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.6869589281;\n  top: 99%;\n  left: 19%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.1124272121s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) {\n  position: absolute;\n  width: 8px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.8175629402;\n  top: 67%;\n  left: 85%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.197677768s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) {\n  position: absolute;\n  width: 3px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.028959018;\n  top: 30%;\n  left: 72%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.3408934679s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(7) {\n  position: absolute;\n  width: 3px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.4863405095;\n  top: 38%;\n  left: 4%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.959055619s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(8) {\n  position: absolute;\n  width: 5px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.7700959152;\n  top: 48%;\n  left: 43%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.9923657081s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(9) {\n  position: absolute;\n  width: 5px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.8415857069;\n  top: 92%;\n  left: 39%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.3760015868s;\n}\n\n.animationBalls[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(10) {\n  position: absolute;\n  width: 10px;\n  aspect-ratio: 1;\n  border-radius: 100%;\n  background-color: var(--clr-primary);\n  opacity: 0.3552422416;\n  top: 92%;\n  left: 14%;\n  overflow: hidden;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_ballMove 10s linear infinite;\n  animation-delay: 0.6710309243s;\n}\n\n@keyframes _ngcontent-%COMP%_ballMove {\n  0% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(29vh, 44vh);\n  }\n  100% {\n    transform: translate(29vh, 44vh);\n  }\n}\n.profileWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90dvh;\n  border-bottom: 1px solid var(--clr-text);\n  overflow: hidden;\n  position: relative;\n}\n\n.profileDetailsWrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n  height: 100%;\n}\n\n.imgBackground[_ngcontent-%COMP%] {\n  --imgWidth: 300px;\n  display: grid;\n  place-items: center;\n  position: relative;\n}\n\n.imgBorder[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: calc(var(--imgWidth) + 20px);\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  animation: _ngcontent-%COMP%_rot 1s linear infinite;\n}\n\n.imgBackground[_ngcontent-%COMP%]:hover   .imgBorder[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n\n.imgBackground[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: var(--imgWidth);\n  border-radius: 50%;\n  animation: none;\n}\n\n.profileImgWrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.profileImgWrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(h1, h3)[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profession[_ngcontent-%COMP%] {\n  font-weight: 100;\n  display: flex;\n  justify-content: center;\n}\n\n.aniamteProfession[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_type 2s ease-out 1s infinite alternate;\n  width: 0%;\n  overflow: hidden;\n  margin-inline-start: 5px;\n  color: var(--clr-primary);\n}\n\n.marker[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: var(--clr-primary);\n}\n\n@keyframes _ngcontent-%COMP%_type {\n  0% {\n    width: 0%;\n  }\n  90% {\n    width: 45%;\n  }\n  100% {\n    width: 45%;\n  }\n}\n@keyframes _ngcontent-%COMP%_rot {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1BvcnRmb2xpbG8lMjBXZWJzaXRlL0FhZGFyc2gtUG9ydGZvbGlvL3NyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUNGSjs7QURWRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUNhSjs7QUR6QkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FDNEJKOztBRHhDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUMyQ0o7O0FEdkRFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtBQzBESjs7QUR0RUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FDeUVKOztBRHJGRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsNkJBQUE7QUN3Rko7O0FEcEdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQ3VHSjs7QURuSEU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FDc0hKOztBRGxJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUNxSUo7O0FEbElBO0VBQ0U7SUFDRSwwQkFBQTtFQ3FJRjtFRGxJQTtJQUNFLGdDQUFBO0VDb0lGO0VEaklBO0lBQ0UsZ0NBQUE7RUNtSUY7QUFDRjtBRGpJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbUlGOztBRGpJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNvSUY7O0FEbElBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3FJRjs7QURuSUE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7RUFDQSxpQ0FBQTtBQ3NJRjs7QURwSUE7RUFDRSw0QkFBQTtBQ3VJRjs7QURySUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDd0lGOztBRHRJQTtFQUNFLGlCQUFBO0FDeUlGOztBRHZJQTtFQUNFLGtCQUFBO0FDMElGOztBRHhJQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDMklGOztBRHpJQTtFQUNFLGlEQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQzRJRjs7QUQxSUE7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7QUM2SUY7O0FEM0lBO0VBQ0U7SUFDRSxTQUFBO0VDOElGO0VENUlBO0lBQ0UsVUFBQTtFQzhJRjtFRDVJQTtJQUNFLFVBQUE7RUM4SUY7QUFDRjtBRDVJQTtFQUNFO0lBQ0UsdUJBQUE7RUM4SUY7RUQ1SUE7SUFDRSx3QkFBQTtFQzhJRjtFRDVJQTtJQUNFLHlCQUFBO0VDOElGO0VENUlBO0lBQ0UseUJBQUE7RUM4SUY7RUQ1SUE7SUFDRSx5QkFBQTtFQzhJRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGVCYWxsQ291bnQ6IDEwO1xyXG4kYW5pbWF0ZUJhbGxEaXN0YW5jZTogMTV2aDtcclxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkYW5pbWF0ZUJhbGxDb3VudCB7XHJcbiAgLmFuaW1hdGlvbkJhbGxzIDpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiByYW5kb20oMTApICsgcHg7XHJcbiAgICBhc3BlY3QtcmF0aW86IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xyXG4gICAgb3BhY2l0eTogcmFuZG9tKCk7XHJcbiAgICB0b3A6IHJhbmRvbSgxMDApICogMSU7XHJcbiAgICBsZWZ0OiByYW5kb20oMTAwKSAqIDElO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYW5pbWF0aW9uOiBiYWxsTW92ZSAxMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiByYW5kb20oKSAqIDFzO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGJhbGxNb3ZlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkYW5pbWF0ZUJhbGxEaXN0YW5jZSAqIGZsb29yKHJhbmRvbSgzKSkgLSAxLCAkYW5pbWF0ZUJhbGxEaXN0YW5jZSAqIGZsb29yKHJhbmRvbSgzKSkgLSAxKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJGFuaW1hdGVCYWxsRGlzdGFuY2UgKiBmbG9vcihyYW5kb20oMykpIC0gMSwgJGFuaW1hdGVCYWxsRGlzdGFuY2UgKiBmbG9vcihyYW5kb20oMykpIC0gMSk7XHJcbiAgfVxyXG59XHJcbi5wcm9maWxlV3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MGR2aDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2xyLXRleHQpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9maWxlRGV0YWlsc1dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW1nQmFja2dyb3VuZCB7XHJcbiAgLS1pbWdXaWR0aDogMzAwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW1nQm9yZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0taW1nV2lkdGgpICsgMjBweCk7XHJcbiAgYXNwZWN0LXJhdGlvOiAxO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYik7XHJcbiAgYW5pbWF0aW9uOiByb3QgMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5pbWdCYWNrZ3JvdW5kOmhvdmVyIC5pbWdCb3JkZXIge1xyXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuLmltZ0JhY2tncm91bmQgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IHZhcigtLWltZ1dpZHRoKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBub25lO1xyXG59XHJcbi5wcm9maWxlSW1nV3JhcHBlciBoMSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnByb2ZpbGVJbWdXcmFwcGVyIDppcyhoMSwgaDMpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2Zlc3Npb24ge1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYW5pYW10ZVByb2Zlc3Npb24ge1xyXG4gIGFuaW1hdGlvbjogdHlwZSAycyBlYXNlLW91dCAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XHJcbn1cclxuLm1hcmtlciB7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XHJcbn1cclxuQGtleWZyYW1lcyB0eXBlIHtcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcm90IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxyXG4gIH1cclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpXHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxyXG4gIH1cclxufVxyXG4iLCIuYW5pbWF0aW9uQmFsbHMgOm50aC1jaGlsZCgxKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDAuMjU1OTEwMTEzODtcbiAgdG9wOiAzJTtcbiAgbGVmdDogOTElO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiBiYWxsTW92ZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMjg3OTE2MDIxNXM7XG59XG5cbi5hbmltYXRpb25CYWxscyA6bnRoLWNoaWxkKDIpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogM3B4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgb3BhY2l0eTogMC4wODkxMjgwNTkxO1xuICB0b3A6IDg5JTtcbiAgbGVmdDogMjglO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiBiYWxsTW92ZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMjg4ODk1MDAxN3M7XG59XG5cbi5hbmltYXRpb25CYWxscyA6bnRoLWNoaWxkKDMpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgb3BhY2l0eTogMC44MTY1ODMyMDE0O1xuICB0b3A6IDM2JTtcbiAgbGVmdDogMjklO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiBiYWxsTW92ZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNzk1Mzk0NzU5M3M7XG59XG5cbi5hbmltYXRpb25CYWxscyA6bnRoLWNoaWxkKDQpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOXB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgb3BhY2l0eTogMC42ODY5NTg5MjgxO1xuICB0b3A6IDk5JTtcbiAgbGVmdDogMTklO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiBiYWxsTW92ZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMTEyNDI3MjEyMXM7XG59XG5cbi5hbmltYXRpb25CYWxscyA6bnRoLWNoaWxkKDUpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgb3BhY2l0eTogMC44MTc1NjI5NDAyO1xuICB0b3A6IDY3JTtcbiAgbGVmdDogODUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiBiYWxsTW92ZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMTk3Njc3NzY4cztcbn1cblxuLmFuaW1hdGlvbkJhbGxzIDpudGgtY2hpbGQoNikge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzcHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICBvcGFjaXR5OiAwLjAyODk1OTAxODtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDcyJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG4gIGFuaW1hdGlvbjogYmFsbE1vdmUgMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjM0MDg5MzQ2NzlzO1xufVxuXG4uYW5pbWF0aW9uQmFsbHMgOm50aC1jaGlsZCg3KSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDNweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDAuNDg2MzQwNTA5NTtcbiAgdG9wOiAzOCU7XG4gIGxlZnQ6IDQlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiBiYWxsTW92ZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDAuOTU5MDU1NjE5cztcbn1cblxuLmFuaW1hdGlvbkJhbGxzIDpudGgtY2hpbGQoOCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1cHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICBvcGFjaXR5OiAwLjc3MDA5NTkxNTI7XG4gIHRvcDogNDglO1xuICBsZWZ0OiA0MyU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IC0xO1xuICBhbmltYXRpb246IGJhbGxNb3ZlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogMC45OTIzNjU3MDgxcztcbn1cblxuLmFuaW1hdGlvbkJhbGxzIDpudGgtY2hpbGQoOSkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1cHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICBvcGFjaXR5OiAwLjg0MTU4NTcwNjk7XG4gIHRvcDogOTIlO1xuICBsZWZ0OiAzOSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IC0xO1xuICBhbmltYXRpb246IGJhbGxNb3ZlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zNzYwMDE1ODY4cztcbn1cblxuLmFuaW1hdGlvbkJhbGxzIDpudGgtY2hpbGQoMTApIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDAuMzU1MjQyMjQxNjtcbiAgdG9wOiA5MiU7XG4gIGxlZnQ6IDE0JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG4gIGFuaW1hdGlvbjogYmFsbE1vdmUgMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjY3MTAzMDkyNDNzO1xufVxuXG5Aa2V5ZnJhbWVzIGJhbGxNb3ZlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjl2aCwgNDR2aCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjl2aCwgNDR2aCk7XG4gIH1cbn1cbi5wcm9maWxlV3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwZHZoO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2xyLXRleHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9maWxlRGV0YWlsc1dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWdCYWNrZ3JvdW5kIHtcbiAgLS1pbWdXaWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltZ0JvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IGNhbGModmFyKC0taW1nV2lkdGgpICsgMjBweCk7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYik7XG4gIGFuaW1hdGlvbjogcm90IDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmltZ0JhY2tncm91bmQ6aG92ZXIgLmltZ0JvcmRlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbi5pbWdCYWNrZ3JvdW5kIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IHZhcigtLWltZ1dpZHRoKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IG5vbmU7XG59XG5cbi5wcm9maWxlSW1nV3JhcHBlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZmlsZUltZ1dyYXBwZXIgOmlzKGgxLCBoMykge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9mZXNzaW9uIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hbmlhbXRlUHJvZmVzc2lvbiB7XG4gIGFuaW1hdGlvbjogdHlwZSAycyBlYXNlLW91dCAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIHdpZHRoOiAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNXB4O1xuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG4ubWFya2VyIHtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG5Aa2V5ZnJhbWVzIHR5cGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDkwJSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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