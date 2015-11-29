Ext.define('erp.menu.model.MenuModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Id', type: 'int', sortable: true },
        { name: 'text', type: 'string', sortable: true },
        { name: 'sort', type: 'int', sortable: true },
        { name: 'iconCls', type: 'string', sortable: false },
        { name: 'view', type: 'string', sortable: false },
        { name: 'controller', type: 'string', sortable: false },
        { name: 'xtypes', type: 'string', sortable: false },
        { name: 'expanded', type: 'bool', sortable: false },
        { name: 'parent', type: 'int', sortable: false }
    ]
});