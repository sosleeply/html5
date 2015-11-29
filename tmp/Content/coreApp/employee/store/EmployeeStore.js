Ext.define('erp.employee.store.EmployeeStore', {
    extend: 'Ext.data.Store',
    pageSize: pagesize,
    model: 'erp.employee.model.EmployeeModel',
    folderSort: true,
    proxy: {
        type: 'ajax',
        url: 'Employee/GetEmployee',
        reader: {
            type: 'json',
            root:'root'
        }
    },listeners: {  
        'beforeload': function (store, op, options) {  
            var params = {  
                id:_ids  //_ids为选中的组织机购以及其子节点Id
            };  
            Ext.apply(store.proxy.extraParams, params);   
        }  
    },
    autoLoad: false//{ start: 0, limit: pagesize }

});