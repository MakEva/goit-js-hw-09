import Notiflix from "notiflix";
import "notiflix/dist/notiflix-3.2.6.min.css";

const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector("input[name='delay']"),
  step: document.querySelector("input[name='step']"),
  amount: document.querySelector("input[name='amount']")
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  }

refs.form.addEventListener("submit", handlerOnSubmit);

function handlerOnSubmit(evt) {
  evt.preventDefault();
  const firstDelayValue = parseInt(refs.delay.value);
  const delayStepValue = parseInt(refs.step.value);
  const amountValue = parseInt(refs.amount.value); 
  
  for (i = 0; i < amountValue; i++) {
createPromise(i + 1, firstDelayValue + i * delayStepValue)
  .then(({ position, delay }) => {
   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
  }; 