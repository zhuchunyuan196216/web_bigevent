

$.ajaxPrefilter(function (options) {
    // options.url = 'http://ajax.frontend.itheima.net' + options.url
    options.url = 'http://127.0.0.1:8081' + options.url
    if (options.url.includes('/my')) {
        options.headers = {
            Authorization:localStorage.getItem('token') || ''
        }
    }

    options.complete = function (res) {
        console.log(res)
        const {status,message} = res.responseJSON
        if (status !== 0 && message !== '获取用户成功') {
            localStorage.removeItem('token')
            location.href = '/code/login.html'
        }
    }
    
})