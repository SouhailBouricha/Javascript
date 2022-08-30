function getData(type,url,async,callback){
    const xhr = new XMLHttpRequest();
    xhr.open(type,url,async);
    xhr.onload = () => {        
    if(xhr.status == 200){
        callback(xhr.response);
    }
}
    xhr.send( );
}

function ShowData(data){
    console.log(data);
}

getData("GET","https://restcountries.com/v3.1/all",true,ShowData);
