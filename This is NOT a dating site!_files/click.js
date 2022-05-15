function fingerprintGo(fingerprintData) {
    let fpData = fingerprintData.filter(function (value) {
        return -1 === ['webgl', 'canvas', 'fonts', 'plugins'].indexOf(value.key);
    });

    fpData.push({
        key: '__hash',
        value: Fingerprint2.x64hash128(fingerprintData.map(function (pair) {
            return pair.value
        }).join(), 31)
    });

    fpDataEncoded = btoa(encodeURIComponent(JSON.stringify(fpData)));
}

function closingConfirm() {
    return 'Are you sure you want to close this page?';
}

function handleError(msg, data) {
    $.post(
        "/frontlog.php",
        {
            message: msg || '(no message)',
            data: data
        }
    );
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(function () {

    let script = document.createElement('script');
    script.addEventListener('load', () => {
        let iframeMode = window.self !== window.top,
            url = window.location.href.split('#')[0];

        try {
            if (window.requestIdleCallback) {
                requestIdleCallback(function () {
                    if (Fingerprint2) {
                        Fingerprint2.get(function (components) {
                            fingerprintGo(components, url, iframeMode);
                        })
                    }
                })
            } else {
                setTimeout(function () {
                    Fingerprint2.get(function (components) {
                        fingerprintGo(components, url, iframeMode);
                    })
                }, 500)
            }
        } catch (e) {
        }
    });
    script.src = '/js/fp2.min.js';
    document.body.appendChild(script);

    $(document).on('click', '.click', function (e) {
        e.preventDefault();

        try {
            if (1 === showExtra) {
                $('<form action="/click.php" target="_blank" method="get"><input type="hidden" name="sid" value="' + sid + '"><input type="hidden" name="redirect" value="1"></form>').appendTo('body').submit();
            }
        } catch (err) {
            handleError('Error opening extra tab', {sid: sid, error: err.message});
            return;
        }

        if (1 === showExtra) {
            try {
                window.onbeforeunload = null;
                window.location.href = window.location.href + '&extra=1';
            } catch (err) {
                handleError(err.message);
            }
        } else {
            let params = {sid: sid};
            params.fp = fpDataEncoded;

            if (2 === showExtra) {
                params.extra = 1;
            }

            let dbgip = getParameterByName('dbgip'),
                dbgcountry = getParameterByName('dbgcountry');

            if (dbgip) {
                params.dbgip = dbgip;
            }
            if (dbgcountry) {
                params.dbgcountry = dbgcountry;
            }

            $.get(
                '/click.php',
                params,
                function (data, textStatus) {
                    let obj;

                    try {
                        obj = $.parseJSON(data);
                    } catch (err) {
                        handleError('Error parsing click response (ajax: ' + textStatus + ')', data);
                        return;
                    }

                    if (undefined === obj.url) {
                        handleError('No url in click response (ajax: ' + textStatus + ')', obj);
                        return;
                    }

                    try {
                        window.onbeforeunload = null;
                        window.parent.location.href = obj.url;
                    } catch (err) {
                        handleError(err.message);
                    }
                }
            );
        }
    });
    
    if (typeof exit_popunder !== 'undefined') {
        if(exit_popunder) window.onbeforeunload = closingConfirm;
    }
});