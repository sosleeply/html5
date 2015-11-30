using BLL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ERP.Controllers
{
    public class RoleController : Controller
    {
        #region 获取所有角色
        public ActionResult GetAllRole()
        {
            int pageIndex = Convert.ToInt32(Request.QueryString["page"]);
            int pageSize = Convert.ToInt32(Request.QueryString["limit"]);
            RoleBLL rbll = new RoleBLL();
            int rows = 0;
            int totalPages = 0;
            List<Role> roleList = rbll.LoadPagedEntitys(pageIndex, pageSize, out rows, out totalPages, t => t.Id > 0, true, t => t.Id);
            //roleList.ForEach(t => {
            //    t.Employee = null;
            //});
            string resJson = Common.Common.JsonSerialize(roleList);
            resJson = "{total:" + rows + ",root:" + resJson + "}";

            return Content(resJson);
        } 
        #endregion
        #region 保存角色
        public ActionResult Save()
        {
            Role role = new Role();
            try
            {
                string stated = Request.Form["stated"];
                role.Id = Convert.ToInt32(Request.Form["Id"]);
                role.roleName = Request.Form["roleName"];
                role.roleRemark = Request.Form["roleRemark"];

                RoleBLL rbll = new RoleBLL();
                if (stated == "add")
                {
                    if (rbll.AddEntity(role))
                    {
                        return Content("{'success':'ok'}");
                    }
                }
                else if (stated == "update")
                {
                    if (rbll.ModifyEntity(role))
                    {
                        return Content("{'success':'ok'}");
                    }
                }
            }
            catch { }
            return Content("{}");
        } 
        #endregion
        #region 删除角色
        public ActionResult DeleteRole()
        {
            string ids = Request.Form["ids"];
            RoleBLL rbll = new RoleBLL();
            if (rbll.DeletePhysicsById(ids))
            {
                return Content("{'success':'ok'}");
            }
            else
            {
                return Content("{}");
            }
        } 
        #endregion
    }
}
