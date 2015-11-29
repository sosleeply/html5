Ext.define('erp.position.view.BranchTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.branchtree',

    rootVisible: false,//不显示根节点
    layout: 'fit',
    displayField: 'branchName',
    animate: false,
    padding: '0,8,8,8',
    border: 0,
    store: 'erp.position.store.BranchStore',
    initComponent: function () {
        this.callParent(arguments);
    }
});