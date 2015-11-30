Ext.define('erp.menu.store.IconStore', {
    extend: 'Ext.data.Store',
    fields: ['icon', 'icon'],
    proxy: {
        type: 'ajax',
        url: 'Home/GetIcons',
        reader: {
            type: 'json'
        }
    },
    
    autoLoad: true//{ start: 0, limit: pagesize }

});