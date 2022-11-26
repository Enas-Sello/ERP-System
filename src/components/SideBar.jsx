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
import الايضافات from '../pages/الايضافات';
import الادارة from '../pages/الادارة';
import الفروع from '../pages/الفروع';
import الموردين from '../pages/الموردين';
import عملاء_التجزئة from '../pages/عملاء_التجزئة';
import التدقيق from '../pages/التدقيق';
import لوحة_التحكم from '../pages/لوحة_التحكم';
const SideBar = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: 'flex', height: '100%', color: 'white' }}>
      <Sidebar
        style={{ height: '100vh', color: 'white' }}
        backgroundColor={'#343a40'}
      >
        <Menu>
          <h2 className='fs-4'>القائمه الرئيسيه</h2>
          <SubMenu
            className="textColor"
            label="الاضافات"
            icon={<RiLayoutMasonryFill />}
          >
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/الايضافات" />}
            >
              <الايضافات />
            </MenuItem>
          </SubMenu>
          <SubMenu label="الادارة" icon={<RiLayoutMasonryFill />}>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/الادارة" />}
            >
              <الادارة />
            </MenuItem>
          </SubMenu>
          <SubMenu label="الفروع" icon={<RiLayoutMasonryFill />}>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/الفروع" />}
            >
              <الفروع />
            </MenuItem>
          </SubMenu>
          <SubMenu label="الموردين" icon={<RiLayoutMasonryFill />}>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/الموردين" />}
            >
              <الموردين />
            </MenuItem>
          </SubMenu>
          <SubMenu label="عملاء التجزئة" icon={<RiLayoutMasonryFill />}>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/عملاء_التجزئة" />}
            >
              <عملاء_التجزئة />
            </MenuItem>
          </SubMenu>
          <SubMenu label="التدقيق" icon={<RiLayoutMasonryFill />}>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/التدقيق" />}
            >
              <التدقيق />
            </MenuItem>
          </SubMenu>
          <SubMenu label="لوحة التحكم" icon={<RiLayoutMasonryFill />}>
            <MenuItem
              className="text-white bgColor"
              routerLink={<Link to="/لوحة_التحكم" />}
            >
              <لوحة_التحكم />
            </MenuItem>
          </SubMenu>
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
