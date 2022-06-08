// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PlayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlayCircleFilled';

export interface PlayCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PlayCircleFilled: PlayCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PlayCircleFilledSvg} />;

PlayCircleFilled.displayName = 'PlayCircleFilled';

export default PlayCircleFilled;