import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import { actionCreators } from './store';
import { DetailWrapper, Header, Content } from './style';

class Detail extends PureComponent {
	render() {
		// console.log(this.props.match.params.id);
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
				/>
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}


const mapStateToProps = (state) => ({
	title: state.getIn(['detail','title']),
	content: state.getIn(['detail','content'])
})

const mapDispatchToProps = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id));
	}
})

// withRouter意思是让Detail有能力获取到Router里的所有参数及内容，因为这里用的是异步组件（loadable）
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));