// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import InsuranceTwoToneSvg from '@ant-design/icons-svg/lib/asn/InsuranceTwoTone';

export interface InsuranceTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const InsuranceTwoTone: InsuranceTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={InsuranceTwoToneSvg} />
    ;

InsuranceTwoTone.displayName = 'InsuranceTwoTone';

export default FunctionalComponent;