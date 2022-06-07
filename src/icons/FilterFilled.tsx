// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled';

export interface FilterFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FilterFilled: FilterFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FilterFilledSvg} />
    ;

FilterFilled.displayName = 'FilterFilled';

export default FunctionalComponent;