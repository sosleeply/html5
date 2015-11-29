Ext.define('erp.employee.model.BranchModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Id', type: 'int', sortable: true },
        { name: 'branchName', type: 'string', sortable: true },
        { name: 'telPhone', type: 'string', sortable: true },
        { name: 'fax', type: 'string', sortable: true },
        { name: 'sort', type: 'int', sortable: true },
        { name: 'parent', type: 'int', sortable: false },
        { name: 'expanded', type: 'bool', sortable: false },
        { name: 'leaf', type: 'bool', sortable: false }
    ]
});