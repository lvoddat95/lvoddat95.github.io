/*=========================================================================================
    File Name: ChartJs.js
    Description: Chartjs chart
    ----------------------------------------------------------------------------------------
    Item Name: Convex - Bootstrap 4 HTML Admin Dashboard Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Line chart
// ------------------------------
(function(window, document, $) {
    'use strict';
    $(window).on("load", function () {

        if ($("#line-chart").length > 0) {

            //Get the context of the Chart canvas element we want to select
            var ctx = $("#line-chart");

            // Chart Options
            var chartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                },
                hover: {
                    mode: 'label'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Ngày trong tuần'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Số lượng đơn'
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Số lượng đơn bảo hiểm trong tuần'
                }
            };

            // Chart Data
            var chartData = {
                labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
                datasets: [{
                    label: "Đơn bảo hiểm",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    // borderDash: [5, 5],
                    borderColor: "#666ee8",
                    pointBorderColor: "#666ee8",
                    pointBackgroundColor: "#FFF",
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                }, 
                {
                    label: "Tái bảo hiểm",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    borderColor: "#FF9149",
                    pointBorderColor: "#FF9149",
                    pointBackgroundColor: "#FFF",
                    pointBorderWidth: 1,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                }, {
                    label: "Bồi thường",
                    data: [45, 25, 16, 36, 67, 18, 76],
                    lineTension: 0,
                    fill: false,
                    borderColor: "#FF4961",
                    pointBorderColor: "#FF4961",
                    pointBackgroundColor: "#FFF",
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                }
                ]
            };

            var config = {
                type: 'line',

                // Chart Options
                options: chartOptions,

                data: chartData
            };

            // Create the chart
            var lineChart = new Chart(ctx, config);

        }



        ////////////////////////////////////////////////////////////////////////////////////

        if ($("#area-chart").length > 0) {
            //Get the context of the Chart canvas element we want to select
            var ctx = $("#area-chart");

            // Chart Options
            var chartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                hover: {
                    animationDuration: 1000, // duration of animations when hovering an item
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            };

            // Chart Data
            var chartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Series A",
                    data: [0, 150, 140, 105, 210, 140, 270],
                    backgroundColor: "rgba(255, 95, 32, 0.4)",
                    borderColor: "transparent",
                    pointBackgroundColor: "#FFF",
                    pointBorderColor: "rgba(255, 95, 32,1)",
                    pointHoverBackgroundColor: "rgba(255, 95, 32,1)",
                    pointRadius: 5,
                    pointHoverBorderColor: '#FFF',
                    pointHoverRadius: 5,
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 2,
                }, {
                    label: "Series B",
                    data: [0, 90, 120, 240, 140, 250, 190],
                    backgroundColor: "rgba(102, 110, 232, 0.7)",
                    borderColor: "transparent",
                    pointBackgroundColor: "#FFF",
                    pointBorderColor: "rgba(102, 110, 232, 1)",
                    pointHoverBackgroundColor: "rgba(102, 110, 232, 1)",
                    pointRadius: 5,
                    pointHoverBorderColor: '#FFF',
                    pointHoverRadius: 5,
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 2,
                }]
            };

            var config = {
                type: 'line',

                // Chart Options
                options: chartOptions,

                // Chart Data
                data: chartData
            };

            // Create the chart
            var areaChart = new Chart(ctx, config);
        }
    });


    ///////////////////////////////////////////////////////////////////////////////
    if ($("#column-chart").length > 0) {

        //Get the context of the Chart canvas element we want to select
        var ctx = $("#column-chart");

        // Chart Options
        var chartOptions = {
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each bar to be 2px wide and green
            elements: {
                rectangle: {
                    borderWidth: 2,
                    borderColor: 'rgb(0, 255, 0)',
                    borderSkipped: 'bottom'
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scaleShowVerticalLines: false,
            responsiveAnimationDuration: 500,
            legend: {
                position: 'top',
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: false,
                    },
                    scaleLabel: {
                        display: true,
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: false,
                    },
                    scaleLabel: {
                        display: true,
                    }
                }]
            }
        };

        // Chart Data
        var chartData = {
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            datasets: [{
                label: "Series A",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgba(255, 95, 32, 0.8)",
                borderColor: "transparent",
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                label: "Series B",
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: "rgba(102, 110, 232, 0.8)",
                borderColor: 'transparent',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }]
        };

        var config = {
            type: 'bar',

            // Chart Options
            options: chartOptions,

            data: chartData
        };

        // Create the chart
        var lineChart = new Chart(ctx, config);

        ///////////////////////////////////////////////////////////////////////////////

        //Get the context of the Chart canvas element we want to select
        var ctx = $("#simple-doughnut-chart");

        // Chart Options
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 500,
        };

        // Chart Data
        var chartData = {
            labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
            datasets: [{
                label: "My First dataset",
                data: [350, 450, 100],
                backgroundColor: ["rgba(102, 110, 232, 0.8)", "rgba(30, 159, 242, 0.8)", "rgba(255, 95, 32, 0.8)"],
            }]
        };

        var config = {
            type: 'doughnut',

            // Chart Options
            options: chartOptions,

            data: chartData
        };

        // Create the chart
        var doughnutSimpleChart = new Chart(ctx, config);

    }

    ///////////////////////////////////////////////////////////////////////////////////////
    if ($("#radar-chart").length > 0) {

        //Get the context of the Chart canvas element we want to select
        var ctx = $("#radar-chart");

        // Chart Options
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration:500,
            legend: {
                position: 'top',
            },
            scale: {
              reverse: false,
              ticks: {
                beginAtZero: true
              }
            }
        };

        // Chart Data
        var chartData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "Series A",
                backgroundColor: "rgba(255, 95, 32, 0.8)",
                borderColor: "transparent",
                data: [65, 59, 90, 81, 56, 55, 40],
            }, {
                label: "Series B",
                backgroundColor: "rgba(102, 110, 232, 0.8)",
                borderColor: "transparent",
                data: [28, 48, 40, 19, 96, 27, 100],
            },]
        };

        var config = {
            type: 'radar',

            // Chart Options
            options : chartOptions,

            data : chartData
        };

        // Create the chart
        var polarChart = new Chart(ctx, config);

    }
    /////////////////////////////////////////////////////////////////////////////////
    if ($("#simple-pie-chart").length > 0) {
        //Get the context of the Chart canvas element we want to select
        var ctx = $("#simple-pie-chart");

        // Chart Options
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 500,
        };

        // Chart Data
        var chartData = {
            labels: ['Đơn bảo hiểm', 'Tái bảo hiểm', 'Bồi thường'],
            datasets: [{
                label: "Biểu đồ",
                data: [300, 500, 100],
                backgroundColor: ["rgb(28, 63, 170)", "rgb(247, 139, 0)", "rgb(251, 197, 0)"],
            }]
        };

        var config = {
            type: 'pie',

            // Chart Options
            options: chartOptions,

            data: chartData
        };

        // Create the chart
        var pieSimpleChart = new Chart(ctx, config);
    }
    //////////////////////////////////////////////////////////////////////////////////////
    if ($("#polar-chart").length > 0) {
        //Get the context of the Chart canvas element we want to select
        var ctx = $("#polar-chart");

        // Chart Options
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 500,
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Polar Area Chart'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            },
            animation: {
                animateRotate: false
            }
        };

        // Chart Data
        var chartData = {
            labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
            datasets: [{
                data: [300, 500, 100, 40, 120],
                backgroundColor: [
                    "rgba(102, 110, 232, 0.8)", "rgba(30, 159, 242, 0.8)", "rgba(255, 95, 32, 0.8)", "rgba(40, 208, 148, 0.8)", "rgba(205, 73, 97, 0.8)"
                ],
                label: 'My dataset' // for legend
            }],
        };

        var config = {
            type: 'polarArea',

            // Chart Options
            options: chartOptions,

            data: chartData
        };

        // Create the chart
        var polarChart = new Chart(ctx, config);
    }

})(window, document, jQuery);