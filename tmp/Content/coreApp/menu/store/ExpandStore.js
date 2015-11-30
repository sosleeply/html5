Ext.define('erp.menu.store.ExpandStore', {
    extend: 'Ext.data.Store',
    fields: ['Id', 'text'],
    data: [{ "Id": 0, "text": false }, { "Id": 1, "text": true }],

    autoLoad: true//{ start: 0, limit: pagesize }

});