

var numberofDrumButtons = document.querySelectorAll("button");

for(i=0 ; i < numberofDrumButtons.length ;i++ )
{
document.querySelectorAll("button")[i].addEventListener("click",function(){

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);
});
}

//Detecting Keyboard presse

document.addEventListener("keydown",function(events) {

  makeSound(events.key);

  buttonAnimation(events.key);
});



function makeSound(key)
{
  switch (key) {
    case "marley":
     var marley = new Audio('sounds/Marley1.opus');
     marley.play();
      break;

      case "a":
       var tom2 = new Audio('sounds/tom-2.mp3');
       tom2.play();
        break;

        case "minnie":
         var minnie = new Audio('sounds/Minnie2.opus');
         minnie.play();
          break;

          case "d":
           var tom3 = new Audio('sounds/tom-3.mp3');
           tom3.play();
            break;

            case "sky":
             var sky = new Audio('sounds/sky1.opus');
             sky.play();
              break;

              case "k":
               var tom4 = new Audio('sounds/crash.mp3');
               tom4.play();
                break;

                case "l":
                 var snare = new Audio('sounds/snare.mp3');
                 snare.play();
                  break;

                  default: console.log(buttonInnerHTML);

  }

}

function buttonAnimation(currentkey){

  var activeButton = document.querySelector("."+ currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
