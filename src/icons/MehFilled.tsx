// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MehFilledSvg from '@ant-design/icons-svg/lib/asn/MehFilled';

export interface MehFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MehFilled: MehFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MehFilledSvg} />
    ;

MehFilled.displayName = 'MehFilled';

export default FunctionalComponent;