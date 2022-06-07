// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import WarningTwoToneSvg from '@ant-design/icons-svg/lib/asn/WarningTwoTone';

export interface WarningTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WarningTwoTone: WarningTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={WarningTwoToneSvg} />
    ;

WarningTwoTone.displayName = 'WarningTwoTone';

export default FunctionalComponent;