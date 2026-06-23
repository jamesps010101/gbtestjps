if (typeof _cls_config === "undefined") {
    _cls_config = {};
}

/* BEGIN DEBUGGER */
_cls_config.devToolsDebuggerBasedDetection = false;
/* END DEBUGGER */

/* BEGIN iframes */
_cls_config.iframesAutoInject = true;
_cls_config.iframeWaitForHandshake = true;
_cls_config.reportViaTopWindow = true;
/* END iframes */

/* BEGIN ajax recording */
//const ajaxRules = "and(statusgte(400),uriMatches(^(?!\S*111\S*)(?!\S*222\S*)\S+))";
const ajaxRules = "always";
_cls_config.ajaxRecordResponseHeaders = ajaxRules;
_cls_config.ajaxRecordResponseBody = ajaxRules;
_cls_config.ajaxRecordRequestHeaders = ajaxRules;
_cls_config.ajaxRecordRequestBody = ajaxRules;
_cls_config.ajaxRecordMetadata = "never";
_cls_config.ajaxRecordStats = "tld";
_cls_config.interceptAjax = true;
/* END ajax recording */

/* BEGIN attributes */
_cls_config.clientAttributesEnabled = true;
_cls_config.pageAttributesEnabled = true;
/* END attributes */

/* BEGIN masking */
_cls_config.valueMaskingMode = "whitelist";
//_cls_config.maskWhitelistValueById = ["acountnumber"];
_cls_config.maskWhitelistValueByClass = ["gbunmask"];
//_cls_config.valueWhitelistMaskSimpleSelector = ["div[class^='number-'] > input"];

_cls_config.domMaskingMode = "blacklist";
//_cls_config.domBlacklistMaskSimpleSelector = ["#ace-table-condensed-row-value-0-info > div > span.ace-body.ace-body--semibold"];
_cls_config.domBlacklistMaskContentByClass = ["gbmask"];
//_cls_config.domBlacklistMaskContentById = ["ace-table-condensed-row-label-0-info"];

//_cls_config.valueCensorPrefixBySelector = ["#id_0b7a21_phone"];
//_cls_config.valueCensorUnmaskedSuffixLength = 4;
/* END masking */

//_cls_config.domTamperingDetectionEnabled=true;

_cls_config.recordMouseMoves = true;
_cls_config.recordScrolls = true;
_cls_config.recordHovers = true;
_cls_config.recordScrollReach = true;
_cls_config.domIncludeCSSSelector = true;
_cls_config.domFormAnalysisReporting = true;
_cls_config.domFormValidationTracking = true;

/* BEGIN Replay Resources */
_cls_config.resourcesRecordEnabled = true;
_cls_config.resourcesRecordCount = 5;
_cls_config.resourcesRecordChance = 1;
_cls_config.resourcesRecordAllowCors = true;
_cls_config.resourceRecordCssOnly = false;
_cls_config.resourceIgnoreWhenUrlContains = [
  '/glassvox/staticimages/',
  'jps.xyz',
  'fonts.googleapis.com'
];

_cls_config.domRecordCssRules=true;
_cls_config.domRecordCssProps=true;
//  _cls_config.enableAdoptedCss=true;
//  _cls_config.domPreciseStyleSheetCloning=true;
/* END Replay Resources */

/* BEGIN Shadow DOM */
_cls_config.recordShadowDom = true;
//  _cls_config.recordNonNativeShadowAsElementContainer=true;
/* END Shadow DOM */

/* BEGIN glassvox voc */
//_cls_config.collectVoc=false; //default: true
_cls_config.supportRemoteClientConfig=true;
// _cls_config.reportEventsImmediately = ['glassvoxOpen', 'glassvoxResponse', 'glassvoxClose', 'glassvoxComplete', 'pageSnapshot'];
_cls_config.remoteClientConfigAllowBlank=true;
//_cls_config.supportGlassvoxRemoteConfigOnAllPages=true;
/* END glassvox voc */

_cls_config.webVitalsRecordEnabled = true;
_cls_config.resourceTimingRecordEnabled = true;
_cls_config.resourceTimingRecordEnabledByChance = 1;
//_cls_config.resourceTimingRecordAjax = false;

//_cls_config.recordAnimation = true;

/* BEGIN global objects */
//_cls_config.dataLayerPath = "jpsData";
//_cls_config.dataLayerIncludeList = ["myItems.name"];
_cls_config.captureGlobalObjects = [
  "dataLayer.level1.label"
];
//_cls_config.captureGlobalObjectsOnSegmentChange=true;
_cls_config.captureDataLayerArrayPushes=true;
//_cls_config.collectDataLayerOnlyOnFirstPage = true;
//_cls_config.dedupeDataLayerValues = true;
//_cls_config.useFullPathForObjectCapturing = true;
//_cls_config.sendDatalayerPushUsingCustomEvent = true;
//_cls_config.dataLayerArrayName="dataLayer";
/* END global objects */

/* BEGIN segments */
//_cls_config.captureQueryStringParamsOnSegmentChange=false;
//_cls_config.segmentationAlwaysSendTitleChange = false;
//_cls_config.forceLogicalSegmentationOnHash=true;
//_cls_config.segmentationTriggerBySimpleSelector = ['xxxxxxxx'];
_cls_config.waitForSegmentRender = 5000;
//_cls_config.ignoreSegmentLoadEnd = true;
/* END segments */

