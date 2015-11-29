Ext.define('erp.app.view.MenuTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menutree',

    rootVisible: false,//不显示根节点
    layout:'fit',
    displayField: 'text',
    animate: false,
    padding: '8,8,8,8',
    border: 0,
    store: 'erp.app.store.MenuStore'
});