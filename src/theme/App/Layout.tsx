import React, {ReactChildren, ReactChild} from 'react';

import Header from 'src/components/Header';

interface AppProps {
    children: ReactChild | ReactChildren;
}

const Layout = ({children}: AppProps) => {
    return (
        <>
            <Header/>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;
