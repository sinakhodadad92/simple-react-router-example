import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../../store/favorites-context.js';


function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext); 
    return(
        <div>
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li> <Link to="/">All Meetups</Link></li>
                        <li> <Link to="/new-meetup">Add New Meetup</Link></li>
                        <li> <Link to="/favorites">My Favorite Meetups<span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link></li>
                    </ul>
                </nav>
            </header>
           
        </div>
    )

}

export default MainNavigation