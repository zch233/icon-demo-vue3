// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RadiusUprightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUprightOutlined';

export interface RadiusUprightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RadiusUprightOutlined: RadiusUprightOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RadiusUprightOutlinedSvg} />;

RadiusUprightOutlined.displayName = 'RadiusUprightOutlined';

export default RadiusUprightOutlined;