// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyrightCircleTwoToneSvg from 'icon-base/es/asn/CopyrightCircleTwoTone';

export interface CopyrightCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCopyrightCircleTwoTone: CopyrightCircleTwoToneIconType = (props, context) => (
    <Icon name='CopyrightCircleTwoTone' {...{ ...props, ...context.attrs }} icon={CopyrightCircleTwoToneSvg} />
);

IconCopyrightCircleTwoTone.displayName = 'IconCopyrightCircleTwoTone';
IconCopyrightCircleTwoTone.theme = 'twotone';
IconCopyrightCircleTwoTone.originName = 'copyright-circle';

export default IconCopyrightCircleTwoTone;
