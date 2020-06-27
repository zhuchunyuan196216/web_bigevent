
// $(function () {
//     $('#link_reg').on('click', function () {
//         $('.login-box').hide()
//         $('.reg-box').show()
//     })
//     $('#link_login').on('click', function () {
//         $('.login-box').show()
//         $('.reg-box').hide()
//     })

//     const form = layui.form
//     const layer = layui.layer
//     form.verify({
//         pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
//         repwd: function (value) {
//             const pwd = $('.reg-box [name="password"]').val()
//             if (pwd !== value) {
//                 return '两次密码不一致'
//             }
//         },
//     })


//     $('#form_reg').on('submit', function (e) {
//         e.preventDefault()
//         const inputparams = {
//             username: $('#form_reg [name="username"]').val(),
//             password: $('#form_reg [name="password"]').val(),
//         }
//         $.post('/api/reguser', inputparams, function (res) {
//             if (res.status !== 0) {
//                 return layer.msg(res.message)
//             }
//             layer.msg('注册成功，请登录！')

//             // 模拟人的点击行为
//             $('#link_login').click()
//         })
//     })


//     $('#form_login').submit(function (e) {
//         e.preventDefault()
//         $.ajax({
//             type: 'post',
//             url: '/api/login',
//             data: $(this).serialize(),
//             success: function (res) {
//                 if (res.status !== 0) {
//                     return layer.msg('登录失败！')
//                 }
//                 layer.msg('登录成功！')
//                 localStorage.setItem('token', res.token)
//                 console.log(res.token)
//                 location.href = '/code/index.html'
//             }
//         })
//     })

// })



$(function () {
    $('#link_reg').click(function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link_login').click(function () {
        $('.reg-box').hide()
        $('.login-box').show()
    })

    const form = layui.form
    const layer = layui.layer
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码不能有空格且是6~12位'],
        repwd: function (values) {
            const pwd = $('#formid').val()
            if (values !== pwd) {
                return '两次密码不一致'
            }
        }
    })


    $('#form_reg').on('submit', function (e) {
        e.preventDefault()
        const date = {
            username: $('#form_reg [name="username"]').val(),
            password: $('#form_reg [name="password"]').val(),
        }
        $.post('/api/ueguser', date, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功，请登录！')
            $('#link_login').click()
        })
    })

    $('#form_login').submit(function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: "/api/login",
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    layer.msg('登录失败！')
                }
                layer.msg('登录成功！')
                localStorage.setItem('token',res.token)
                location.href = '/code/index.html'
            }
        })
    })
})