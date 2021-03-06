// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StarOutlinedSvg from 'icon-base/es/asn/StarOutlined';

export interface StarOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStarOutlined: StarOutlinedIconType = (props, context) => <Icon name='StarOutlined' {...{ ...props, ...context.attrs }} icon={StarOutlinedSvg} />;

IconStarOutlined.displayName = 'IconStarOutlined';
IconStarOutlined.theme = 'outlined';
IconStarOutlined.originName = 'star';

export default IconStarOutlined;
