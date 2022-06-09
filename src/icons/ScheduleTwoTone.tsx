// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ScheduleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScheduleTwoTone';

export interface ScheduleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ScheduleTwoTone: ScheduleTwoToneIconType = (props, context) => <Icon name='ScheduleTwoTone' {...{ ...props, ...context.attrs }} icon={ScheduleTwoToneSvg} />;

ScheduleTwoTone.displayName = 'ScheduleTwoTone';

export default ScheduleTwoTone;