/* ------------------------------------------------------------------------------
 *
 *  # C3.js - bars and pies
 *
 *  Demo JS code for c3_bars_pies.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var С3BarsPies = function() {


    //
    // Setup module components
    //

    // Chart
    var _barsPiesExamples = function() {
        if (typeof c3 == 'undefined') {
            console.warn('Warning - c3.min.js is not loaded.');
            return;
        }

        // Define charts elements
        var pie_chart_element = document.getElementById('c3-pie-chart');
        var pie_chart_element2 = document.getElementById('c3-pie-chart2');
        var pie_chart_element3 = document.getElementById('c3-pie-chart3');
        var pie_chart_element4 = document.getElementById('c3-pie-chart4');

        var donut_chart_element = document.getElementById('c3-donut-chart');
        var bar_chart_element = document.getElementById('c3-bar-chart');
        var bar_stacked_chart_element = document.getElementById('c3-bar-stacked-chart');
        var combined_chart_element = document.getElementById('c3-combined-chart');
        var scatter_chart_element = document.getElementById('c3-scatter-chart');


        // Pie chart
        if(pie_chart_element) {
            var data_size = pie_chart_element.getAttribute('data-size');
            var data_color = pie_chart_element.getAttribute('data-color');
            var data_columns = pie_chart_element.getAttribute('data-columns');

            // Generate chart
            var pie_chart = c3.generate({
                bindto: pie_chart_element,
                size: { width: data_size },
                color: {
                    pattern: data_color.split(',')
                },
                data: {
                    columns: JSON.parse("[" + data_columns + "]"),
                    type : 'pie'
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                pie_chart.resize();
            });
        }

        // Pie chart
        if(pie_chart_element2) {
            var data_size = pie_chart_element2.getAttribute('data-size');
            var data_color = pie_chart_element2.getAttribute('data-color');
            var data_columns = pie_chart_element2.getAttribute('data-columns');

            if(!data_size) data_size = '100%';

            // Generate chart
            var pie_chart = c3.generate({
                bindto: pie_chart_element2,
                size: { width: data_size },
                color: {
                    pattern: data_color.split(',')
                },
                data: {
                    columns: JSON.parse("[" + data_columns + "]"),
                    type : 'pie'
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                pie_chart.resize();
            });
        }

        // Pie chart
        if(pie_chart_element3) {
            var data_size = pie_chart_element3.getAttribute('data-size');
            var data_color = pie_chart_element3.getAttribute('data-color');
            var data_columns = pie_chart_element3.getAttribute('data-columns');

            // Generate chart
            var pie_chart = c3.generate({
                bindto: pie_chart_element3,
                size: { width: data_size },
                color: {
                    pattern: data_color.split(',')
                },
                data: {
                    columns: JSON.parse("[" + data_columns + "]"),
                    type : 'pie'
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                pie_chart.resize();
            });
        }

        // Pie chart
        if(pie_chart_element4) {
            var data_size = pie_chart_element4.getAttribute('data-size');
            var data_color = pie_chart_element4.getAttribute('data-color');
            var data_columns = pie_chart_element4.getAttribute('data-columns');

            // Generate chart
            var pie_chart = c3.generate({
                bindto: pie_chart_element4,
                size: { width: data_size },
                color: {
                    pattern: data_color.split(',')
                },
                data: {
                    columns: JSON.parse("[" + data_columns + "]"),
                    type : 'pie'
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                pie_chart.resize();
            });
        }


        // Donut chart
        if(donut_chart_element) {

            // Generate chart
            var donut_chart = c3.generate({
                bindto: donut_chart_element,
                size: { width: 350 },
                color: {
                    pattern: ['#3F51B5', '#FF9800', '#4CAF50', '#00BCD4', '#F44336']
                },
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                    ],
                    type : 'donut'
                },
                donut: {
                    title: "Iris Petal Width"
                }
            });

            // Change data
            setTimeout(function () {
                donut_chart.load({
                    columns: [
                        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                });
            }, 4000);
            setTimeout(function () {
                donut_chart.unload({
                    ids: 'data1'
                });
                donut_chart.unload({
                    ids: 'data2'
                });
            }, 8000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                donut_chart.resize();
            });
        }

        // Bar chart
        if(bar_chart_element) {

            // Generate chart
            var bar_chart = c3.generate({
                bindto: bar_chart_element,
                size: { height: 400 },
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 130, 100, 140, 200, 150, 50]
                    ],
                    type: 'bar'
                },
                color: {
                    pattern: ['#2196F3', '#FF9800', '#4CAF50']
                },
                bar: {
                    width: {
                        ratio: 0.5
                    }
                },
                grid: {
                    y: {
                        show: true
                    }
                }
            });

            // Change data
            setTimeout(function () {
                bar_chart.load({
                    columns: [
                        ['data3', 130, -150, 200, 300, -200, 100]
                    ]
                });
            }, 6000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                bar_chart.resize();
            });
        }

        // Stacked bar chart
        if(bar_stacked_chart_element) {

            // Generate chart
            var bar_stacked_chart = c3.generate({
                bindto: bar_stacked_chart_element,
                size: { height: 400 },
                color: {
                    pattern: ['#FF9800', '#F44336', '#009688', '#4CAF50']
                },
                data: {
                    columns: [
                        ['data1', -30, 200, 200, 400, -150, 250],
                        ['data2', 130, 100, -100, 200, -150, 50],
                        ['data3', -230, 200, 200, -300, 250, 250]
                    ],
                    type: 'bar',
                    groups: [
                        ['data1', 'data2']
                    ]
                },
                grid: {
                    x: {
                        show: true
                    },
                    y: {
                        lines: [{value:0}]
                    }
                }
            });

            // Change data
            setTimeout(function () {
                bar_stacked_chart.groups([['data1', 'data2', 'data3']])
            }, 4000);
            setTimeout(function () {
                bar_stacked_chart.load({
                    columns: [['data4', 100, -50, 150, 200, -300, -100]]
                });
            }, 8000);
            setTimeout(function () {
                bar_stacked_chart.groups([['data1', 'data2', 'data3', 'data4']])
            }, 10000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                bar_stacked_chart.resize();
            });
        }

        // Combined chart
        if(combined_chart_element) {

            // Generate chart
            var combined_chart = c3.generate({
                bindto: combined_chart_element,
                size: { height: 400 },
                color: {
                    pattern: ['#FF9800', '#F44336', '#009688', '#4CAF50', '#03A9F4', '#8BC34A']
                },
                data: {
                    columns: [
                        ['data1', 30, 20, 50, 40, 60, 50],
                        ['data2', 200, 130, 90, 240, 130, 220],
                        ['data3', 300, 200, 160, 400, 250, 250],
                        ['data4', 200, 130, 90, 240, 130, 220],
                        ['data5', 130, 120, 150, 140, 160, 150],
                        ['data6', 90, 70, 20, 50, 60, 120],
                    ],
                    type: 'bar',
                    types: {
                        data3: 'spline',
                        data4: 'line',
                        data6: 'area',
                    },
                    groups: [
                        ['data1','data2']
                    ]
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                combined_chart.resize();
            });
        }

        // Scatter chart
        if(scatter_chart_element) {

            // Generate chart
            var scatter_chart = c3.generate({
                size: { height: 400 },
                bindto: scatter_chart_element,
                data: {
                    xs: {
                        setosa: 'setosa_x',
                        versicolor: 'versicolor_x',
                    },
                    columns: [
                        ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                        ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ],
                    type: 'scatter'
                },
                color: {
                    pattern: ['#4CAF50', '#F44336']
                },
                grid: {
                    y: {
                        show: true
                    }
                },
                point: { r: 5 },
                axis: {
                    x: {
                        label: 'Sepal.Width',
                        tick: {
                            fit: false
                        }
                    },
                    y: {
                        label: 'Petal.Width'
                    }
                }
            });

            // Change data
            setTimeout(function () {
                scatter_chart.load({
                    xs: {
                        virginica: 'virginica_x'
                    },
                    columns: [
                        ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
                        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                });
            }, 4000);
            setTimeout(function () {
                scatter_chart.unload({
                    ids: 'setosa'
                });
            }, 8000);
            setTimeout(function () {
                scatter_chart.load({
                    columns: [
                        ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ]
                });
            }, 10000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                scatter_chart.resize();
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _barsPiesExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    С3BarsPies.init();
});
