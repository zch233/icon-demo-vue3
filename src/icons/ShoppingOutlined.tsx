// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ShoppingOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingOutlined';

export interface ShoppingOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ShoppingOutlined: ShoppingOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ShoppingOutlinedSvg} />
    ;

ShoppingOutlined.displayName = 'ShoppingOutlined';

export default FunctionalComponent;