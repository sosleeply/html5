Ext.define("erp.role.view.RoleLayout", {
    extend: "Ext.panel.Panel",
    alias: "widget.rolelayout",
    defaults: {
        bodyStyle: 'padding: 1px',
        split: true
    },
    layout: 'fit',
    items: [{
        xtype: 'rolegrid'
    }, {
        xtype: 'roleform',
        hidden: true
    }]
})