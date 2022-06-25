// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PoundCircleTwoToneSvg from 'icon-base/es/asn/PoundCircleTwoTone';

export interface PoundCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPoundCircleTwoTone: PoundCircleTwoToneIconType = (props, context) => (
    <Icon name='PoundCircleTwoTone' {...{ ...props, ...context.attrs }} icon={PoundCircleTwoToneSvg} />
);

IconPoundCircleTwoTone.displayName = 'IconPoundCircleTwoTone';
IconPoundCircleTwoTone.theme = 'twotone';
IconPoundCircleTwoTone.originName = 'pound-circle';

export default IconPoundCircleTwoTone;
