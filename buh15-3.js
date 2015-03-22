

var troll = prompt("There's a darn dinosaur. Of course! Do you want to TALK gently to it, ATTACK it, or RUN for your life? (enter TALK, ATTACK, or RUN)").toUpperCase();
switch(troll) {
  case 'TALK':
      confirm("You clear your throat and to your astonishment, the Dinosaur stops you before you can say anything and says : How do you do? /- You start talking to it and you two end up on friendly terms. You call on it to kill off people you find annoying.");
      break;
  case 'RUN':
      confirm("Bad move! As you as you turn around, you see that it is a mother, and her children were behind you. You dead meat now!!");
      break;
  case 'ATTACK':
	var weapon = prompt("Do you use the nearby CAR, BOMB, or ICECREAM?").toUpperCase();
	switch(weapon){
		case 'CAR':
			confirm("You do not have the keys. The car window is too tough for you to break. GG~");
			break;
		case 'BOMB':
			confirm("You set the bomb and throw it at the dinosaur. Unfortunately, the bomb has a larger area of impact than you suspected and you also die in the explosion.");
			break;
		case 'ICECREAM':
			confirm("Stupid choices. The Dinosaur is no dissuaded. Better eat as much of that icecream as you can before you die!");
			break;
		}
  default:
    	confirm("You try, but you fail. The Dinosaur rips of your legs and proceeds to lay down next to you. You can't run. And the Dinosaur smells awful.");
}