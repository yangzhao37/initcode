//配置文件
//把这个项目中所有用到的接口地址全放在这里

//所有接口的基地址
var BASEURL = 'http://192.168.172.44:8000'

//用来保存所有的接口信息
var APILIST = {
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_getInfo: BASEURL + '/admin/getuser'
}