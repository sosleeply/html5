Ext.define("erp.menu.view.MenuForm", {
    extend: "Ext.form.Panel",
    alias: "widget.menuform",
    layout: {
        type: "table",
        columns:2
    },
    align: "left",
    defaults: {
        margin: "10 0 0 15",
        selectOnFocus: true,
        width: 300,
        msgTarget:"side"
    },
    tbar: [{
        xtype: "button",
        id: "menu_save",
        iconCls: "table_save",
        text:"保存"
    }, {
        xtype: "button",
        id: "menu_return",
        iconCls: "icon_return",
        text: "返回"
    }],
    items: [{
        xtype: 'label',
        forId: 'myFieldId',
        id:'menu_label',
        text: ''
    }, {
        xtype: 'label',
        forId: 'myFieldId',
        text: ''
    }, {
        xtype: "numberfield",
        fieldLabel: "Id",
        id: "menu_id",
        name: "Id",
        hidden:true
    }, {
        xtype: "numberfield",
        fieldLabel: "parent",
        name: "parent",
        hidden: true
    }, {
        xtype: "textfield",
        fieldLabel: "菜单名称<span class='must'>*</span>",
        name: "text", 
        allowBlank: false,
        blankText:"菜单名称不能为空"
    }, {
        xtype: "iconview",
        name:'iconCls',
        fieldLabel: "图标<span class='must'>*</span>",
    }, {
        xtype: "textfield",
        fieldLabel: "controller",
        name: "controller",
        //allowBlank: false,
        //blankText: "controller不能为空"
    }, {
        xtype: "expandview",
        name: 'expanded',
        id:'menu_expanded',
        fieldLabel: "展开<span class='must'>*</span>",
    },
    {
        xtype: "textfield",
        fieldLabel: "view",
        name: "view",
        //allowBlank: false,
        //blankText: "view不能为空"
    }, {
        xtype: "expandview",
        name: 'leaf',
        id:"menu_leaf",
        fieldLabel: "是否叶子节点<span class='must'>*</span>",
    }, {
        xtype: "textfield",
        fieldLabel: "xtypes",
        name: "xtypes",
        //allowBlank: false,
        //blankText: "xtypes不能为空"
    }, {
        xtype: "numberfield",
        fieldLabel: "排序<span class='must'>*</span>",
        name: "sort",
        allowBlank: false,
        blankText: "排序不能为空"
    },
     {
         xtype: "textfield",
         fieldLabel: "stated",
         id:"menu_stated",
         name: "stated",
         hidden: true
     }]
})