var proxy = "https://cors-anywhere.herokuapp.com/";
document.getElementById("read-button").addEventListener("click", () => {
  console.log("hello world!");
  if (document.querySelector("#file-input").files.length == 0) {
    alert("Error : No file selected");
    return;
  }

  // file selected by user
  let file = document.querySelector("#file-input").files[0];

  // new FileReader object
  let reader = new FileReader();

  // event fired when file reading finished
  reader.addEventListener("load", function (e) {
    // contents of the file
    let text = e.target.result;
    getGachaLogs(text);
  });

  // event fired when file reading failed
  reader.addEventListener("error", function () {
    alert("Error : Failed to read file");
  });

  // read file as text file
  reader.readAsText(file);
});

function getGachaLogs(content) {
  console.log(content.trim());

  $.post(
    "https://genshin-gacha-logs.herokuapp.com/get-gacha-logs",
    { content: content },
    function (result) {
      console.log(result);
    }
  );
}
