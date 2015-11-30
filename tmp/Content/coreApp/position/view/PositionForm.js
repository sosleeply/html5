Ext.define("erp.position.view.PositionForm", {
    extend: "Ext.form.Panel",
    alias: "widget.positionform",
    layout: {
        type: "table",
        columns: 2
    },
    align: "left",
    defaults: {
        margin: "10 0 0 15",
        selectOnFocus: true,
        width: 300,
        msgTarget: "side"
    },
    tbar: [{
        xtype: "button",
        id: "position_save",
        iconCls: "table_save",
        text: "保存"
    }, {
        xtype: "button",
        id: "position_return",
        iconCls: "icon_return",
        text: "返回"
    }],
    items: [{
        xtype: "numberfield",
        fieldLabel: "Id",
        id: "position_id",
        name: "Id",
        hidden: true
    }, {
        xtype: "numberfield",
        fieldLabel: "branchId",
        id: "position_branchid",
        name: "branchId",
        hidden: true
    }, {
        xtype: "textfield",
        fieldLabel: "职位名称<span class='must'>*</span>",
        name: "positionName",
        allowBlank: false,
        blankText: "职位名称不能为空"
    },
     {
         xtype: "textfield",
         fieldLabel: "stated",
         id: "position_stated",
         name: "stated",
         hidden: true
     }]
})