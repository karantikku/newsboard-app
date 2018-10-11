import React from 'react';
import Header from './Header';
import NewsList from './NewsList';

export class NewsboardApp extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <NewsList />
            </div>   
        );
    }
}