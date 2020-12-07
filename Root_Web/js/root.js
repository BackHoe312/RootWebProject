// 메뉴 움직임

function menu(){
    $('ul', this).stop().slideToggle(300)
    
}
$(document).on('mouseenter mouseleave', '.menu>ul>li', menu)

// 복사 방지, 드래그 방지

// function select(e){
//     var tags = ["input", "textarea", "select"]
//     if (tags.indexOf(e.target.tagName.toLowerCase()) == -1){
//         return false
//     }
// }
// function reEnable() {
//     return true
// }
// if (typeof document.onselectstart != "undefined"){
//     document.onselectstart = new Function ("return false")
// }else{
//     document.onmousedown = select
//     document.onmouseup = reEnable
// }