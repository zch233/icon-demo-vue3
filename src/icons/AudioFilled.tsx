// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AudioFilledSvg from '@ant-design/icons-svg/lib/asn/AudioFilled';

export interface AudioFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AudioFilled: AudioFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AudioFilledSvg} />;

AudioFilled.displayName = 'AudioFilled';

export default FunctionalComponent;