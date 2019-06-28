(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n.story-card {\r\n    font-family: 'Open Sans', sans-serif;\r\n    display: block;\r\n    position: relative;\r\n    width: 280px;\r\n    height: 450px;\r\n    margin: 0 auto;\r\n    margin-bottom: 40px;\r\n    border: 1px solid #DDDDDD;\r\n    transition: box-shadow 0.3s ease-in-out;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\r\n    margin-bottom: 56px;\r\n  }\r\n@media (hover: hover) {\r\n    .story-card:hover {\r\n      box-shadow: 0 8px 13px rgba(0, 0, 0, 0.2);\r\n    }\r\n    .story-card:hover .story-card__content {\r\n      height: 64%;\r\n    }\r\n    .story-card:hover .card-content-primary {\r\n      visibility: hidden;\r\n      opacity: 0;\r\n    }\r\n    .story-card:hover .card-content-secondary {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n.story-card__banner {\r\n    height: 148px;\r\n    width: 100%;\r\n    height: 180px;\r\n  }\r\n.story-card__banner .story-card-image {\r\n    width: 100%;\r\n    height: 180px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\r\n.story-card__content {\r\n    display: block;\r\n    position: absolute;\r\n    height: 212px;\r\n    width: 248px;\r\n    bottom: 0;\r\n    background-color: #FFFFFF;\r\n    padding: 24px 16px 32px 16px;\r\n    transition: height 0.3s;\r\n    height: 238px;\r\n  }\r\n.story-card__content .card-content-primary {\r\n    transition: visibility 0.15s, opacity 0.15s linear;\r\n  }\r\n.story-card__content .card-content-secondary {\r\n    transition: visibility 0.3s, opacity 0.3s linear;\r\n  }\r\n.story-card__content .card-content-primary {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n.story-card__content .card-content-secondary {\r\n    position: absolute;\r\n    top: 24px;\r\n    left: 16px;\r\n    width: 248px;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n  }\r\n.story-card__content .card-content-primary__logo {\r\n    height: 50px;\r\n    margin-bottom: 24px;\r\n  }\r\n.story-card__content .story-card-logo {\r\n    height: 200%;\r\n    width: auto;\r\n  }\r\n.story-card__content .card-content-primary__passage {\r\n    font-size: 16pxf;\r\n    color: #666666;\r\n    line-height: 1.5;\r\n    margin-bottom: 40px;\r\n    margin-bottom: 56px;\r\n  }\r\n.story-card__content .card-content-secondary__quote {\r\n    font-size: 22px;\r\n    font-style: italic;\r\n    color: #025F97;\r\n    margin: 0 0 40px 0;\r\n  }\r\n.story-card__content .card-content-secondary__quote:before {\r\n    content: '\\201C';\r\n  }\r\n.story-card__content .card-content-secondary__quote:after {\r\n    content: '\\201D';\r\n  }\r\n.story-card__content .card-content-secondary__author,\r\n  .story-card__content .card-content-secondary__position {\r\n    font-size: 16px;\r\n    line-height: 1.5;\r\n    color: #666666;\r\n    margin: 0;\r\n  }\r\n.story-card__content .story-card-link {\r\n    position: absolute;\r\n    margin: 0;\r\n    bottom: 32px;\r\n  }\r\n.story-carousel-title {\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    line-height: 1.5;\r\n    color: #414141;\r\n    margin-bottom: 40px;\r\n  }\r\n.story-carousel {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    max-width: 1195px;\r\n  }\r\n.story-carousel-card-container {\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.story-carousel-card-container .story-card {\r\n    margin: 0;\r\n  }\r\n.story-carousel__slide {\r\n    position: absolute;\r\n    top: 0;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 0.6s ease-in-out;\r\n    width: 100%;\r\n  }\r\n.story-carousel__slide--current {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    visibility: visible;\r\n    opacity: 1;\r\n    position: relative;\r\n  }\r\n.story-carousel__slide--next {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n  }\r\n.story-carousel__slide--previous {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n  }\r\n.story-carousel-control {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 56px;\r\n  }\r\n.story-carousel-control__next,\r\n  .story-carousel-control__previous {\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    border: 1px solid #DDDDDD;\r\n    border-radius: 50%;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 0.1s linear;\r\n  }\r\n.story-carousel-control__next .flat-icon,\r\n  .story-carousel-control__previous .flat-icon {\r\n    display: inline-block;\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    color: #1976D2;\r\n  }\r\n.story-carousel-control__next:hover,\r\n  .story-carousel-control__previous:hover {\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\r\n  }\r\n.story-carousel-control__next--disabled .flat-icon,\r\n  .story-carousel-control__previous--disabled .flat-icon {\r\n    color: #CCCCCC;\r\n  }\r\n.story-carousel-control__step {\r\n    display: inline-block;\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: #1976D2;\r\n    border-radius: 50%;\r\n    margin: 0 15px;\r\n  }\r\n.story-carousel-control__step--one {\r\n    margin-left: 30px;\r\n  }\r\n.story-carousel-control__step--four {\r\n    margin-right: 30px;\r\n  }\r\n.story-carousel-control__step.active {\r\n    background-color: #444444;\r\n  }\r\n.arrow-left {\r\n    display: block;\r\n    position: relative;\r\n    width: 12px;\r\n    height: 12px;\r\n    border-left: 2px solid #1976D2;\r\n    border-bottom: 2px solid #1976D2;\r\n    top: 50%;\r\n    -webkit-transform: rotate(45deg) translateY(-50%);\r\n            transform: rotate(45deg) translateY(-50%);\r\n    margin: 0 auto;\r\n  }\r\n.arrow-right {\r\n    display: block;\r\n    width: 12px;\r\n    height: 12px;\r\n    border-right: 1px solid #1976D2;\r\n    border-bottom: 1px solid #1976D2;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,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Q0Q7O0lBRUUseUNBQXlDO0dBQzFDO0FBQ0Q7O0lBRUUsZUFBZTtHQUNoQjtBQUVEO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7QUFDRDtJQUNFLG1CQUFtQjtHQUNwQjtBQUNEO0lBQ0UsMEJBQTBCO0dBQzNCO0FBRUQ7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1Qsa0RBQTBDO1lBQTFDLDBDQUEwQztJQUMxQyxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0dBQ2xDIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4uc3RvcnktY2FyZCB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREREREREO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xyXG4gICAgLnN0b3J5LWNhcmQ6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDhweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICAgIC5zdG9yeS1jYXJkOmhvdmVyIC5zdG9yeS1jYXJkX19jb250ZW50IHtcclxuICAgICAgaGVpZ2h0OiA2NCU7XHJcbiAgICB9XHJcbiAgICAuc3RvcnktY2FyZDpob3ZlciAuY2FyZC1jb250ZW50LXByaW1hcnkge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAuc3RvcnktY2FyZDpob3ZlciAuY2FyZC1jb250ZW50LXNlY29uZGFyeSB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdG9yeS1jYXJkX19iYW5uZXIge1xyXG4gICAgaGVpZ2h0OiAxNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICB9XHJcbiAgLnN0b3J5LWNhcmRfX2Jhbm5lciAuc3RvcnktY2FyZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLnN0b3J5LWNhcmRfX2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIxMnB4O1xyXG4gICAgd2lkdGg6IDI0OHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweCAzMnB4IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcclxuICAgIGhlaWdodDogMjM4cHg7XHJcbiAgfVxyXG4gIC5zdG9yeS1jYXJkX19jb250ZW50IC5jYXJkLWNvbnRlbnQtcHJpbWFyeSB7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMTVzLCBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcclxuICB9XHJcbiAgLnN0b3J5LWNhcmRfX2NvbnRlbnQgLmNhcmQtY29udGVudC1zZWNvbmRhcnkge1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjNzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gIH1cclxuICAuc3RvcnktY2FyZF9fY29udGVudCAuY2FyZC1jb250ZW50LXByaW1hcnkge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5zdG9yeS1jYXJkX19jb250ZW50IC5jYXJkLWNvbnRlbnQtc2Vjb25kYXJ5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjRweDtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMjQ4cHg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuc3RvcnktY2FyZF9fY29udGVudCAuY2FyZC1jb250ZW50LXByaW1hcnlfX2xvZ28ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcbiAgLnN0b3J5LWNhcmRfX2NvbnRlbnQgLnN0b3J5LWNhcmQtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgLnN0b3J5LWNhcmRfX2NvbnRlbnQgLmNhcmQtY29udGVudC1wcmltYXJ5X19wYXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweGY7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxuICB9XHJcbiAgLnN0b3J5LWNhcmRfX2NvbnRlbnQgLmNhcmQtY29udGVudC1zZWNvbmRhcnlfX3F1b3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiAjMDI1Rjk3O1xyXG4gICAgbWFyZ2luOiAwIDAgNDBweCAwO1xyXG4gIH1cclxuICAuc3RvcnktY2FyZF9fY29udGVudCAuY2FyZC1jb250ZW50LXNlY29uZGFyeV9fcXVvdGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXDIwMUMnO1xyXG4gIH1cclxuICAuc3RvcnktY2FyZF9fY29udGVudCAuY2FyZC1jb250ZW50LXNlY29uZGFyeV9fcXVvdGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1xcMjAxRCc7XHJcbiAgfVxyXG4gIC5zdG9yeS1jYXJkX19jb250ZW50IC5jYXJkLWNvbnRlbnQtc2Vjb25kYXJ5X19hdXRob3IsXHJcbiAgLnN0b3J5LWNhcmRfX2NvbnRlbnQgLmNhcmQtY29udGVudC1zZWNvbmRhcnlfX3Bvc2l0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLnN0b3J5LWNhcmRfX2NvbnRlbnQgLnN0b3J5LWNhcmQtbGluayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdG9yeS1jYXJvdXNlbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDE0MTQxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0b3J5LWNhcm91c2VsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMTk1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdG9yeS1jYXJvdXNlbC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuc3RvcnktY2Fyb3VzZWwtY2FyZC1jb250YWluZXIgLnN0b3J5LWNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuc3RvcnktY2Fyb3VzZWxfX3NsaWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc3RvcnktY2Fyb3VzZWxfX3NsaWRlLS1jdXJyZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuc3RvcnktY2Fyb3VzZWxfX3NsaWRlLS1uZXh0IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB9XHJcbiAgLnN0b3J5LWNhcm91c2VsX19zbGlkZS0tcHJldmlvdXMge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLnN0b3J5LWNhcm91c2VsLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdG9yeS1jYXJvdXNlbC1jb250cm9sX19uZXh0LFxyXG4gIC5zdG9yeS1jYXJvdXNlbC1jb250cm9sX19wcmV2aW91cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gIH1cclxuICAuc3RvcnktY2Fyb3VzZWwtY29udHJvbF9fbmV4dCAuZmxhdC1pY29uLFxyXG4gIC5zdG9yeS1jYXJvdXNlbC1jb250cm9sX19wcmV2aW91cyAuZmxhdC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICMxOTc2RDI7XHJcbiAgfVxyXG4gIC5zdG9yeS1jYXJvdXNlbC1jb250cm9sX19uZXh0OmhvdmVyLFxyXG4gIC5zdG9yeS1jYXJvdXNlbC1jb250cm9sX19wcmV2aW91czpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICAuc3RvcnktY2Fyb3VzZWwtY29udHJvbF9fbmV4dC0tZGlzYWJsZWQgLmZsYXQtaWNvbixcclxuICAuc3RvcnktY2Fyb3VzZWwtY29udHJvbF9fcHJldmlvdXMtLWRpc2FibGVkIC5mbGF0LWljb24ge1xyXG4gICAgY29sb3I6ICNDQ0NDQ0M7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdG9yeS1jYXJvdXNlbC1jb250cm9sX19zdGVwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZEMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gIH1cclxuICAuc3RvcnktY2Fyb3VzZWwtY29udHJvbF9fc3RlcC0tb25lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuICAuc3RvcnktY2Fyb3VzZWwtY29udHJvbF9fc3RlcC0tZm91ciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5zdG9yeS1jYXJvdXNlbC1jb250cm9sX19zdGVwLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG4gIH1cclxuICBcclxuICAuYXJyb3ctbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTk3NkQyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxOTc2RDI7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5hcnJvdy1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzE5NzZEMjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTk3NkQyO1xyXG4gIH0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sossa\Documents\app-sena\angular-app-sena\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map