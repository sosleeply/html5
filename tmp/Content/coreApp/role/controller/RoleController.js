Ext.define('erp.role.controller.RoleController', {
    extend: 'Ext.app.Controller',
    init: function () {
        var self = this;
        //控制器部份
        this.control({
            //添加菜单按钮
            "rolegrid button[id=role_add]": {
                click: function (btn) {
                    var form = btn.up("rolelayout").down("roleform");
                    form.getForm().reset();//清空数据
                    var grid = form.up("rolelayout").down("rolegrid");
                    Ext.getCmp('role_id').setValue(0);
                    Ext.getCmp('role_stated').setValue("add");
                    grid.hide();
                    form.show();

                    return false;
                }
            },
            //修改数据//menu_edit
            "rolegrid button[id=role_edit]": {
                click: function (btn) {
                    var form = btn.up("rolelayout").down("roleform");
                    form.getForm().reset();//清空数据
                    var grid = form.up("rolelayout").down("rolegrid");
                    var records = grid.getSelectionModel().getSelection();
                    if (records.length == 0) {
                        Ext.Msg.alert(sysInfo, chooseData);
                        return false;
                    }
                    var obj = records[0];
                    form.loadRecord(obj);
                    Ext.getCmp('role_stated').setValue("update");
                    grid.hide();
                    form.show();
                    return false;
                }
            },
            "rolegrid button[id=role_delete]": {
                click: function (btn) {
                    var grid = btn.up("rolelayout").down("rolegrid");
                    var records = grid.getSelectionModel().getSelection();
                    if (records.length == 0) {
                        Ext.Msg.alert(sysInfo, chooseData);
                        return false;
                    }
                    Ext.MessageBox.confirm(sysInfo, sureDelete, function (btn) {
                        if (btn == 'yes') {
                            var ids = [];
                            Ext.Array.each(records, function (model) {
                                ids.push(model.get('Id'));
                            });
                            Ext.Ajax.request({
                                url: 'Role/DeleteRole',
                                params: {
                                    ids: ids.join(',')
                                },
                                success: function (response) {
                                    Ext.MessageBox.alert(sysInfo, deleteSuccess);
                                    grid.getStore().load();
                                },
                                failure: function (response) {
                                    Ext.MessageBox.alert(sysInfo, deleteFailure);
                                }
                            });
                        }
                        else {
                            return false;
                        }
                    });
                }
            },
            //添加form的返回按钮
            "roleform button[id=role_return]": {
                click: function (btn) {
                    var form = btn.up("roleform");
                    var grid = form.up("rolelayout").down("rolegrid");
                    form.hide();
                    grid.show();
                    return false;
                }
            },
            //保存按钮
            "roleform button[id=role_save]": {
                click: function (btn) {
                    //获得form
                    var form = btn.up("roleform");
                    var grid = form.up("rolelayout").down("rolegrid");
                    var url = "/Role/Save";
                    //保存数据
                    form.submit({
                        clientValidation: true,
                        waitMsg: '正在保存数据，请稍候...',
                        url: url,
                        method: 'POST',
                        success: function (form, action) {
                            var resObj = Ext.decode(action.response.responseText);
                            if (resObj.success) {
                                form.reset();
                                grid.getStore().load();
                                grid.show();
                                var form = btn.up("roleform");
                                form.hide();
                                Ext.Msg.alert(sysInfo, sysSuccess);
                            } else {
                                Ext.Msg.alert(sysInfo, sysFailure);
                            }
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert(sysInfo, sysError);
                        }
                    });
                    return false;
                }
            }
        });
    },
    views: [
	       'erp.role.view.RoleLayout',
           'erp.role.view.RoleForm',
           'erp.role.view.RoleGrid'
    ],
    stores: [
        'erp.role.store.RoleStore'
    ],
    models: [
        'erp.role.model.RoleModel'
    ]
});