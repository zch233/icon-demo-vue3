// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TwitterCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterCircleFilled';

export interface TwitterCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TwitterCircleFilled: TwitterCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TwitterCircleFilledSvg} />
    ;

TwitterCircleFilled.displayName = 'TwitterCircleFilled';

export default FunctionalComponent;