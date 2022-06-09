// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FastForwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastForwardFilled';

export interface FastForwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FastForwardFilled: FastForwardFilledIconType = (props, context) => <Icon name='FastForwardFilled' {...{ ...props, ...context.attrs }} icon={FastForwardFilledSvg} />;

FastForwardFilled.displayName = 'FastForwardFilled';

export default FastForwardFilled;