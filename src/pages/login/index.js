import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, Loginbox, Input, Button } from './style';


class Login extends PureComponent {
	render() {
		return (
			<LoginWrapper>
				<Loginbox>
					<Input placeholder="账号" />
					<Input placeholder="账号" />
					<Button>登陆</Button>
				</Loginbox>
			</LoginWrapper>
		)
	}

	componentDidMount() {
		
	}
}


const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = (dispatch) => ({
	
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);