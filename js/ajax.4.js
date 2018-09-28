//ajax对象式封装
function sendAjax(url,options){
    var _default={   //创建对象,设置默认值;
        method:'GET',
        data:null,
        success:null,
        error:null
    }
    for(var i in options){//将形参赋值给对应的对象属性值,来改变默认值
        _default[i]=options[i];
    }
    //解决git缓存问题(不能实时更新数据):地址中加一个随机数(可以是时间毫秒数);
    //如果URL中存在问号?;默认以&进行拼接;
    // if(url.indexOf('?')>-1){//方法一:判断
    //     url+='&'+Date.now();
    // }else{
    //     url+= '?_='+ Date.now();
    // }
    var f=url.indexOf('?')>-1? '&': '?';//三元运算符方式
    url+=f + '_=' + Date.now();
    //拼接字符串,只有get请求才拼接,所以进行判断:
    if(_default.method.toUpperCase()=='GET'){//_default.method转化大写,避免输入时小写而造成错误
        for(var j in _default.data){//遍历对象,获取属性和属性值
            url += '&' + j + '=' + _default.data[j];
        }
        //url拼接成功,xhr.send()不需要参数,所以把它赋值为null;
        _default.data=null;
    }

    var xhr=new XMLHttpRequest();//建立ajax请求
        xhr.open(_default.method,url,true);//发送请求,传入默认值,
        xhr.send(_default.data);
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status===200){
                    var val=xhr.responseText;//获取json/php字符串
                    val=JSON.parse(val);//json字符串转化为json对象
                    if(val.msg==200){//如果连接成功,则执行对应的成功后的函数
                        if(typeof _default.success==='function'){
                            _default.success(val);
                        }
                    }
                }else{//失败则执行失败后的函数
                    if(typeof _default==="function"){
                        _default.error(val);
                    }
                }
            }
        }
}
