function sendAjax(url,options){
    var _default={
        method:'GET',
        data:null,
        success:null,
        error:null

    }
    for(var i in options){
        _default[i]=options[i]
    }
    if(_default.method.toUpperCase()=='GET'){
       var f=url.indexOf('?')>-1 ? '&' : '?';
       url+=f+'_='+Date.now();
       for(var j in _default.data){
           url+='&'+j+ '=' + _default.data[j];
       }
    }
    var xhr=new XMLHttpRequest();
    xhr.open(_default.method,url,true);
    //用post发送请求时,先把多对象转换为json字符串(传输格式为字符串)
    _default.data=JSON.stringify(_default.data);
    xhr.send(_default.data);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                var val=xhr.responseText;
                val=JSON.parse(val);
                if(val.msg==200){
                    if(typeof _default.success==='function'){
                        _default.success(val)
                    }
                }
            }else{
                if(typeof _default.error==='function'){
                    _default.error(val)
                }
            }
        }
    }
}
