YUI().use('node', 'event', 'aui-modal', function (Y) {
    
    Y.one('.pure-menu-heading').on('mouseenter', function(){
        Y.one('#betabulls-svg-icon').setStyle('opacity', 1);  
    });   
    Y.one('.pure-menu-heading').on('mouseleave', function(){
        Y.one('#betabulls-svg-icon').setStyle('opacity', 0.7);
    });
 
    var modal = new Y.Modal(
      {
        bodyContent: '<div class="pure-u-1 center"><p style="font-size: 15px;">Mountain View Office Park, 850 Bear Tavern Road, Suite 105, Ewing, NJ 08628</p><span class="jot-form"><iframe class="jot-frame" id="JotFormIFrame" onload="window.parent.scrollTo(0,0)" allowtransparency="true" src="//form.jotform.me/41991233222449" frameborder="0" style="width:100%; height:585px; border:none;" scrolling="no" top:-30px !important;></iframe><script type="text/javascript">window.handleIFrameMessage = function(e) {var args = e.data.split(":");var iframe = document.getElementById("JotFormIFrame");if (!iframe)return;switch (args[0]) {case "scrollIntoView":iframe.scrollIntoView();break;case "setHeight":iframe.style.height = args[1] + "px";break;}};if (window.addEventListener) {window.addEventListener("message", handleIFrameMessage, false);} else if (window.attachEvent) {window.attachEvent("onmessage", handleIFrameMessage);}</script></span></div> <!-- .pure-u-1 .center -->',
        centered: true,
        
        modal: true,
        render: '#contact',
        resizable: {
          handles: ''
        },
        width: 565,
        height: 606
		
      }
    ).render();
    
    modal.hide();

    Y.all('#emailIcon, .pricing-signup, .contact-step, .contact-btn').on(
        'click',
        function() {
            modal.show();
        }
    );
	Y.one('.yui3-widget-mask').on('click', function(){
		modal.hide();
	});

}); // YUI closing
