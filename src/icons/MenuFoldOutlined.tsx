// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MenuFoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuFoldOutlined';

export interface MenuFoldOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MenuFoldOutlined: MenuFoldOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MenuFoldOutlinedSvg} />
    ;

MenuFoldOutlined.displayName = 'MenuFoldOutlined';

export default FunctionalComponent;