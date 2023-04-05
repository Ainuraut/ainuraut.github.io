$(document).ready(function(){
    correct = [
        "2009",
        "name",
        "code",
        "Paris",
        "Komodo dragon",
    ];
    questions = [
        "Which year Nazarbayev University was founded?",
        "What do you call a unique identifier for a person?",
        "What's the word for a secret message system using symbols?",
        "What is the capital of France?",
        "What is the name of the largest living species of lizard?",
    ]
    choice_options = [
        ["2009","2010","2011","2012"],
        ["label", "designation", "name", "title"],
        ["code", "algorithm", "jargon", "javascript"],
        ["Astana", "London", "Tashkent", "Paris"],
        ["Komodo dragon", "Bearded dragon", "Gila monster", "Chinese water dragon"],
    ]



    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>");
    for (var i = 0; i < questions.length; i++) {
        $('.question').append ("<p class='d'> Q" + (i + 1) + ". " + questions[i] + " </p>");
        for (var j = 0; j < choice_options[i].length; j++) {
            $('.question').append ("<label><input type='radio' name='q" + i + "' value='a'>" + choice_options[i][j] + "</label>")
        }
    }

    $("button").click (
        function (event){

            countCorrect = 0;
            $('#quiz-box h2').remove();

            for (var i = 0; i < questions.length; i++) {
                $("input[name=q" + i + "]").each (
                    function (index){
                        choice = $(this).parent().text(); 
                        if ($( this ).prop("checked") == true && correct[i] == choice){
                            countCorrect += 1;
                        }
                    }
                );
            }
            
            $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
        }
    );

});












