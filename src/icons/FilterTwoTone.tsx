// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterTwoTone';

export interface FilterTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FilterTwoTone: FilterTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FilterTwoToneSvg} />
    ;

FilterTwoTone.displayName = 'FilterTwoTone';

export default FilterTwoTone;