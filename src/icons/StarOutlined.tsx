// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import StarOutlinedSvg from '@ant-design/icons-svg/lib/asn/StarOutlined';

export interface StarOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const StarOutlined: StarOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={StarOutlinedSvg} />
    ;

StarOutlined.displayName = 'StarOutlined';

export default FunctionalComponent;