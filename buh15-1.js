var troll = prompt("Oh no! You fall into a heap of dung and across the room, there is an enormous rabbit laughing at you. The goal is to get back home safely. What will you do? Do you CURSE at him, IGNORE him, or try to CLIMB back up the rabbit hole?").toUpperCase();

switch(troll) {
  case 'CURSE':
    	var fight = prompt("How outrageous! Do you wish to fight (YES or NO)?").toUpperCase();
	switch(fight) {
	case 'YES': 
		confirm("Mr.Rabbit takes out his pocketwatch-knife and lunges for you. You had nowhere to hide. You lose.");
		break;
	case 'NO': 
		confirm("'You're not very strong, are you?' says Mr.Rabbit. 'Well, if you were smarter, you would have taken your chances!' Mr.Rabbit takes the drink-me potion and throws it at Alice, who shrinks to the size of an ant, only to be stepped on by Mr.Rabbit.");
    		break;
	default: 
		confirm("Mr.Rabbit seizes the moment to brainwash you. How did he do that? It is irrelevant.")
	}
  case 'IGNORE':
    	confirm("Mr.Rabbit stops laughing. He makes a hand gesture, indicating payment. You do not have money. Mr.Rabbit decides to take your life in turn.");
	break;
  case 'CLIMB':
   	confirm("You got away--barely! Mr.Rabbit was hot on your tail, except you didn't have one...");
  	break;
  default:
    	confirm("Mr.Rabbit, unfortunately, has no time for your nonsense. He sprints for the door, knowing that was the only exit. You are too slow and he locks the door on you and decides to go have tea with the Queen. You starve to death.");
}
