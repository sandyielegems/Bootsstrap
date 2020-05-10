jQuery(document).ready(function($) {
    // Smooth scroll for the menu and links with .scrollto classes
    $(".smothscroll").on("click", function(e) {
        e.preventDefault();
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 62,
                    },
                    1500,
                    "easeInOutExpo"
                );
            }
        }
    });

    $(".carousel").carousel({
        interval: 3500,
    });
    

    // JavaScript Chart
    var doughnutData = [{
            value: 70,
            color: "#7C7C7C",
        },
        {
            value: 30,
            color: "#ecf0f1",
        },
    ];
    var myDoughnut = new Chart(
        document.getElementById("javascript").getContext("2d")
    ).Doughnut(doughnutData);

    // Bootstrap Chart
    var doughnutData = [{
            value: 70,
            color: "#7C7C7C",
        },
        {
            value: 30,
            color: "#ecf0f1",
        },
    ];
    var myDoughnut = new Chart(
        document.getElementById("bootstrap").getContext("2d")
    ).Doughnut(doughnutData);

    // WordPress Chart
    var doughnutData = [{
            value: 70,
            color: "#7C7C7C",
        },
        {
            value: 30,
            color: "#ecf0f1",
        },
    ];
    var myDoughnut = new Chart(
        document.getElementById("wordpress").getContext("2d")
    ).Doughnut(doughnutData);

    // HTML Chart
    var doughnutData = [{
            value: 70,
            color: "#7C7C7C",
        },
        {
            value: 30,
            color: "#ecf0f1",
        },
    ];
    var myDoughnut = new Chart(
        document.getElementById("html").getContext("2d")
    ).Doughnut(doughnutData);

    // Indesign Chart
    var doughnutData = [{
            value: 95,
            color: "#7C7C7C",
        },
        {
            value: 5,
            color: "#ecf0f1",
        },
    ];
    var myDoughnut = new Chart(
        document.getElementById("indesign").getContext("2d")
    ).Doughnut(doughnutData);

    // Illustrator Chart
    var doughnutData = [{
            value: 80,
            color: "#7C7C7C",
        },
        {
            value: 20,
            color: "#ecf0f1",
        },
    ];
    var myDoughnut = new Chart(
        document.getElementById("illustrator").getContext("2d")
    ).Doughnut(doughnutData);
});