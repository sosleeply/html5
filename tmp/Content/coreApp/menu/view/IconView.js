Ext.define("erp.menu.view.IconView", {
    extend: "Ext.form.field.ComboBox",
    alias: "widget.iconview",

    store: 'erp.menu.store.IconStore',
    editable: false,
    forceSelection: true,
    blankText:'请选择',
    displayField: 'icon',
    valueField: 'icon',
    emptyText: '请选择',
    //1.
    //tpl: '<table><tr><tpl for="."><td class="x-combo-list-item" style="height:26px;line-height:26px;width:26px;"><img width=16 height=16 src="/Content/img/{icon}.png" /></td><tpl if="xindex % 5 === 0"></tr><tr></tpl></tpl></tr></table>'
    //2.
    //tpl: Ext.create('Ext.XTemplate',
    //            '<tpl for=".">',
    //            '<div class="x-combo-list-item"><img style="margin-left:8px;" src="/Content/img/{icon}.png" width="16" height="16"></div>',
    //            '</tpl>'
    //        )
    //3.
    //tpl: '<tpl for="."><div style="height:23px;line-height:23px;" class="x-combo-list-item"><img style="margin-left:8px;" src="/Content/img/{icon}.png" width="16" height="16"></div></tpl>'
})