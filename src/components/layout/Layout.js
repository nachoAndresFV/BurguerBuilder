import React from 'react';
import Aux from '../../hoc/Aux';
import layoutStyle from './Layout.module.css';

const layout = (props) => ( 
    <Aux>
        <div>
            toolBar,
            siderDrawer,
            backDrop
        </div>
        <main className={layoutStyle.Content}>
            {props.children}
        </main>
    </Aux>
    
);

export default layout;