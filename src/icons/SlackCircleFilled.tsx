// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SlackCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SlackCircleFilled';

export interface SlackCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SlackCircleFilled: SlackCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SlackCircleFilledSvg} />
    ;

SlackCircleFilled.displayName = 'SlackCircleFilled';

export default FunctionalComponent;