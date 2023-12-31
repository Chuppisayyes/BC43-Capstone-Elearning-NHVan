import React from 'react'
import { NavLink } from 'react-router-dom'
import './PageNotLoading.css'
export default function PageNotLoading() {
    return (
        <>
            <section className="page_404">
                <div className="page404_container">
                    <div className='content404'>
                        <h1 className="text404">Không ổn rồi đại vương</h1>
                    </div>
                    <div className="content_box_404">
                        <h3 className="">
                        Không ổn rồi đại vương
                        </h3>
                        <button className=" btnGlobal btnLink_404">
                            <NavLink to="/trangchu" >Quay về trang chủ</NavLink>
                        </button>
                    </div>
                </div>
            </section>
        </>

    )
}
