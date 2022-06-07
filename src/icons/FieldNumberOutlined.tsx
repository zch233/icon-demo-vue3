// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FieldNumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldNumberOutlined';

export interface FieldNumberOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FieldNumberOutlined: FieldNumberOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FieldNumberOutlinedSvg} />
    ;

FieldNumberOutlined.displayName = 'FieldNumberOutlined';

export default FunctionalComponent;