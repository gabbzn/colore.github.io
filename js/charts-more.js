$(document).ready(function () {
  function r(r, o) {
    return Math.floor(Math.random() * (o - r + 1)) + r;
  }
  function o(o, e, a) {
    (result = []),
      (o = "undefined" != typeof o ? o : 5),
      (e = "undefined" != typeof e ? e : 0),
      (a = "undefined" != typeof a ? a : 10);
    for (var t = 0; t < o; t++) result.push(r(e, a));
    return result;
  }
  var e = {
      labels: ["CDV", "Light", "Dark", "DeepDark", "DeepCDV"],
      datasets: [
        {
          data: [300, 50, 50, 50, 50],
          backgroundColor: [
            "#3C91EB",
            "#85B8EE",
            "#1C426B",
            "#3C536B",
            "#3071B8",
          ],
          hoverBackgroundColor: [
            "#3C91EB",
            "#85B8EE",
            "#1C426B",
            "#3C536B",
            "#3071B8",
          ],
        },
      ],
    },
    a = {},
    t = document.getElementById("myChart1"),
    n =
      (new Chart(t, { type: "pie", data: e, options: a }),
      document.getElementById("myChart2")),
    d =
      (new Chart(n, { type: "doughnut", data: e, options: a }),
      {
        labels: ["CDV", "Light", "Dark", "DeepDark", "DeepCDV"],
        datasets: [
          {
            data: o(5, 0, 100),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#9c27b0",
              "#4caf51",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#9c27b0",
              "#4caf51",
            ],
          },
        ],
      }),
    l = { legend: { display: !1 } },
    y = document.getElementById("myChart3"),
    C =
      (new Chart(y, { type: "pie", data: d, options: l }),
      document.getElementById("myChart4")),
    g =
      (new Chart(C, { type: "doughnut", data: d, options: l }),
      {
        datasets: [
          {
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#9c27b0",
              "#36A2EB",
            ],
            label: "My dataset",
          },
        ],
        labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
      }),
    u = document.getElementById("myChart5"),
    i =
      (new Chart(u, { type: "polarArea", data: g, options: {} }),
      {
        datasets: [
          {
            label: "First Dataset",
            data: [
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
              { x: r(0, 20), y: r(0, 40), r: r(5, 20) },
            ],
            backgroundColor: "#FF6384",
            hoverBackgroundColor: "#FF6384",
          },
        ],
      }),
    b = document.getElementById("myChart6"),
    p =
      (new Chart(b, { type: "bubble", data: i, options: {} }),
      {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running",
        ],
        datasets: [
          {
            label: "User 1",
            backgroundColor: "rgba(79,181,198,0.2)",
            borderColor: "rgba(79,181,198,1)",
            pointBackgroundColor: "rgba(79,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(79,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: "User 2",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100],
          },
          {
            label: "User 3",
            backgroundColor: "rgba(100,150,0,0.2)",
            borderColor: "rgba(100,150,0,1)",
            pointBackgroundColor: "rgba(100,150,0,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(100,150,132,1)",
            data: [
              r(0, 100),
              r(0, 100),
              r(0, 100),
              r(0, 100),
              r(0, 100),
              r(0, 100),
              r(0, 100),
            ],
          },
        ],
      }),
    c = document.getElementById("myChart7");
  new Chart(c, { type: "radar", data: p, options: {} });
});
