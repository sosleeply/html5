Ext.define('erp.position.store.BranchStore', {
    extend: 'Ext.data.TreeStore',
    //pageSize: pagesize,
    model: 'erp.position.model.BranchModel',
    folderSort: true,
    proxy: {
        type: 'ajax',
        url: 'Branch/GetBranch',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false//{ start: 0, limit: pagesize }

});