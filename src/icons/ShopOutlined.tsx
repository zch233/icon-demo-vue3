// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ShopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShopOutlined';

export interface ShopOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ShopOutlined: ShopOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ShopOutlinedSvg} />
    ;

ShopOutlined.displayName = 'ShopOutlined';

export default FunctionalComponent;