import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
	position: relative;
  	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})
`
	position: absolute;
	top: 0;
	left: 0;
	${'' /* display: block;这句加不加都可，因为行内元素添加绝对或固定定位可以直接设置宽高 */}
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div `
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;

export const NavItem = styled.div `
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: ea6f5a;
	}
`;

export const SearchWrapper = styled.div `
	position: relative;
	float: left;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		background: red;
		text-align: center;
	}
`;


export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})
`
	height: 38px;
	width: 160px;
	margin-top: 9px;
	margin-left: 20px;
	padding: 0 20px;
	// 加上这句话是因为加了padding但是并不想撑开宽度，所以将盒模型设置为IE盒模型
	box-sizing: border-box;
	outline: none;
	border: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	&::placeholder {
		color: #999;
	}
`;

export const Addition = styled.div `
	position: absolute;
	top: 0;
	right: 0;
	height: 56px;
`;

export const Button = styled.div `
	float: right;
	line-height: 38px;
	margin-right: 20px;
	margin-top: 9px;
	padding: 0 20PX;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writing {
		color: #fff;
		background: #ec6149;
	}
`;