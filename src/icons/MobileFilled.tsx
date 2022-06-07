// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MobileFilledSvg from '@ant-design/icons-svg/lib/asn/MobileFilled';

export interface MobileFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MobileFilled: MobileFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MobileFilledSvg} />
    ;

MobileFilled.displayName = 'MobileFilled';

export default FunctionalComponent;