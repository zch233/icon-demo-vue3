// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled';

export interface AlertFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AlertFilled: AlertFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AlertFilledSvg} />
    ;

AlertFilled.displayName = 'AlertFilled';

export default FunctionalComponent;