// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FilterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilterOutlined';

export interface FilterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FilterOutlined: FilterOutlinedIconType = (props, context) => <Icon name='FilterOutlined' {...{ ...props, ...context.attrs }} icon={FilterOutlinedSvg} />;

FilterOutlined.displayName = 'FilterOutlined';

export default FilterOutlined;