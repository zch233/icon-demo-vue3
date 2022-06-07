// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PropertySafetyFilledSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyFilled';

export interface PropertySafetyFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PropertySafetyFilled: PropertySafetyFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PropertySafetyFilledSvg} />
    ;

PropertySafetyFilled.displayName = 'PropertySafetyFilled';

export default FunctionalComponent;