// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined';

export interface PlusOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PlusOutlined: PlusOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PlusOutlinedSvg} />
    ;

PlusOutlined.displayName = 'PlusOutlined';

export default FunctionalComponent;