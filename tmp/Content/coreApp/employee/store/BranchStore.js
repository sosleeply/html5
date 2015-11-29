Ext.define('erp.employee.store.BranchStore', {
    extend: 'Ext.data.TreeStore',
    //pageSize: pagesize,
    model: 'erp.employee.model.BranchModel',
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