// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone';

export interface PropertySafetyTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PropertySafetyTwoTone: PropertySafetyTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PropertySafetyTwoToneSvg} />
    ;

PropertySafetyTwoTone.displayName = 'PropertySafetyTwoTone';

export default FunctionalComponent;