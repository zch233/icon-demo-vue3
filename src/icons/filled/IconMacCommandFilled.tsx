// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MacCommandFilledSvg from '@ant-design/icons-svg/es/asn/MacCommandFilled';

export interface MacCommandFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMacCommandFilled: MacCommandFilledIconType = (props, context) => (
    <Icon name='MacCommandFilled' {...{ ...props, ...context.attrs }} icon={MacCommandFilledSvg} />
);

IconMacCommandFilled.displayName = 'IconMacCommandFilled';

export default IconMacCommandFilled;