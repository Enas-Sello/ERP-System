/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from 'react-pro-sidebar';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="d-flex h-full text-white  ps-4">
      <Sidebar
        transitionDuration={'300'}
        style={{ height: '100vh', color: 'white', }}
        backgroundColor={'#343a40'}
      >
        <Menu className="p-3 ">
          <h2 className="fs-4 fw-semibold">القائمة الرئيسيه</h2>
          {/* // الايضافات */}
          <SubMenu
            className="textColor"
            label="الاضافات"
            icon={<RiLayoutMasonryFill />}
          >
            <MenuItem
              active={true}
              className="text-white bgColor"
              routerLink={<Link to="/البلد" />}
            >
              <h6>بلد المنتج</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/المدينة" />}
            >
              <h6>مدينة</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/سوق" />}
            >
              <h6>سوق</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/جنسيه" />}
            >
              <h6>جنسيه </h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/المورد" />}
            >
              <h6>المورد</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/موظفين" />}
            >
              <h6>موظفين</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/بنك" />}
            >
              <h6>بنك</h6>
            </MenuItem>

            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/اسماء_الاحجار" />}
            >
              <h6>اسماء الاحجار</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/الوان_الاحجار" />}
            >
              <h6>الوان الاحجار</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/قطع_الاحجار" />}
            >
              <h6>قطع الاحجار</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/الوان_الذهب" />}
            >
              <h6>الوان الذهب</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/اصناف_الذهب" />}
            >
              <h6>اصناف الذهب</h6>
            </MenuItem>
          </SubMenu>
          {/* الادارة */}
          <SubMenu label="الادارة" icon={<RiLayoutMasonryFill />}></SubMenu>
          {/* الفروع */}
          <SubMenu label="الفروع" icon={<RiLayoutMasonryFill />}></SubMenu>
          {/* الموردين */}
          <SubMenu label="الموردين" icon={<RiLayoutMasonryFill />}>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/بداية_المدة" />}
            >
              <h6>بداية المدة</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/توريد" />}
            >
              <h6>توريد</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/زيادات_رأسمالية" />}
            >
              <h6>زيادات رأسمالية</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/سداد" />}
            >
              <h6>سداد</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/مردود_توريد" />}
            >
              <h6>مردود توريد</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/خصم" />}
            >
              <h6>خصم</h6>
            </MenuItem>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/صور" />}
            >
              <h6>صور</h6>
            </MenuItem>
          </SubMenu>
          {/* التجزئة */}
          <SubMenu
            label="عملاء التجزئة"
            icon={<RiLayoutMasonryFill />}
          ></SubMenu>
          {/* التدقيق */}
          <SubMenu label="التدقيق" icon={<RiLayoutMasonryFill />}></SubMenu>
          {/* لوحة التحكم */}
          <SubMenu label="لوحة التحكم" icon={<RiLayoutMasonryFill />}></SubMenu>
        </Menu>
      </Sidebar>
      <div>
        <button
          className="border border-0 text-white bgColor"
          onClick={() => collapseSidebar()}
        >
          <AiOutlineMenuUnfold />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
