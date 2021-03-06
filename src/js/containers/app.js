import React,{Component,PropTypes} from 'react'

import HeaderTitle from '../components/header_title'
import FootNav from '../components/foot_nav'
import Updata from '../components/updata'
class App extends Component{
	constructor(props){
        super(props);
        this.state = {
            isUpdata: false,
        };
    }
	render(){
		{/*判断是否更新*/}
		let modal;
    	this.state.isUpdata ? modal= <Updata updata={this.state.isUpdate} setUpdate={state => this.setUpdate(state)} /> : null;
		return (
			<div className="page-group">
				<div className="page">
					<HeaderTitle />
					<FootNav/>
					{this.props.children}
				</div>
				 {modal}
			</div>
		)
	}
	setUpdate(state){
		this.setState({	isUpdata:state});
	}
}
export default App