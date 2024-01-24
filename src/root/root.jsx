import './root.scss';

import { 
    Outlet, 
    NavLink,
    Form,
    useLoaderData,
    useSubmit
 } from "react-router-dom";


import { useState, useEffect } from 'react';

export async function loader({request}){
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    return { q };
}

export default function Root(){
    const { q } = useLoaderData();
    const [searching, setSearching] = useState(false);
    const submit = useSubmit();

    return (
        <>
            <header>
                <h1>МАГАЗИН</h1>
                <div>
                  <Form id="search-form" role="search">
                    <input
                      id="q"
                      className={searching ? "loading" : ""}
                      aria-label="Search contacts"
                      placeholder="Поиск"
                      type="search"
                      name="q"
                      defaultValue={q}
                      onChange={(event)=>{
                          const isFirstSearch = q == null;
                          submit(event.currentTarget.form, {
                            replace: !isFirstSearch,
                          });
                      }}
                    />
                  </Form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>
                                <h5>Каталог</h5>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>
                                <h5>О нас</h5>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}