import { FC, useRef, useState } from 'react'
import cn from 'classnames'
//@ts-ignore
import s from './Paginator.module.scss'
type PropsType = {
    totalItemsCount: number
    pageSize: number
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
    portionSize?: number
    setPortionNumber: React.Dispatch<React.SetStateAction<number>>
    portionNumber: number
}
const Paginator: FC<PropsType> = ({ totalItemsCount, portionNumber, setPortionNumber, pageSize, setCurrentPage, currentPage, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rigthPortionNumber = portionNumber * portionSize

    return (

        <div className={s.pages}>
            {portionNumber > 1 && <button className={cn(s.button, s.left)} onClick={() => {
                debugger
                setPortionNumber(portionNumber - 1)
            }}>←</button>}
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rigthPortionNumber)
                .map((p) => {
                    return <button onClick={() => { setCurrentPage(p) }} className={cn(s.pageButton, currentPage === p && s.selectedPage)}>{p}</button>
                })}
            {portionCount > portionNumber && <button className={cn(s.button, s.right)} onClick={() => {
                debugger
                setPortionNumber(portionNumber + 1)
            }}>→</button>}

        </div>
    )
}

export default Paginator