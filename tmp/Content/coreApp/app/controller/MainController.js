
//获取当前用户的登录信息
Ext.Ajax.request({
    url: 'Home/GetMenuByRole',
    success: function (response) {
        menu = eval('(' + response.responseText+')');
    },
    failure: function () {
        
    }
});
function getViewByMenuId(id) {
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].Id == id) {
            return menu[i].view;
        }
        else return "";
    }
}

Ext.define('erp.app.controller.MainController', {
    extend: 'Ext.app.Controller',
    init: function () {
        var self = this;
        //动态加载controller并渲染它的主窗体
        this.addFuncItem = function (funInfo) {
            if (funInfo) {           
                var mainView = funInfo.mainView;            
                mainView.setTitle(funInfo.record.raw.text);
                mainView.setIconCls(funInfo.record.raw.iconCls);
                mainView.removeAll(true);
                self.application.getController(funInfo.record.raw.controller).init();
                funPanel = Ext.create(funInfo.record.raw.view);
                mainView.add({ xtype: funInfo.record.raw.xtypes });
                currentId = 0;//将当前选中Id重置为0
                _ids = "";//重置条件
                _tempStr = "";
            }
        },
        //控制器部份
        this.control({
            //菜单点击
            'menutree': {
                itemclick: function (tree, record, item, index, e, eOpts) {
                    if (record.get('leaf')) {
                        var centerPanel = Ext.getCmp('centerpanel');
                        //centerPanel.setTitle(record.get('text'));
                        //centerPanel.setIconCls(record.get('iconCls'));
                        //centerPanel.removeAll(true); 
                        //centerPanel.add({ xtype: record.raw.xtypes });
                        self.addFuncItem({
                            mainView: centerPanel,
                            record: record
                        });
                    }
                    return false;
                }
            }
        });
    },
    views: [
	       'erp.app.view.MainPanel',
           'erp.app.view.MenuTree',
           'erp.app.view.TopView'
    ],
    stores: [
           'erp.app.store.MenuStore'
    ],
    models: [

    ]
});