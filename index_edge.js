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
                id: 's2',
                type: 'image',
                rect: ['8px', '2px','280px','169px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s2.png",'0px','0px']
            },
            {
                id: 'f',
                type: 'image',
                rect: ['0px', '-8px','300px','197px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.png",'0px','0px']
            },
            {
                id: 'b0',
                type: 'image',
                rect: ['-268px', '114px','255px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b0.png",'0px','0px']
            },
            {
                id: 'a',
                type: 'image',
                rect: ['-256px', '61px','255px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px']
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['57px', '76px','155px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.png",'0px','0px']
            },
            {
                id: 'b',
                type: 'image',
                rect: ['24px', '121px','217px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.png",'0px','0px'],
                transform: [[],[],[],['0.95','0.95']]
            },
            {
                id: 'le',
                type: 'image',
                rect: ['208px', '-10px','90px','188px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"le.png",'0px','0px']
            },
            {
                id: 'a3',
                type: 'image',
                rect: ['60px', '74px','150px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a3.png",'0px','0px']
            },
            {
                id: 'a31',
                type: 'image',
                rect: ['59px', '74px','152px','23px','auto', 'auto'],
                clip: ['rect(-2.39990234375px 152px 23px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"a31.png",'0px','0px']
            },
            {
                id: 'l2',
                type: 'image',
                rect: ['14px', '3px','193px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l2.png",'0px','0px']
            },
            {
                id: 't2',
                type: 'image',
                rect: ['33px', '157px','186px','17px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.png",'0px','0px'],
                transform: [[],[],[],['1.2','1.2']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b}": [
                ["style", "top", '121px'],
                ["transform", "scaleY", '0.95'],
                ["style", "background-position", [-221.05263157895,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '1'],
                ["style", "left", '24px']
            ],
            "${_b0}": [
                ["style", "top", '114px'],
                ["transform", "scaleX", '1'],
                ["style", "height", '29px'],
                ["style", "opacity", '1'],
                ["style", "left", '-269px'],
                ["style", "width", '255px']
            ],
            "${_s2}": [
                ["style", "top", '2px'],
                ["style", "height", '169px'],
                ["style", "opacity", '1'],
                ["style", "left", '8px'],
                ["style", "width", '280px']
            ],
            "${_a}": [
                ["style", "top", '59px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '46px'],
                ["style", "opacity", '1'],
                ["style", "left", '-256px'],
                ["style", "width", '255px']
            ],
            "${_le}": [
                ["style", "top", '-10px'],
                ["style", "opacity", '0'],
                ["style", "left", '208px']
            ],
            "${_l2}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px']
            ],
            "${_a3}": [
                ["style", "top", '74px'],
                ["style", "opacity", '1'],
                ["style", "left", '60px'],
                ["style", "background-position", [-154.800781,1.199951171875], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_a2}": [
                ["style", "top", '76px'],
                ["style", "opacity", '1'],
                ["style", "left", '57px'],
                ["style", "background-position", [0,26.39990234375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_a31}": [
                ["style", "top", '74px'],
                ["style", "background-position", [-154.799805,0.000244140625], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "clip", [-2.39990234375,152,23,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '59px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t2}": [
                ["style", "top", '157px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2'],
                ["style", "opacity", '1'],
                ["style", "left", '33px'],
                ["style", "background-position", [0,25.454545454545], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_f}": [
                ["style", "top", '-8px'],
                ["style", "height", '197px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
                { id: "eid29", tween: [ "style", "${_a31}", "opacity", '0', { fromValue: '1'}], position: 2640, duration: 75, easing: "swing" },
                { id: "eid24", tween: [ "style", "${_a3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-154.800781,1.199951171875]}], position: 2895, duration: 175, easing: "swing" },
                { id: "eid5", tween: [ "style", "${_le}", "opacity", '1', { fromValue: '0'}], position: 370, duration: 435, easing: "easeInOutElastic" },
                { id: "eid54", tween: [ "style", "${_le}", "opacity", '0', { fromValue: '1'}], position: 6656, duration: 75, easing: "swing" },
                { id: "eid57", tween: [ "style", "${_b0}", "opacity", '0', { fromValue: '1'}], position: 6656, duration: 75, easing: "swing" },
                { id: "eid33", tween: [ "style", "${_a3}", "opacity", '0', { fromValue: '1'}], position: 4695, duration: 75, easing: "swing" },
                { id: "eid44", tween: [ "style", "${_b0}", "left", '16px', { fromValue: '-269px'}], position: 871, duration: 420, easing: "easeInOutElastic" },
                { id: "eid20", tween: [ "style", "${_a31}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-154.799805,0.000244140625]}], position: 1026, duration: 135, easing: "swing" },
                { id: "eid68", tween: [ "style", "${_s2}", "opacity", '0', { fromValue: '1'}], position: 7925, duration: 75, easing: "swing" },
                { id: "eid51", tween: [ "style", "${_t2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,25.454545454545]}], position: 195, duration: 240, easing: "swing" },
                { id: "eid39", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 6656, duration: 75, easing: "swing" },
                { id: "eid35", tween: [ "style", "${_a2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,26.39990234375]}], position: 4770, duration: 235, easing: "swing" },
                { id: "eid59", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 6656, duration: 75, easing: "swing" },
                { id: "eid56", tween: [ "style", "${_b}", "opacity", '0', { fromValue: '1'}], position: 6656, duration: 75, easing: "easeInOutElastic" },
                { id: "eid17", tween: [ "style", "${_a}", "top", '59px', { fromValue: '59px'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_a}", "left", '22px', { fromValue: '-256px'}], position: 500, duration: 581, easing: "easeInOutElastic" },
                { id: "eid67", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 6731, duration: 75, easing: "swing" },
                { id: "eid2", tween: [ "style", "${_l2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 435, easing: "easeInOutCubic" },
                { id: "eid58", tween: [ "style", "${_l2}", "opacity", '0', { fromValue: '1'}], position: 6656, duration: 75, easing: "swing" },
                { id: "eid47", tween: [ "style", "${_b}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-221.05263157895,0]}], position: 1161, duration: 210, easing: "easeInOutElastic" },
                { id: "eid55", tween: [ "style", "${_a}", "opacity", '0', { fromValue: '1'}], position: 6656, duration: 75, easing: "swing" }            ]
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
})(jQuery, AdobeEdge, "EDGE-2035305");
