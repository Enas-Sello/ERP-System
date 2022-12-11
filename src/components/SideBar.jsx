/* eslint-disable react/jsx-pascal-case */
import { sidebar } from '../data';
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdDomain } from 'react-icons/md';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const SideBar = () => {
  const [selected, setSelected] = useState(false);
  // const { collapseSidebar } = useProSidebar();

  //   const [ width, setWidth ] = useState( '' );
  //   const [ collapse, setCollapse ] = useState( false );
  //   console.log(width);
  //   console.log(collapse);
  //   const getSize = () => {
  //     setWidth( window.innerWidth );
  //   };
  //   useEffect(() => {
  //     window.addEventListener('resize', getSize);
  //  if (width < 400) {
  //    setCollapse(true);
  //     }
  //  else
  //  {
  //    setCollapse(false)
  //     }
  //     return () =>
  //     {
  //       window.removeEventListener('resize', getSize);
  //     };
  //   }, [window.innerWidth]);
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" d-flex text-white">
      <Sidebar
        style={{ color: 'black' }}
        backgroundColor={'white'}
        className="d-none d-md-block"
        // width={'180px'}
      >
        <Menu className="p-3 position-relative">
          {/* <button
            className="position-absolute border bgDarkgreen border-0 text-white  top-0 end-0"
            // onClick={() => collapseSidebar()}
          >
            <CgMenuRight />
          </button> */}

          {sidebar.map((sub) => (
            <SubMenu
              key={sub.id}
              className="textwhite fw-bold"
              label={sub.title}
              icon={<sub.icon />}
            >
              {sub.submenu.map((item, i) => (
                <MenuItem
                  onClick={() => setSelected(i)}
                  className={
                    selected === i
                      ? 'text-white bgDarkgreen borderRadius fw-bold w-100'
                      : 'textwhite fw-bold '
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
      {/* responsive */}
      <div className="d-block d-md-none  ">
        <div className="">
          <HiMenu
            style={{ width: '25px', height: '25px' }}
            className={toggle ? 'd-none' : 'cursor-pointer text-white'}
            onClick={() => setToggle(true)}
          />
        </div>
        {toggle && (
          <div className="text-dark ">
            <div className="text-start p-1">
              <AiOutlineClose
                style={{ width: '25px', height: '25px' }}
                className="cursor-pointer text-white "
                onClick={() => setToggle(false)}
              />
            </div>
            <Sidebar
              style={{ color: 'white' }}
              backgroundColor={'#295E57'}
              // width={'180px'}
            >
              <Menu className="p-3 position-relative">
                {/* <button
            className="position-absolute border bgDarkgreen border-0 text-white  top-0 end-0"
            // onClick={() => collapseSidebar()}
          >
            <CgMenuRight />
          </button> */}

                <MenuItem disabled icon={<MdDomain />}>
                  <h2 className="fs-6 fw-bold">القائمة الرئيسيه</h2>
                </MenuItem>

                {sidebar.map((sub) => (
                  <SubMenu
                    key={sub.id}
                    className=" fw-bold"
                    label={sub.title}
                    icon={<RiLayoutMasonryFill />}
                  >
                    {sub.submenu.map((item, i) => (
                      <MenuItem
                        onClick={() => setSelected(i)}
                        className={
                          selected === i
                            ? 'textDarkyellow fw-bold w-100'
                            : 'text-white bgDarkgreen fw-bold '
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
          </div>
        )}
      </div>{' '}
      {/*end responsive */}
    </div>
  );
};

export default SideBar;
