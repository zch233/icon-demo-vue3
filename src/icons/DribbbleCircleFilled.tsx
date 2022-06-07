// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DribbbleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleCircleFilled';

export interface DribbbleCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DribbbleCircleFilled: DribbbleCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DribbbleCircleFilledSvg} />
    ;

DribbbleCircleFilled.displayName = 'DribbbleCircleFilled';

export default FunctionalComponent;