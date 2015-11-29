Ext.onReady(function () {
    //Tip提示标签
    Ext.QuickTips.init();
    //动态加载类
    Ext.Loader.setConfig({
        enabled: true
    });

    Ext.application({
        name: 'erp',//命名空间
        appFolder: 'Content/coreApp',//应用程序所在的文件夹
        launch: function () {//页面加载完成后执行的函数
            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items: [{
                    xtype: 'mainpanel'
                }]
            });
        },
        controllers: [
		   'erp.app.controller.MainController'
        ]
    });
});