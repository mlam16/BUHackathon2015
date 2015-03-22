


var answe = prompt("You accept Yoda's skype call. He tells you that he needs your help. Will you go find him (YES or NO)?").toUpperCase();
switch(answe){
case 'YES':
	confirm("You look for Yoda. You find Yoda at the den, sleeping. (surprising?!) He is fast asleep in bed. He seems to have wasted your time.");
	break;
case 'NO':
	confirm("He rolls his eyes at you and hangs up.");
	break;
default:
	confirm("Yoda has nothing to say to you.")
}


