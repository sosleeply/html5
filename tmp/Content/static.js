//每页显示多少行数据
var pagesize = 18;
//position分页条件
var _ids = "";
var _tempStr = "";
var currentId = 0;
//提示信息
var sysInfo = "系统消息";
var sysSuccess = "保存成功";
var sysFailure = "保存失败";
var sysError = "保存出错";
var chooseData = "请选择数据";
var sureDelete = "确定要删除选择的数据吗？";
var deleteSuccess = "删除成功";
var deleteFailure = "删除失败";
var limitParent = "当前只允许添加<font color='red'> 2 </font>级节点，请选择根节点";
var user = '';
var menu;
//数据重置
function dataReset() {
    $.post("Home/dataReset", {}, function (res) {
        alert("数据重置完成");
        window.location = "http://localhost:88/";
    })
}