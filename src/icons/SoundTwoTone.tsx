// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SoundTwoToneSvg from '@ant-design/icons-svg/lib/asn/SoundTwoTone';

export interface SoundTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SoundTwoTone: SoundTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SoundTwoToneSvg} />;

SoundTwoTone.displayName = 'SoundTwoTone';

export default FunctionalComponent;