// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiCircleTwoToneSvg from 'icon-base/es/asn/CiCircleTwoTone';

export interface CiCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCiCircleTwoTone: CiCircleTwoToneIconType = (props, context) => (
    <Icon name='CiCircleTwoTone' {...{ ...props, ...context.attrs }} icon={CiCircleTwoToneSvg} />
);

IconCiCircleTwoTone.displayName = 'IconCiCircleTwoTone';
IconCiCircleTwoTone.theme = 'twotone';
IconCiCircleTwoTone.originName = 'ci-circle';

export default IconCiCircleTwoTone;
