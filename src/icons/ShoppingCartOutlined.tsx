// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined';

export interface ShoppingCartOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ShoppingCartOutlined: ShoppingCartOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ShoppingCartOutlinedSvg} />
    ;

ShoppingCartOutlined.displayName = 'ShoppingCartOutlined';

export default FunctionalComponent;