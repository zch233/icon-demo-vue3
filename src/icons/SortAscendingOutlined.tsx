// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SortAscendingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SortAscendingOutlined';

export interface SortAscendingOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SortAscendingOutlined: SortAscendingOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SortAscendingOutlinedSvg} />
    ;

SortAscendingOutlined.displayName = 'SortAscendingOutlined';

export default FunctionalComponent;