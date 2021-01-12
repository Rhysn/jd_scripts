function push2ApiServer(path, appName, timeout = 10000) {
    return new Promise(async resolve => {
        setTimeout(() => {
            $.get({ url: path , headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'},}, (err, resp, data) => {
                try {
                    if (err) {
                        //console.log(`${JSON.stringify(err)}`);
                        console.log(`${appName} API提交失败，请检查网路重试`);
                    } else {
                        if (safeGet(data)) {
                            data = JSON.parse(data);
                            let message = '';
                            if (data.code == 200) {
                    message = `【${appName}】分享码提交成功`
                } else if (data.code == 400) {
                    message = `【${appName}】分享码已存在`
                } else {
                    message = `【${appName}】分享码提交发生未知错误`
                }
                            console.log(message);
                        }
                    }
                } catch (e) {
                    console.log(`${appName} API提交失败`);
                    $.logErr(e, resp)
                } finally {
                    resolve(data);
                }
            })
        }, timeout)
    })
}
async function trypush(path, appName) {
    await push2ApiServer(path, appName);
}
module.exports = {
  trypush
}