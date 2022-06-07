// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PlusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusCircleOutlined';

export interface PlusCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PlusCircleOutlined: PlusCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PlusCircleOutlinedSvg} />
    ;

PlusCircleOutlined.displayName = 'PlusCircleOutlined';

export default FunctionalComponent;