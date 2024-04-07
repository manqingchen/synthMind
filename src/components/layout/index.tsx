import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/assets/bg/rho-logo.svg";
import mobileRightBG from "@/assets/bg/mobileRight.svg";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

export const Layout: FC<any> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navList = useRef(["Home"]);

  const DrawerList = (
    <div
      className="bg-black text-white w-full"
      role="presentation"
      onClick={() => setOpen(false)}
    >
      {navList.current.map((text, idx) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
            {idx ===0 && <DoneIcon className="text-[#ed7850]" />}
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );

  return (
    <>
      <div className="w-[100vw]">
        <header className="flex xl:px-[7.5%] justify-between lg:h-[120px] h-[90px] items-center sticky top-0 bg-black z-30 lg:px-[40px] px-[20px]">
          <div className="flex flex-row items-center justify-center">
            <Image src={logo} alt="logo" className="lg:h-[50px] h-[30px] lg:w-[50px] w-[30px]" />
            <div className="text-white lg:text-[28px] text-[20px] font-['Gilroy'] font-bold lg:ml-2 ml-1">Rho Markets</div>
          </div>
          <nav className="items-center justify-between text-white hidden xl:flex">
            {navList.current.map((i, idx) => (
              <div className="flex flex-col text-[24px] ml-[100px] font-['Gilroy'] font-bold" key={i}>
                {i}
                {idx === 0 && <span className="w-[66px] h-[4px] bg-red-500" />}
              </div>
            ))}
            <button className="ml-[120px] bg-[#FF6F43] w-[148px] h-[48px] rounded-[40px] font-['Gilroy'] font-bold">
              Coming Soon
            </button>
          </nav>
          <Image
            src={mobileRightBG}
            alt="logo"
            onClick={() => {
              setOpen(true);
            }}
            className="block xl:hidden"
          />
        </header>
        <section className="w-[100vw] overflow-hidden">{children}</section>
      </div>
      {/* <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer> */}
    </>
  );
};
