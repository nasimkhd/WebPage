function getValue(radio) {
    debugger;
    if (radio.value == "Hiring") {
      document.querySelector("#trHourlyRate").style.visibility = "visible";
    }
  }
  function hideValue(val) {
    if (val.value == "Question") {
      document.querySelector("#trHourlyRate").style.visibility = "hidden";
    }
    if (val.value == "Comment") {
      document.querySelector("#trHourlyRate").style.visibility = "hidden";
    }
  }
  