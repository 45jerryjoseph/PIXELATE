import React from 'react'
import Cataloglist from '../../components/CatalogList/Cataloglist'
import Sidebar from '../../components/Sidebar/Sidebar'
import './catalog.scss'
const Catalog = () => {
  return (
    <div className="catalog">
        <Sidebar />
        <Cataloglist />
    </div>
  )
}

export default Catalog