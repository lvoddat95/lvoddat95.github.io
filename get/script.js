$(function () {
    $('.input-money').toArray().forEach(function (field) {
        var v_negative = $(field).data('negative');
        new Cleave(field, {
            numeral: true,
            numeralPositiveOnly: !v_negative ? true : false,
            numeralDecimalScale: 5
        });
    });

    const vTai = document.getElementById('divTai');
    const vTaiSl = document.getElementById('divTaiSl');
    const vTaiPt = document.getElementById('divTaiPt');

    const vXiu = document.getElementById('divXiu');
    const vXiuSl = document.getElementById('divXiuSl');
    const vXiuPt = document.getElementById('divXiuPt');

    const vSum = document.getElementById('divSum');
    const vSumSl = document.getElementById('divSumSl');
    const vSumPt = document.getElementById('divSumPt');

    const vjpV = document.getElementById('divjpV');
    const vkq = document.getElementById('kq');
    const vCount = document.getElementById('count');

    let v_name, v_value, v_ratio, v_boom, v_time = '';

    let flag = false;
    let counter = 1;

    function Timer(fn, t) {
        var timerObj = setInterval(fn, t);

        this.stop = function () {
            if (timerObj) {
                clearInterval(timerObj);
                timerObj = null;
            }
            return this;
        }

        // start timer using current settings (if it's not already running)
        this.start = function () {
            if (!timerObj) {
                this.stop();
                timerObj = setInterval(fn, t);
            }
            return this;
        }

        // start with new or original interval, stop current interval
        this.reset = function (newT = t) {
            t = newT;
            return this.stop().start();
        }
    }

    var timer = new Timer(function () {
        counter+2;
        fetch('https://api-agent.gowsazhjo.net/glms/v1/notify/taixiu?platform_id=b5').then(function (res) {
            return res.json();
        }).then(function (data) {
            if (typeof data.data[0].gi !== 'undefined') {
                flag = false;
                let badge = $("#badge");
                if (badge.length > 0) {
                    badge.remove();
                }
                let obj = data.data[0].gi;
                let jpV = obj[0].jpV;
                let tai = obj[0].B;
                let xiu = obj[0].S;
                if (obj[0].aid == 1) {
                    vTaiSl.innerText = tai.tU;
                    vTai.value = tai.tB.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND'
                    });
                    vTaiPt.innerHTML = getTaiPt = ((tai.tB / xiu.tB).toFixed(2));

                    vXiuSl.innerText = xiu.tU;
                    vXiu.value = xiu.tB.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND'
                    });
                    vXiuPt.innerHTML = getXiuPt = ((xiu.tB / tai.tB).toFixed(2));

                    vSumSl.innerText = tai.tU - xiu.tU;
                    vSum.value = (tai.tB - xiu.tB).toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND'
                    });
                    vSumPt.innerHTML = (getTaiPt - getXiuPt).toFixed(2);
                    vjpV.value = jpV.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND'
                    });

                    // vCount.innerText = counter;
                    // if (counter === 0) {
                    //     clearInterval(newYearCountdown);
                    // }

                    v_ratio = (getTaiPt - getXiuPt).toFixed(2);
                    v_boom = jpV;
                    console.log(counter);
                }
            } else {
                flag = true;

                // switch interval to 10 seconds
                // timer.reset(5000);
                console.log('Tra tien!!!');
                vkq.innerText = JSON.stringify(data.data);
                value_kq = data.data[0].d1 + data.data[0].d2 + data.data[0].d3;

                v_value = value_kq;

                if (value_kq > 10) {
                    v_name = 'T';
                    $('#cellTai').html('<span id="badge" class="badge badge-success">' + value_kq + '</span>');
                } else {
                    v_name = 'X';
                    $('#cellXiu').html('<span id="badge" class="badge badge-success">' + value_kq + '</span>');
                }
                ok();
                console.log(data.data);
                // stop the timer
                counter = 0;
                // timer.start();

            }
        });
    }, 2000);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    function ok() {
        console.log('v_name ' + v_name);
        console.log('v_value ' + v_value);
        console.log('v_ratio ' + v_ratio);
        console.log('v_boom ' + v_boom);

        var jqxhr = $.post("post.php"
                ,{
                    p_name: v_name,
                    p_value: v_value,
                    p_ratio: v_ratio,
                    p_boom: v_boom,
                }
            )
            .done(function (data) {
                console.log("second success " + data);
            })
            .fail(function (data) {
                console.log("error " + data);
            })

        timer.stop();

        setTimeout(() => {
            timer.start();
        }, 15000);
    }

    // Assign handlers immediately after making the request,
    // and remember the jqxhr object for this request

    // .always(function (data) {
    //     console.log("finished " + data);
    // });

    // Perform other work here ...

    // Set another completion function for the request above
    // jqxhr.always(function () {
    //     alert("second finished");
    // });

});