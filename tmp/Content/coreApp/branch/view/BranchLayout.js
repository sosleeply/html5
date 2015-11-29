Ext.define("erp.branch.view.BranchLayout", {
    extend: "Ext.panel.Panel",
    alias: "widget.branchlayout",
    defaults: {
        bodyStyle: 'padding: 1px',
        split: true
    },
    layout: 'fit',
    items: [{
        xtype: 'branchgrid'
    }, {
        xtype: 'branchform',
        hidden: true
    }]
})