"use client"

import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';

import React, { useState } from 'react'
import ThemeSwitcher from './themeSwitch';
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className='hidden sm:flex gap-24 w-full' justify="end" >
                    <NavbarItem>
                        <ThemeSwitcher />
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    <NavbarMenuItem>
                        <ThemeSwitcher />
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar >
        </>
    );
};

export default NavBar;