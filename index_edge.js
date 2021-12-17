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
                rect: ['-924px', '267px','1970px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],['-90'],[],['0.13','0.13']]
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['-9px', '205px','138px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.jpg",'0px','0px'],
                transform: [[],[],[],['0.7','0.7']]
            },
            {
                id: 'a_price',
                type: 'image',
                rect: ['-20px', '272px','158px','198px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a_price.png",'0px','0px'],
                transform: [[],[],[],['0.41','0.41']]
            },
            {
                id: 'pl',
                type: 'image',
                rect: ['-38px', '162px','200px','182px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pl.png",'0px','0px'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'pr',
                type: 'image',
                rect: ['-21px', '269px','157px','197px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pr.png",'0px','0px'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-6px', '406px','133px','135px','auto', 'auto'],
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
            },
            {
                id: 'trip',
                type: 'image',
                rect: ['-34px', '452px','191px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"trip.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '406px'],
                ["style", "height", '135px'],
                ["transform", "scaleY", '0.6'],
                ["style", "clip", [0,163,-37.00032424926758,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-6px'],
                ["style", "width", '133px']
            ],
            "${_trip}": [
                ["style", "top", '452px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-34px']
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
            "${_a1}": [
                ["style", "top", '205px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-9px'],
                ["style", "width", '138px']
            ],
            "${_l}": [
                ["style", "top", '-599px'],
                ["transform", "scaleY", '0.09'],
                ["transform", "scaleX", '0.09'],
                ["style", "opacity", '1'],
                ["style", "left", '-599px']
            ],
            "${_a_price}": [
                ["style", "top", '272px'],
                ["transform", "scaleY", '0.41'],
                ["transform", "scaleX", '0.41'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-20px']
            ],
            "${_pl}": [
                ["style", "top", '162px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-38px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '120px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t2}": [
                ["style", "top", '267px'],
                ["transform", "scaleY", '0.13'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.13'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-924px']
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
            "${_pr}": [
                ["style", "top", '269px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-21px']
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
                { id: "eid166", tween: [ "style", "${_a2}", "clip", [0,163,135,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,163,-37.00032424926758,0]}], position: 4729, duration: 144 },
                { id: "eid193", tween: [ "style", "${_trip}", "opacity", '1', { fromValue: '0.000000'}], position: 1202, duration: 234 },
                { id: "eid194", tween: [ "style", "${_trip}", "opacity", '0.000000', { fromValue: '1'}], position: 3326, duration: 234 },
                { id: "eid165", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0.000000'}], position: 4766, duration: 234 },
                { id: "eid186", tween: [ "style", "${_a2}", "opacity", '0.000000', { fromValue: '1'}], position: 7824, duration: 250 },
                { id: "eid120", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0.000000'}], position: 8154, duration: 234 },
                { id: "eid121", tween: [ "style", "${_t2}", "opacity", '0.000000', { fromValue: '1'}], position: 11000, duration: 250 },
                { id: "eid148", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 11320, duration: 680 },
                { id: "eid180", tween: [ "style", "${_pl}", "opacity", '1', { fromValue: '0.000000'}], position: 4261, duration: 234 },
                { id: "eid192", tween: [ "style", "${_pl}", "opacity", '0.000000', { fromValue: '1'}], position: 7356, duration: 234 },
                { id: "eid150", tween: [ "style", "${_a1}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 234 },
                { id: "eid185", tween: [ "style", "${_a1}", "opacity", '0.000000', { fromValue: '1'}], position: 3326, duration: 234 },
                { id: "eid130", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 386 },
                { id: "eid131", tween: [ "style", "${_f}", "opacity", '0.000000', { fromValue: '1'}], position: 11000, duration: 250 },
                { id: "eid103", tween: [ "style", "${_sa2}", "clip", [0,676,4477,163.6363525390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,676,4477,472.7272644042969]}], position: 11293, duration: 707 },
                { id: "eid115", tween: [ "style", "${_l}", "opacity", '0.000000', { fromValue: '1'}], position: 11000, duration: 250 },
                { id: "eid179", tween: [ "style", "${_a_price}", "opacity", '1', { fromValue: '0.000000'}], position: 734, duration: 234 },
                { id: "eid184", tween: [ "style", "${_a_price}", "opacity", '0.000000', { fromValue: '1'}], position: 3560, duration: 234 },
                { id: "eid181", tween: [ "style", "${_pr}", "opacity", '1', { fromValue: '0.000000'}], position: 4495, duration: 234 },
                { id: "eid191", tween: [ "style", "${_pr}", "opacity", '0.000000', { fromValue: '1'}], position: 7590, duration: 234 }            ]
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
