Ext.define("erp.employee.view.PositionView", {
    extend: "Ext.form.field.ComboBox",
    alias: "widget.positionview",

    store: 'erp.employee.store.PositionStore',
    editable: false,
    forceSelection: true,
    blankText: '请选择',
    displayField: 'positionName',
    valueField: 'Id',
    emptyText: '请选择'
})