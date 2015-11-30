Ext.define('erp.employee.view.ChooseBranch', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.choosebranch',

    rootVisible: false,//不显示根节点
    displayField: 'branchName',//显示的字段
    animate: false,
    store: 'erp.employee.store.BranchStore',

    dockedItems: [
    //    {
    //    xtype: 'toolbar',
    //    dock: 'top',
    //    items: [{
    //        xtype: 'button',
    //        text: '展开全部',
    //        iconCls: 'table_add',
    //        id: 'expendAll'
    //    }, {
    //        xtype: 'button',
    //        text: '收起全部',
    //        iconCls: 'table_remove',
    //        id: 'collapseAll'
    //    }]
    //},
    {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            margin: '0 0 0 75',
            xtype: 'button',
            text: '确定',
            iconCls: 'button_ok',
            id: 'choseOk'
        }, {
            xtype: 'button',
            text: '取消',
            iconCls: 'button_cancel',
            id: 'closeChose'
        }]
    }]
});