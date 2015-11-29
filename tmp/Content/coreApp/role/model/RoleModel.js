Ext.define('erp.role.model.RoleModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Id', type: 'int', sortable: true },
        { name: 'roleName', type: 'string', sortable: true },
        { name: 'roleRemark', type: 'string', sortable: true }
    ]
});