Ext.define('erp.position.controller.PositionController', {
    extend: 'Ext.app.Controller',
    init: function () {
        //position_grid
        var self = this;
        //控制器部份
        this.control({
            //组织机购选择事件
            //'branchtree': {
            //    itemclick: function (tree, record, item, index, e, eOpts) {
            //        var grid = Ext.getCmp('position_grid').getStore();
            //        var tree_store = tree.getStore();
            //        var ids = [];
            //        ids.push(record.get("Id"));
            //        for (var i = 0; i < tree_store.getCount() ; i++) {
            //            var _record = tree_store.getAt(i);
            //            var parent = _record.get("parent");
            //            if (parent == record.get('Id')) {
            //                ids.push(_record.get("Id"));
            //            }
            //        }
            //        _ids = ids;//选择项的id以及其子节点的id
            //        currentId = record.get("Id");//当前选中项的id
            //        grid.load({ "id": ids.join(',') });
                    
            //        return false;
            //    }
            //},
            //添加菜单按钮
            "positiongrid button[id=position_add]": {
                click: function (btn) {
                    var form = btn.up("positionlayout").down("positionform");
                    form.getForm().reset();//清空数据
                    var grid = form.up("positionlayout").down("positiongrid");
                    Ext.getCmp('position_id').setValue(0);//添加操作，将id设为0，id自增列
                    Ext.getCmp('position_stated').setValue("add");
                    grid.hide();
                    form.show();

                    return false;
                }
            },
            //修改数据//menu_edit
            "positiongrid button[id=position_edit]": {
                click: function (btn) {
                    var form = btn.up("positionlayout").down("positionform");
                    form.getForm().reset();//清空数据
                    var grid = form.up("positionlayout").down("positiongrid");
                    var records = grid.getSelectionModel().getSelection();
                    if (records.length == 0) {
                        Ext.Msg.alert(sysInfo, chooseData);
                        return false;
                    }
                    var obj = records[0];
                    form.loadRecord(obj);
                    Ext.getCmp('position_stated').setValue("update");
                    grid.hide();
                    form.show();
                    return false;
                }
            },
            //删除数据
            "positiongrid button[id=position_delete]": {
                click: function (btn) {
                    var grid = btn.up("positionlayout").down("positiongrid");
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
                                url: 'Position/DeletePosition',
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
            "positionform button[id=position_return]": {
                click: function (btn) {
                    var form = btn.up("positionform");
                    var grid = form.up("positionlayout").down("positiongrid");
                    form.hide();
                    grid.show();
                    return false;
                }
            },
            //保存按钮
            "positionform button[id=position_save]": {
                click: function (btn) {
                    //获得form
                    var form = btn.up("positionform");
                    var grid = form.up("positionlayout").down("positiongrid");
                    var url = "/Position/Save";
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
                                var form = btn.up("positionform");
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
	       'erp.position.view.PositionLayout',
           //'erp.position.view.BranchTree',
           'erp.position.view.PositionGrid',
           'erp.position.view.PositionForm'
    ],
    stores: [
        //'erp.position.store.BranchStore',
        'erp.position.store.PositionStore'
    ],
    models: [
        //'erp.position.model.BranchModel',
        'erp.position.model.PositionModel'
    ]
});