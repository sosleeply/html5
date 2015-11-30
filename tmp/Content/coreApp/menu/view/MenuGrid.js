Ext.define("erp.menu.view.MenuGrid", {
    extend: "Ext.tree.Panel",
    alias: "widget.menugrid",
    store: "erp.menu.store.MenuStore",
    selModel: {
        selType:"checkboxmodel"
    },
    multiSelect: true,
    rootVisible: false,
    columnLines: true,
    rowLines:true,
    enableKeyNav:true,
    forceFit: true,   
    columns: [
	    { text: '序号', xtype: 'rownumberer', width: 40, align: 'center' },
		{ text: 'Id', dataIndex: 'Id', hidden:true },
		{
		    text: '名称', xtype: 'treecolumn', dataIndex: 'text'//,
		},
		{
		    text: '图标', dataIndex: 'iconCls',
		    renderer: function (value) {
		        return "<img src='/Content/img/" + value + ".png' />";
		    }//,
		},
        {
            text: '排序', dataIndex: 'sort'//,
        },
        {
            text: '展开', dataIndex: 'expanded', xtype: 'booleancolumn',
            trueText: '是', falseText: ''//,
        },
		{
		    text: 'view', dataIndex: 'view'//,
		},
		{
		    text: 'xtypes', dataIndex: 'xtypes'//,
		},
		{
		    text: 'controller', dataIndex: 'controller'//,
		},
        {
            text: 'parent', dataIndex: 'parent', hidden: true
		}
    ],
    tbar: [{
        xtype: 'button',
        text: '添加',
        iconCls: 'table_add',
        id: 'menu_add'
    },{
        xtype: 'button',
        text: '修改',
        iconCls: 'btn_edit',
        id: 'menu_edit'
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'table_remove',
        id: 'menu_delete'
    },
    //"->",
    //"查询:",
    //{
    //    xtype: 'triggerfield',
    //    triggerCls:Ext.baseCSSPrefix+'form-search-trigger',
    //    listeners: {
    //        "change": function (_this, _new, _old, _opt) {
    //            var _store = _this.ownerCt.ownerCt.getStore();
    //            _store.clearFilter(false);
    //            _store.filter("text", _new);
    //        }
    //    },
    //    onTriggerClick: function () {
    //        var _store = this.ownerCt.ownerCt.getStore();
    //        _store.clearFilter(false);
    //        _store.filter("text", this.getValue());
    //    }
    //}
    ],
    dockedItems: [{
        //xtype: 'pagingtoolbar',
        //store: '',
        //dock: 'bottom',
        //displayInfo: true
    }]
    //plugins: [
    //    Ext.create("Ext.grid.plugin.CellEditing", {
    //        clicksToEdit:2
    //    })
    //],
    //initComponent: function () {
    //    this.callParent(arguments);
    //}
});
