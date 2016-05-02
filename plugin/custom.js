
//hide or show the solution boxes

$(document).ready(function() {
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
// for skulpt: see this gist https://gist.github.com/bnmnetp/4650616
// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var mypre = document.getElementById("output");
    mypre.innerHTML = mypre.innerHTML + text;
}
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() {
   var prog = document.getElementById("yourcode").value;
   var mypre = document.getElementById("output");
   mypre.innerHTML = '';
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead});
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
       console.log(err.toString());
   });
}
