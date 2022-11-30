/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from 'react-pro-sidebar';
import { CgMenuRight } from 'react-icons/cg';
import { MdDomain } from 'react-icons/md';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { sidebar } from '../data';
const SideBar = () => {
  const [selected, setSelected] = useState(false);
  console.log(selected);
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="d-flex  text-white">
      <Sidebar
        transitionDuration={'300'}
        style={{ color: 'white' }}
        backgroundColor={'#295E57'}
      >
        <Menu className="p-3 position-relative">
          <button
            className="position-absolute border secButtonColor border-0 text-white  top-0 end-0"
            onClick={() => collapseSidebar()}
          >
            <CgMenuRight />
          </button>
          <MenuItem disabled icon={<MdDomain />}>
            <h2 className="fs-6 fw-bold">القائمة الرئيسيه</h2>
          </MenuItem>

          {sidebar.map((sub) => (
            <SubMenu
              key={sub.id}
              className="textDarkyellow fw-bold"
              label={sub.title}
              icon={<RiLayoutMasonryFill />}
            >
              {sub.submenu.map((item, i) => (
                <MenuItem
                  onClick={() => setSelected(i)}
                  className={
                    selected === i && true
                      ? 'textColor fw-bold'
                      : 'text-white secButtonColor fw-bold'
                  }
                  routerLink={<Link to={item.title} />}
                  key={item.i}
                >
                  <h6>{item.title}</h6>
                </MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Sidebar>
      <div></div>
    </div>
  );
};

export default SideBar;
