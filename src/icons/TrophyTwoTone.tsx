// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TrophyTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrophyTwoTone';

export interface TrophyTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TrophyTwoTone: TrophyTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TrophyTwoToneSvg} />
    ;

TrophyTwoTone.displayName = 'TrophyTwoTone';

export default FunctionalComponent;