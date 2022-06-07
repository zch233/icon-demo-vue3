// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PayCircleOutlined';

export interface PayCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PayCircleOutlined: PayCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PayCircleOutlinedSvg} />
    ;

PayCircleOutlined.displayName = 'PayCircleOutlined';

export default FunctionalComponent;