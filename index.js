Ext.application({
    name: 'IconsDemo',
    launch: function () {
        // 定义图标数据
        var iconsData = [
            { name: 'Add', cls: 'fa fa-plus', usage: "iconCls: 'fa fa-plus'" },
            { name: 'Edit', cls: 'fa fa-edit', usage: "iconCls: 'fa fa-edit'" },
            { name: 'Delete', cls: 'fa fa-trash', usage: "iconCls: 'fa fa-trash'" },
            { name: 'Save', cls: 'fa fa-save', usage: "iconCls: 'fa fa-save'" },
            { name: 'Search', cls: 'fa fa-search', usage: "iconCls: 'fa fa-search'" },
            { name: 'Refresh', cls: 'fa fa-refresh', usage: "iconCls: 'fa fa-refresh'" },
            { name: 'Settings', cls: 'fa fa-cog', usage: "iconCls: 'fa fa-cog'" },
            { name: 'User', cls: 'fa fa-user', usage: "iconCls: 'fa fa-user'" },
            { name: 'Home', cls: 'fa fa-home', usage: "iconCls: 'fa fa-home'" },
            { name: 'Calendar', cls: 'fa fa-calendar', usage: "iconCls: 'fa fa-calendar'" }
        ];

        // 创建数据存储
        var store = Ext.create('Ext.data.Store', {
            fields: ['name', 'cls', 'usage'],
            data: iconsData
        });

        // 创建网格面板
        Ext.create('Ext.grid.Panel', {
            title: 'ExtJS Common Icons Demo',
            store: store,
            columns: [{
                text: 'Icon',
                dataIndex: 'cls',
                width: 100,
                renderer: function (value) {
                    return '<i class="' + value + '" style="font-size: 16px;"></i>';
                }
            }, {
                text: 'Name',
                dataIndex: 'name',
                width: 100
            }, {
                text: 'CSS Class',
                dataIndex: 'cls',
                flex: 1
            }, {
                text: 'Usage Example',
                dataIndex: 'usage',
                flex: 1
            }],
            width: 800,
            height: 400,
            renderTo: 'main',
            frame: true,
            tbar: [{
                text: 'Add',
                iconCls: 'fa fa-plus'
            }, {
                text: 'Edit',
                iconCls: 'fa fa-edit'
            }, {
                text: 'Delete',
                iconCls: 'fa fa-trash'
            }, {
                text: 'Save',
                iconCls: 'fa fa-save'
            }, {
                text: 'Refresh',
                iconCls: 'fa fa-refresh'
            }]
        });
    }
});
