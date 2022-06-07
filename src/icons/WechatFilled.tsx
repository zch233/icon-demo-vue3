// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import WechatFilledSvg from '@ant-design/icons-svg/lib/asn/WechatFilled';

export interface WechatFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WechatFilled: WechatFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={WechatFilledSvg} />
    ;

WechatFilled.displayName = 'WechatFilled';

export default FunctionalComponent;