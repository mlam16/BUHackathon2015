

var troll = prompt("You arrive at Binghamton University. What building do you go to?").toUpperCase();
switch(troll) {
  case 'BARTLE':
      confirm("Don't forget to bring your books.");
      break;
  case 'LECTURE HALL':
      confirm("Cool. Your best friend is heading there too!");
      break;
  case 'DINING HALL':
      confirm("All you think about is food.");
      break;
case 'LIBRARY':
      confirm("We all know you sleep there...");
    break;
case 'CLASS':
	confirm("There is no school today, FOOOLS!!!!")
	break;
case 'ENGINEERING BUILDING':
	confirm("You go to the engineering building. You find $5 on the way. Cool!")
	break;
case 'ADMISSIONS CENTER':
	confirm("You go to the admissions center. It starts to snow. You are SUPER annoyed.")
	break;

  default:
    	confirm("Where is that again? Ugh.");
	confirm("You get lost because you cannot find this building.")
}
