// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DollarCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DollarCircleFilled';

export interface DollarCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DollarCircleFilled: DollarCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DollarCircleFilledSvg} />
    ;

DollarCircleFilled.displayName = 'DollarCircleFilled';

export default FunctionalComponent;