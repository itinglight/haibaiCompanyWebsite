//轮播图

$(function(){
    
})


// 商品导航栏
$(".index_product .container li").click(
    function () {
        //先清空元素
        $(".index_product .container main ").empty()

        //根据标题内容显示元素
        var kinds=$(".index_product .container li:hover").text();
        alert(kinds)
        // 将商品展示出来
        $(".index_product .container main ")
    }
)


 // 更剧 json 数组动态展示商品
//  function addProduct3(card_id,img_url,product_name){

//     // 添加卡片
//      addnewcard(card_id);
//     // 添加内容
//     var parduct="<div class="product_container"><img><span>醋酸乙酯</span></div>"
//     $(".card"+card_id).prepend(product);
//     img_url="./img/product/醋酸乙酯.jpg";
//     $(".card"+card_id+" img").attr("src",img_url)
//     var onclick="addtoCars("+card_id+")";
//     $(".card"+card_id+" button").attr("onclick",onclick);
// }