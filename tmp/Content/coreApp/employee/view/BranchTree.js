Ext.define('erp.employee.view.BranchTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.branchtree',

    rootVisible: false,//不显示根节点
    layout: 'fit',
    displayField: 'branchName',
    animate: false,
    padding: '0,8,8,8',
    border: 0,
    store: 'erp.employee.store.BranchStore',
    initComponent: function () {
        this.callParent(arguments);
    }
});