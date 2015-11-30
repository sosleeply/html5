Ext.define('erp.branch.store.BranchStore', {
    extend: 'Ext.data.TreeStore',
    //pageSize: pagesize,
    model: 'erp.branch.model.BranchModel',
    folderSort: true,
    proxy: {
        type: 'ajax',
        url: 'Branch/GetBranch',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true//{ start: 0, limit: pagesize }

});