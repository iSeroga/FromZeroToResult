import {Component} from 'react'

//import './employees-add-form.css'
import './employees-add-form.scss'

class EmployeesAddForm extends Component {
    state = {
        name: "",
        salary: '',
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length > 1 && this.state.name.length < 35 && this.state.salary > 0){ 
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: "",
            salary: ""
        })
        }
    }

    static onLog = () => {
        console.log('hey')
    }

    static logged = "on";

   render() {
    const {name, salary} = this.state

    return (
        <div className="app-add-form">
            <h3> Додайте нового працівника</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type='text'
                    className='form-control new-post-label'
                    placeholder="Як його ім'я"
                    name="name"
                    value={name}
                    onChange={this.onValueChange}/>

                <input type='number'
                    className="form-control new-post-label"
                    placeholder="З\П в $"
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange}/>
                <button type='submit'
                    className="btn btn-outline-light">Додати</button>
            </form>
        </div>
    );
   }
}
EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged)
 
export default EmployeesAddForm;