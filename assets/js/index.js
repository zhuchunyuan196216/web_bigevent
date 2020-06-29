

$(function () {

    const layer = layui.layer

    userInfo()

    $('#retreat').on('click', function (e) {
        e.preventDefault()
        layer.confirm('是否确认退出', { icon: 3, title: '提示' }, function (index) {
            localStorage.removeItem('token')
            location.href = '/code/login.html'

            layer.close(index);
        });


    })
})


function userInfo() {
    $.ajax({
        type: 'get',
        url: '/my/userinfo',
        success: function (res) {
            if (res.status !== 0) {
                return '获取用户信息失败'
            }
            setData(res.data)
        },
        
    })
}

function setData(user) {
    if (!user.nickname) {
        $('#welcome').html('欢迎 &nbsp;&nbsp;' + user.username)
    } else {
        $('#welcome').html('欢迎 &nbsp;&nbsp;' + user.nickname)
    }

    if (!user.user_pic) {
        const first = user.username[0].toUpperCase()
        $('.image_avatar').html(first).show()
        $('.layui-nav-img').hide()
    } else {
        $('.image_avatar').hide()
        $('.layui-nav-img').attr('src', user.user_pic).show()
    }
}