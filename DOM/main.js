(function main() {

  function createButtons() {
    const buttons = [
      {
        label: "-10",
        dataAttribute: -10,
      },
      {
        label: "-5",
        dataAttribute: -5,
      },
      {
        label: "-",
        dataAttribute: "decrement",
      },
      {
        label: "Reset",
        dataAttribute: "reset",
      },
      {
        label: "+",
        dataAttribute: "increment",
      },
      {
        label: "+5",
        dataAttribute: +5,
      },
      {
        label: "+10",
        dataAttribute: +10,
      },
    ];

    const buttonContainer = document.createElement("div");

    buttons.forEach((buttonInfo) => {
      const button = document.createElement("button");
      button.setAttribute("data-counter-button", buttonInfo.dataAttribute);
      button.textContent = buttonInfo.label;
      buttonContainer.appendChild(button);
    });

    document.getElementById("button-container").appendChild(buttonContainer);

    return buttonContainer;
  }
  const buttonsContainer = createButtons();
  document.body.appendChild(buttonsContainer);






  const display = document.querySelector("[data-counter-display]");
  const buttons = document.querySelectorAll("[data-counter-button]");

  // intial settings
  const initialCount = 0;
  let count = initialCount;
  updateHtml();

  //
  buttons.forEach((button) => button.addEventListener("click", handleClick));
  function handleClick(e) {
    const which = e.target.dataset.counterButton;
    switch (which) {
      case "increment": {
        count++;
        break;
      }
      case "decrement": {
        count--;
        break;
      }
      case "reset": {
        count = initialCount;
        break;
      }
      default: {
        // console.error(`The value "${which}" provided is not valid`);
        count += Number(which);
        break;
      }
    }
    updateHtml();
  }

  function updateHtml() {
    display.innerText = count;

    display.classList.remove("positive", "negative");
    if (count > 0) {
      //sa se aplice clasa positive
      display.classList.add("positive");
    } else if (count < 0) {
      //sa se aplice clasa negative
      display.classList.add("negative");
    }
  }
})();
