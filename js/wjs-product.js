/**
 * Created by zhoul on 2017/5/25.
 */
//$(function(){
//    var ul=$(".nav-tabs");
//    var lis=ul.find("li");
//    var totalWidth=0;
//    lis.each(function(index,value){
//        totalWidth+=$(value).outerWidth();
//        console.log($(value).outerWidth());
//    });
//    console.log(totalWidth);
//    ul.width(totalWidth);
//});
    $(function(){
var ul=$(".nav-tabs");
var lis=ul.find("li");
var totalWidth=0;//�ܿ��
lis.each(function(index,value){
    totalWidth=totalWidth+$(value).outerWidth();
    console.log($(value).outerWidth());
    /*��ȡ��ȵķ�����˵����
     * width():��ֻ�ܵõ���ǰԪ�ص����ݵĿ��
     * innerWidth():���ܻ�ȡ��ǰԪ�ص����ݵĿ��+padding
     * outerWidth():��ȡ��ǰԪ�ص����ݵĿ��+padding+border
     * outerWidth(true):��ȡԪ�ص����ݵĿ��+padding+border+margin*/
});
ul.width(totalWidth);
/*ʹ�ò��ʵ�ֵ������Ļ�������*/
var myScroll = new IScroll('.tabs_parent',{
    /*����ˮƽ������������ֱ����*/
    scrollX: true, scrollY: false
})
});