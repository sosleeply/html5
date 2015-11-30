Ext.define('erp.employee.controller.EmployeeController', {
    extend: 'Ext.app.Controller',
    init: function () {
        var self = this;
        //控制器部份
        this.control({
            'branchtree': {
                itemclick: function (tree, record, item, index, e, eOpts) {
                    var grid = Ext.getCmp('employee_grid').getStore();
                    var tree_store = tree.getStore();
                    var ids = [];
                    ids.push(record.get("Id"));
                    for (var i = 0; i < tree_store.getCount() ; i++) {
                        var _record = tree_store.getAt(i);
                        var parent = _record.get("parent");
                        if (parent == record.get('Id')) {
                            ids.push(_record.get("Id"));
                        }
                    }
                    _ids = ids;//选择项的id以及其子节点的id
                    currentId = record.get("Id");//当前选中项的id
                    _tempStr = record.get("branchName");
                    grid.load({ "id": ids.join(',') });

                    return false;
                }
            },
            'employeeform textfield[id=employee_branchName]': {
                focus: function (btn, The, eOpts) {
                    Ext.create('Ext.window.Window', {
                        title: '组织机购',
                        iconCls: 'menu_type',
                        height: 388,
                        width: 288,
                        modal: true,
                        closable: false,
                        layout: 'fit',
                        items: [{
                            xtype: 'choosebranch'
                        }]
                    }).show();
                    return false;
                }
            },
            'choosebranch button[id=closeChose]': {
                click:function(btn,e,eOpts){
                    btn.up('window').close();
                }
            },
            'choosebranch button[id=choseOk]': {
                click:function(btn,e,eOpts){
                    var tree = btn.up('choosebranch');                   
                    var records=tree.getSelectionModel().getSelection();
                    if (records.length == 0) {
                        Ext.MessageBox.alert(sysInfo,chooseData);
                        return false;
                    }
                    Ext.Array.each(records, function (m) {
                        Ext.getCmp('employee_branchName').setValue(m.get('branchName'));
                        Ext.getCmp('employee_branchId').setValue(m.get('Id'));
                    });
                    btn.up('window').close();

                    return false;
                }
            },
            ////展开全部
            //'choosebranch button[id=expendAll]': {
            //    click:function(btn,e,eOpts){
            //        btn.up('choosebranch').expandAll();
            //    }
            //},
            ////收起全部
            //'choosebranch button[id=collapseAll]': {
            //    click:function(btn,e,eOpts){
            //        btn.up('choosebranch').collapseAll();
            //    }
            //},
            //添加菜单按钮
            "employeegrid button[id=employee_add]": {
                click: function (btn) {
                    if (currentId == 0) {
                        Ext.Msg.alert(sysInfo, "请先选择组织机购！");
                        return false;
                    }
                    var form = btn.up("employeelayout").down("employeeform");
                    form.getForm().reset();//清空数据
                    var grid = form.up("employeelayout").down("employeegrid");
                    Ext.getCmp('employee_id').setValue(0);
                    Ext.getCmp('employee_branchName').setValue(_tempStr);
                    Ext.getCmp('employee_branchId').setValue(currentId);
                    Ext.getCmp('employee_stated').setValue("add");
                    grid.hide();
                    form.show();

                    return false;
                }
            },
            //修改数据//menu_edit
            "employeegrid button[id=employee_edit]": {
                click: function (btn) {
                    var form = btn.up("employeelayout").down("employeeform");
                    form.getForm().reset();//清空数据
                    var grid = form.up("employeelayout").down("employeegrid");
                    var records = grid.getSelectionModel().getSelection();
                    if (records.length == 0) {
                        Ext.Msg.alert(sysInfo, chooseData);
                        return false;
                    }
                    var obj = records[0];
                    form.loadRecord(obj);
                    Ext.getCmp('employee_stated').setValue("update");
                    grid.hide();
                    form.show();
                    return false;
                }
            },
            "employeegrid button[id=employee_delete]": {
                click: function (btn) {
                    var grid = btn.up("employeelayout").down("employeegrid");
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
                                url: 'Employee/DeleteEmployee',
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
            "employeeform button[id=employee_return]": {
                click: function (btn) {
                    var form = btn.up("employeeform");
                    var grid = form.up("employeelayout").down("employeegrid");
                    form.hide();
                    grid.show();
                    return false;
                }
            },
            //保存按钮
            "employeeform button[id=employee_save]": {
                click: function (btn) {
                    //获得form
                    var form = btn.up("employeeform");
                    var grid = form.up("employeelayout").down("employeegrid");
                    var url = "/Employee/Save";
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
                                var form = btn.up("employeeform");
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
	       'erp.employee.view.EmployeeGrid',
           'erp.employee.view.RoleView',
           'erp.employee.view.EmployeeLayout',
           'erp.employee.view.BranchTree',
           'erp.employee.view.EmployeeForm',
           'erp.employee.view.PositionView',
           'erp.employee.view.ChooseBranch'
    ],
    stores: [
        'erp.employee.store.EmployeeStore',
        'erp.employee.store.RoleStore',
        'erp.employee.store.BranchStore',
        'erp.employee.store.PositionStore'
    ],
    models: [
        'erp.employee.model.EmployeeModel',
        'erp.employee.model.BranchModel',
        'erp.employee.model.RoleModel',
        'erp.employee.model.PositionModel'
    ]
});