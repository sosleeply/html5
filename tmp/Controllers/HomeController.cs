using BLL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ERP.Controllers
{
    public class HomeController : BaseController
    {
        #region 主视图
        public ActionResult Index()
        {
            Employee employee = new Employee()
            {
                Id = 2,
                employeeNo = "T0001",
                userName = "a",
                passWord = "a",
                chineseName = "admin",
                roleId = 1,
                positionId = 1
            };
            Session["employee"] = employee;

            return View();
        }       
        #endregion
        #region 获取当前用户的菜单
        public ActionResult GetMenuByRole()
        {
            //select rm.menuId from Employee e inner join RoleMenu rm on e.roleId=rm.roleId
            RoleMenuBLL rm = new RoleMenuBLL();
            int roleId = ((Employee)Session["employee"]).roleId;
            RoleMenu roleMenu = rm.GetEntityById(roleId);
            string menuJson = "";
            if (roleMenu != null && roleMenu.menuId != null && !roleMenu.Equals(""))
            {
                string[] menuIds = roleMenu.menuId.Split(',');
                int[] ids = new int[menuIds.Count()];//当前用户所属角色所有的菜单id
                for (int i = 0; i < menuIds.Count(); i++)
                {
                    ids[i] = Convert.ToInt32(menuIds[i]);
                }
                MenuBLL rmBll = new MenuBLL();
                List<Menu> menuList = rmBll.GetEntitys(t => ids.Contains(t.Id),true,t=>t.sort).ToList();
                List<MenuTree> list = new List<MenuTree>();
                foreach (Menu menu in menuList)
                {
                    if (menu.parent == 0)
                    {
                        MenuTree mtree = new MenuTree();
                        mtree.text = menu.text;
                        mtree.Id = menu.Id;
                        mtree.leaf = menu.leaf;
                        mtree.view = menu.view;
                        mtree.sort = menu.sort;
                        mtree.parent = menu.parent;
                        mtree.expanded = menu.expanded;
                        mtree.iconCls = menu.iconCls;
                        mtree.controller = menu.controller;
                        mtree.xtypes = menu.xtypes;
                        List<Menu> _clist = new List<Menu>();
                        foreach (Menu _menu in menuList)
                        {
                            if (_menu.parent == menu.Id)
                            {
                                _clist.Add(new Menu { text = _menu.text, Id = _menu.Id, leaf = _menu.leaf, iconCls = _menu.iconCls, view = _menu.view, sort = _menu.sort, parent = _menu.parent, controller = _menu.controller, xtypes = _menu.xtypes });
                            }
                        }
                        mtree.children = _clist;
                        list.Add(mtree);
                    }
                }
                menuJson = Common.Common.JsonSerialize(list);
                menuJson = "{checked:false,children:" + menuJson;
                menuJson += "}";
            }

            return Content(menuJson);
        } 
        #endregion
        #region 获取所有菜单
        public ActionResult GetAllMenu()
        {
            MenuBLL mbll = new MenuBLL();
            List<Menu> menuList = mbll.GetEntitys(t => t.sort);
            string menuJson = "";
            List<MenuTree> list = new List<MenuTree>();
            foreach (Menu menu in menuList)
            {
                if (menu.parent == 0)
                {
                    MenuTree mtree = new MenuTree();
                    mtree.text = menu.text;
                    mtree.Id = menu.Id;
                    mtree.leaf = menu.leaf;
                    mtree.view = menu.view;
                    mtree.sort = menu.sort;
                    mtree.parent = menu.parent;
                    mtree.expanded = menu.expanded;
                    mtree.iconCls = menu.iconCls;
                    mtree.controller = menu.controller;
                    mtree.xtypes = menu.xtypes;
                    List<Menu> _clist = new List<Menu>();
                    foreach (Menu _menu in menuList)
                    {
                        if (_menu.parent == menu.Id)
                        {
                            _clist.Add(new Menu { text = _menu.text, Id = _menu.Id, leaf = _menu.leaf, iconCls = _menu.iconCls, view = _menu.view,sort=_menu.sort,parent=_menu.parent,controller=_menu.controller,xtypes=_menu.xtypes });
                        }
                    }
                    mtree.children = _clist;
                    list.Add(mtree);
                }
            }
            menuJson = Common.Common.JsonSerialize(list);
            menuJson = "{text:'',children:" + menuJson;
            menuJson += "}";

            return Content(Common.Common.JsonSerialize(list));
        } 
        #endregion
        #region 获取所有图标
        public ActionResult GetIcons()
        {
            IconsBLL iconBll = new IconsBLL();
            List<Icons> list = iconBll.GetEntitys();

            return Content(Common.Common.JsonSerialize(list));
        } 
        #endregion
        #region 保存菜单
        public ActionResult Save()
        {
            //Id=0&text=name&iconCls=tools_3&controller=controller&expanded=1&view=view&leaf=1&xtypes=xtypes&sort=1&stated=add
            Menu m = new Menu();
            try {
                string stated = Request.Form["stated"];
                if (stated == "add")
                    m.parent = Convert.ToInt32(Request.Form["Id"]);
                else if (stated == "update")
                {
                    m.parent = Convert.ToInt32(Request.Form["parent"]);
                    m.Id = Convert.ToInt32(Request.Form["Id"]);
                }
                m.text = Request.Form["text"];
                m.iconCls = Request.Form["iconCls"];
                m.controller = Request.Form["controller"];
                m.expanded = Convert.ToInt32(Request.Form["expanded"])==0?false:true;
                m.view = Request.Form["view"];
                m.leaf = Convert.ToInt32(Request.Form["leaf"]) == 0 ? false : true;
                m.xtypes = Request.Form["xtypes"];
                m.sort = Convert.ToInt32(Request.Form["sort"]);
                
                MenuBLL mbll = new MenuBLL();
                if (stated == "add") {
                    if (mbll.AddEntity(m)) {
                        return Content("{'success':'ok'}");
                    }
                }
                else if (stated == "update") {
                    if (mbll.ModifyEntity(m)){
                        return Content("{'success':'ok'}");
                    }
                }
            }
            catch { }
            return Content("{}");
        } 
        #endregion
        #region 删除菜单
        public ActionResult DeleteMenu()
        {
            string ids = Request.Form["ids"];
            MenuBLL mbll = new MenuBLL();
            if (mbll.DeletePhysicsById(ids))
            {
                return Content("{'success':'ok'}");
            }
            else
            {
                return Content("{}");
            }
        } 
        #endregion
        #region 数据重置
        public ActionResult dataReset()
        {
            new MenuBLL().ExecuteProcedure("dataReset");

            return Content("{suceess:ok}");
        } 
        #endregion
    }
}
