Ext.define('erp.employee.model.PositionModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Id', type: 'int', sortable: true },
        { name: 'positionName', type: 'string', sortable: true }
    ]
});