(function () {
    var app = angular.module('MyApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize']);
    app.config(['$controllerProvider', '$provide', function ($controllerProvider, $provide) {
        app.register =
            {
                controller: $controllerProvider.register,
                service: $provide.service
            };
    }]);
})();
angular.module("MyApp").config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $('#loading').show();
        $routeProvider.when('/',
            {
                controller: 'RedirectController',
                templateUrl: function (rp) { return '/staticsfile/Index.html'; }
            })
            .when('/:controller/:action',
                {
                    controller: 'RedirectController',
                    templateUrl: function (rp) { return '/staticsfile/Index.html'; }
                })
            .when('/:controller/:action/:id',
                {
                    controller: 'RedirectController',
                    templateUrl: function (rp) { return '/staticsfile/Index.html'; }
                })
            .otherwise({
                controller: 'RedirectController',
                templateUrl: function (rp) { return '/staticsfile/Index.html'; }
            });
        $locationProvider.html5Mode(true);
    }])
    .controller('RedirectController', function ($scope, $routeParams, $http, $window, $sce) {
        var init = function () {
            $('#loading').show();
            if (typeof ($routeParams.controller) == "undefined") {
                $routeParams.controller = 'Home';
            }
            if (typeof ($routeParams.action) == "undefined") {
                $routeParams.action = 'Index';
            }
            $routeParams.Component = true;
            var url = '/' + $routeParams.controller + '/' + $routeParams.action;
            $http({
                method: 'POST',
                url: url,
                data: $.param($routeParams),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function (response) {
                $('#loading').hide();
                $scope.content = $sce.trustAsHtml(response);
            }).error(function (jqXHR, statusCode, errorThrown) {
                var url = '/Home/Error';
                $http({
                    method: 'POST',
                    url: url,
                    data: $.param({ "statusCode": statusCode, "Component": true }),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (response) {
                    $('#loading').hide();
                    $scope.content = $sce.trustAsHtml(response);
                }).error(function () {
                    $('#loading').hide();
                });
            });
        };
        init();
    })
    .controller('MyController', function ($location, $scope, $http, $window, $sce) {
        $scope.goTo = function (page) {
            $location.path('/' + page);
        };
        //filter
        $scope.vsw_filter_angular = function (url, value, name_control, name_form) {
            if (typeof name_form === "undefined") name_form = 'vswForm';
            if (eval("document." + name_form + "." + name_control)) {
                eval("document." + name_form + "." + name_control + ".value='" + value + "'");
            }
            $("#" + name_form).validate({
                highlight: function (element, errorClass, validClass) {
                    var thisAlert = $(element).parent();
                    $(element).focus();
                    $(thisAlert).attr("data-validate", $(element).attr("data-msg-required"));
                    $(thisAlert).addClass('alert-validate');
                    $(thisAlert).addClass('active');
                    $(thisAlert).addClass("has-error").removeClass("has-success");
                },
                unhighlight: function (element, errorClass, validClass) {
                    var thisAlert = $(element).parent();
                    $(thisAlert).attr("data-validate", "");
                    $(thisAlert).removeClass('alert-validate');
                    $(thisAlert).removeClass('active');
                    $(thisAlert).addClass("has-success").removeClass("has-error");
                }
            });
            if ($("#" + name_form).valid()) // check if form is valid
            {
                $('#loading').show();
                removedisabledselect2();
                var dataToPost = $("#" + name_form).serialize();
                $http({
                    method: 'POST',
                    url: url,
                    data: dataToPost,
                    headers: {
                        //'Content-Type': 'multipart/form-data',
                        'Content-Type': undefined,
                        'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                    }
                }).success(function (response) {
                    unremovedisabledselect2();
                    $('#loading').hide();
                    if (response.code != "00") {
                        Alert('Thông báo', response.message);
                    } else {
                        var table = $('#' + table_id).DataTable();
                        table.destroy();
                        try {
                            datavalue = JSON.parse(response.data.Value);
                        } catch {
                            datavalue = response.data.Value;
                        }
                        if (datavalue == null) {
                            $('#' + table_id).DataTable().clear().draw();
                            return;
                        }
                        if (datavalue == '') {
                            $('#' + table_id).DataTable().clear().draw();
                            return;
                        }
                        var paginationall = document.getElementById("paginationall");
                        if (paginationall) {
                            $('#paginationall').html(response.pagination);
                        }
                        var arrayButtons = getListCommand_DataTable();
                        if (checkbox_column != '') {
                            var example_table = $('#' + table_id).DataTable({
                                paging: false,
                                info: false,
                                dom: 'Bfrtip',
                                buttons: [arrayButtons],
                                aoColumnDefs: [
                                    {
                                        "bSortable": false,
                                        "aTargets": ["sorting_disabled"],
                                        "className": "sorting_disabled sorting_asc_disabled sorting_desc_disabled",
                                        "targets": [parseInt(checkbox_column)]
                                    }
                                ],
                                data: datavalue,
                                columns: column_list
                            });
                        } else {
                            var example_table = $('#' + table_id).DataTable({
                                paging: false,
                                info: false,
                                dom: 'Bfrtip',
                                buttons: [arrayButtons],
                                aoColumnDefs: [
                                    {
                                        "bSortable": false,
                                        "aTargets": ["sorting_disabled"]
                                    }
                                ],
                                data: datavalue,
                                columns: column_list
                            });
                        }
                        if (response.hash != '') {
                            var pathname = window.location.pathname;
                            window.history.pushState('', '', pathname + "?prjson=" + response.hash);
                        }
                    }
                }).error(function () {
                    $('#loading').hide();
                });
            }
        }
        $scope.vsw_filter_angular_table = function (url, value, name_control, name_form) {
            if (typeof name_form === "undefined") name_form = 'vswForm';
            if (eval("document." + name_form + "." + name_control)) {
                eval("document." + name_form + "." + name_control + ".value='" + value + "'");
            }
            $("#" + name_form).validate({
                highlight: function (element, errorClass, validClass) {
                    var thisAlert = $(element).parent();
                    $(element).focus();
                    $(thisAlert).attr("data-validate", $(element).attr("data-msg-required"));
                    $(thisAlert).addClass('alert-validate');
                    $(thisAlert).addClass('active');
                    $(thisAlert).addClass("has-error").removeClass("has-success");
                },
                unhighlight: function (element, errorClass, validClass) {
                    var thisAlert = $(element).parent();
                    $(thisAlert).attr("data-validate", "");
                    $(thisAlert).removeClass('alert-validate');
                    $(thisAlert).removeClass('active');
                    $(thisAlert).addClass("has-success").removeClass("has-error");
                }
            });
            if ($("#" + name_form).valid()) // check if form is valid
            {
                $('#loading').show();
                removedisabledselect2();
                var dataToPost = $("#" + name_form).serialize();
                $http({
                    method: 'POST',
                    url: url,
                    data: dataToPost,
                    headers: {
                        //'Content-Type': 'multipart/form-data',
                        'Content-Type': undefined,
                        'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                    }
                }).success(function (response) {
                    unremovedisabledselect2();
                    $('#loading').hide();
                    if (response.code != "00") {
                        Alert('Thông báo', response.message);
                    } else {
                        $scope.dataContents = response.data.Value;

                        if (response.hash != '') {
                            var pathname = window.location.pathname;
                            window.history.pushState('', '', pathname + "?prjson=" + response.hash);
                        }
                    }
                }).error(function () {
                    $('#loading').hide();
                });
            }
        }
        //submit form
        $scope.vsw_submit = function (url, name_form) {
            if (typeof name_form === "undefined") name_form = 'vswForm';
            $("#" + name_form).validate({
                highlight: function (element, errorClass, validClass) {
                    var thisAlert = $(element).parent();
                    $(element).focus();
                    $(thisAlert).attr("data-validate", $(element).attr("data-msg-required"));
                    $(thisAlert).addClass('alert-validate');
                    $(thisAlert).addClass('active');
                    $(thisAlert).addClass("has-error").removeClass("has-success");
                },
                unhighlight: function (element, errorClass, validClass) {
                    var thisAlert = $(element).parent();
                    $(thisAlert).attr("data-validate", "");
                    $(thisAlert).removeClass('alert-validate');
                    $(thisAlert).removeClass('active');
                    $(thisAlert).addClass("has-success").removeClass("has-error");
                }
            });
            if ($("#" + name_form).valid()) // check if form is valid
            {
                $('#loading').show();
                removedisabledselect2();
                var form = $("#" + name_form)[0];
                var dataToPost = new FormData(form);
                var s_param = window.location.href.slice(window.location.href.indexOf('?') + 1);
                if (s_param != '') {
                    url += (url.indexOf('?') > -1 ? '&' : '?') + s_param;
                }
                var datachange = getdatachange();
                dataToPost.append('datachange', datachange);

                $http({
                    method: 'POST',
                    url: url,
                    data: dataToPost,
                    headers: {
                        //'Content-Type': 'multipart/form-data',
                        'Content-Type': undefined,
                        'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                    }
                }).success(function (data) {
                    unremovedisabledselect2();
                    $('#loading').hide();
                    if (data.message.trim() != '') {
                        if (data.code == "00") {
                            $(".changed").removeClass("changed");
                            Success('Thông báo', data.message, '');
                        } else {
                            Alert('Thông báo', data.message);
                        }
                    }
                    if (data.extention.trim() != '') {
                        eval(data.extention);
                    }
                }).error(function () {
                    $('#loading').hide();
                });
            }
        }
        $scope.vsw_submit_confirm = function (content, url, name_form) {
            Swal.fire({
                title: 'Thông báo',
                text: content,
                icon: 'info',
                showCancelButton: true,
                cancelButtonText: 'Không',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có',
                confirmButtonColor: '#3085d6'
            }).then((result) => {
                if (result.value) {
                    if (typeof name_form === "undefined") name_form = 'vswForm';
                    $("#" + name_form).validate({
                        highlight: function (element, errorClass, validClass) {
                            var thisAlert = $(element).parent();
                            $(element).focus();
                            $(thisAlert).attr("data-validate", $(element).attr("data-msg-required"));
                            $(thisAlert).addClass('alert-validate');
                            $(thisAlert).addClass('active');
                            $(thisAlert).addClass("has-error").removeClass("has-success");
                        },
                        unhighlight: function (element, errorClass, validClass) {
                            var thisAlert = $(element).parent();
                            $(thisAlert).attr("data-validate", "");
                            $(thisAlert).removeClass('alert-validate');
                            $(thisAlert).removeClass('active');
                            $(thisAlert).addClass("has-success").removeClass("has-error");
                        }
                    });
                    if ($("#" + name_form).valid()) // check if form is valid
                    {
                        $('#loading').show();
                        removedisabledselect2();
                        var form = $("#" + name_form)[0];
                        var dataToPost = new FormData(form);
                        var s_param = window.location.href.slice(window.location.href.indexOf('?') + 1);
                        if (s_param != '') {
                            url += (url.indexOf('?') > -1 ? '&' : '?') + s_param;
                        }
                        var datachange = getdatachange();
                        dataToPost.append('datachange', datachange);

                        $http({
                            method: 'POST',
                            url: url,
                            data: dataToPost,
                            headers: {
                                //'Content-Type': 'multipart/form-data',
                                'Content-Type': undefined,
                                'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                            }
                        }).success(function (data) {
                            unremovedisabledselect2();
                            $('#loading').hide();
                            if (data.message.trim() != '') {
                                if (data.code == "00") {
                                    Success('Thông báo', data.message, '');
                                } else {
                                    Alert('Thông báo', data.message);
                                }
                            }
                            if (data.extention.trim() != '') {
                                eval(data.extention);
                            }
                        }).error(function () {
                            $('#loading').hide();
                        });
                    }
                }
            })
        }
        $scope.vsw_submit_not_validate = function (url, name_form) {
            $('#loading').show();
            removedisabledselect2();
            var form = $("#" + name_form)[0];
            var dataToPost = new FormData(form);
            var s_param = window.location.href.slice(window.location.href.indexOf('?') + 1);
            if (s_param != '') {
                url += (url.indexOf('?') > -1 ? '&' : '?') + s_param;
            }
            var datachange = getdatachange();
            dataToPost.append('datachange', datachange);

            $http({
                method: 'POST',
                url: url,
                data: dataToPost,
                headers: {
                    //'Content-Type': 'multipart/form-data',
                    'Content-Type': undefined,
                    'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                }
            }).success(function (data) {
                unremovedisabledselect2();
                $('#loading').hide();
                if (data.message.trim() != '') {
                    if (data.code == "00") {
                        Success('Thông báo', data.message, '');
                    } else {
                        Alert('Thông báo', data.message);
                    }
                }
                if (data.extention.trim() != '') {
                    eval(data.extention);
                }
            }).error(function () {
                $('#loading').hide();
            });
        }
        $scope.vsw_submit_not_validate_confirm = function (content, url, name_form) {
            Swal.fire({
                title: 'Thông báo',
                text: content,
                icon: 'info',
                showCancelButton: true,
                cancelButtonText: 'Không',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có',
                confirmButtonColor: '#3085d6'
            }).then((result) => {
                if (result.value) {
                    $('#loading').show();
                    removedisabledselect2();
                    var form = $("#" + name_form)[0];
                    var dataToPost = new FormData(form);
                    var s_param = window.location.href.slice(window.location.href.indexOf('?') + 1);
                    if (s_param != '') {
                        url += (url.indexOf('?') > -1 ? '&' : '?') + s_param;
                    }
                    var datachange = getdatachange();
                    dataToPost.append('datachange', datachange);

                    $http({
                        method: 'POST',
                        url: url,
                        data: dataToPost,
                        headers: {
                            //'Content-Type': 'multipart/form-data',
                            'Content-Type': undefined,
                            'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                        }
                    }).success(function (data) {
                        unremovedisabledselect2();
                        $('#loading').hide();
                        if (data.message.trim() != '') {
                            if (data.code == "00") {
                                Success('Thông báo', data.message, '');
                            } else {
                                Alert('Thông báo', data.message);
                            }
                        }
                        if (data.extention.trim() != '') {
                            eval(data.extention);
                        }
                    }).error(function () {
                        $('#loading').hide();
                    });
                }
            })
        }
        $scope.vsw_submit_cancel = function (content, url, name_form) {
            if (typeof name_form === "undefined") name_form = 'vswForm';
            var datachange = getdatachange();
            datachange = datachange.substring(0, datachange.length - 1);
            if (datachange != '') {
                Swal.fire({
                    title: 'Thông báo',
                    text: content,
                    icon: 'info',
                    showCancelButton: true,
                    cancelButtonText: 'Không',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Có',
                    confirmButtonColor: '#3085d6'
                }).then((result) => {
                    if (result.value) {
                        $('#loading').show();
                        var form = $("#" + name_form)[0];
                        var dataToPost = new FormData(form);
                        var s_param = window.location.href.slice(window.location.href.indexOf('?') + 1);
                        if (s_param != '') {
                            url += (url.indexOf('?') > -1 ? '&' : '?') + s_param;
                        }
                        dataToPost.append('datachange', datachange);

                        $http({
                            method: 'POST',
                            url: url,
                            data: dataToPost,
                            headers: {
                                //'Content-Type': 'multipart/form-data',
                                'Content-Type': undefined,
                                'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                            }
                        }).success(function (data) {
                            $('#loading').hide();
                            if (data.message.trim() != '') {
                                if (data.code == "00") {
                                    Success('Thông báo', data.message, '');
                                } else {
                                    Alert('Thông báo', data.message);
                                }
                            }
                            if (data.extention.trim() != '') {
                                eval(data.extention);
                            }
                        }).error(function () {
                            $('#loading').hide();
                        });
                    }
                })
            } else {
                $('#loading').show();
                var form = $("#" + name_form)[0];
                var dataToPost = new FormData(form);
                var s_param = window.location.href.slice(window.location.href.indexOf('?') + 1);
                if (s_param != '') {
                    url += (url.indexOf('?') > -1 ? '&' : '?') + s_param;
                }
                dataToPost.append('datachange', datachange);

                $http({
                    method: 'POST',
                    url: url,
                    data: dataToPost,
                    headers: {
                        //'Content-Type': 'multipart/form-data',
                        'Content-Type': undefined,
                        'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                    }
                }).success(function (data) {
                    $('#loading').hide();
                    if (data.message.trim() != '') {
                        if (data.code == "00") {
                            Success('Thông báo', data.message, '');
                        } else {
                            Alert('Thông báo', data.message);
                        }
                    }
                    if (data.extention.trim() != '') {
                        eval(data.extention);
                    }
                }).error(function () {
                    $('#loading').hide();
                });
            }
        }
        //submit by params
        $scope.vsw_submit_ajax_params = function (url, params) {
            $('#loading').show();
            $.ajax({
                url: url,
                data: params,
                type: "POST",
                dataType: "json",
                success: function (data) {
                    $('#loading').hide();
                    if (data.message.trim() != '') {
                        if (data.code == "00") {
                            Success('Thông báo', data.message, '');
                        } else {
                            Alert('Thông báo', data.message);
                        }
                    }
                    if (data.extention.trim() != '') {
                        eval(data.extention);
                    }
                },
                error: function () {
                    $('#loading').hide();
                }
            });
        }
        $scope.vsw_submit_ajax_params_return_value = function (params) {
            var result = "";
            $.ajax({
                url: '/Ajax/GetValueFunction',
                data: params,
                type: "POST",
                dataType: "json",
                async: false,
                success: function (data) {
                    result = data;
                    return;
                },
                error: function () {
                    result = "";
                    return;
                }
            });
            return result;
        }
        $scope.vsw_exec_publish = function (url, id, activity, index) {
            Swal.fire({
                title: 'Thông báo',
                text: 'Xác nhận thực hiện thao tác!',
                icon: 'info',
                showCancelButton: true,
                cancelButtonText: 'Không',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có',
                confirmButtonColor: '#3085d6'
            }).then((result) => {
                if (result.value) {
                    var params = { "pk_id": id, "status": activity, "index": index };
                    $('#loading').show();
                    $.ajax({
                        url: url,
                        data: params,
                        type: "POST",
                        dataType: "json",
                        success: function (data) {
                            setTimeout(function () {
                                $('#loading').hide();
                                if (data.message.trim() != '') {
                                    if (data.code == "00") {
                                        Success('Thông báo', data.message, '');
                                    } else {
                                        Alert('Thông báo', data.message);
                                    }
                                }
                                if (data.extention.trim() != '') {
                                    eval(data.extention);
                                }
                            }, 500);
                        },
                        error: function () {
                            $('#loading').hide();
                        }
                    });
                }
            })
        }
        $scope.vsw_single_angular = function (url, object_id) {
            var full_url = window.location.href;
            var s_param = full_url.slice(full_url.indexOf('?') + 1);
            var s_param_full = '?RecordID=' + object_id + '&' + s_param;
            $scope.goTo(url + '?' + utf8_to_b64(s_param_full));
        }
        $scope.vsw_delete_angular = function (content, url, name_form) {
            if (typeof name_form === "undefined") name_form = 'vswForm';
            if (document.forms[0].boxchecked.value > 0) {
                Swal.fire({
                    title: 'Thông báo',
                    text: content,
                    icon: 'info',
                    showCancelButton: true,
                    cancelButtonText: 'Không',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Có',
                    confirmButtonColor: '#3085d6'
                }).then((result) => {
                    $('#loading').show();
                    var dataToPost = $("#" + name_form).serialize();
                    $http({
                        method: 'POST',
                        url: url,
                        data: dataToPost,
                        headers: {
                            //'Content-Type': 'multipart/form-data',
                            'Content-Type': undefined,
                            'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                        }
                    }).success(function (data) {
                        setTimeout(function () {
                            $('#loading').hide();
                            if (data.message.trim() != '') {
                                if (data.code == "00") {
                                    Success('Thông báo', data.message, '');
                                } else {
                                    Alert('Thông báo', data.message);
                                }
                            }
                            if (data.extention.trim() != '') {
                                eval(data.extention);
                            }
                        }, 500);
                    }).error(function () {
                        $('#loading').hide();
                    });
                })
            }
            else {
                Alert('Thông báo', 'Chưa có đối tượng nào được chọn');
                return false;
            }
        }
        $scope.GetCheckbox = function (id, index) {
            var s = GetCheckbox(id, index);
            return $sce.trustAsHtml(s);
        }
        $scope.GetPublish = function (url_action, id, activity, index) {
            var s = GetPublish(url_action, id, activity, index);
            return $sce.trustAsHtml(s);
        }
        $scope.GetChanged = function (activity, index) {
            var s = GetChanged(activity, index);
            return $sce.trustAsHtml(s);
        }
        $scope.GeneralCheckbox = function (name, id, value, label, check, onclick = "") {
            var s = GeneralCheckbox(name, id, value, label, check);
            return $sce.trustAsHtml(s);
        }
        $scope.general_href_single = function (id, value, action) {
            var s = general_href_single(id, value, action);
            return $sce.trustAsHtml(s);
        }
        $scope.general_popup_single = function (id, value, action) {
            var s = general_popup_single(id, value, action);
            return $sce.trustAsHtml(s);
        }
        $scope.vsw_submit_by_chose_checkbox_angular = function (content, url, name_form) {
            if (typeof name_form === "undefined") name_form = 'vswForm';
            if (document.forms[0].boxchecked.value > 0) {
                Swal.fire({
                    title: 'Thông báo',
                    text: content,
                    icon: 'info',
                    showCancelButton: true,
                    cancelButtonText: 'Không',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Có',
                    confirmButtonColor: '#3085d6'
                }).then((result) => {
                    if (result.value) {
                        $('#loading').show();
                        removedisabledselect2()
                        var dataToPost = $("#" + name_form).serialize();
                        $http({
                            method: 'POST',
                            url: url,
                            data: dataToPost,
                            headers: {
                                //'Content-Type': 'multipart/form-data',
                                'Content-Type': undefined,
                                'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                            }
                        }).success(function (data) {
                            setTimeout(function () {
                                unremovedisabledselect2()
                                $('#loading').hide();
                                if (data.message.trim() != '') {
                                    if (data.code == "00") {
                                        $(".changed").removeClass("changed");
                                        Success('Thông báo', data.message, '');
                                    } else {
                                        Alert('Thông báo', data.message);
                                    }
                                }
                                if (data.extention.trim() != '') {
                                    eval(data.extention);
                                }
                            }, 500);
                        }).error(function () {
                            $('#loading').hide();
                        });
                    }
                })
            }
            else {
                Alert('Thông báo', 'Chưa có đối tượng nào được chọn');
                return false;
            }
        }
        $scope.count = 0;
        $scope.increment = function (item) {
            if (item.C_ORDER > 0) {
                $scope.count++
            }
            return ($scope.count - 1)
        }
        $scope.attparent = function (item) {
            if (item.C_ORDER > 0) {
                return item.C_UNIT_LEVEL1_ID;
            }
            return '';
        }
        $scope.iconfolder = function (index, parent_id) {
            var s = "";
            s += "<i id=\"icon_folder_" + index + "\" att-parent=\"" + parent_id + "\" onclick=\"show_hide_folder('icon_folder_" + index + "', '" + parent_id + "');\" class=\"fa folder_icon fa-folder-open\" ></i>";
            return $sce.trustAsHtml(s);
        }
    });
