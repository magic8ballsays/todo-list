//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
	//if li is gray
//	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black
//		$(this).css({
//			color: "black",
//			textDecoration: "none"
//		});
//	}
	//else
//	else {
		//turn it gray
//		$(this).css({
//			color: "gray",
//			textDecoration: "line-through"
//		});
//	}
//});
//entire code above can be replaced with a simple toggle class

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
	//stop bubble up event since span is inside ul, inside the container div, inside the body
});

//add items to list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});