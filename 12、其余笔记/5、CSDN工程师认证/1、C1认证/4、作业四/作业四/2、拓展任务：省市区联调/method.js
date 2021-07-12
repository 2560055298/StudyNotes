function $(id) {
    return document.getElementById(id);
}

//省级：select
var myProvince = $("myProvince");

//市级：select
var myCity = $("myCity");

//县级：select
var myCounty = $("myCounty");

var currenData = {
    curProvince : null,        //存放当前选中的：省级索引
    curCity : null,            //存放当前选中的：市级索引
    curCounty : null           //存放当前选中的：县级索引
}


//加载完（页面）所有元素后：自动加载（省级select）
window.onload = function () {
    //获取（省级）数据：个数
    var provinceLen = allData.length;


    for(var i = 0; i < provinceLen; i++){
        //创建一个option标签
        var opt = document.createElement("option");

        //将所有的（省级）， 添加到（select）省级标签中
        if(allData[i].provinceName.length > 3){
            opt.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;' + allData[i].provinceName;
        }else{
            opt.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp' + allData[i].provinceName;
        }

        opt.setAttribute("value", i);
        myProvince.appendChild(opt);
    }
}

//当改变：（省级）下拉框时
function showProvince(obj) {

    //清空上一次：选中（省级）， 联动出现的（市级）
    myCity.length = 1;

    //给县级：select进行清零， 只保留（请选择）
    myCounty.length = 1;

    //获取选中（省份）的：索引
    var selectedIndex = obj.selectedIndex - 1;
    currenData.curProvince = selectedIndex;     //存放：当前选中的市级索引

    //获取当前：选中的省
    var pro = allData[selectedIndex];

    //获取city的长度：获取（有多少个）市
    var cityLen = pro.city.length;

    //遍历市
    for(var i = 0; i < cityLen; i++){
        var opt = document.createElement("option");

        //为option标签：赋值
        if(pro.city[i].cityName.length > 3){
            opt.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;' + pro.city[i].cityName;
        }else{
            opt.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp' + pro.city[i].cityName;
        }

        opt.setAttribute("value", i);
        myCity.appendChild(opt);   //将选中的：省级的（所有市级）添加到（市级select中）
     }
}

//当改变：（市级）下拉框时
function showCity(obj) {
    //给县级：select进行清零， 只保留（请选择）
    myCounty.length = 1;

    //获取当前选中（市级）的索引
    var selectedIndex = obj.selectedIndex-1;

    //判断：（是否已确定了省级）， 若已确定，则确定市级
    if(currenData.curProvince != null){
        //获取已选中的：省级对象
        var pro = allData[currenData.curProvince]

        //获取：当前选中的（市级对象）
        var city = pro.city[selectedIndex];

        //获取：选中市级对象的（拥有县级的：个数）
        var countyLen = city.countyName.length;

        //遍历所有县级：并且添加到（myCounty中）
        for(var i = 0; i < countyLen; i++){
            //创建一个：option标签
            var opt = document.createElement("option");

            //为option标签：赋值
            if(city.countyName[i].length > 3){
                opt.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;' + city.countyName[i];
            }else{
                opt.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp' + city.countyName[i];
            }

            opt.setAttribute("value", i);

            //将option标签添加到：myCity中
            myCounty.appendChild(opt);
        }
    }
}

//显示县级时
function showCounty(obj) {
    //获取当前选中：县级索引， 将其存放在 curCounty 中
    var selectedIndex = obj.selectedIndex-1;
    currenData.curCounty = selectedIndex;

}