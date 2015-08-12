  var result = [];
  $("tbody tr").each(function() {
    var $td = $('td', this);
    result.push({

      name: $td.eq(0).text(),
      math: $td.eq(1).text(),
      english: $td.eq(2).text(),
      chinese: $td.eq(3).text()
    });
  });

  function createtable(arr) {
    $("table tbody").empty();
    arr.map(function(val) {
      return $("table tbody").append(
        "<tr>" + "<td>" + val.name + "</td>" +
        "<td>" + val.math + "</td>" +
        "<td>" + val.english + "</td>" +
        "<td>" + val.chinese + "</td>" + "/tr"
      );
    })
  }

  function positivesort(result, key) {
    var arr = result.sort(function(a, b) {
      return a[key] - b[key];
    });
    createtable(arr);
  }

  function Reversesort(result, key) {
    var arr = result.sort(function(a, b) {
      return b[key] - a[key];
    })
    createtable(arr);
  }
  $(function() {
    $("thead").on("click", "th", function() {
      var $th = $(this);
      var key = $th.data("tag");
      if ($th.data("tag") === 'name') {
        return;
      }
      var flag = $th.data("flag");
      if (flag) {
        $th.attr("data-flag", 'false');
        console.log($th.data("flag"));
        positivesort(result, key);
      } else if (!flag) {
        Reversesort(result, key);
        $th.attr("data-flag", "true");
      }

    })
  });