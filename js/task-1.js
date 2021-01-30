const caregoryItems = document.querySelectorAll('.item');

console.log(`В списке ${caregoryItems.length} категории.`);

caregoryItems.forEach((item) => {
  console.log(`Категория: ${item.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll("li").length}`);
});

