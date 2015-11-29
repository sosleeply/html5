Ext.define("erp.employee.view.EmployeeForm", {
    extend: "Ext.form.Panel",
    alias: "widget.employeeform",
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
        id: "employee_save",
        iconCls: "table_save",
        text: "保存"
    }, {
        xtype: "button",
        id: "employee_return",
        iconCls: "icon_return",
        text: "返回"
    }],
    items: [{
        xtype: "numberfield",
        fieldLabel: "Id",
        id: "employee_id",
        name: "Id",
        hidden: true
    }, {
        xtype: "textfield",
        fieldLabel: "员工编号<span class='must'>*</span>",
        name: "employeeNo",
        allowBlank: false,
        blankText: "员工编号不能为空"
    }, {
        xtype: "textfield",
        fieldLabel: "用户名<span class='must'>*</span>",
        name: "userName",
        allowBlank: false,
        blankText: "用户名不能为空"
    },
    {
        xtype: "textfield",
        inputType:'password',
        fieldLabel: "密码<span class='must'>*</span>",
        name: "passWord",
        allowBlank: false,
        blankText: "密码不能为空"
    }, {
        xtype: "textfield",
        fieldLabel: "中文名",
        name: "chineseName"
    }, {
        xtype: "textfield",
        fieldLabel: "英文名",
        name: "englishName"
    }, {
        xtype: "roleview",
        name: 'roleId',
        fieldLabel: "角色<span class='must'>*</span>",
        allowBlank: false,
        blankText: '角色不能为空'
    }, {
        xtype: "positionview",
        id: 'employee_position',
        name: 'positionId',
        fieldLabel: "职位<span class='must'>*</span>",
        allowBlank: false,
        blankText: '职位不能为空'
    }, {
        xtype: 'textfield',
        fieldLabel: "组织机购<span class='must'>*</span>",
        allowBlank: false,
        name: 'branchName',
        id: 'employee_branchName', 
        fieldCls: 'input_type',
        blankText: '组织机购不能为空',
        emptyText: '请选择',
        value:' '
    },{
        xtype: 'numberfield',
        fieldLabel: '组织机购ID',
        allowBlank: false,
        name: 'branchId',
        id: 'employee_branchId',
        blankText: '组织机购不能为空',
        hidden:true
    },
    {
        xtype: 'textfield',
        fieldLabel: '电话',
        name: 'telPhone',
    }, {
        xtype: 'textfield',
        fieldLabel: '邮箱',
        name: 'email',
    },
     {
         xtype: "textfield",
         fieldLabel: "stated",
         id: "employee_stated",
         name: "stated",
         hidden: true
     }]
})