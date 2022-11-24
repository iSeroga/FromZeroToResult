import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term) // при однаковій назві ці компоненти різні в цій строці наш компонент приходить з файлу app.js і в ллокальному форматі має такуж назву
    }

   render() {
    return(
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Знайти працівника"
            value = {this.state.term} 
            onChange = {this.onUpdateSearch}/>
    );
   }
}

export default SearchPanel;