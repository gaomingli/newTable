// 验证手机号
const phone = /^1(3|4|5|6|7|8|9)d{9}$/
const validatePhone = (rule, value, callback) => {
        if (!phone.test(value)) {
            callback(new Error('手机号格式不正确'))
        } else {
            callback()
        }
    }
    // 邮箱的正则
const mailbox = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
const validateEmail = (rule, value, callback) => {
        if (!mailbox.test(value)) {
            callback(new Error('邮箱格式不正确'))
        } else {
            callback()
        }
    }
    // 身份证号
const idCardNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
const validateIdCardNo = (rule, value, callback) => {
    if (!idCardNo.test(value)) {
        callback(new Error('身份证号格式不正确'))
    } else {
        callback()
    }
}
export default {
    common: {
        // ---------------------公共验证方法
        phone: [{ // 手机号
            required: true,
            message: '手机号不能为空'
        }, {
            validator: validatePhone,
            trigger: 'blur'
        }],
        mailbox: [{ // 邮箱
                required: true,
                message: '邮箱不能为空',
            },
            {
                validator: validateEmail,
                trigger: 'blur'
            }
        ],
        idCardNo: [{ // 身份证号码
                required: true,
                message: '身份证号码不能为空'
            },
            {
                validator: validateIdCardNo,
                trigger: 'blur'
            }
        ]
    },
    handle: {
        // ---------------------处理表单的验证方法
        operResult: [{ //处理结果
            required: true,
            message: '请选择处理结果'
        }],
        opinion: [{ //处理结果描述
            required: true,
            message: '请填写处理结果描述'
        }]
    },
}