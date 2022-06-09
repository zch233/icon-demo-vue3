// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AudioMutedOutlinedSvg from '@ant-design/icons-svg/es/asn/AudioMutedOutlined';

export interface AudioMutedOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAudioMutedOutlined: AudioMutedOutlinedIconType = (props, context) => (
    <Icon name='AudioMutedOutlined' {...{ ...props, ...context.attrs }} icon={AudioMutedOutlinedSvg} />
);

IconAudioMutedOutlined.displayName = 'IconAudioMutedOutlined';

export default IconAudioMutedOutlined;