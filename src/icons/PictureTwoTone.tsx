// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PictureTwoToneSvg from '@ant-design/icons-svg/lib/asn/PictureTwoTone';

export interface PictureTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PictureTwoTone: PictureTwoToneIconType = (props, context) => <Icon name='PictureTwoTone' {...{ ...props, ...context.attrs }} icon={PictureTwoToneSvg} />;

PictureTwoTone.displayName = 'PictureTwoTone';

export default PictureTwoTone;