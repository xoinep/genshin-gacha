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
  console.log("getGachaLogs ====== ");
  $.post(
    "https://genshin-gacha-logs.herokuapp.com/get-gacha-logs",
    { content: content },
    function (result) {
      console.log(result);
    }
  );
  var response = [
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-12 09:49:55",
      name: "Xinyan",
      lang: "vi-vn",
      item_type: "NhÃ¢n Váº­t",
      rank_type: "4",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-12 09:43:32",
      name: "Ná» KÃ©o",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-12 01:53:19",
      name: "Kiáº¿m Thiáº¿t áº¢nh",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-11 12:37:41",
      name: "Gáº­y Thu Phá»¥c",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-11 12:37:30",
      name: "TÃ³m Táº¯t Ma PhÃ¡p",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-11 01:02:59",
      name: "Ná» KÃ©o",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-11 00:16:32",
      name: "Ná» KÃ©o",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-10 07:19:12",
      name: "Kiáº¿m Huyáº¿t Rá»“ng",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-09 14:05:56",
      name: "Xiao",
      lang: "vi-vn",
      item_type: "NhÃ¢n Váº­t",
      rank_type: "5",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-09 08:36:04",
      name: "Beidou",
      lang: "vi-vn",
      item_type: "NhÃ¢n Váº­t",
      rank_type: "4",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-08 08:49:43",
      name: "Cung LÃ´ng Vá»‹t",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-07 23:53:02",
      name: "Kiáº¿m Thiáº¿t áº¢nh",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-07 23:34:48",
      name: "Cung LÃ´ng Vá»‹t",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-06 23:59:18",
      name: "Beidou",
      lang: "vi-vn",
      item_type: "NhÃ¢n Váº­t",
      rank_type: "4",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-06 22:07:21",
      name: "Kiáº¿m Thiáº¿t áº¢nh",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-05 13:10:26",
      name: "CÃ¢u Chuyá»‡n Diá»‡t Rá»“ng",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-05 11:40:22",
      name: "Quáº£ Cáº§u Ngá»c",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-04 10:52:20",
      name: "LÃ£nh Nháº«n",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-04 10:52:12",
      name: "Kiáº¿m Huyáº¿t Rá»“ng",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
    {
      uid: "803666528",
      gacha_type: "301",
      item_id: "",
      count: "1",
      time: "2021-02-04 10:39:03",
      name: "TÃ³m Táº¯t Ma PhÃ¡p",
      lang: "vi-vn",
      item_type: "VÅ© KhÃ­",
      rank_type: "3",
    },
  ];

  // convert string to JSON
  // response = $.parseJSON(response);

  $(function () {
    $.each(response, function (i, item) {
      var trHTML = "<tbody>";
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
