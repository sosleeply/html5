Ext.define("erp.role.view.RoleForm", {
    extend: "Ext.form.Panel",
    alias: "widget.roleform",
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
        id: "role_save",
        iconCls: "table_save",
        text: "保存"
    }, {
        xtype: "button",
        id: "role_return",
        iconCls: "icon_return",
        text: "返回"
    }],
    items: [{
        xtype: "numberfield",
        fieldLabel: "Id",
        id: "role_id",
        name: "Id",
        hidden: true
    },{
        xtype: "textfield",
        fieldLabel: "角色名称<span class='must'>*</span>",
        name: "roleName",
        allowBlank: false,
        blankText: "角色名称不能为空"
    }, {
        xtype: "textfield",
        fieldLabel: "备注",
        name: "roleRemark"
    },
     {
         xtype: "textfield",
         fieldLabel: "stated",
         id: "role_stated",
         name: "stated",
         hidden: true
     }]
})