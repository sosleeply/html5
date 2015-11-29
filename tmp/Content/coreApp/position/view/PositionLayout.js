Ext.define("erp.position.view.PositionLayout", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.positionlayout',
    defaults: {
        split: true,
        bodyStyle: 'padding:1px'
    },
    layout: 'fit',
    items: [{
        xtype: 'positiongrid'
    }, {
        xtype: 'positionform',
        hidden: true
    }],
        //{
        //title: '组织机购',
        //region: 'west',
        //iconCls: 'tools_8',
        //xtype: 'panel',
        //width: 228,
        //items: [{
        //    xtype: 'branchtree',
        //    id:'branch_tree'
        //}]
        //},
    //{
    //    title: '职位管理',
    //    iconCls: 'tools_8',
    //    layout:'fit',
    //    region: 'center',
    //    xtype: 'panel',
    //    items: [{
    //        id: 'position_grid',
    //        xtype: 'positiongrid'
    //    }]
    //}, {
    //    title: '职位管理',
    //    xtype: 'positionform',
    //    iconCls: 'tools_8',
    //    width:300,
    //    region: 'center',
    //    hidden: true
    //}],
    initComponent: function () {
        this.callParent(arguments);
    }
});