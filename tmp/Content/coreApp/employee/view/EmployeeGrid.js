Ext.define("erp.employee.view.EmployeeGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.employeegrid",
    store: "erp.employee.store.EmployeeStore",
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
		{text: '员工编号', dataIndex: 'employeeNo'},
        { text: '用户名', dataIndex: 'userName' },
        {
            text: '密码', dataIndex: 'passWord', renderer: function (value) {
                return "******";
            },hidden:true
        },
        { text: '中文名', dataIndex: 'chineseName' },
        { text: '英文名', dataIndex: 'englishName' },
        { text: '角色ID', dataIndex: 'roleId',hidden:true },
        { text: '角色', dataIndex: 'roleName' },
        { text: '职位ID', dataIndex: 'positionId', hidden: true },
        { text: '职位', dataIndex: 'positionName' },
        { text: '组织机购ID', dataIndex: 'branchId', hidden: true },
        { text: '组织机购', dataIndex: 'branchName' },
        { text: '电话', dataIndex: 'telPhone' },
        { text: '邮箱', dataIndex: 'email' }
    ],
    tbar: [{
        xtype: 'button',
        text: '添加',
        iconCls: 'table_add',
        id: 'employee_add'
    }, {
        xtype: 'button',
        text: '修改',
        iconCls: 'btn_edit',
        id: 'employee_edit'
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'table_remove',
        id: 'employee_delete'
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
                _store.filter("userName", _new);
            }
        },
        onTriggerClick: function () {
            var _store = this.ownerCt.ownerCt.getStore();
            _store.clearFilter(false);
            _store.filter("userName", this.getValue());
        }
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'erp.employee.store.EmployeeStore',
        dock: 'bottom',
        displayInfo: true
    }]
});
