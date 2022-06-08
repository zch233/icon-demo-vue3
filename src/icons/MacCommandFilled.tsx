// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MacCommandFilledSvg from '@ant-design/icons-svg/lib/asn/MacCommandFilled';

export interface MacCommandFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MacCommandFilled: MacCommandFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={MacCommandFilledSvg} />;

MacCommandFilled.displayName = 'MacCommandFilled';

export default MacCommandFilled;