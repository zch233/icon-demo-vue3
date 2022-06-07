// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import WechatOutlinedSvg from '@ant-design/icons-svg/lib/asn/WechatOutlined';

export interface WechatOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WechatOutlined: WechatOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={WechatOutlinedSvg} />
    ;

WechatOutlined.displayName = 'WechatOutlined';

export default FunctionalComponent;