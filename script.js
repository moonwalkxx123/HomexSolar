// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {
  mobileMenu.classList.add("active");
};

closeBtn.onclick = () => {
  mobileMenu.classList.remove("active");
};

document.querySelectorAll(".mobile-menu a").forEach(link=>{
  link.onclick = ()=> mobileMenu.classList.remove("active");
});


// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{
  item.querySelector(".faq-question").onclick = ()=>{
    item.classList.toggle("active");
  };
});


// BACK TO TOP
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", ()=>{

  if(window.scrollY > 500){
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }

});

backTop.onclick = ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};


// FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  document.querySelectorAll(".error")
    .forEach(el => el.textContent = "");

  if(name.value.trim() === ""){
    document.getElementById("nameError").textContent =
      "Name is required";
    valid = false;
  }

  if(!email.value.includes("@")){
    document.getElementById("emailError").textContent =
      "Valid email required";
    valid = false;
  }

  if(message.value.length < 10){
    document.getElementById("messageError").textContent =
      "Message must be at least 10 characters";
    valid = false;
  }

  if(valid){
    alert("Inquiry submitted successfully!");
    form.reset();
  }
});


// REVEAL ANIMATION
function reveal(){
  document.querySelectorAll(".reveal").forEach(item=>{
    const top = item.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();


// PARALLAX
const p1 = document.querySelector(".parallax-1");
const p2 = document.querySelector(".parallax-2");

window.addEventListener("scroll", ()=>{
  let y = window.scrollY;

  p1.style.transform = `translateY(${y * .2}px)`;
  p2.style.transform = `translateY(${y * -.15}px)`;
});