// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FastForwardFilledSvg from 'icon-base/es/asn/FastForwardFilled';

export interface FastForwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFastForwardFilled: FastForwardFilledIconType = (props, context) => (
    <Icon name='FastForwardFilled' {...{ ...props, ...context.attrs }} icon={FastForwardFilledSvg} />
);

IconFastForwardFilled.displayName = 'IconFastForwardFilled';
IconFastForwardFilled.theme = 'filled';
IconFastForwardFilled.originName = 'fast-forward';

export default IconFastForwardFilled;
