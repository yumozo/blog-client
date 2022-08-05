import React from 'react';
import NavMenu from './NavMenu'

export default function Layout(props: any) {
  return (
    <div className='flex flex-col
      items-center'
    >

      <NavMenu />

      <main>
        {props.first}
      </main>

    </div>
  );
}