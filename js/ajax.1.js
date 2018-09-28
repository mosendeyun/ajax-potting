function sendAjax(callback){
    var xhr= new XMLHttpRequest();//建立ajax请求
    xhr.open("GET","json/person.json",true);//发送ajax请求
    xhr.send(null);//处理ajax请求,默认传入null
    xhr.onreadystatechange=function(){//ajax请求状态事件
        // // console.log(xhr.readyState);打印状态码,看是否链接上
        // 状态码:0:没有建立链接
        //     1:建立链接
        //     2:接受了收据
        //     3:处理数据
        //     4:反馈结果
        if(xhr.readyState===4 && xhr.status===200){//链接成功则进行下一步
            var $result=JSON.parse(xhr.responseText);//json字符串转化为json对象
            // $result.forEach(function(item,index,arr){//方法1
            //     item.age+=1;
            // })
            // for(var i=0;i<$result.length;i++){方法2
            //     $result[i].age+=1;
            // }
            if(typeof callback=="function"){//方法三,回调函数方式,
                callback($result)
            }
            console.log($result);
        }
    }
}
function fn(json){//方法三,回调函数即fn
    for(var i=0;i<json.length;i++){
        json[i].age+=1;
    }
}
sendAjax(fn)