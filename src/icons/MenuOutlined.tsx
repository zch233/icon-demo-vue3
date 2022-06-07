// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import MenuOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined';

export interface MenuOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MenuOutlined: MenuOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={MenuOutlinedSvg} />
    ;

MenuOutlined.displayName = 'MenuOutlined';

export default MenuOutlined;