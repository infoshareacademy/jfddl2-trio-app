import React from 'react'

import {Grid, Row, FormControl} from 'react-bootstrap'

class Form extends React.Component {

    state = {

    }

    render() {
        return (
            <form>
                {/*<Grid>*/}
                    {/*<Row>*/}
                        {/*<FormControl>*/}
                            {/*<label>imie</label>*/}
                            {/*<input type="text"/>*/}
                        {/*</FormControl>*/}
                        {/*<FormControl>*/}
                            {/*<label>nazwisko</label>*/}
                        {/*</FormControl>*/}
                        {/*<FormControl>*/}
                            {/*<label>profesja</label>*/}
                        {/*</FormControl>*/}
                        {/*<FormControl>*/}
                            {/*<label>miasto</label>*/}
                        {/*</FormControl>*/}
                    {/*</Row>*/}
                {/*</Grid>*/}
                <label>imie</label><input type="text"/>
                <label>nazwisko</label><input type="text"/>
                <label>profesja</label><input type="text"/>
                <label>miasto</label><input type="text"/>
                <button>zapisz</button>
            </form>
        )
    }
}

export default Form