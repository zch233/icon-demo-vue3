// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import WeiboCircleFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleFilled';

export interface WeiboCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WeiboCircleFilled: WeiboCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={WeiboCircleFilledSvg} />
    ;

WeiboCircleFilled.displayName = 'WeiboCircleFilled';

export default FunctionalComponent;