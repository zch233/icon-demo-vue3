// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TrophyOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrophyOutlined';

export interface TrophyOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TrophyOutlined: TrophyOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TrophyOutlinedSvg} />
    ;

TrophyOutlined.displayName = 'TrophyOutlined';

export default FunctionalComponent;