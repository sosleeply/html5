Ext.define("erp.menu.view.MenuLayout", {
    extend: "Ext.panel.Panel",
    alias: "widget.menulayout",
    defaults: {
        bodyStyle: 'padding: 1px',
        split: true
    },
    layout: 'fit',
    items: [{
        xtype:'menugrid'
    }, {
        xtype: 'menuform',
        hidden:true
    }]
})