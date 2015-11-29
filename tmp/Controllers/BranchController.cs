using BLL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ERP.Controllers
{
    public class BranchController : Controller
    {
        #region 获取所有组织机购
        public ActionResult GetBranch()
        {
            BranchBLL bBll = new BranchBLL();
            List<Branch> branchList = bBll.GetEntitys(t=>t.sort);
            List<BranchTree> list = new List<BranchTree>();
            foreach (Branch branch in branchList)
            {
                if (branch.parent == 0)
                {
                    BranchTree bTree = new BranchTree();
                    bTree.Id = branch.Id;
                    bTree.branchName = branch.branchName;
                    bTree.parent = branch.parent;
                    bTree.sort = branch.sort;
                    bTree.telPhone = branch.telPhone;
                    bTree.fax = branch.fax;
                    bTree.expanded = true;
                    bTree.leaf = false;
                    bTree.children = BranchEach(branchList, branch);
                    list.Add(bTree);
                }
            }
            string resJson = Common.Common.JsonSerialize(list);
            resJson = "{'checked':false,'children':" + resJson;
            resJson += "}";
            return Content(resJson);
        }
        public List<Branch> BranchEach(List<Branch> branchList, Branch _branch)
        {
            List<Branch> list = new List<Branch>();
            foreach (Branch branch in branchList)
            {
                if (branch.parent == _branch.Id)
                {
                    list.Add(branch);
                }
            }
            return list;
        } 
        #endregion
        #region 保存组织机购
        public ActionResult Save()
        {
            Branch branch = new Branch();
            try
            {
                string stated = Request.Form["stated"];
                if (stated == "add")
                    branch.parent = Convert.ToInt32(Request.Form["Id"]);
                else if (stated == "update")
                {
                    branch.parent = Convert.ToInt32(Request.Form["parent"]);
                    branch.Id = Convert.ToInt32(Request.Form["Id"]);
                }
                branch.branchName = Request.Form["branchName"];
                branch.telPhone = Request.Form["telPhone"];
                branch.fax = Request.Form["fax"];
                branch.expanded = Convert.ToInt32(Request.Form["expanded"]) == 0 ? false : true;
                branch.leaf = Convert.ToInt32(Request.Form["leaf"]) == 0 ? false : true;
                branch.sort = Convert.ToInt32(Request.Form["sort"]);

                BranchBLL bBll = new BranchBLL();
                if (stated == "add")
                {
                    if (bBll.AddEntity(branch))
                    {
                        return Content("{'success':'ok'}");
                    }
                }
                else if (stated == "update")
                {
                    if (bBll.ModifyEntity(branch))
                    {
                        return Content("{'success':'ok'}");
                    }
                }
            }
            catch { }
            return Content("{}");
        } 
        #endregion
        #region 删除组织机购
        public ActionResult DeleteBranch()
        {
            string ids = Request.Form["ids"];
            BranchBLL bBll = new BranchBLL();
            if (bBll.DeletePhysicsById(ids))
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
