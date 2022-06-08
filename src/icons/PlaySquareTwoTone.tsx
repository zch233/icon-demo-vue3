// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PlaySquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlaySquareTwoTone';

export interface PlaySquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PlaySquareTwoTone: PlaySquareTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PlaySquareTwoToneSvg} />;

PlaySquareTwoTone.displayName = 'PlaySquareTwoTone';

export default PlaySquareTwoTone;