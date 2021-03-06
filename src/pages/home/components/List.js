import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
// 单页应用，整个网站访问过程中只会加载一次html
import { Link } from 'react-router-dom';
							 
class List extends PureComponent {
	render() {
		const { list, getMoreList, page } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return(
							<Link  key={index} to={'/detail/' + item.get('id')}> 
								<ListItem>
									<img className="pic" alt="" src={item.get('imgUrl')}/>
									<ListInfo>
										<h3 className="title">{item.get('title')}</h3>
										<p className="desc">{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						)
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	// list: state.get('home').get('articleList')
	list: state.getIn(['home','articleList']),
	page: state.getIn(['home','articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(List);