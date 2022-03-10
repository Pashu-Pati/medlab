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
                id: 'bg',
                type: 'image',
                rect: ['-413px', '144px','682px','383px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px'],
                transform: [[],['-90']]
            },
            {
                id: 't13',
                type: 'image',
                rect: ['-450px', '-487px','1023px','1385px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-579px', '-31px','1310px','1250px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px','80%','80%'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['-1473px', '-371px','3067px','853px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px','100%','100%'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't3',
                type: 'image',
                rect: ['-519px', '-204px','1160px','1590px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t3.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-69px', '-503px','257px','1810px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px','100%','100%'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '-371px'],
                ["style", "opacity", '0'],
                ["style", "height", '853px'],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '-1473px'],
                ["style", "width", '3067px']
            ],
            "${_t3}": [
                ["style", "top", '-204px'],
                ["style", "opacity", '0'],
                ["style", "left", '-519px']
            ],
            "${_t13}": [
                ["style", "top", '-487px'],
                ["style", "clip", [0,1023,-188.33251953125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '1385px'],
                ["style", "opacity", '0'],
                ["style", "left", '-450px'],
                ["style", "width", '1023px']
            ],
            "${_t1}": [
                ["style", "left", '-665px'],
                ["style", "top", '-230px']
            ],
            "${_bg}": [
                ["style", "top", '143px'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "height", '383px'],
                ["style", "opacity", '0'],
                ["style", "left", '-150px'],
                ["style", "width", '682px']
            ],
            "${_t12}": [
                ["style", "top", '-135px'],
                ["style", "left", '-482px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '670px'],
                ["style", "width", '120px']
            ],
            "${_t}": [
                ["style", "top", '-503px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '1810px'],
                ["style", "opacity", '0'],
                ["style", "left", '-69px'],
                ["style", "width", '257px']
            ],
            "${_t2}": [
                ["style", "top", '-31px'],
                ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '-579px'],
                ["style", "opacity", '0']
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
                { id: "eid124", tween: [ "style", "${_t1}", "top", '-230px', { fromValue: '-230px'}], position: 0, duration: 0 },
                { id: "eid128", tween: [ "style", "${_t12}", "top", '-135px', { fromValue: '-135px'}], position: 0, duration: 0 },
                { id: "eid137", tween: [ "style", "${_t13}", "clip", [0,1023,1385,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1023,-188.33251953125,0]}], position: 603, duration: 2897 },
                { id: "eid122", tween: [ "style", "${_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 603 },
                { id: "eid166", tween: [ "style", "${_bg}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid141", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 603 },
                { id: "eid143", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 7731, duration: 603 },
                { id: "eid121", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 603 },
                { id: "eid163", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid139", tween: [ "style", "${_t3}", "opacity", '1', { fromValue: '0'}], position: 8334, duration: 603 },
                { id: "eid164", tween: [ "style", "${_t3}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid149", tween: [ "transform", "${_t}", "scaleY", '0.1', { fromValue: '0'}], position: 3276, duration: 1224 },
                { id: "eid117", tween: [ "style", "${_bg}", "left", '-413px', { fromValue: '-150px'}], position: 0, duration: 15000 },
                { id: "eid135", tween: [ "style", "${_t13}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 603 },
                { id: "eid165", tween: [ "style", "${_t13}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid140", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 3897, duration: 603 },
                { id: "eid162", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid123", tween: [ "style", "${_t1}", "left", '-665px', { fromValue: '-665px'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_t12}", "left", '-482px', { fromValue: '-482px'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "transform", "${_t}", "scaleX", '0.1', { fromValue: '0'}], position: 3276, duration: 1224 }            ]
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
