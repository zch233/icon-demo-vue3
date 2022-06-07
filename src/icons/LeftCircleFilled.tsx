// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LeftCircleFilledSvg from '@ant-design/icons-svg/lib/asn/LeftCircleFilled';

export interface LeftCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LeftCircleFilled: LeftCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LeftCircleFilledSvg} />
    ;

LeftCircleFilled.displayName = 'LeftCircleFilled';

export default FunctionalComponent;