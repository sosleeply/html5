Ext.define('erp.position.store.PositionStore', {
    extend: 'Ext.data.Store',
    pageSize: pagesize,
    model: 'erp.position.model.PositionModel',
    folderSort: true,
    proxy: {
        type: 'ajax',
        url: 'Position/GetPosition',
        reader: {
            type: 'json',
            root:'root'
        }
    },
    autoLoad:true//{ start: 0, limit: pagesize }

});