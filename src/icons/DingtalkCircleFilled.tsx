// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DingtalkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkCircleFilled';

export interface DingtalkCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DingtalkCircleFilled: DingtalkCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DingtalkCircleFilledSvg} />
    ;

DingtalkCircleFilled.displayName = 'DingtalkCircleFilled';

export default FunctionalComponent;