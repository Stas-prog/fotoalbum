import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const { foto } = useContext(Context)
    // const pageCount = Math.ceil(foto.totalCount / foto.limit)
    const pages = []
    for (let i = 0; i < 11; i++) {
        pages.push(i)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={foto.page === page}
                    onClick={() => foto.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;