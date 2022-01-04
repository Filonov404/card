 const modalTrigger = document.querySelector("[data-modal"),
   modal = document.querySelector(".modal"),
   modalCloseBtn = document.querySelector("[data-close]");

 
   modalTrigger.addEventListener("click", function () {
     modal.classList.add("show");
     modal.classList.remove("hide");
     document.body.style.overflow = "hidden";
   });
 

 function closeModal() {
   modal.classList.add("hide");
   modal.classList.remove("show");
   document.body.style.overflow = "";
 }

 modalCloseBtn.addEventListener("click", closeModal);

