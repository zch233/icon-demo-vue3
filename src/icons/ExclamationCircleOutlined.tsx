// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ExclamationCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined';

export interface ExclamationCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ExclamationCircleOutlined: ExclamationCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ExclamationCircleOutlinedSvg} />
    ;

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';

export default FunctionalComponent;