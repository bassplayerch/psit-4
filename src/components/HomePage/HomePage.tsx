import React, { FunctionComponent } from 'react';
import { useAction, Dispatch } from 'easy-peasy';
import { AppState } from '../../redux/store';

type HomePageProps = {
    path: string;
}

const HomePage: FunctionComponent<HomePageProps> = props => {
    const logout = useAction((dispatch: Dispatch<AppState>) => dispatch.authState.logout);
    return (
        <>
            <h1>home sweet home</h1>
            <button onClick={logout}>log out</button>
        </>
    )
}

export default HomePage;