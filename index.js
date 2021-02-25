var proxy = "https://cors-anywhere.herokuapp.com/";
document.getElementById("read-button").addEventListener("click", () => {
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
  $.post(
    "https://genshin-gacha-logs.herokuapp.com/get-gacha-logs",
    { content: content },
    function (response) {
      $(function () {
        $.each(response, function (i, item) {
          var trHTML = `<tbody style="background: #ffffff;">`;
          $.each(response, function (i, item) {
            trHTML +=
              "<tr><td>" +
              item.uid +
              "</td><td>" +
              item.gacha_type +
              "</td><td>" +
              item.item_id +
              "</td><td>" +
              item.count +
              "</td><td>" +
              item.time +
              "</td><td>" +
              item.name +
              "</td><td>" +
              item.lang +
              "</td><td>" +
              item.item_type +
              "</td><td>" +
              item.rank_type +
              "</td></tr>";
          });
          trHTML += "</tbody>";
          $("#records_table").append(trHTML);
        });
      });
    }
  );
}
