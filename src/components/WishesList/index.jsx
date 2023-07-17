import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Wish from '../../components/Wish'
import { WISHES_PER_PAGE } from '../../constants'
import { WishesList } from './WishesList.styled'

function WishesListComponent({ wishes, isOwnerCard }) {
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + WISHES_PER_PAGE
  const currentItems = wishes.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(wishes.length / WISHES_PER_PAGE)

  const handlePageClick = event => {
    const newOffset = (event.selected * WISHES_PER_PAGE) % wishes.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <WishesList>
        {currentItems.map(wish => (
          <Wish key={wish._id} {...wish} isOwnerCard={isOwnerCard} />
        ))}
      </WishesList>
      {wishes.length > WISHES_PER_PAGE && (
        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel='<'
          renderOnZeroPageCount={null}
          breakClassName='page-item'
          containerClassName='pagination'
          pageClassName='page-item'
          previousClassName='page-item'
          nextClassName='page-item'
          activeClassName='page-item-active'
        />
      )}
    </>
  )
}

export default WishesListComponent
