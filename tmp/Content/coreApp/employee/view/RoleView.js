Ext.define("erp.employee.view.RoleView", {
    extend: "Ext.form.field.ComboBox",
    alias: "widget.roleview",

    store: 'erp.employee.store.RoleStore',
    editable: false,
    forceSelection: true,
    blankText: '请选择',
    displayField: 'roleName',
    valueField: 'Id',
    emptyText: '请选择'
})