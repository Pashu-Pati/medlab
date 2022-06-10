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
                id: 'Group',
                type: 'group',
                rect: ['-370', '-10','703','199','auto', 'auto'],
                c: [
                {
                    id: 'bg',
                    type: 'image',
                    rect: ['0px', '0px','354px','199px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
                },
                {
                    id: 'bgCopy',
                    type: 'image',
                    rect: ['349px', '0px','354px','199px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px'],
                    transform: [[],[],[],['-1']]
                }]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['-1451px', '-360px','3067px','853px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px','100%','100%'],
                transform: [[],[],[],['0.13','0.13']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['21px', '-753px','257px','1810px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px','100%','100%'],
                transform: [[],['90'],[],['0.1','0.1']]
            },
            {
                id: 'u2',
                type: 'image',
                rect: ['-63px', '-83px','570px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"u2.svg",'0px','0px'],
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'a12',
                type: 'image',
                rect: ['-67px', '-237px','580px','610px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a12.svg",'0px','0px'],
                transform: [[],[],[],['0.17','0.17']]
            },
            {
                id: 'a22',
                type: 'image',
                rect: ['-109px', '-52px','660px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a22.svg",'0px','0px'],
                transform: [[],[],[],['0.17','0.17']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "left", '318px'],
                ["style", "top", '189px']
            ],
            "${_logo}": [
                ["style", "top", '-360px'],
                ["transform", "scaleX", '0.13'],
                ["transform", "scaleY", '0.13'],
                ["style", "opacity", '0'],
                ["style", "height", '853px'],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '-1451px'],
                ["style", "width", '3067px']
            ],
            "${_t12}": [
                ["style", "top", '-135px'],
                ["style", "left", '-482px']
            ],
            "${_u2}": [
                ["style", "top", '-83px'],
                ["transform", "scaleY", '0.2'],
                ["transform", "scaleX", '0.2'],
                ["style", "opacity", '0'],
                ["style", "left", '-63px'],
                ["style", "clip", [0,1023,-188.33251953125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_u}": [
                ["style", "top", '189px'],
                ["style", "left", '318px']
            ],
            "${_a1}": [
                ["style", "left", '318px'],
                ["style", "top", '189px']
            ],
            "${_bg}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '199px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '354px']
            ],
            "${_t1}": [
                ["style", "left", '-665px'],
                ["style", "top", '-230px']
            ],
            "${_t}": [
                ["style", "top", '-753px'],
                ["style", "height", '1810px'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '21px'],
                ["style", "width", '257px']
            ],
            "${_a12}": [
                ["style", "top", '-237px'],
                ["transform", "scaleY", '0.17'],
                ["transform", "scaleX", '0.17'],
                ["style", "opacity", '0'],
                ["style", "left", '-67px']
            ],
            "${_bgCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '199px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '1'],
                ["style", "left", '349px'],
                ["style", "width", '354px']
            ],
            "${_a22}": [
                ["style", "top", '-52px'],
                ["transform", "scaleY", '0.17'],
                ["transform", "scaleX", '0.17'],
                ["style", "opacity", '0'],
                ["style", "left", '-109px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Group}": [
                ["style", "left", '-1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid128", tween: [ "style", "${_t12}", "top", '-135px', { fromValue: '-135px'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_t1}", "left", '-665px', { fromValue: '-665px'}], position: 0, duration: 0 },
                { id: "eid122", tween: [ "style", "${_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 603 },
                { id: "eid167", tween: [ "style", "${_u}", "left", '62px', { fromValue: '318px'}], position: 14000, duration: 500 },
                { id: "eid121", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 603 },
                { id: "eid163", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid149", tween: [ "transform", "${_t}", "scaleY", '0.12', { fromValue: '0'}], position: 603, duration: 1224 },
                { id: "eid184", tween: [ "transform", "${_t}", "scaleY", '0.12', { fromValue: '0'}], position: 5223, duration: 880, easing: "easeOutQuad" },
                { id: "eid140", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 1224, duration: 603 },
                { id: "eid183", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 5223, duration: 880, easing: "easeOutQuad" },
                { id: "eid162", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 12603, duration: 1000 },
                { id: "eid191", tween: [ "style", "${_bgCopy}", "opacity", '0', { fromValue: '1'}], position: 14603, duration: 397 },
                { id: "eid170", tween: [ "style", "${_a1}", "top", '-85px', { fromValue: '189px'}], position: 14000, duration: 500 },
                { id: "eid124", tween: [ "style", "${_t1}", "top", '-230px', { fromValue: '-230px'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_Group}", "left", '-370px', { fromValue: '-1px'}], position: 0, duration: 15000 },
                { id: "eid148", tween: [ "transform", "${_t}", "scaleX", '0.12', { fromValue: '0'}], position: 603, duration: 1224 },
                { id: "eid182", tween: [ "transform", "${_t}", "scaleX", '0.12', { fromValue: '0'}], position: 5223, duration: 880, easing: "easeOutQuad" },
                { id: "eid175", tween: [ "style", "${_u2}", "clip", [0,1023,1385,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1023,-188.33251953125,0]}], position: 603, duration: 2897 },
                { id: "eid169", tween: [ "style", "${_a1}", "left", '57px', { fromValue: '318px'}], position: 14000, duration: 500 },
                { id: "eid177", tween: [ "style", "${_u2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 603 },
                { id: "eid176", tween: [ "style", "${_u2}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid172", tween: [ "style", "${_a2}", "top", '54px', { fromValue: '189px'}], position: 14000, duration: 500 },
                { id: "eid171", tween: [ "style", "${_a2}", "left", '21px', { fromValue: '318px'}], position: 14000, duration: 500 },
                { id: "eid180", tween: [ "style", "${_a22}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 620 },
                { id: "eid181", tween: [ "style", "${_a22}", "opacity", '0', { fromValue: '1'}], position: 4351, duration: 1000 },
                { id: "eid178", tween: [ "style", "${_a12}", "opacity", '1', { fromValue: '0'}], position: 6620, duration: 1000 },
                { id: "eid192", tween: [ "style", "${_a12}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 620 },
                { id: "eid193", tween: [ "style", "${_a12}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid168", tween: [ "style", "${_u}", "top", '81px', { fromValue: '189px'}], position: 14000, duration: 500 },
                { id: "eid127", tween: [ "style", "${_t12}", "left", '-482px', { fromValue: '-482px'}], position: 0, duration: 0 }            ]
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
