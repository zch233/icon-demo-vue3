// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SkypeFilledSvg from '@ant-design/icons-svg/lib/asn/SkypeFilled';

export interface SkypeFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SkypeFilled: SkypeFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SkypeFilledSvg} />
    ;

SkypeFilled.displayName = 'SkypeFilled';

export default FunctionalComponent;