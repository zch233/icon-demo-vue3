// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PushpinFilledSvg from '@ant-design/icons-svg/lib/asn/PushpinFilled';

export interface PushpinFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PushpinFilled: PushpinFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PushpinFilledSvg} />;

PushpinFilled.displayName = 'PushpinFilled';

export default PushpinFilled;