import React from "react";
import "./dashsidenav-full.css";

// Icons
import { BiLogOut, BiFolder } from "react-icons/bi";
import { TbFiles } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGrid1X2 } from "react-icons/bs";
import { IoCheckboxOutline } from "react-icons/io5";
import { MdCancelPresentation, MdCheckBoxOutlineBlank } from "react-icons/md";


const DashsideNavFull = () => {
  return (
    <div>
      <div className="cmside">
        <div className="cmsideptags">
          <div className="cmsidept">
            <BsGrid1X2 className="tbt" />
            <p>Dashboard</p>
          </div>
          <div className="cmsidept">
            <TbFiles className="tbt" />
            <p>Saved Files</p>
            <RiArrowDropDownLine className="dropdownsidet" />
          </div>
          <div className="cmsidep3st">
            <BiFolder className="tbt" />
            <p>Current Project</p>
          </div>
          <div className="cmsidept">
            <IoCheckboxOutline className="tbt" />
            <p>Highlight Duplicates</p>
          </div>
          <div className="cmsidept">
            <MdCancelPresentation className="tbt" />
            <p>Highlight Differences</p>
          </div>
          <div className="cmsidept">
            <MdCheckBoxOutlineBlank className="tbt" />
            <p>Remove Duplicates</p>
          </div>
          <div className="cmsidept">
            <MdCancelPresentation className="tbt" />
            <p>Merge Files</p>
          </div>
          <div className="cmsidept">
            <MdCheckBoxOutlineBlank className="tbt" />
            <p>Edit Properties</p>
          </div>
          <div className="cmsidept">
            <MdCheckBoxOutlineBlank className="tbt" />
            <p>Correct Errors</p>
          </div>
          <div className="cmsidep4st">
            <BiLogOut className="tbt" />
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashsideNavFull;
