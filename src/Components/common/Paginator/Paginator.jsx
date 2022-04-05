import React, { useState } from 'react'
import s from './Paginator.module.css'
const Paginator = ({ totalItemsCount, pageSize, setCurrentPage, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    debugger
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumer] = useState(Math.ceil(1))
    let letfPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rigthPortionNumber = portionNumber * portionSize

    return (

        <div className={s.pages}>
            {portionNumber > 1 && <button onClick={() => { setPortionNumer(portionNumber - 1) }}>Left</button>}
            {pages
                .filter((p) => p >= letfPortionPageNumber && p <= rigthPortionNumber)
                .map((p) => {
                    return <button onClick={() => { setCurrentPage(p) }} className={currentPage === p && s.selectedPage}>{p}</button>
                })}
            {portionCount > portionNumber && <button onClick={() => { setPortionNumer(portionNumber + 1) }}>Right</button>}

        </div>
    )
}

export default Paginator