Ext.define('erp.app.store.MenuStore', {
    extend: 'Ext.data.TreeStore',
    defaultRootId: 'root',
    proxy: {
        type: 'ajax',
        url: 'Home/GetMenuByRole',
        reader: 'json'
    }
});