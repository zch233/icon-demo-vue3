// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AlertTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlertTwoTone';

export interface AlertTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AlertTwoTone: AlertTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AlertTwoToneSvg} />
    ;

AlertTwoTone.displayName = 'AlertTwoTone';

export default FunctionalComponent;