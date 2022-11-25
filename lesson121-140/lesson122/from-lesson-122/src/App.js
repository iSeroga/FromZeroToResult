import {Component} from 'react';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div`
  padding:20px ;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    a {
      display: block;
      margin: 10px 0;
      color: ${props => props.active ? 'orange' : 'black'};
    }
    input {
      display: block;
      margin: 10px 0;
    }
`;

const Header = styled.h2`
  font-size: 22px;
`;

 export const Button = styled.button`
  display: block ;
  padding:5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0,0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0,0, .2);
`;

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text:'+++',
      position: ''
    }
    //this.nextYear = this.nextYear.bind(this);
  }
  nextYear = () => {
    console.log("+++");
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }
   render() { 
      const {name, surname, link} = this.props;
      const {position, years} = this.state
      return (
        <EmpItem active>
          <Button onClick={this.nextYear}>{this.state.text}</Button>
          <Header>My name is: {name}, surname - {surname}, age - {years}, position - {position}</Header>
          <a href={link}>My profile</a>
          <form>
            <span>Введіть посаду</span>
            <input type='text' onChange={(e) => this.commitInputChanges(e, "some color")}/>
          </form>
        </EmpItem>
      );
  }

}
const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <WhoAmI name= "John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="alex" surname="Johnson" link="normlink.com"/>
    </Wrapper>
  );
}

export default App;
