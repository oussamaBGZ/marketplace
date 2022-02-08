import React from 'react';
import { Link } from 'react-router-dom';

function SideMenu() {
    return (
        <div>
            <div>
                <Link to="/admin/product">
                    Product
                </Link>
            </div>

        </div>
    )
}

export default SideMenu;
