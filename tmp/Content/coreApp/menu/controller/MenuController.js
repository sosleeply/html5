Ext.define('erp.menu.controller.MenuController', {
    extend: 'Ext.app.Controller',
    init: function () {
        var self = this;
        //控制器部份
        this.control({
            //添加菜单按钮
            "menugrid button[id=menu_add]": {
                click: function (btn) {
                    var form = btn.up("menulayout").down("menuform");
                    form.getForm().reset();//清空数据
                    var grid = form.up("menulayout").down("menugrid");
                    var records = grid.getSelectionModel().getSelection();
                    if (records.length == 0) {
                        Ext.MessageBox.confirm(sysInfo, '当前没有选择节点，确定要添加根节点吗？', function (btn) {
                            if (btn == 'no') {
                                return false;
                            } else {
                                Ext.getCmp('menu_id').setValue(0);
                                Ext.getCmp('menu_label').setText("根节点");
                                Ext.getCmp('menu_stated').setValue("add");
                                grid.hide();
                                form.show();
                            }
                        });
                    } else {
                        if (records[0].get("parent") == 0) {
                            Ext.getCmp('menu_id').setValue(records[0].raw.Id);
                            Ext.getCmp('menu_label').setText("父节点：" + records[0].raw.text);
                            Ext.getCmp('menu_stated').setValue("add");
                            grid.hide();
                            form.show();
                        }
                        else {
                            Ext.Msg.alert(sysInfo, limitParent);
                        }
                    }
                    return false;
                }
            },
            //修改数据//menu_edit
            "menugrid button[id=menu_edit]": {
                click: function (btn) {
                    var form = btn.up("menulayout").down("menuform");
                    form.getForm().reset();//清空数据
                    var grid = form.up("menulayout").down("menugrid");
                    var records = grid.getSelectionModel().getSelection();
                    if (records.length == 0) {
                        Ext.Msg.alert(sysInfo, chooseData);
                        return false;
                    }
                    var obj = records[0];
                    form.loadRecord(obj);
                    Ext.getCmp('menu_stated').setValue("update");
                    Ext.getCmp('menu_leaf').setValue((records[0].raw.leaf) == true ? 1 : 0);
                    Ext.getCmp('menu_expanded').setValue((records[0].raw.expanded) == true ? 1 : 0);
                    grid.hide();
                    form.show();
                    return false;
                }
            },
            "menugrid button[id=menu_delete]": {
                click: function (btn) {
                    var grid = btn.up("menulayout").down("menugrid");
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
                                url: 'Home/DeleteMenu',
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
            "menuform button[id=menu_return]": {
                click: function (btn) {
                    var form = btn.up("menuform");
                    var grid = form.up("menulayout").down("menugrid");
                    form.hide();
                    grid.show();
                    return false;
                }
            },
            //保存按钮
            "menuform button[id=menu_save]": {
                click: function (btn) {
                    //获得form
                    var form = btn.up("menuform");
                    var grid = form.up("menulayout").down("menugrid");
                    var url = "/Home/Save";
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
                                var form = btn.up("menuform");
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
	       'erp.menu.view.MenuLayout',
           'erp.menu.view.MenuForm',
           'erp.menu.view.MenuGrid',
           'erp.menu.view.IconView',
           'erp.menu.view.ExpandView'
    ],
    stores: [
        'erp.menu.store.MenuStore',
        'erp.menu.store.IconStore',
        'erp.menu.store.ExpandStore'
    ],
    models: [
        'erp.menu.model.MenuModel'
    ]
});