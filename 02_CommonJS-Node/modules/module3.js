exports=module.exports = function (params) {
  console.log("module.exports = function,exports.peiqi");
}
exports.peiqi = [1,3,5,7,9];//!!!!!!!!!!原以为这样把module.exports=function写在前边，
//再给exports赋值就没事。但其实这个时候原本的exports指向的那空内存已经不是要暴露出去的内存了。
//要暴露的内存已经变成了module.exports重新指向的内存空间。exports并不会自动跟随module.exports指过来。
//除非在此之前有手动exports=module.exports;

/*问题:
  1.暴露的本质到底是什么?module.exports所指向的那个对象
  2.在CommonJs模块规范中，module.exports 和 exports.xxx 不能混用。
  3.如果混用，以module.exports为主*/
/*module.exports = function haha() {
  console.log('哈哈')
}*/


