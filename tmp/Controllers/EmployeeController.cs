using BLL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ERP.Controllers
{
    public class EmployeeController : Controller
    {
        #region 以传入的组织机购id作为条件获取员工信息
        public ActionResult GetEmployee()
        {
            try
            {
                int pageIndex = Convert.ToInt32(Request.QueryString["page"]);
                int pageSize = Convert.ToInt32(Request.QueryString["limit"]);
                string branchIds = Request.QueryString["id"];
                string[] _ids = branchIds.Split(',');
                int[] ids = Array.ConvertAll<string, int>(_ids, id =>
                {
                    return int.Parse(id);
                });
                EmployeeBLL eBll = new EmployeeBLL();
                int rows = 0;
                int totalPages = 0;
                List<Employee> list = eBll.LoadPagedEntitys(pageIndex, pageSize, out rows, out totalPages, t => ids.Contains(t.branchId), true, t => t.Id);
                if (list != null && list.Count > 0)
                {
                    List<Branch> branchList = new BranchBLL().GetEntitys();
                    list.ForEach(t =>
                    {
                        branchList.ForEach(y =>
                        {
                            if (t.branchId == y.Id)
                            {
                                t.branchName = y.branchName;
                            }
                        });
                    });
                    List<Role> roleList = new RoleBLL().GetEntitys();
                    list.ForEach(t =>
                    {
                        roleList.ForEach(y =>
                        {
                            if (t.roleId == y.Id)
                            {
                                t.roleName = y.roleName;
                            }
                        });
                    });
                    List<Position> positionList = new PositionBLL().GetEntitys();
                    list.ForEach(t =>
                    {
                        positionList.ForEach(y =>
                        {
                            if (t.positionId == y.Id)
                            {
                                t.positionName = y.positionName;
                            }
                        });
                    });
                }
                string resJson = Common.Common.JsonSerialize(list);
                resJson = "{total:" + rows + ",root:" + resJson + "}";
                return Content(resJson);
            }
            catch { }

            return Content("{}");
        }  
        #endregion
        #region 保存员工信息
        public ActionResult Save()
        {
            Employee employee = new Employee();
            try
            {
                string stated = Request.Form["stated"];
                employee.Id = Convert.ToInt32(Request.Form["Id"]);
                employee.employeeNo = Request.Form["employeeNo"];
                employee.chineseName = Request.Form["chineseName"];
                employee.englishName = Request.Form["englishName"];
                employee.userName = Request.Form["userName"];
                employee.passWord = Request.Form["passWord"];
                employee.telPhone = Request.Form["telPhone"];
                employee.email = Request.Form["email"];
                employee.roleId = Convert.ToInt32(Request.Form["roleId"]);
                employee.positionId = Convert.ToInt32(Request.Form["positionId"]);
                employee.branchId = Convert.ToInt32(Request.Form["branchId"]);

                EmployeeBLL eBll = new EmployeeBLL();
                if (stated == "add")
                {
                    if (eBll.AddEntity(employee))
                    {
                        return Content("{'success':'ok'}");
                    }
                }
                else if (stated == "update")
                {
                    if (eBll.ModifyEntity(employee))
                    {
                        return Content("{'success':'ok'}");
                    }
                }
            }
            catch { }
            return Content("{}");
        } 
        #endregion
        #region 删除员工信息
        public ActionResult DeleteEmployee()
        {
            string ids = Request.Form["ids"];
            EmployeeBLL eBll = new EmployeeBLL();
            if (eBll.DeletePhysicsById(ids))
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
