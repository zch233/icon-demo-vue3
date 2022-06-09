// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CheckCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckCircleTwoTone';

export interface CheckCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CheckCircleTwoTone: CheckCircleTwoToneIconType = (props, context) => <Icon name='CheckCircleTwoTone' {...{ ...props, ...context.attrs }} icon={CheckCircleTwoToneSvg} />;

CheckCircleTwoTone.displayName = 'CheckCircleTwoTone';

export default CheckCircleTwoTone;