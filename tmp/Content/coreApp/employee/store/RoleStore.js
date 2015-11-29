Ext.define('erp.employee.store.RoleStore', {
    extend: 'Ext.data.Store',
    pageSize: 8888,
    model: 'erp.employee.model.RoleModel',
    folderSort: true,
    proxy: {
        type: 'ajax',
        url: 'Role/GetAllRole',
        reader: {
            type: 'json',
            root:'root'
        }
    },
    autoLoad: true//{ start: 0, limit: pagesize }

});