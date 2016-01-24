(function() {
var triggerBttn = document.getElementsByClassName('trigger-overlay');
transEndEventNames = {'WebkitTransition': 'webkitTransitionEnd','MozTransition': 'transitionend','OTransition': 'oTransitionEnd','msTransition': 'MSTransitionEnd','transition': 'transitionend'},
transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
support = { transitions : Modernizr.csstransitions };
function toggleOverlay() {
var overlay = document.getElementById(this.getAttribute('data-href'));
if( classie.has( overlay, 'open' ) ) {
classie.remove( overlay, 'open' );
classie.add( overlay, 'close' );
var onEndTransitionFn = function( ev ) {
if( support.transitions ) {
if( ev.propertyName !== 'visibility' ) return;
this.removeEventListener( transEndEventName, onEndTransitionFn );
}
classie.remove( overlay, 'close' );
};
if( support.transitions ) {
overlay.addEventListener( transEndEventName, onEndTransitionFn );
}
else {
onEndTransitionFn();
}
}
else if( !classie.has( overlay, 'close' ) ) {
classie.add( overlay, 'open' );
}
else if( classie.has( overlay, 'close' ) ) {
classie.add( overlay, 'open' );
}
}
for(var i=0; i < triggerBttn.length ; i++){triggerBttn[i].addEventListener( 'click', toggleOverlay );}
var closeBttn = document.getElementsByClassName('overlay-close');
for(var i=0; i < closeBttn.length ; i++){
closeBttn[i].addEventListener( 'click' , function () {this.parentNode.className = this.parentNode.className.replace( /(?:^|\s)open(?!\S)/g , '' );} );
}
})();
