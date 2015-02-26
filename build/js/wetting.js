$(document).ready( function(){
var correct=["q1a","q2c","q3d","q4c","q5d","q6d","q7b","q8a","q9c","q10b"];
var questions=["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];
var answers=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10"];
var prev_marks=-1;
$('#reset').click(function(){
	$('.btn.active').removeClass('active');
	$('.btn.correct').removeClass('correct');
	$('.btn.wrong').removeClass('wrong');
	});
$('#submit').click(function(){
	var marks = 0;
	for(var i = 0; i<questions.length; ++i) {
		current = $('button[name="'+answers[i]+'"].active');
		if(current.val() == correct[i]) {
			current.addClass('correct');
			marks++;
		} else {
			current.addClass('wrong');
		}
	}
	$('#score').text(marks+"/10");
	alert('You scored '+marks+'/10!');
	if(prev_marks != -1)
 				$('#prev_score').text(prev_marks+"/10");
 	else
 			 $('#prev_score').text("-/10");
 		 prev_marks = marks;
});
});