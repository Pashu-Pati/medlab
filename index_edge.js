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
                fill: ["rgba(0,0,0,0)",im+"f.jpg",'0px','0px'],
                transform: [[],[],[],['1','-1']]
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
                rect: ['-926px', '298px','1970px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],['-90'],[],['0.1','0.1']]
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
                id: 'li',
                type: 'image',
                rect: ['73px', '-454px','80px','2020px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'n3',
                type: 'image',
                rect: ['-85px', '385px','290px','250px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"n3.svg",'0px','0px'],
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'n2',
                type: 'image',
                rect: ['-264px', '-117px','640px','920px','auto', 'auto'],
                clip: ['rect(-46.66666793823242px 680px 920px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"n2.svg",'0px','0px'],
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'n1',
                type: 'image',
                rect: ['-30px', '-736px','183px','2000px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"n1.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_li}": [
                ["style", "top", '-454px'],
                ["style", "opacity", '0'],
                ["style", "left", '73px']
            ],
            "${_f}": [
                ["style", "top", '97px'],
                ["transform", "scaleY", '-1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${__3}": [
                ["style", "top", '-387px'],
                ["transform", "scaleX", '0.08'],
                ["transform", "scaleY", '0.08'],
                ["style", "left", '-650px'],
                ["style", "height", '1510px'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,1413,-40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1413px']
            ],
            "${__2}": [
                ["style", "top", '-229px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-820px']
            ],
            "${_l}": [
                ["style", "top", '-599px'],
                ["transform", "scaleY", '0.09'],
                ["transform", "scaleX", '0.09'],
                ["style", "opacity", '1'],
                ["style", "left", '-599px']
            ],
            "${_n3}": [
                ["style", "top", '385px'],
                ["transform", "scaleY", '0.2'],
                ["transform", "scaleX", '0.2'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-85px']
            ],
            "${_n2}": [
                ["style", "top", '-117px'],
                ["transform", "scaleY", '0.2'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.2'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-264px'],
                ["style", "clip", [-46.66666793823242,680,920,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                ["style", "top", '298px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-926px']
            ],
            "${_n1}": [
                ["style", "top", '-736px'],
                ["transform", "scaleY", '0.5'],
                ["style", "height", '2000px'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-147px'],
                ["style", "width", '183px']
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
                { id: "eid157", tween: [ "style", "${_n2}", "opacity", '1', { fromValue: '0.000000'}], position: 4409, duration: 234 },
                { id: "eid158", tween: [ "style", "${_n2}", "opacity", '0.000000', { fromValue: '1'}], position: 10000, duration: 250 },
                { id: "eid125", tween: [ "style", "${__3}", "opacity", '0.000000', { fromValue: '1'}], position: 10000, duration: 250 },
                { id: "eid148", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 9777, duration: 680 },
                { id: "eid130", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 386 },
                { id: "eid131", tween: [ "style", "${_f}", "opacity", '0.000000', { fromValue: '1'}], position: 10000, duration: 250 },
                { id: "eid152", tween: [ "style", "${_n1}", "opacity", '0.000000', { fromValue: '1'}], position: 4144, duration: 250 },
                { id: "eid153", tween: [ "style", "${_n3}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 356 },
                { id: "eid154", tween: [ "style", "${_n3}", "opacity", '0.000000', { fromValue: '1'}], position: 10000, duration: 250 },
                { id: "eid103", tween: [ "style", "${_sa2}", "clip", [0,676,4477,163.6363525390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,676,4477,472.7272644042969]}], position: 10000, duration: 707 },
                { id: "eid120", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 234 },
                { id: "eid121", tween: [ "style", "${_t2}", "opacity", '0.000000', { fromValue: '1'}], position: 4144, duration: 250 },
                { id: "eid115", tween: [ "style", "${_l}", "opacity", '0.000000', { fromValue: '1'}], position: 10000, duration: 250 },
                { id: "eid150", tween: [ "style", "${_n1}", "left", '-33px', { fromValue: '-147px'}], position: 0, duration: 386 }            ]
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
