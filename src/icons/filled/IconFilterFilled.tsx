// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilterFilledSvg from 'icon-base/es/asn/FilterFilled';

export interface FilterFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilterFilled: FilterFilledIconType = (props, context) => <Icon name='FilterFilled' {...{ ...props, ...context.attrs }} icon={FilterFilledSvg} />;

IconFilterFilled.displayName = 'IconFilterFilled';
IconFilterFilled.theme = 'filled';
IconFilterFilled.originName = 'filter';

export default IconFilterFilled;
