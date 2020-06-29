
var form = layui.form
var layer = layui.layer
$(function () {
    var form = layui.form
    var layer = layui.layer
    getUserinfo()
    
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称不能大于6个字符'
            }
        }
    })


    $('#reset').on('click', function (e) {
        e.preventDefault()
        getUserinfo()
    })


    $('.layui-form').submit(function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('修改用户信息失败！')
                }
                layer.msg('修改用户信息成功！')
                window.parent.userInfo()
            }
        })
    })

})

function getUserinfo() {
    $.ajax({
        type: 'get',
        url: '/my/userinfo',
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            form.val('form_userinfo',res.data)
        }
    })
}

