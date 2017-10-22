$("#start").on("click", function() {
  game.start();
})

var questions = [{
  "question": "Who had a 1973 hit with the song &#039;Hocus Pocus&#039;?",
  "answers": [" Pilot ", " Rush ", " AC/DC ", " Focus "],
  "correctAnswer": " Focus ",
}, {
  "question": "Who had a US and UK number 1 hit in 1962 with the instrumental, &#039;Telstar&#039;?",
  "answers": [" The Ventures ", " The Spotnicks ", " The Tornados ", " The Tremeloes "],
  "correctAnswer": " The Tornados "
}, {
  "question": "The song &quot;Twin Size Mattress&quot; was written by which band?",
  "answers": [" Twenty One Pilots ", " The Wonder Years ", " The Front Bottoms ", " The Smith Street Band "],
  "correctAnswer": " The Front Bottoms "
}, {
  "question": "Who is the primary lyricist for Canadian progressive rock band Rush?",
  "answers": [" Neil Peart ", " Geddy Lee ", " Alex Lifeson ", " John Rutsey "],
  "correctAnswer": " Neil Peart "
}, {
  "question": "In 2015, David Hasselhof released a single called...",
  "answers": [" True Fighter ", " True Survivor ", " Real Kung-Fury ", " Real Warrior "],
  "correctAnswer": " True Survivor "
}, {
  "question": "The song &quot;Feel Good Inc.&quot; by British band Gorillaz features which hip hop group?",
  "answers": [" Public Enemy ", " OutKast ", " Cypress Hill ", " De La Soul "],
  "correctAnswer": " De La Soul "
}, {
  "question": "When did The Beatles release the LP &quot;Please Please Me&quot;?",
  "answers": [" 1970 ", " 1963 ", " 1960 ", " 1969 "],
  "correctAnswer": "1963"
}, {
  "question": "Cryoshell, known for &quot;Creeping in My Soul&quot; did the advertising music for what Lego Theme?",
  "answers": [" Bionicle ", " Hero Factory ", " Ben 10 Alien Force ", " Star Wars "],
  "correctAnswer": " Bionicle "
}, {
  "question": "Which band released the album &quot;Sonic Highways&quot; in 2014?",
  "answers": [" Coldplay ", " Nickelback ", " The Flaming Lips ", " Foo Fighters "],
  "correctAnswer": " Foo Fighters "
}, {
  "question": "Which artist or group did John Lennon consider &quot;son(s) of the Beatles&quot;?",
  "answers": [" The Rolling Stones ", " Pink Floyd ", " Jeff Lynne&#039;s Electric Light Orchestra ", " The Who "],
  "correctAnswer": " Jeff Lynne&#039;s Electric Light Orchestra "
}];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 20,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
      }
    }
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#subwrapper h2").remove();

    $("#subwrapper").html("<h2>All done!</h2>")
    $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#subwrapper").append("<h3>incorrect Answers: " + this.incorrect + "</h3>");
    $("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
}
