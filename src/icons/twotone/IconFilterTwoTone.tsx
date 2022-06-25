// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilterTwoToneSvg from 'icon-base/es/asn/FilterTwoTone';

export interface FilterTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilterTwoTone: FilterTwoToneIconType = (props, context) => <Icon name='FilterTwoTone' {...{ ...props, ...context.attrs }} icon={FilterTwoToneSvg} />;

IconFilterTwoTone.displayName = 'IconFilterTwoTone';
IconFilterTwoTone.theme = 'twotone';
IconFilterTwoTone.originName = 'filter';

export default IconFilterTwoTone;
