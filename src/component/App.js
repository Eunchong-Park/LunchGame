import React, {Component} from 'react'

class App extends Component {
    render(){
        return(
            <div>
                <Menu/>
            </div>
        )
    }
}
export default App;

class Menu extends Component {
    constructor(props){
        super(props);
        this.clickFood=this.clickFood.bind(this);
        this.clickWho=this.clickWho.bind(this);
        this.state={
            menu:['한식 ','중식 ','일식 ','양식 ','특식..?',':)'],
            cnt:5,
            people:['함흥수 수석님','이경란 차장님',
                    '최병민 선배님','여대엽 사원님','박은총 사원님',
                    '오지혜 사원님',':)'],
            cnt2:6,
        }
    }
    clickFood(){
        this.setState({
            cnt: Math.floor(Math.random()*5),
        })
    }
    clickWho(){
        this.setState({
            cnt2: Math.floor(Math.random()*6),
        })
    }
    render() {
        const style={
            width:"100px",
            background: "#f8585b",
            border: "none",      
            color:"#fff",     
            padding: "15px 0",        
            display: "inline-block",
            fontSize: "15px",
            margin: "4px",
            cursor: "pointer",
            borderRadius:'10px',
        }
        return (
            <div>
                <h1>메뉴고르기</h1>
                <p>종류: {this.state.menu} </p>
                
                <button style={style} onClick={this.clickFood}>음식 종류 선택 Click me:)</button>
                <h2>{this.state.menu[this.state.cnt]} </h2>
                <h2>종류말고! 누가 고를지 정하기~!</h2>
                <button style={style} onClick={this.clickWho}>음식 고르실 분 Click me~!</button>
                <h2>{this.state.people[this.state.cnt2]} </h2>
            </div>
        );
    }
}
