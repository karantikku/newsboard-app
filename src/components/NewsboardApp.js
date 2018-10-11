import React from 'react';
import Header from './Header';
import NewsList from './NewsList';

export class NewsboardApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }
    componentDidMount() {
        fetch('http://hn.algolia.com/api/v1/items/6')
        .then(results => {
            console.log(results.json());
        })
    }
    render() {
        return(
            <div>
                <Header />
                <NewsList />
            </div>   
        );
    }
}