(function(){
var t;
function size(animate){
	if (animate == undefined){
		animate = false;
	}
	clearTimeout(t);
	t = setTimeout(function(){
		$("canvas").each(function(i,el){
			$(el).attr({
				"width":$(el).parent().width(),
				"height":$(el).parent().outerHeight()
			});
		});
		redraw(animate);
		var m = 0;
		$(".widget").height("");
		$(".widget").each(function(i,el){ m = Math.max(m,$(el).height()); });
		$(".widget").height(m);
	}, 30);
}
$(window).on('resize', function(){ size(false); });


function redraw(animation){
	var options = {};
	if (!animation){
		options.animation = false;
	} else {
		options.animation = true;
	}
	var data = [
		{
			value: 20,
			color:"#E8E354"
		},
		{
			value : 30,
			color : "#FCAF61"
		},
		{
			value : 40,
			color : "#5BD7B3"
		},
		{
			value : 10,
			color : "#A8988B"
		}

	];
	var canvas = document.getElementById("hours");
	var ctx = canvas.getContext("2d");
	new Chart(ctx).Doughnut(data, options);

	var data = {
		labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
		datasets : [
			{
				fillColor : "rgba(99,123,133,0)",
				strokeColor : "rgba(99,123,133,1)",
				pointColor : "rgba(99,123,133,1)",
				pointStrokeColor : "#fff",
				data : [65,54,30,81,56,55,40]
			},
			{
				fillColor : "rgba(219,186,52,0)",
				strokeColor : "rgba(219,186,52,1)",
				pointColor : "rgba(219,186,52,1)",
				pointStrokeColor : "#fff",
				data : [20,60,42,58,31,21,50]
			},
		]
	}
	var canvas = document.getElementById("shipments");
	var ctx = canvas.getContext("2d");
	new Chart(ctx).Line(data, options);



	var data = {
		labels : ["Incident 1","Incident 2","Incident 3","Incident 4"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "#637b85",
				pointColor : "#dbba34",
				pointStrokeColor : "#637b85",
				data : [65,59,90,81]
			}
		]
	}
	var canvas = document.getElementById("departments");
	var ctx = canvas.getContext("2d");
	new Chart(ctx).Radar(data, options);
}
size(true);

}());