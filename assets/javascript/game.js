
var givenTimeInSeconds = 360;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var interval;

var answers = { q1: "q12", q2: "q22", q3: "q33", q4: "q43", q5: "q52", q6: "q61"};

$(document).ready(function () {
    // Function-level strict mode syntax
    'use strict';

    $("#btnSubmit").click(function () {
        VerifyResults();
    });

    // do the time out here.
    $("#spnSeconds").html(givenTimeInSeconds);

    setTimeout(function () {
        VerifyResults();
    }, (givenTimeInSeconds + 1) * 1000); // after seconds defined here, run the verify results method. 

    // timer sets here..
    var start = new Date;
    interval = setInterval(updateTimerParagraph, 1000);

    function updateTimerParagraph() {
        $('.Timer').text(givenTimeInSeconds - (Math.round((new Date - start) / 1000, 0)) + " Seconds");
    }

}); // end doc ready..


function verifyCommon(answer, selected) {
    // Function-level strict mode syntax
    'use strict';

    if (answer === selected) {
        correctAnswers++;

    }
    else if (selected === undefined) {
        unAnswered++;

    } else {
        incorrectAnswers++;

    }

}; // ends the function verifyCommon

function VerifyResults() {
    // Function-level strict mode syntax
    'use strict';

    // get the group 1 selection.
    var myRadio1 = $("input[name=q1]");
    var checkedValue = myRadio1.filter(":checked").val();

    verifyCommon(answers.q1, checkedValue);


    // get the group 2 selection.
    var myRadio2 = $("input[name=q2]");
    checkedValue = myRadio2.filter(":checked").val();

    verifyCommon(answers.q2, checkedValue);

    // get the group 3 selection.
    var myRadio3 = $("input[name=q3]");
    checkedValue = myRadio3.filter(":checked").val();

    verifyCommon(answers.q3, checkedValue);

    // get the group 4 selection.
    var myRadio4 = $("input[name=q4]");
    checkedValue = myRadio4.filter(":checked").val();

    verifyCommon(answers.q4, checkedValue);

    // get the group 5 selection.
    var myRadio5 = $("input[name=q5]");
    checkedValue = myRadio5.filter(":checked").val();

    verifyCommon(answers.q5, checkedValue);

    // get the group 6 selection.
    var myRadio6 = $("input[name=q6]");
    checkedValue = myRadio6.filter(":checked").val();

    verifyCommon(answers.q6, checkedValue);

    // DOM results
    $("#log").html("Correct Answers : " + correctAnswers + "<br>" + "Incorrect Answers : " + incorrectAnswers + "<br>" + " Unanswered Questions : " + unAnswered);

    correctAnswers = 0;
    incorrectAnswers = 0;
    unAnswered = 0;
    clearInterval(interval); // stop the interval

} // ends the function VerifyResults
