// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationOutlined';

export interface ExclamationOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ExclamationOutlined: ExclamationOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ExclamationOutlinedSvg} />
    ;

ExclamationOutlined.displayName = 'ExclamationOutlined';

export default FunctionalComponent;