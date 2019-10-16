// added li because we can only add a listener using jquery that exist when this listener is run on the first time
// so we add a listener to the entire ul parent(instead of just li's) so anytime we click on that li, this listener 
// will fire
// with the second argument, it says when an li is clicked inside of ul, run this listener
// we are really only listening to the li's that are clicked inside of that ul 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed"); 

	// if li is gray 
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	// turn it back 
	// 	$(this).css({
	// 		color: "black", 
	// 		textDecoration: "none" 
	// 	}); 
	// } else {
	// //else turn it gray 
	// 	// can set multiple css by setting an object 
	// 	$(this).css({
	// 		color: "gray", 
	// 		textDecoration: "line-through"
	// 	}); 
	// }
}); 

// only want this code to run when a span is clicked inside of a ul
$("ul").on("click", "span", function(event){
	// $(this).parent().fadeOut().remove(); // fadeout and remove dont happen at the same time here so it could remove before fadeout finishes
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); // the THIS in this function is not the same as the parent this, its the this.PARENT(), so this refers to the parent element
	}); // .parent() will give us the element as a jquery element, we have to remove this parent element (delete todo list item)
	event.stopPropagation(); // a jquery method that will stop the event from bubbling, have to have the event passed in through the arugment
}); 

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ // if enter key is clicked 
		// grabbing new todo text from input 
		var todoText = $(this).val(); 
		$(this).val(""); 
		// create a new li and add to ul 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle(); 
});



