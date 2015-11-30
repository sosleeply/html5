Ext.define('erp.menu.store.MenuStore', {
    extend: 'Ext.data.TreeStore',
    //pageSize: pagesize,
    model: 'erp.menu.model.MenuModel',
    folderSort: true,
    proxy: {
        type: 'ajax',
        url: 'Home/GetAllMenu',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true//{ start: 0, limit: pagesize }

});