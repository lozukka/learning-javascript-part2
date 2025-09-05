const questions = document.querySelectorAll(".question")

questions.forEach(question =>{
    question.addEventListener("click", ()=>{
        const answer = question.nextElementSibling;
        
    document.querySelectorAll(".hidden").forEach((a) => {
      if (a !== answer) {
        a.classList.remove("show");
      }
    });
        answer.classList.toggle("show");
    })
})

