Ext.define('erp.app.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainpanel',
    defaults: {
        bodyStyle: 'padding: 1px',
        split: true
    },
    layout: 'border',
    items: [{//左侧
        title: '操作菜单',
        iconCls: 'tools_1',
        region: 'west',
        xtype: 'panel',
        collapsible: false, //收起
        width: 200,
        layout: 'fit',
        margins: '3 2 2 5',
        id:'west-tree',
        items: [{
            xtype: 'menutree'//menutree
        }]
    }, {//中间
        title: '菜单管理',
        iconCls: 'tools_8',
        region: 'center',
        xtype: 'panel',
        margins: '3 5 2 0',
        layout: 'fit',
        id: 'centerpanel',
        items: [{
            xtype: ''//
        }]
    }, {//头部
        region: 'north',
        xtype: 'topview',
        height: 80,
        border: 1,
        resizable: false,
        margins: '5 5 0 5',
        html: "<div class='top'><a href='javascript:void(0)' onclick='dataReset()'>数据重置</a><a href='/lib/ERP.rar' target='_blank'>源码下载</a></div>"
    }],
    initComponent: function () {
        this.callParent(arguments);
    }
});