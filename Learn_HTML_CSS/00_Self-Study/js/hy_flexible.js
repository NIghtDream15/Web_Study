// 1.获取html元素
const htmlEL = document.documentElement
    
function setRemUnit() {
  // 2.获取html宽度（视口的宽度）
  const htmlWidth = htmlEL.clientWidth
  // 3.根据宽度计算一个html的font-size的大小
  const htmlFontSize = htmlWidth / 10
  // 4.将font-size设置到html上
  htmlEL.style.fontSize = htmlFontSize + "px"
}
// 保证第一次进来时,可以设置一次font-size
setRemUnit()

// 当屏幕尺寸发生变化时，实时来修改html的font-size
window.addEventListener("resize", setRemUnit)