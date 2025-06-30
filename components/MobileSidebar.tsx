// @ts-nocheck
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import NavItems from './NavItems';
import '@syncfusion/ej2-react-navigations/styles/material.css';

// Directly import the entire package
import * as SyncfusionNavigations from '@syncfusion/ej2-react-navigations';

const MobileSidebar = () => {
  const sidebarRef = useRef<any>(null);

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.toggle();
    }
  };

  if (!isMounted) {
    return (
      <div className="mobile-sidebar wrapper">
        <header className="flex items-center justify-between p-4">
          {/* Loading state for header */}
          <div className="flex items-center gap-2">
            <div className="size-[30px] bg-gray-200 rounded"></div>
            <h1 className="text-xl font-bold">Travel App</h1>
          
          </div>
          <div className="size-7 bg-gray-200 rounded"></div>
        
        </header>
      </div>
    );
  }

  
  const { SidebarComponent } = SyncfusionNavigations;

  return (
    <div className="mobile-sidebar wrapper">
      <header className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/icons/logo.svg"
            alt="Logo"
            className="size-[30px]"
          />
          <h1 className="text-xl font-bold">Travel App</h1>
             
        </Link>

        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <img 
            src="/assets/icons/menu.svg" 
            alt="menu" 
            className="size-7" 
          />
        </button>
      </header>

      <SidebarComponent
        ref={sidebarRef}
        width={270}
        created={() => sidebarRef.current?.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="Over"
      >
        <div className="p-4">
          <NavItems handleClick={toggleSidebar} />
        </div>
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;