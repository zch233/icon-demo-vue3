// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled';

export interface TrophyFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TrophyFilled: TrophyFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TrophyFilledSvg} />
    ;

TrophyFilled.displayName = 'TrophyFilled';

export default FunctionalComponent;