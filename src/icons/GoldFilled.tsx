// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import GoldFilledSvg from '@ant-design/icons-svg/lib/asn/GoldFilled';

export interface GoldFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GoldFilled: GoldFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={GoldFilledSvg} />
    ;

GoldFilled.displayName = 'GoldFilled';

export default FunctionalComponent;