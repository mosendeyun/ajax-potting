function sendAjax(method,url,params,callback){
    var xhr=new XMLHttpRequest();
    xhr.open(method,url,true);
    xhr.send(params);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            var result=JSON.parse(xhr.responseText);
          
            if(typeof callback==="function"){
                callback(result)
            }
            console.log(result)
        }
    }
}
function fn(json){
    for(var i=0;i<json.length;i++){
        json[i].age+=1;
    }
}

sendAjax('GET','json/person.json',null,fn)