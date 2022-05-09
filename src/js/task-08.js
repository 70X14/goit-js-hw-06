const form = document.querySelector(".login-form");
const input = document.querySelectorAll("input");
const formData = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if ([...input].find((e) => !e.value)) {
    return alert("все поля должны быть заполнены!");
  }
  const { elements } = event.currentTarget;
  for (const [key, value] of Object.entries(elements)) {
    if (isNaN(+key)) {
      formData[key] = value.value;
    }
  }
  console.log(formData);
  form.reset();
});
