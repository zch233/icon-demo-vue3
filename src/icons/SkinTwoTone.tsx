// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SkinTwoToneSvg from '@ant-design/icons-svg/lib/asn/SkinTwoTone';

export interface SkinTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SkinTwoTone: SkinTwoToneIconType = (props, context) => <Icon name='SkinTwoTone' {...{ ...props, ...context.attrs }} icon={SkinTwoToneSvg} />;

SkinTwoTone.displayName = 'SkinTwoTone';

export default SkinTwoTone;