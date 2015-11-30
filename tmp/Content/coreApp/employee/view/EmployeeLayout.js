Ext.define("erp.employee.view.EmployeeLayout", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.employeelayout',
    defaults: {
        split: true,
        bodyStyle: 'padding:1px'
    },
    layout: 'border',
    items: [{
        title: '组织机购',
        region: 'west',
        iconCls: 'tools_8',
        xtype: 'panel',
        width: 228,
        items: [{
            xtype: 'branchtree',
            id: 'branch_tree'
        }]
    }, {
        title: '员工管理',
        iconCls: 'tools_8',
        layout: 'fit',
        region: 'center',
        xtype: 'panel',
        items: [{
            id: 'employee_grid',
            xtype: 'employeegrid'
        }]
    }, {
        title: '员工管理',
        xtype: 'employeeform',
        iconCls: 'tools_8',
        width: 300,
        region: 'center',
        hidden: true
    }],
    initComponent: function () {
        this.callParent(arguments);
    }
});