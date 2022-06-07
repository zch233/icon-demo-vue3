// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PlaySquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlaySquareOutlined';

export interface PlaySquareOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PlaySquareOutlined: PlaySquareOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PlaySquareOutlinedSvg} />
    ;

PlaySquareOutlined.displayName = 'PlaySquareOutlined';

export default FunctionalComponent;