// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/LikeOutlined';

export interface LikeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LikeOutlined: LikeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LikeOutlinedSvg} />
    ;

LikeOutlined.displayName = 'LikeOutlined';

export default FunctionalComponent;