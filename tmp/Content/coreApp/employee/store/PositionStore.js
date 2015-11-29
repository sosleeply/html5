Ext.define('erp.employee.store.PositionStore', {
    extend: 'Ext.data.Store',
    pageSize: 8888,
    model: 'erp.employee.model.PositionModel',
    folderSort: true,
    proxy: {
        type: 'ajax',
        url: 'Position/GetPosition',
        reader: {
            type: 'json',
            root: 'root'
        }
    },
    autoLoad: true//{ start: 0, limit: pagesize }

});