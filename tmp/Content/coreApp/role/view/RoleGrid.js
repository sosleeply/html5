Ext.define("erp.role.view.RoleGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.rolegrid",
    store: "erp.role.store.RoleStore",
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
		    text: '名称', dataIndex: 'roleName'//,
		},
        {
            text: '备注', dataIndex: 'roleRemark'//,
        }
    ],
    tbar: [{
        xtype: 'button',
        text: '添加',
        iconCls: 'table_add',
        id: 'role_add'
    }, {
        xtype: 'button',
        text: '修改',
        iconCls: 'btn_edit',
        id: 'role_edit'
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'table_remove',
        id: 'role_delete'
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
                _store.filter("roleName", _new);
            }
        },
        onTriggerClick: function () {
            var _store = this.ownerCt.ownerCt.getStore();
            _store.clearFilter(false);
            _store.filter("roleName", this.getValue());
        }
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'erp.role.store.RoleStore',
        dock: 'bottom',
        displayInfo: true
    }]
});
