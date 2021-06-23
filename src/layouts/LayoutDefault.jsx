import React from 'react';
import TopMenu from '../components/TopMenu';

export default function LayoutDefault({children, tabActive}) {
  return (
    <div>
      <TopMenu tabActive={tabActive} />
      {children}
    </div>
  )
}
