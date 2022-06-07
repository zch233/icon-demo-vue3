// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RightCircleFilled';

export interface RightCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RightCircleFilled: RightCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RightCircleFilledSvg} />
    ;

RightCircleFilled.displayName = 'RightCircleFilled';

export default FunctionalComponent;