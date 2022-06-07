// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EuroOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroOutlined';

export interface EuroOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EuroOutlined: EuroOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EuroOutlinedSvg} />
    ;

EuroOutlined.displayName = 'EuroOutlined';

export default FunctionalComponent;