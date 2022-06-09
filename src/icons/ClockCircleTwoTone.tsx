// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ClockCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClockCircleTwoTone';

export interface ClockCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ClockCircleTwoTone: ClockCircleTwoToneIconType = (props, context) => <Icon name='ClockCircleTwoTone' {...{ ...props, ...context.attrs }} icon={ClockCircleTwoToneSvg} />;

ClockCircleTwoTone.displayName = 'ClockCircleTwoTone';

export default ClockCircleTwoTone;