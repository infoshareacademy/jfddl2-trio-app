import React from 'react'


class Form extends React.Component {

    state = {

    }

    render() {
        return (
            <form>

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