Ext.define("erp.branch.view.BranchGrid", {
    extend: "Ext.tree.Panel",
    alias: "widget.branchgrid",
    store: "erp.branch.store.BranchStore",
    selModel: {
        selType: "checkboxmodel"
    },
    multiSelect: true,
    rootVisible: false,
    columnLines: true,
    rowLines: true,
    enableKeyNav: true,
    forceFit: true,
    columns: [
	    { text: '序号', xtype: 'rownumberer', width: 40, align: 'center' },
		{ text: 'Id', dataIndex: 'Id', hidden: true },
		{
		    text: '机购名称', xtype: 'treecolumn', dataIndex: 'branchName'//,
		},
        {
            text: '电话', dataIndex: 'telPhone'//,
        },
        {
            text: '传真', dataIndex: 'fax'//,
        },
        {
            text: '排序', dataIndex: 'sort'//,
        },
        {
            text: 'parent', dataIndex: 'parent', hidden: true
        },
        {
            text: 'expanded', dataIndex: 'expanded', hidden: true
        },
        {
            text: 'leaf', dataIndex: 'leaf', hidden: true
        }
    ],
    tbar: [{
        xtype: 'button',
        text: '添加',
        iconCls: 'table_add',
        id: 'branch_add'
    }, {
        xtype: 'button',
        text: '修改',
        iconCls: 'btn_edit',
        id: 'branch_edit'
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'table_remove',
        id: 'branch_delete'
    },
    //"->",
    //"查询:",
    //{
    //    xtype: 'triggerfield',
    //    triggerCls: Ext.baseCSSPrefix + 'form-search-trigger',
    //    listeners: {
    //        "change": function (_this, _new, _old, _opt) {
    //            var _store = _this.ownerCt.ownerCt.getStore();
    //            _store.clearFilter(false);
    //            _store.filter("branchName", _new);
    //        }
    //    },
    //    onTriggerClick: function () {
    //        var _store = this.ownerCt.ownerCt.getStore();
    //        _store.clearFilter(false);
    //        _store.filter("branchName", this.getValue());
    //    }
    //}
    ],
    dockedItems: [{
        //xtype: 'pagingtoolbar',
        //store: '',
        //dock: 'bottom',
        //displayInfo: true
    }]
});
