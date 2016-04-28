
//hide or show the solution boxes

$(document).ready(function() {

	// Full list of configuration options available here:
	// https://github.com/hakimel/reveal.js#configuration
	Reveal.initialize({
		controls: false,
		progress: true,
		history: true,
		center: false,
		width: 1060,
		height: 600,
		slideNumber: true,

		theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
		transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

		// Parallax scrolling
		// parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
		// parallaxBackgroundSize: '2100px 900px',

		// Optional libraries used to extend on reveal.js
		dependencies: [
			{ src: '../assets/lib/js/classList.js', condition: function() { return !document.body.classList; } },
			{ src: '../assets/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: '../assets/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: '../assets/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
			{ src: '../assets/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
			{ src: '../assets/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
		]
	});


	jQuery(".show-solution").click(function(){
		var that = jQuery(this);
		that.siblings(".solution-content").show();
		that.hide();
		that.siblings(".hide-solution").show();
	});

	jQuery(".hide-solution").click(function(){
		var that = jQuery(this);
		that.siblings(".solution-content").hide();
		that.hide();
		that.siblings(".show-solution").show();
	});
	
	//show / hide solutions within the pre code element itself
	jQuery(".code-and-solution").click(function(){
		var that = jQuery(this);
		that.find("span").toggleClass("hide");
	});

});

