/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'l',
                type: 'image',
                rect: ['-599px', '-599px','1320px','1320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.09','0.09']]
            },
            {
                id: 'f',
                type: 'image',
                rect: ['0px', '97px','120px','571px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.jpg",'0px','0px']
            },
            {
                id: 'sa2',
                type: 'image',
                rect: ['-277px', '-1909px','676px','4477px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sa.svg",'0px','0px'],
                transform: [[],[],[],['0.26095','0.14234']]
            },
            {
                id: '_12',
                type: 'image',
                rect: ['-560px', '-607px','1240px','1630px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.07','0.07']]
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-927px', '347px','1970px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],['-90'],[],['0.13','0.13']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['-820px', '-229px','1760px','940px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.svg",'0px','0px'],
                transform: [[],[],[],['0.05','0.05']]
            },
            {
                id: '_3',
                type: 'image',
                rect: ['-650px', '-387px','1413px','1510px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'p',
                type: 'image',
                rect: ['-196px', '187px','510px','630px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'li',
                type: 'image',
                rect: ['73px', '-454px','80px','2020px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_sa2}": [
                ["style", "top", '-1909px'],
                ["transform", "scaleY", '0.14234'],
                ["style", "height", '4477px'],
                ["transform", "scaleX", '0.26095'],
                ["style", "left", '-277px'],
                ["style", "clip", [0,676,4477,472.7272644042969], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '676px']
            ],
            "${_li}": [
                ["style", "top", '-454px'],
                ["style", "opacity", '0'],
                ["style", "left", '73px']
            ],
            "${_f}": [
                ["style", "top", '97px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${__3}": [
                ["style", "top", '-387px'],
                ["style", "clip", [0,1413,-40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '0.08'],
                ["style", "height", '1510px'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-650px'],
                ["style", "width", '1413px']
            ],
            "${__2}": [
                ["style", "top", '-229px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-820px']
            ],
            "${__12}": [
                ["style", "top", '-517px'],
                ["transform", "scaleY", '0.07'],
                ["transform", "scaleX", '0.07'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-560px']
            ],
            "${_l}": [
                ["style", "top", '-599px'],
                ["transform", "scaleY", '0.09'],
                ["transform", "scaleX", '0.09'],
                ["style", "opacity", '1'],
                ["style", "left", '-599px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '670px'],
                ["style", "width", '120px']
            ],
            "${_p}": [
                ["style", "top", '187px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-196px']
            ],
            "${_t2}": [
                ["style", "top", '347px'],
                ["transform", "scaleY", '0.13'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.13'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-927px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid128", tween: [ "style", "${_p}", "opacity", '1', { fromValue: '0.000000'}], position: 7500, duration: 234 },
                { id: "eid129", tween: [ "style", "${_p}", "opacity", '0.000000', { fromValue: '1'}], position: 9000, duration: 250 },
                { id: "eid148", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 9777, duration: 680 },
                { id: "eid145", tween: [ "style", "${__12}", "top", '-548px', { fromValue: '-517px'}], position: 1781, duration: 65 },
                { id: "eid115", tween: [ "style", "${_l}", "opacity", '0.000000', { fromValue: '1'}], position: 9000, duration: 250 },
                { id: "eid118", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 234 },
                { id: "eid119", tween: [ "style", "${__2}", "opacity", '0.000000', { fromValue: '1'}], position: 9000, duration: 250 },
                { id: "eid130", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 386 },
                { id: "eid131", tween: [ "style", "${_f}", "opacity", '0.000000', { fromValue: '1'}], position: 9000, duration: 250 },
                { id: "eid127", tween: [ "style", "${__3}", "clip", [0,1413,1510,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1413,-40,0]}], position: 5815, duration: 1685 },
                { id: "eid116", tween: [ "style", "${__12}", "opacity", '1', { fromValue: '0.000000'}], position: 1677, duration: 234 },
                { id: "eid117", tween: [ "style", "${__12}", "opacity", '0.000000', { fromValue: '1'}], position: 3750, duration: 250 },
                { id: "eid124", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0.000000'}], position: 5580, duration: 234 },
                { id: "eid125", tween: [ "style", "${__3}", "opacity", '0.000000', { fromValue: '1'}], position: 9000, duration: 250 },
                { id: "eid103", tween: [ "style", "${_sa2}", "clip", [0,676,4477,163.6363525390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,676,4477,472.7272644042969]}], position: 9750, duration: 707 },
                { id: "eid120", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0.000000'}], position: 1880, duration: 234 },
                { id: "eid121", tween: [ "style", "${_t2}", "opacity", '0.000000', { fromValue: '1'}], position: 5250, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5055908");
