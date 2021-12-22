import { NavLink } from "react-router-dom"
import s from './../../common/Common.module.css'
import c from './../../common/Common.module.css'

export const Navigation = () => {
    return (
        <div className={s.nav}>
            <NavLink className={({isActive}) => isActive ? `${c.link} ${c.active}` : c.link} to={'/first-ver/'}>
                First
            </NavLink>
            <NavLink className={({isActive}) => isActive ? `${c.link} ${c.active}` : c.link} to={'/second-ver/'}>
                Second
            </NavLink>
        </div>
    )
}