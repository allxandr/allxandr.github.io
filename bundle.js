(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _vkBridge = require('@vkontakte/vk-bridge');

var _vkBridge2 = _interopRequireDefault(_vkBridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vkBridge2.default.send("VKWebAppInit", {});
_vkBridge2.default.subscribe(function (_ref) {
  var _ref$detail = _ref.detail,
      type = _ref$detail.type,
      data = _ref$detail.data;

  if (type === 'VKWebAppUpdateConfig') {
    var schemeAttribute = document.createAttribute('scheme');
    schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
    document.body.attributes.setNamedItem(schemeAttribute);
  }
});
window.fetchData = async function () {
  var user = await _vkBridge2.default.send("VKWebAppGetUserInfo");
  document.getElementById("label").value = JSON.stringify(user);
};
window.invite = async function () {
  _vkBridge2.default.sendPromise("VKWebAppShowInviteBox", {}).then(function (data) {
    return document.getElementById("label").value = data.success;
  }).catch(function (error) {
    return document.getElementById("label").value = error;
  });
};

window.set_score = async function (score) {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  console.log(urlParams.get('viewer_id'));
  _vkBridge2.default.sendPromise("VKWebAppCallAPIMethod", {
    "method": "secure.addAppEvent",
    "request_id": "324nnefj",
    "params": {
      "user_id": urlParams.get('viewer_id'),
      "activity_id": "2",
      "value": score.toString(),
      "v": "5.130",
      "access_token": "8973bfff8973bfff8973bfff7389051891889738973bfffe9484353e486198a2b5e4809"
    }
  });
  _vkBridge2.default.sendPromise("VKWebAppShowLeaderBoardBox", { user_result: score }).then(function (data) {
    return console.log(data.success);
  }).catch(function (error) {
    return console.log(error);
  });
};

},{"@vkontakte/vk-bridge":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).vkBridge={})}(this,function(e){"use strict";var u=function(){return(u=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function a(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),r=0;for(n=0;n<t;n++)for(var p=arguments[n],i=0,u=p.length;i<u;i++,r++)o[r]=p[i];return o}function d(p,e){var o,r,i=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,n){var t=null!=n?n:o.next();return r[t]=e,t},resolve:function(e,n,t){var o=r[e];o&&(t(n)?o.resolve(n):o.reject(n),r[e]=null)}});return e(function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var n=e.detail.data,t=n.request_id,o=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(n,["request_id"]);t&&i.resolve(t,o,function(e){return!("error_type"in e)})}}),function(o,r){return void 0===r&&(r={}),new Promise(function(e,n){var t=i.add({resolve:e,reject:n},r.request_id);p(o,u(u({},r),{request_id:t}))})}}var n="undefined"!=typeof window,s=Boolean(n&&window.AndroidBridge),f=Boolean(n&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),l=n&&!s&&!f,t=l&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),b=l?"message":"VKWebAppEvent",c=a(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppShowStoryBox","VKWebAppSendToClient","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost"],l&&!t?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowSubscriptionBox","VKWebAppShowInstallPushBox","VKWebAppGetFriends"]:[]),A=n?window.AndroidBridge:void 0,w=f?window.webkit.messageHandlers:void 0;function o(e,n){var t=n||{bubbles:!1,cancelable:!1,detail:void 0},o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),o}"undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(o.prototype=Event.prototype,o));var r=function(t){var p=void 0,i=[];function e(e){i.push(e)}function n(){return f||s}function o(){return l&&window.parent!==window}function r(){return n()||o()}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(b,function(n){if(f||s)return a(i).map(function(e){return e.call(null,n)});if(l&&n&&n.data){var e=n.data,t=e.type,o=e.data,r=e.frameId;t&&"VKWebAppSettings"===t?p=r:a(i).map(function(e){return e({detail:{type:t,data:o}})})}});var u=d(function(e,n){A&&A[e]?A[e](JSON.stringify(n)):w&&w[e]&&"function"==typeof w[e].postMessage?w[e].postMessage(n):l&&parent.postMessage({handler:e,params:n,type:"vk-connect",webFrameId:p,connectVersion:t},"*")},e);return{send:u,sendPromise:u,subscribe:e,unsubscribe:function(e){var n=i.indexOf(e);-1<n&&i.splice(n,1)},supports:function(e){return s?!(!A||"function"!=typeof A[e]):f?!(!w||!w[e]||"function"!=typeof w[e].postMessage):l&&-1<c.indexOf(e)},isWebView:n,isIframe:o,isEmbedded:r,isStandalone:function(){return!r()}}}("2.4.0");e.applyMiddleware=function e(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];return o.includes(void 0)||o.includes(null)?e.apply(void 0,o.filter(function(e){return"function"==typeof e})):function(t){if(0===o.length)return t;var e,n={subscribe:t.subscribe,send:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.send.apply(t,e)}};return e=o.filter(function(e){return"function"==typeof e}).map(function(e){return e(n)}).reduce(function(n,t){return function(e){return n(t(e))}})(t.send),u(u({},t),{send:e})}},e.default=r,Object.defineProperty(e,"__esModule",{value:!0})});

},{}]},{},[1]);
