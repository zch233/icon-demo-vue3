// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PictureTwoToneSvg from 'icon-base/es/asn/PictureTwoTone';

export interface PictureTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPictureTwoTone: PictureTwoToneIconType = (props, context) => (
    <Icon name='PictureTwoTone' {...{ ...props, ...context.attrs }} icon={PictureTwoToneSvg} />
);

IconPictureTwoTone.displayName = 'IconPictureTwoTone';
IconPictureTwoTone.theme = 'twotone';
IconPictureTwoTone.originName = 'picture';

export default IconPictureTwoTone;
