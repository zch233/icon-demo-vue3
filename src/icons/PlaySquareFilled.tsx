// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PlaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlaySquareFilled';

export interface PlaySquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PlaySquareFilled: PlaySquareFilledIconType = (props, context) => <Icon name='PlaySquareFilled' {...{ ...props, ...context.attrs }} icon={PlaySquareFilledSvg} />;

PlaySquareFilled.displayName = 'PlaySquareFilled';

export default PlaySquareFilled;