Ext.define('erp.employee.model.EmployeeModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Id', type: 'int', sortable: true },
        { name: 'employeeNo', type: 'string', sortable: true },
        { name: 'userName', type: 'string', sortable: true },
        { name: 'passWord', type: 'string', sortable: true },
        { name: 'chineseName', type: 'string', sortable: true },
        { name: 'englishName', type: 'string', sortable: true },
        { name: 'roleId', type: 'int', sortable: true },
        { name: 'roleName', type: 'string', sortable: true },
        { name: 'email', type: 'string', sortable: true },
        { name: 'telPhone', type: 'string', sortable: true },
        { name: 'positionId', type: 'int', sortable: true },
        { name: 'positionName', type: 'string', sortable: true },
        { name: 'branchId', type: 'int', sortable: true },
        { name: 'branchName', type: 'string', sortable: true }
    ]
});