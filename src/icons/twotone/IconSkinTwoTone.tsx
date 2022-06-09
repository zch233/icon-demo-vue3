// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SkinTwoToneSvg from '@ant-design/icons-svg/es/asn/SkinTwoTone';

export interface SkinTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSkinTwoTone: SkinTwoToneIconType = (props, context) => (
    <Icon name='SkinTwoTone' {...{ ...props, ...context.attrs }} icon={SkinTwoToneSvg} />
);

IconSkinTwoTone.displayName = 'IconSkinTwoTone';

export default IconSkinTwoTone;