"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
  
const MobileNavbar = ({ user }: MobileNavProps) => {
    const pathName = usePathname();
  return (
    <section className="w-full, max-w-[264px]">
        <Sheet>
            <SheetTrigger>
                <Image src={"/icons/hamburger.svg"}
                    alt='menu'
                    width={30} height={30}
                    className={"cursor-pointer"}
                 />
            </SheetTrigger>
            <SheetContent className="border-none bg-white">
            <Link href={"/"} className='flex cursor-pointer items-center gap-1 px-4'>
                <Image src={"/icons/logo.svg"} alt='Application Logo' width={34} height={34}
                />
                <h1 className="text-26 font-ibm-plex=serif font-bold text-black-1">Horizon</h1>
            </Link>
            <div className="mobilenav-sheet">
                <SheetClose asChild>
                    <nav className="flex h-full flex-col gap-6 pt-16 text-white ">
                            {sidebarLinks.map((link)=>{
                                const isActive = pathName === link.route || pathName.startsWith(`${link.route}`);

                                return (
                                    <SheetClose asChild key={link.label}>
                                        <Link href={link.route} key={link.label}
                                        className={cn('mobilenav-sheet_close w-full', {
                                            'bg-bank-gradient' : isActive
                                        })}
                                        >
                                        
                                        <Image  src={link.imgURL} alt={link.label}
                                            className={cn({'brightness-[3] invert-0': isActive})}
                                            width={20} height={20}
                                        />
                                        
                                        <p className={cn('text-16 font-semibold text-black-2', {
                                            'text-white': isActive
                                        })}>
                                            {link.label}
                                        </p>
                                    </Link>
                                    </SheetClose>
                                )
                            })}
                            User
                    </nav>
                </SheetClose>
                Footer
            </div>
            </SheetContent>
        </Sheet>

    </section>
  );
};

export default MobileNavbar;