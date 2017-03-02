/* This function was made by following a tutorial at 
	http://trendmedia.com/news/infinite-rotating-images-using-jquery-javascript/
	The function replaces the home page image at an interval of time, looping through 
	the three images for infinity.*/
	
	$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotator = 
	{
		init: function()
		{
			//in milliseconds
			var initialFadeIn = 1000;
			var itemInterval = 5000;
			var fadeTime = 2500;
			var numberOfItems = $('.rotating-item').length;
			var currentItem = 0;

			//show first item
			$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.rotating-item').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
				}
				$('.rotating-item').eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);	
		}	
	};

	InfiniteRotator.init();
	
});
	/*checks the input boxes on the Submission page when submit is pressed. 
	if any are empty it returns false and highlights the box with a red border. An error message is displayed.*/
	function validateSuggestion(){
		if(document.getElementById('name').value == ""){
			document.getElementById('error').innerHTML = "Please Enter your Name!";
			document.getElementById('name').style.borderColor="red"; //sets input boxes border to red
			document.getElementById('suggestionbox').style.borderColor="initial"; //used to make sure only one box is red at a time
			document.getElementById('email').style.borderColor="initial";
			return false;
		}
		if(document.getElementById('email').value == ""){
			document.getElementById('error').innerHTML = "Please Enter your Email!";
			document.getElementById('email').style.borderColor="red";
			document.getElementById('name').style.borderColor="initial";
			document.getElementById('suggestionbox').style.borderColor="initial";
			return false;
		}
		if(document.getElementById('suggestionbox').value == ""){
			document.getElementById('error').innerHTML = "Please enter your Suggestion!";
			document.getElementById('suggestionbox').style.borderColor="red";
			document.getElementById('name').style.borderColor="initial";
			document.getElementById('email').style.borderColor="initial";
			return false;
		}
		else 
		/*if all fields are not empty the suggestion is sumbitted*/
			
		return true;
	
	}
	/*makes sure the text inputs in the RSVP section have value or else error and red border thrown on wrong input*/
		function validateRsvp(){
		if(document.getElementById('name').value == ""){
			document.getElementById('error').innerHTML = "Please Enter your Name!"; //enters message onto a section of the page
			document.getElementById('name').style.borderColor="red";
			document.getElementById('email').style.borderColor="initial";
			return false;
		}
		if(document.getElementById('email').value == ""){
			document.getElementById('error').innerHTML = "Please Enter your Email!";
			document.getElementById('email').style.borderColor="red";
			document.getElementById('name').style.borderColor="initial";
			return false;
		}
		else
		return true;
	
	}
	/*returns to previous page, used to return to a page after form confirmation*/
	function goBack() {
    window.history.back();
	
}
	/*when the comment is submitted it grabs the values inputted checks for empty ones, throws alert if so
	otherwise it clones an empty comment and adds each of the inputs into the relevent section and prepends the entire comment
	on the page. This function was adapted from tutorial 10.*/
	$(document).ready(function(){
			$('#submitComment').click(function(){
		var newComment = $("#comment_template").find(".comment").clone(); //clones empty comment so multiple comments can be made
		var name = $("#commentNameInput").val();
		var course = $("#commentCourseInput").val(); // grabs values from inputs
		var message = $("#commentMessageInput").val();
			if(name == ""){
				document.getElementById('errorC').innerHTML = "Please Enter your Name!";
				return false;
			}
			if(course == ""){
				document.getElementById('errorC').innerHTML = "Please Enter your Email!";
				return false;
			}
			if(message == ""){
				document.getElementById('errorC').innerHTML = "Please Enter your Suggestion!";
				return false
			}
		$(newComment).find(".commentName").html(name);
		$(newComment).find(".commentCourse").html(course);
		$(newComment).find(".commentMessage").html(message);
		$(newComment).find(".commentAge").html("A few seconds ago")
		$("#commentsContainer").prepend(newComment);
		$("#commentNameInput").val(""); /*empty the text boxes*/
		$("#commentCourseInput").val("");
		$("#commentMessageInput").val("");
		
	});
	});