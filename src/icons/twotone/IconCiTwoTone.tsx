// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiTwoToneSvg from 'icon-base/es/asn/CiTwoTone';

export interface CiTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCiTwoTone: CiTwoToneIconType = (props, context) => <Icon name='CiTwoTone' {...{ ...props, ...context.attrs }} icon={CiTwoToneSvg} />;

IconCiTwoTone.displayName = 'IconCiTwoTone';
IconCiTwoTone.theme = 'twotone';
IconCiTwoTone.originName = 'ci';

export default IconCiTwoTone;
