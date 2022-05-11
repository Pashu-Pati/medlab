(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol;

   (function(symbolName) {
      
      
          Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play(0);

      });

   })("stage");

})(jQuery, AdobeEdge, "EDGE-5055908");