// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AudioMutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioMutedOutlined';

export interface AudioMutedOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AudioMutedOutlined: AudioMutedOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AudioMutedOutlinedSvg} />;

AudioMutedOutlined.displayName = 'AudioMutedOutlined';

export default FunctionalComponent;