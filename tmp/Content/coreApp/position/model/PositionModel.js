Ext.define('erp.position.model.PositionModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Id', type: 'int', sortable: true },
        { name: 'positionName', type: 'string', sortable: true }//,
        //{ name: 'branchName', type: 'string', sortable: false },
        //{ name: 'branchId', type: 'int', sortable: false }
    ]
});