//_cls_config.clsByNativeCookie = "customsessid";

//_cls_config.initDetectorOnInteractive = true;

/* BEGIN callbacks */
// if (window.location.href.toLowerCase().includes("redirect")) {
// let hasClicked = false;
// _cls_config.onReadyCallback = function(clss, clsv) {
//   document.addEventListener("click", function () {
//     hasClicked = true;
//   });
// };
// }
// _cls_config.onIntegrationCallback = function(clse) { 
//      console.log('clse fired from onIntegrationCallback:' + clse);
//      console.log(new Date().toISOString());
// }
/* END callbacks */

/* BEGIN a/b testing */
// _cls_config.interceptABTesting=true;
// _cls_config.interceptAdobeABEvent=true;
// _cls_config.abTestingGlobalObject="ttMeta";
/* END a/b testing */

/* BEGIN struggles */
//_cls_config.collectStruggles = false;
//_cls_config.struggleCaptureBlankPageTargetsSelector = ["body > main","#app",".card"];
/* END struggles */

/* BEGIN SESSIONIZING */
_cls_config.enableSessionizingByCors = false;
/* END SESSIONIZING */

//_cls_config.domOmitBySelector=['div#banner'];

/* BEGIN DOM related */
//_cls_config.flushEventsOnClick = true;
//_cls_config.domForceUpdateOnClick=true;
//_cls_config.domRecordEnabled=false;
//_cls_config.domRecordEnabledByChance=0;
//_cls_config.domIgnoreChangesByTag = ['STYLE'];
//_cls_config.domNewPageTriggers = ["body"];
/* END DOM related */

/* BEGIN SCIntegration */
_cls_config.SCIntegration = true;
_cls_config.SCIntegrationCheckPayload = true;
_cls_config.SCIntegrationURLsContainList = ["httpbin"];
_cls_config.SCIntegrationKeyList = ["reqid", "name"];
// _cls_config.SCItegrationAjaxListen = true;
/* END SCIntegration */

//_cls_config.interceptAdobeSdkVariables = true;


/* BEGIN VISUAL NAMES */
_cls_config.visualName = {
    "by": {
        "title": true,
        "alt": true,
        "ariaLabel": true,
        "labelTag": true,
        "inlineText": true,
        "placeholder": true,
        "inputConsts": true,
        "inputButtonsValue": true,
        "name": false,
        "id": true,
        "parent": true,
        "child": true
    },
    //"elementListToCheckParent": ["img", "span", "div", "path",'ACE-BUTTON-2-1-8'],
    //"wrapperElementList": ['BUTTON', 'A', 'LI', 'SVG', 'ACE-BUTTON-2-1-8']
    //"maxParentLevel": 6
    //"elementListToCheckChild": ['button', 'svg'],
};
/* END VISUAL NAMES */

/* BEGIN DEBUGGING */
_cls_config.debugMode = true;
_cls_config.traceMode = true;
/* END DEBUGGING */

/* BEGIN TESTING -------------------------------------------------------------------------- */
//_cls_config.duplicateIdCheck=true;
_cls_config.useIdSelectors=true;
//_cls_config.useNameInFormSelectors=true;
//_cls_config.externalIdAttr="name";
//_cls_config.externalIdUseGbId=true;
//_cls_config.snapshotImmediatePages = ["*redirect*"];
//_cls_config.xhrBypassOnReadyStateChange=true;
//_cls_config.forceHookFetch=true;
//_cls_config.reportByFetch=true;
//_cls_config.reportInterval = 50;
//_cls_config.domStartAfter = 10;
//_cls_config.reportPostInterval = 10;
//_cls_config.versionResources = true;
//_cls_config.versionResourcesEnabledByChance = 0.25;
//_cls_config.struggleRageClickIgnoreBySelector = [];
//_cls_config.noIdSelectorsForIDs = ["test"];
//_cls_config.recordConsoleInfo = true;
//_cls_config.recordConsoleInfoWhitelist = ["PurchaseInfo:*"];
//_cls_config.recordConsoleInfoBlacklist = [];
//_cls_config.botDetection = true;
/* END TESTING ---------------------------------------------------------------------------- */





///////////////////////////// ENVIRONMENT SETUP /////////////////////////////////////////////

/* BEGIN fingerprinting */
//_cls_config.useFingerprint = true;
//_cls_config.fingerprintSupportReturningUser = true;
//JPS_Test2
//_cls_config.reportEndpoint = "https://report.gbdemo.glassboxdigital.io/5hu2nmql/validation/bd2485eb-53c6-5c14-62ed-8bf8af62add9/cls_validation";
//_cls_config.fingerprintApiTimeout = 3000;
// _cls_config.thirdPartyCookieDetectionTimeout = 5000;
/* END fingerprinting */

/* BEGIN reportURI */
//JPS_Test2
_cls_config.reportURI = "https://report.gbdemo.glassboxdigital.io/5hu2nmql/reporting/bd2485eb-53c6-5c14-62ed-8bf8af62add9/cls_report";
/* END REPORTURI */

/* BEGIN detectorPath */
_cls_config.detectorPath = 'https://cdn.gbqofs.com/sv/a/';
/* END detectorPath */
