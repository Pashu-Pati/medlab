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
                id: 't2',
                type: 'image',
                rect: ['-924px', '337px','1970px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],['-90'],[],['0.11','0.11']]
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['-9px', '223px','138px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.jpg",'0px','0px'],
                transform: [[],[],[],['0.7','0.7']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-6px', '348px','133px','135px','auto', 'auto'],
                clip: ['rect(0px 163px 135px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"a2.jpg",'0px','0px'],
                transform: [[],[],[],['0.6','0.6']]
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
            "${_a2}": [
                ["style", "top", '348px'],
                ["style", "clip", [0,163,-37.00032424926758,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '0.6'],
                ["style", "height", '135px'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-6px'],
                ["style", "width", '133px']
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
            "${_l}": [
                ["style", "top", '-599px'],
                ["transform", "scaleY", '0.09'],
                ["transform", "scaleX", '0.09'],
                ["style", "opacity", '1'],
                ["style", "left", '-599px']
            ],
            "${_a1}": [
                ["style", "top", '223px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-9px'],
                ["style", "width", '138px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '120px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_sa2}": [
                ["style", "top", '-1909px'],
                ["transform", "scaleY", '0.14234'],
                ["transform", "scaleX", '0.26095'],
                ["style", "height", '4477px'],
                ["style", "clip", [0,676,4477,472.7272644042969], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-277px'],
                ["style", "width", '676px']
            ],
            "${_t2}": [
                ["style", "top", '337px'],
                ["transform", "scaleY", '0.11'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.11'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-924px']
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
                { id: "eid161", tween: [ "style", "${_a2}", "clip", [0,163,135,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,163,-37.00032424926758,0]}], position: 1725, duration: 144 },
                { id: "eid166", tween: [ "style", "${_a2}", "clip", [0,163,135,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,163,-37.00032424926758,0]}], position: 6000, duration: 144 },
                { id: "eid152", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0.000000'}], position: 1606, duration: 234 },
                { id: "eid153", tween: [ "style", "${_a2}", "opacity", '0.000000', { fromValue: '1'}], position: 3490, duration: 250 },
                { id: "eid165", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0.000000'}], position: 6037, duration: 234 },
                { id: "eid155", tween: [ "style", "${_a2}", "opacity", '0.000000', { fromValue: '1'}], position: 7802, duration: 250 },
                { id: "eid120", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 234 },
                { id: "eid121", tween: [ "style", "${_t2}", "opacity", '0.000000', { fromValue: '1'}], position: 5787, duration: 250 },
                { id: "eid148", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 9777, duration: 680 },
                { id: "eid150", tween: [ "style", "${_a1}", "opacity", '1', { fromValue: '0.000000'}], position: 667, duration: 234 },
                { id: "eid151", tween: [ "style", "${_a1}", "opacity", '0.000000', { fromValue: '1'}], position: 8052, duration: 250 },
                { id: "eid130", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 386 },
                { id: "eid131", tween: [ "style", "${_f}", "opacity", '0.000000', { fromValue: '1'}], position: 9000, duration: 250 },
                { id: "eid103", tween: [ "style", "${_sa2}", "clip", [0,676,4477,163.6363525390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,676,4477,472.7272644042969]}], position: 9750, duration: 707 },
                { id: "eid115", tween: [ "style", "${_l}", "opacity", '0.000000', { fromValue: '1'}], position: 9000, duration: 250 }            ]
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
