Ext.define('erp.role.store.RoleStore', {
    extend: 'Ext.data.Store',
    pageSize: pagesize,
    model: 'erp.role.model.RoleModel',
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