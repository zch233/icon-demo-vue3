// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyrightTwoToneSvg from 'icon-base/es/asn/CopyrightTwoTone';

export interface CopyrightTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCopyrightTwoTone: CopyrightTwoToneIconType = (props, context) => (
    <Icon name='CopyrightTwoTone' {...{ ...props, ...context.attrs }} icon={CopyrightTwoToneSvg} />
);

IconCopyrightTwoTone.displayName = 'IconCopyrightTwoTone';
IconCopyrightTwoTone.theme = 'twotone';
IconCopyrightTwoTone.originName = 'copyright';

export default IconCopyrightTwoTone;
