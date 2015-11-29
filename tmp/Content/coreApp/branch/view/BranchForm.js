Ext.define("erp.branch.view.BranchForm", {
    extend: "Ext.form.Panel",
    alias: "widget.branchform",
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
        id: "branch_save",
        iconCls: "table_save",
        text: "保存"
    }, {
        xtype: "button",
        id: "branch_return",
        iconCls: "icon_return",
        text: "返回"
    }],
    items: [{
        xtype: 'label',
        forId: 'myFieldId',
        id: 'branch_label',
        text: ''
    }, {
        xtype: 'label',
        forId: 'myFieldId',
        text: ''
    }, {
        xtype: "numberfield",
        fieldLabel: "Id",
        id: "branch_id",
        name: "Id",
        hidden: true
    }, {
        xtype: "numberfield",
        fieldLabel: "parent",
        name: "parent",
        hidden: true
    }, {
        xtype: "textfield",
        fieldLabel: "机购名称<span class='must'>*</span>",
        name: "branchName",
        allowBlank: false,
        blankText: "机购名称不能为空"
    },
    {
        xtype: "textfield",
        fieldLabel: "电话",
        name: "telPhone"
    }, {
        xtype: "expandview",
        name: 'expanded',
        id: 'branch_expanded',
        fieldLabel: "展开<span class='must'>*</span>",
    },
    {
        xtype: "textfield",
        fieldLabel: "传真",
        name: "fax"
    }, {
        xtype: "expandview",
        name: 'leaf',
        id: "branch_leaf",
        fieldLabel: "是否叶子节点<span class='must'>*</span>",
    },
    {
        xtype: "numberfield",
        fieldLabel: "排序<span class='must'>*</span>",
        name: "sort",
        allowBlank: false,
        blankText: "排序不能为空"
    },
     {
         xtype: "textfield",
         fieldLabel: "stated",
         id: "branch_stated",
         name: "stated",
         hidden: true
     }]
})