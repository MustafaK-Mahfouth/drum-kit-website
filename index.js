const drums = document.querySelectorAll(".drum");

document.addEventListener("keydown", function (event) {
  clickedKey = event.key;
  console.log("الزر اللي انضغط هو:", event.key);

  switch (clickedKey) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      buttonAnimation(clickedKey);

      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      buttonAnimation(clickedKey);
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      buttonAnimation(clickedKey);

      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      buttonAnimation(clickedKey);

      break;

    case "j":
      new Audio("sounds/crash.mp3").play();
      buttonAnimation(clickedKey);

      break;

    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      buttonAnimation(clickedKey);

      break;

    case "l":
      new Audio("sounds/snare.mp3").play();
      buttonAnimation(clickedKey);

      break;

      // هاد الفنكشن هو الي منو ضفت كلاس الانميشن pressed من css للhtml بعد ما يتم الكبس على الزر المطلوب
      function buttonAnimation(clickedKey) {
        var activeButton = document.querySelector("." + clickedKey);
        activeButton.classList.add("pressed");

        // هاد الكود عمل تاخير زمني قصير بحيث الانميشن ينشال ويرجع يشتغل بعد 200 ميلي ثانية
        setTimeout(function diactiveButtonAnimation() {
          activeButton.classList.remove("pressed");
        }, 200);
      }
  }
});
