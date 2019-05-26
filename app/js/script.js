var feedbackIndex = 1;
showFeedbacks(feedbackIndex);

function plusSlides(n) {
    showFeedbacks(feedbackIndex += n);
}

function currentFeedback(k) {
    showFeedbacks(feedbackIndex = n);
}

function showFeedbacks(n) {
    var i;
    var feedbacks = document.getElementsByClassName("feedback");
    if (n > feedbacks.length) {
        feedbackIndex = 1;
    }
    if (n < 1) {
        feedbackIndex = feedbacks.length;
    }
    for (i = 0; i < feedbacks.length; i++) {
        feedbacks[i].style.display = "none";
    }
    feedbacks[feedbackIndex - 1].style.display = "block";
}