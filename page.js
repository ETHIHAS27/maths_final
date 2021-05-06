operation = " ";

question_turn = 'player1'
answer_turn = 'player2'

player1 = localStorage.getItem('player1_name')
player2 = localStorage.getItem('player2_name')

player1_score = 0
player2_score = 0

function send(){
    num1 = document.getElementById("Number1").value;
    num2 = document.getElementById("Number2").value;
    question = "<h4>"+num1+ " "+ operation +" " + num2 
    inputbox = "<br>Answer = <input id='input_answer' type='number'>"
    button = "<br><button id='check_button' onclick='check()' class='btn btn-info'>Check</button>"
    document.getElementById("output").innerHTML = question + inputbox + button
    console.log(operation);

    if(operation == '+'){
        actual_answer = parseInt(num1) + parseInt(num2)
    }

    if(operation == '-'){
        actual_answer = parseInt(num1) - parseInt(num2)
    }

    if(operation == '*'){
        actual_answer = parseInt(num1) * parseInt(num2)
    }

    if(operation == '/'){
        actual_answer = parseInt(num1) / parseInt(num2)
    }

    console.log(actual_answer);
}

function add(){
    operation = '+';
}

function sub(){
    operation = '-';
}

function mul(){
    operation = '*';
}

function div(){
    operation = '/';
}

function relod(){
    document.getElementById('turn').innerHTML = "<h2 id='player_question'>Question Turn:"+ player1 +"</h2> <br> <h2 id='player_answer'>Answer Turn:"+ player2 +"</h2>"

   document.getElementById('score_div').innerHTML = '<h4>'+ player1 +':'+ player1_score +'</h4> <br> <h4>'+ player2 +':'+ player2_score +'</h4>'
}

function check(){
    getanswer = document.getElementById('input_answer').value
    
    if(getanswer == actual_answer){
        player2_score = player2_score + 1
        document.getElementById('score_div').innerHTML = '<h4>'+ player1 +':'+ player1_score +'</h4> <br> <h4>'+ player2 +':'+ player2_score +'</h4>'
        
    }
    else{
        player1_score = player1_score + 1
        document.getElementById('score_div').innerHTML = '<h4>'+ player1 +':'+ player1_score +'</h4> <br> <h4>'+ player2 +':'+ player2_score +'</h4>'
        
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1;
    }

    if(answer_turn == "player2"){
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1;
    }
    else{
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2;
    }

    document.getElementById("output").innerHTML = " ";
    document.getElementById("Number1").innerHTML = ''
    document.getElementById("Number2").innerHTML = ''
}    

