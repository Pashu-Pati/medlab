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
                id: '_2',
                type: 'image',
                rect: ['-7px', '0px','136px','674px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['6px', '117px','113px','558px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'l',
                type: 'image',
                rect: ['-599px', '-50px','1320px','1320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.09','0.09']]
            },
            {
                id: 'p',
                type: 'image',
                rect: ['-479px', '-373px','1080px','870px','auto', 'auto'],
                opacity: 0.024390243902439,
                fill: ["rgba(0,0,0,0)",im+"p.svg",'0px','0px'],
                transform: [[],[],[],['0.11','0.11']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-505px', '-332px','1130px','800px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.09','0.09']]
            },
            {
                id: 'd',
                type: 'image',
                rect: ['-182px', '-1486px','420px','3342px','auto', 'auto'],
                clip: ['rect(1288.888916015625px 420px 2097.5556640625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"d.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            },
            {
                id: 'tel',
                type: 'image',
                rect: ['-66px', '-710px','280px','2220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tel.svg",'0px','0px'],
                transform: [[],[],[],['0.12','0.12']]
            },
            {
                id: 'li',
                type: 'image',
                rect: ['62px', '-1010px','90px','2270px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'sa2',
                type: 'image',
                rect: ['-276px', '-1966px','676px','4477px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sa.svg",'0px','0px'],
                transform: [[],[],[],['0.22','0.12']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_li}": [
                ["style", "top", '-1010px'],
                ["style", "opacity", '0'],
                ["style", "left", '62px']
            ],
            "${_t}": [
                ["style", "top", '-332px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-505px']
            ],
            "${_tel}": [
                ["style", "top", '-710px'],
                ["transform", "scaleY", '0.12'],
                ["transform", "scaleX", '0.12'],
                ["style", "opacity", '1'],
                ["style", "left", '10px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${__2}": [
                ["style", "top", '0px'],
                ["style", "height", '674px'],
                ["style", "left", '-7px'],
                ["style", "width", '136px']
            ],
            "${_l}": [
                ["style", "top", '-50px'],
                ["transform", "scaleY", '0.09'],
                ["style", "left", '-599px'],
                ["transform", "scaleX", '0.09']
            ],
            "${__1}": [
                ["style", "top", '117px'],
                ["style", "height", '558px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '6px'],
                ["style", "width", '113px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '120px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_p}": [
                ["style", "top", '-373px'],
                ["transform", "scaleY", '0.11'],
                ["transform", "scaleX", '0.11'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-479px']
            ],
            "${_sa2}": [
                ["style", "top", '-1966px'],
                ["transform", "scaleY", '0.12'],
                ["transform", "scaleX", '0.22'],
                ["style", "height", '4477px'],
                ["style", "clip", [0,676,4477,472.7272644042969], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-276px'],
                ["style", "width", '676px']
            ],
            "${_d}": [
                ["style", "top", '-1486px'],
                ["transform", "scaleY", '0.25'],
                ["style", "left", '-270px'],
                ["style", "height", '3342px'],
                ["style", "opacity", '1'],
                ["style", "clip", [1288.888916015625,420,2097.5556640625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.25']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_p}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 363 },
                { id: "eid37", tween: [ "style", "${_p}", "opacity", '1', { fromValue: '0.000000'}], position: 1863, duration: 363 },
                { id: "eid39", tween: [ "style", "${_p}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 363 },
                { id: "eid40", tween: [ "style", "${_p}", "opacity", '1', { fromValue: '0.000000'}], position: 4151, duration: 363 },
                { id: "eid85", tween: [ "style", "${_p}", "opacity", '0', { fromValue: '1'}], position: 5366, duration: 452 },
                { id: "eid112", tween: [ "style", "${_d}", "opacity", '0', { fromValue: '1'}], position: 4750, duration: 616 },
                { id: "eid61", tween: [ "style", "${_d}", "left", '-149px', { fromValue: '-270px'}], position: 1500, duration: 750 },
                { id: "eid88", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 8141, duration: 616 },
                { id: "eid107", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0.000000'}], position: 363, duration: 363 },
                { id: "eid111", tween: [ "style", "${__1}", "opacity", '0.000000', { fromValue: '1'}], position: 1500, duration: 250 },
                { id: "eid113", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0.000000'}], position: 5750, duration: 363 },
                { id: "eid114", tween: [ "style", "${__1}", "opacity", '0.000000', { fromValue: '1'}], position: 6887, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_t}", "scaleY", '0.09', { fromValue: '0'}], position: 5624, duration: 366 },
                { id: "eid25", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 5374, duration: 616 },
                { id: "eid84", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 7452, duration: 616 },
                { id: "eid59", tween: [ "style", "${_tel}", "left", '-78px', { fromValue: '10px'}], position: 2000, duration: 524 },
                { id: "eid103", tween: [ "style", "${_sa2}", "clip", [0,676,4477,163.6363525390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,676,4477,472.7272644042969]}], position: 7923, duration: 707 },
                { id: "eid79", tween: [ "style", "${_tel}", "opacity", '0', { fromValue: '1'}], position: 5134, duration: 616 },
                { id: "eid76", tween: [ "subproperty", "${_tel}", "filter.blur", '86.301368713379px', { fromValue: '0px'}], position: 4707, duration: 927 },
                { id: "eid36", tween: [ "transform", "${_t}", "scaleX", '0.09', { fromValue: '0'}], position: 5624, duration: 366 }            ]
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
