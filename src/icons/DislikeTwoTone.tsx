// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DislikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DislikeTwoTone';

export interface DislikeTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DislikeTwoTone: DislikeTwoToneIconType = (props, context) => <Icon name='DislikeTwoTone' {...{ ...props, ...context.attrs }} icon={DislikeTwoToneSvg} />;

DislikeTwoTone.displayName = 'DislikeTwoTone';

export default DislikeTwoTone;