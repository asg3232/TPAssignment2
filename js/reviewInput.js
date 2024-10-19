/* Redisplay user input */
function reviewInput() {
  let formContent = document.getElementById("signup");
  let formOutput;
  let dataType;
  let i;
  formOutput = "<table class='output'><th colspan = '3'>Your Information</th>";

  for (i = 0; i < formContent.length; i++) {
    if (formContent.elements[i].value !== "") {
      dataType = formContent.elements[i].type;
      const value = formContent.elements[i].value || "";
      switch (dataType) {
        case "checkbox":
          if (formContent.elements[i].checked) {
            formOutput += "<tr><td align='right'>" + formContent.elements[i].name + "</td>";
            formOutput += "<td class='outputdata'>&#x2713;</td></tr>";
          }
          break;
        case "radio":
          if (formContent.elements[i].checked) {
            formOutput += "<tr><td align='right'>" + formContent.elements[i].name + "</td>";
            formOutput += "<td class='outputdata'>" + value + "</td></tr>";
          }
          break;
        case "button":
        case "submit":
        case "reset":
          break;
        default:
          formOutput += "<tr><td align='right'>" + formContent.elements[i].name + "</td>";
          formOutput += "<td class = 'outputdata'>" + value + "</td></tr>"
      }
    }
  }


  if (formOutput.length > 0) {
    formOutput = formOutput + "</table>";
    document.getElementById("showInput").innerHTML = formOutput
  }
}
