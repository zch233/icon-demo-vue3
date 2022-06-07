// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import MenuUnfoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuUnfoldOutlined';

export interface MenuUnfoldOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MenuUnfoldOutlined: MenuUnfoldOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={MenuUnfoldOutlinedSvg} />
    ;

MenuUnfoldOutlined.displayName = 'MenuUnfoldOutlined';

export default MenuUnfoldOutlined;