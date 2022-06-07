// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import StarFilledSvg from '@ant-design/icons-svg/lib/asn/StarFilled';

export interface StarFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const StarFilled: StarFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={StarFilledSvg} />
    ;

StarFilled.displayName = 'StarFilled';

export default FunctionalComponent;