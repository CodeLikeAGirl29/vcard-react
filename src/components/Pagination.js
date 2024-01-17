'use client';

import { Pagination } from 'flowbite-react';
import { useState } from 'react';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={3} onPageChange={onPageChange} />
    </div>
  );
}

export default Pagination;
