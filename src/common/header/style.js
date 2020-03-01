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
	margin: 0 auto;
	background: red;
`;

export const NavItem = styled.div ``;