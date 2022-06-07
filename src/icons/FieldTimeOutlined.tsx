// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FieldTimeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldTimeOutlined';

export interface FieldTimeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FieldTimeOutlined: FieldTimeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FieldTimeOutlinedSvg} />
    ;

FieldTimeOutlined.displayName = 'FieldTimeOutlined';

export default FunctionalComponent;