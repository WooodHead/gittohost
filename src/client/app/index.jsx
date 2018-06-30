import React from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './components/ButtonAppBar/index.jsx';
import SimpleMediaCard from './components/SimpleMediaCard/index.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <ButtonAppBar />
                <SimpleMediaCard />
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
