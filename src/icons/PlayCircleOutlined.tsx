// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PlayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlayCircleOutlined';

export interface PlayCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PlayCircleOutlined: PlayCircleOutlinedIconType = (props, context) => <Icon name='PlayCircleOutlined' {...{ ...props, ...context.attrs }} icon={PlayCircleOutlinedSvg} />;

PlayCircleOutlined.displayName = 'PlayCircleOutlined';

export default PlayCircleOutlined;