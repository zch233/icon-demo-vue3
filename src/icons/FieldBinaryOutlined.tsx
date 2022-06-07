// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FieldBinaryOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldBinaryOutlined';

export interface FieldBinaryOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FieldBinaryOutlined: FieldBinaryOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FieldBinaryOutlinedSvg} />
    ;

FieldBinaryOutlined.displayName = 'FieldBinaryOutlined';

export default FunctionalComponent;