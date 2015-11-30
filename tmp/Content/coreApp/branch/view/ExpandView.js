Ext.define("erp.branch.view.ExpandView", {
    extend: "Ext.form.field.ComboBox",
    alias: "widget.expandview",

    store: 'erp.branch.store.ExpandStore',
    editable: false,
    //forceSelection: true,
    blankText: '请选择',
    displayField: 'text',
    valueField: 'Id',
    emptyText: '请选择',
})