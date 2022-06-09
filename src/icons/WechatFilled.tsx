// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WechatFilledSvg from '@ant-design/icons-svg/lib/asn/WechatFilled';

export interface WechatFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WechatFilled: WechatFilledIconType = (props, context) => <Icon name='WechatFilled' {...{ ...props, ...context.attrs }} icon={WechatFilledSvg} />;

WechatFilled.displayName = 'WechatFilled';

export default WechatFilled;