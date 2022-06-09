// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PlaySquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlaySquareOutlined';

export interface PlaySquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PlaySquareOutlined: PlaySquareOutlinedIconType = (props, context) => <Icon name='PlaySquareOutlined' {...{ ...props, ...context.attrs }} icon={PlaySquareOutlinedSvg} />;

PlaySquareOutlined.displayName = 'PlaySquareOutlined';

export default PlaySquareOutlined;