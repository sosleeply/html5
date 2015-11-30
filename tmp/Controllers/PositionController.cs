using BLL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ERP.Controllers
{
    public class PositionController : Controller
    {
        #region 获取职位信息
        public ActionResult GetPosition()
        {
            try
            {
                int pageIndex = Convert.ToInt32(Request.QueryString["page"]);
                int pageSize = Convert.ToInt32(Request.QueryString["limit"]);
                PositionBLL pBll = new PositionBLL();
                int rows = 0;
                int totalPages = 0;
                List<Position> list = pBll.LoadPagedEntitys(pageIndex, pageSize, out rows, out totalPages, t=>t.Id>0, true, t => t.Id);
                string resJson = Common.Common.JsonSerialize(list);
                resJson = "{total:" + rows + ",root:" + resJson + "}";
                return Content(resJson);
            }
            catch { }

            return Content("{}");
        } 
        #endregion
        #region 保存职位信息
        public ActionResult Save()
        {
            Position position = new Position();
            try
            {
                string stated = Request.Form["stated"];
                position.Id = Convert.ToInt32(Request.Form["Id"]);
                position.positionName = Request.Form["positionName"];
                
                PositionBLL pBll = new PositionBLL();
                if (stated == "add")
                {
                    if (pBll.AddEntity(position))
                    {
                        return Content("{'success':'ok'}");
                    }
                }
                else if (stated == "update")
                {
                    if (pBll.ModifyEntity(position))
                    {
                        return Content("{'success':'ok'}");
                    }
                }
            }
            catch { }
            return Content("{}");
        } 
        #endregion
        #region 删除职位信息
        public ActionResult DeletePosition()
        {
            string ids = Request.Form["ids"];
            PositionBLL rbll = new PositionBLL();
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
