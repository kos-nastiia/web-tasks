document.getElementById("comment-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var commentInput = document.getElementById("comment-input");
  var commentList = document.getElementById("comment-list");

  var commentText = commentInput.value.trim();

  if (commentText !== "") {
    var newComment = document.createElement("div");
    newComment.className = "comment";

    var commentTextElement = document.createElement("p");
    commentTextElement.textContent = commentText;
    newComment.appendChild(commentTextElement);

    var commentTime = document.createElement("p");
    commentTime.className = "comment-time";
    var currentDate = new Date();
    var dateTime = currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString([], { hour12: false });
    commentTime.textContent = dateTime;
    newComment.appendChild(commentTime);

    commentList.appendChild(newComment);

    commentInput.value = "";
  }
});
