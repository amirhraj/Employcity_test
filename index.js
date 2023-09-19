const selectTrigger = document.querySelector('.select-trigger');
const selectOptions = document.querySelector('.select-options');


selectTrigger.addEventListener('click', () => {
  selectOptions.style.display = selectOptions.style.display === 'none' ? 'block' : 'none';
});

// Обработка выбора опции
const selectOptionElements = document.querySelectorAll('.select-option');
selectOptionElements.forEach((option) => {
  option.addEventListener('click', () => {
    selectTrigger.textContent = option.textContent;
    selectOptions.style.display = 'none';
  });
});

function handleSliderChange(event) {
    let value = event.target.value;
    document.getElementById("sliderValue").textContent =`${value}%`;

  }
