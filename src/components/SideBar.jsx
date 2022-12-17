/* eslint-disable react/jsx-pascal-case */
import { sidebar } from '../data';
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const SideBar = () => {
  const [selected, setSelected] = useState(false);

  const [toggle, setToggle] = useState(false);
  console.log(sidebar);
  return (
    <div className=" d-flex text-white">
      <Sidebar
        style={{ color: 'black' }}
        backgroundColor={'white'}
        className="d-none d-md-block"
      >
        <Menu className="p-3 position-relative">
          {sidebar.map((sub) => (
            <SubMenu
              key={sub.id}
              className="textlightgreen fw-bold"
              label={sub.title}
              icon={<sub.icon style={{ width: '20px', height: '20px' }} />}
            >
              {sub.submenu.map((item, i) => (
                <MenuItem
                  onClick={() => setSelected(i)}
                  className={
                    selected === i
                      ? 'text-white bgDarkgreen borderRadius fw-bold w-100'
                      : ' fw-bold '
                  }
                  routerLink={<Link to={item.Link} />}
                  key={item.id}
                >
                  <h6>{item.title}</h6>
                </MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Sidebar>
      {/* responsive */}
      <div className="d-block d-md-none  ">
        <div className="">
          <HiMenu
            style={{ width: '25px', height: '25px' }}
            className={toggle ? 'd-none' : 'cursor-pointer textDarkGreen'}
            onClick={() => setToggle(true)}
          />
        </div>
        {toggle && (
          <div className="textDarkGreen ">
            <div className="text-start p-1">
              <AiOutlineClose
                style={{ width: '25px', height: '25px' }}
                className="cursor-pointer textDarkGreen "
                onClick={() => setToggle(false)}
              />
            </div>
            <Sidebar style={{ color: 'black' }} backgroundColor={'white'}>
              <Menu className="p-3 position-relative">
                {sidebar.map((sub) => (
                  <SubMenu
                    key={sub.id}
                    className="textlightgreen fw-bold"
                    label={sub.title}
                    icon={
                      <sub.icon style={{ width: '20px', height: '20px' }} />
                    }
                  >
                    {sub.submenu.map((item, i) => (
                      <MenuItem
                        onClick={() => setSelected(i)}
                        className={
                          selected === i
                            ? 'text-white bgDarkgreen borderRadius fw-bold w-100'
                            : ' fw-bold '
                        }
                        routerLink={<Link to={item.Link} />}
                        key={item.id}
                      >
                        <h6>{item.title}</h6>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ))}
              </Menu>
            </Sidebar>
          </div>
        )}
      </div>{' '}
      {/*end responsive */}
    </div>
  );
};

export default SideBar;
