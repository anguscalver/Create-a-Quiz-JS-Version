// Create a Quiz

// Event Listener 
document.getElementById ('answer-btn').addEventListener ('click', checkUserResults)

// EVENT FUNCTION
function checkUserResults () {
    // READ ANSWERS
    let textbox1 = document.getElementById ('textbox1').value;
    let textbox2 = document.getElementById ('textbox2').value;
    let textbox3 = document.getElementById ('textbox3').value;
    let textbox4 = document.getElementById ('textbox4').value;
    // TEST input variable
    console.log (checkUserResults);

    //binary
    if (textbox1 =='1978'){
        document.getElementById ('q1-result').innerHTML = 'correct';
    } else {
        document.getElementById('q1-result').innerHTML = 'false';
    }
    //binary
    if (textbox2 =='1976'){
        document.getElementById ('q2-result').innerHTML = 'correct';
    } else {
         document.getElementById ('q2-result').innerHTML = 'false';
    //binary
}
    if (textbox3 =='Half-Life 2'){
        document.getElementById ('q3-result').innerHTML = 'correct';
    } else {
        document.getElementById ('q3-result').innerHTML = 'false';
    //binary 
    }
    if (textbox4 =='Olympia, Washington'){
        document.getElementById ('q4-result').innerHTML = 'correct';
    } else {
        document.getElementById ('q4-result').innerHTML = 'false';
}
