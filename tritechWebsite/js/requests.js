async function handleSubmit(e) {
  e.preventDefault();
  //ASSIGNING PANTRY AND BASKET
  const pantryId = "8574817a-4ab1-4d34-bdb2-728cb83f6714";
  let basketId = document.getElementById("email").value;
  //CONVERTING FORM DATA TO JSON
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());
  const fieldValue = JSON.stringify(value);
  //CREATING HEADER
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  //POST requestOptions
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: fieldValue,
    redirect: "follow",
  };
  //POST REQUEST
  await fetch(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  //GET getOptions
  const getOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  //POPULATING AND FORMATTING SUBMISSION CONFIRMATION MODAL WITH GET RESULT
  let setText = function setText(text) {
    let submittedContent = JSON.stringify(JSON.parse(text), null, "\n");
    document.getElementById("confirmation").textContent =
      submittedContent.replace(/[\[\]\{\}"]+/g, "");
  };
  //GET REQUEST
  return fetch(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketId}`, getOptions)
    .then((response) => response.text())
    .then(function success(res) {
      setText(res);
      //DISPLAY MODAL
      document.getElementById("submitted").classList.remove("hidden");
      //CLEAR FORM
      const allInputs = document.querySelectorAll("input");
      allInputs.forEach((singleInput) => (singleInput.value = ""));
      let msgInput = document.getElementById("msg");
      msgInput.value = "";
    })
    .catch(function fail(error) {
      console.log(error);
      document.getElementById("failed").classList.remove("hidden");
    });
}

export { handleSubmit };
