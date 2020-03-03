import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo } from '../style';

class List extends Component {
	render() {
		const { list } = this.props;
		return (
			<div>
				{
					list.map((item) => {
						return(
							<ListItem key={item.get('id')}>
								<img className="pic" alt="" src={item.get('imgUrl')}/>
								<ListInfo>
									<h3 className="title">{item.get('title')}</h3>
									<p className="desc">{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						)
					})
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	// list: state.get('home').get('articleList')
	list: state.getIn(['home','articleList'])
})

export default connect(mapStateToProps,null)(List);