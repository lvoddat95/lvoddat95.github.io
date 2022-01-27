$(function () {
    $('.input-money').toArray().forEach(function (field) {
        var v_negative = $(field).data('negative');
        new Cleave(field, {
            numeral: true,
            numeralPositiveOnly: !v_negative ? true : false,
            numeralDecimalScale: 5
        });
    });



    function getUpdate() {
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

        setInterval(function () {
            fetch('https://api-agent.gowsazhjo.net/glms/v1/notify/taixiu?platform_id=b5').then(function (res) {
                return res.json();
            }).then(function (data) {
                let flag = true;
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
                        vTaiPt.innerHTML = getTaiPt = ((tai.tB/xiu.tB).toFixed(2));

                        vXiuSl.innerText = xiu.tU;
                        vXiu.value = xiu.tB.toLocaleString('vi', {
                            style: 'currency',
                            currency: 'VND'
                        });
                        vXiuPt.innerHTML = getXiuPt = ((xiu.tB/tai.tB).toFixed(2));

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

                    }
                } else {
                    flag = true;
                    console.log('Tra tien!!!');
                    vkq.innerText = JSON.stringify(data.data);
                    console.log(data.data[0]);
                    value_kq = data.data[0].d1 + data.data[0].d2 + data.data[0].d3;


                    if (value_kq > 10) {
                        $('#cellTai').html('<span id="badge" class="badge badge-success">' + value_kq + '</span>');
                    } else {
                        $('#cellXiu').html('<span id="badge" class="badge badge-success">' + value_kq + '</span>');
                    }
                }
            });
        }, 900);
    }
    getUpdate();

});

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});