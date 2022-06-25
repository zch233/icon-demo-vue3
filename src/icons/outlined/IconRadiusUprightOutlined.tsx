// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RadiusUprightOutlinedSvg from 'icon-base/es/asn/RadiusUprightOutlined';

export interface RadiusUprightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRadiusUprightOutlined: RadiusUprightOutlinedIconType = (props, context) => (
    <Icon name='RadiusUprightOutlined' {...{ ...props, ...context.attrs }} icon={RadiusUprightOutlinedSvg} />
);

IconRadiusUprightOutlined.displayName = 'IconRadiusUprightOutlined';
IconRadiusUprightOutlined.theme = 'outlined';
IconRadiusUprightOutlined.originName = 'radius-upright';

export default IconRadiusUprightOutlined;
