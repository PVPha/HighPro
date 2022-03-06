// menu collapse
document.querySelector(".menu__icon").addEventListener("click", () => {
  document.querySelector(".menu").style.display = "inline-block";
  document.querySelector(".menu").style.width = "20%";
});

document.querySelector(".menu__icon--close").addEventListener("click", () => {
  document.querySelector(".menu").style.width = "0%";
  setTimeout(() => {
    document.querySelector(".menu").style.display = "none";
  }, 500);
});

//slide
var next = document.querySelector(".btn__slide:last-child");
var next__number = 0;
var pre = document.querySelector(".btn__slide");
var pre__number = 0;
var member = document.querySelectorAll(".member");
next.addEventListener("click", () => {
  console.log("next");
  next__number += pre__number - 38;
  pre__number = 0;
  console.log(next__number);
  if (next__number < (member.length - 3) * -38) {
    next__number = (member.length - 3) * -38;
  }
  member.forEach((e) => {
    e.style.transform = "translateX(" + next__number + "rem)";
  });
});

pre.addEventListener("click", () => {
  console.log("pre");
  pre__number += next__number + 38;
  next__number = 0;
  console.log(pre__number);
  if (pre__number > 0) {
    pre__number = 0;
  }
  member.forEach((e) => {
    if (e.style.transform != "translateX(0)") {
      e.style.transform = "translateX(" + pre__number + "rem)";
    }
  });
});
