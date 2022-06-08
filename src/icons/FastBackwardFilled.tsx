// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FastBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastBackwardFilled';

export interface FastBackwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FastBackwardFilled: FastBackwardFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FastBackwardFilledSvg} />;

FastBackwardFilled.displayName = 'FastBackwardFilled';

export default FunctionalComponent;