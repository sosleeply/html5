Ext.define("erp.position.view.PositionGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.positiongrid",
    store: "erp.position.store.PositionStore",
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
		{text: '职位名称', dataIndex: 'positionName'}//,
        //{
        //    text: '组织机购', dataIndex: 'branchName'//,
        //},
        //{
        //    text: 'Id', dataIndex: 'branchId', hidden: true
        //}
    ],
    tbar: [{
        xtype: 'button',
        text: '添加',
        iconCls: 'table_add',
        id: 'position_add'
    }, {
        xtype: 'button',
        text: '修改',
        iconCls: 'btn_edit',
        id: 'position_edit'
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'table_remove',
        id: 'position_delete'
    },
    "->",
    "查询:",
    {
        xtype: 'triggerfield',
        triggerCls: Ext.baseCSSPrefix + 'form-search-trigger',
        listeners: {
            "change": function (_this, _new, _old, _opt) {
                var _store = _this.ownerCt.ownerCt.getStore();
                _store.clearFilter(false);
                _store.filter("positionName", _new);
            }
        },
        onTriggerClick: function () {
            var _store = this.ownerCt.ownerCt.getStore();
            _store.clearFilter(false);
            _store.filter("positionName", this.getValue());
        }
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'erp.position.store.PositionStore',
        dock: 'bottom',
        displayInfo: true
    }],
    initComponent: function () {
        this.callParent(arguments);
    }
});
