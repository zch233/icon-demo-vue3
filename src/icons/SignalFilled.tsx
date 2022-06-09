// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SignalFilledSvg from '@ant-design/icons-svg/lib/asn/SignalFilled';

export interface SignalFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SignalFilled: SignalFilledIconType = (props, context) => <Icon name='SignalFilled' {...{ ...props, ...context.attrs }} icon={SignalFilledSvg} />;

SignalFilled.displayName = 'SignalFilled';

export default SignalFilled;